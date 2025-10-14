import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PaymentCheckout.css';
import logo from '../../assets/images/homescreen_logo.png';
import { API_BASE_URL } from '../../config.js';
import WalletTermsModal from '../../modals/WalletTermsModal';

// Use relative paths on localhost so a dev proxy can handle CORS; absolute base in non-local
const API_ROOT = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? ''
  : API_BASE_URL;

const PaymentCheckout = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({ 
    name: '', 
    phoneNumber: '', 
    orderId: '', 
    amount: '' 
  });
  const [errors, setErrors] = useState({});
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [sessionData, setSessionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(null);
  const countdownRef = useRef(null);
  const [maskedPhoneHint, setMaskedPhoneHint] = useState('');
  const DEBUG_LOG = false;
  
  // Security: set referrer policy and discourage caching on this page
  useEffect(() => {
    const ensureMeta = (selector, createAttrs, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(createAttrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      if (content != null) el.setAttribute('content', content);
    };
    // Referrer policy
    ensureMeta('meta[name="referrer"]', { name: 'referrer' }, 'no-referrer');
    // Best-effort client hints for no-store; real control should be server headers
    ensureMeta('meta[http-equiv="Cache-Control"]', { 'http-equiv': 'Cache-Control' }, 'no-store, no-cache, must-revalidate, max-age=0');
    ensureMeta('meta[http-equiv="Pragma"]', { 'http-equiv': 'Pragma' }, 'no-cache');
    ensureMeta('meta[http-equiv="Expires"]', { 'http-equiv': 'Expires' }, '0');
  }, []);

  const maskPhone = (phone) => {
    const digits = (phone || '').replace(/\D/g, '');
    if (digits.length >= 4) return 'xxxxxx' + digits.slice(-4);
    return 'xxxxxx' + digits;
  };
  
  // Safely parse JSON even when content-type is missing; return null on failure
  const parseJsonSafe = async (response) => {
    try {
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        return await response.json();
      }
      const text = await response.text();
      try {
        return JSON.parse(text);
      } catch (e) {
        return null;
      }
    } catch (e) {
      return null;
    }
  };


  // Extract data from URL parameters and fetch session data
  useEffect(() => {
    const extractDataFromURL = () => {
      const urlParams = new URLSearchParams(location.search);
      const sessionIdRaw = urlParams.get('session_id') || '';
      const orderIdRaw = urlParams.get('order_id') || '';
      const amountRaw = urlParams.get('amount') || '';
      const expiryRaw = urlParams.get('session_expiry') || urlParams.get('expiry') || urlParams.get('sessionExpire') || '';
      const nameRaw = urlParams.get('name') || '';
      const phoneRaw = urlParams.get('phone') || '';
      const maskedPhoneRaw = urlParams.get('masked_phone') || '';

      const sessionId = decodeURIComponent(sessionIdRaw).replace(/"/g, '').trim();
      const orderId = decodeURIComponent(orderIdRaw).replace(/"/g, '').trim();
      const amount = decodeURIComponent(amountRaw).replace(/"/g, '').replace(/[^\d.]/g, '').trim();
      const sessionExpiryFromUrl = parseInt(decodeURIComponent(expiryRaw).replace(/"/g, '').replace(/[^\d]/g, '').trim(), 10);
      const nameFromUrl = decodeURIComponent(nameRaw).replace(/"/g, '').trim();
      const phoneFromUrl = decodeURIComponent(phoneRaw).replace(/"/g, '').replace(/\D/g, '').slice(0, 10);
      const maskedFromUrl = decodeURIComponent(maskedPhoneRaw).replace(/"/g, '').trim();

      console.log('URL Parameters extracted:', { sessionId, orderId, amount });

      if (sessionId) {
        console.log('Parameters found; using URL values only (no backend fetch).');
        // Set session data from URL
        if (!isNaN(sessionExpiryFromUrl) && sessionExpiryFromUrl > 0) {
          setSessionData({ sessionId, sessionExpiry: sessionExpiryFromUrl });
        } else {
          setSessionData({ sessionId });
        }
        // Fill form from URL
        setFormData(prev => ({
          ...prev,
          name: nameFromUrl || prev.name,
          phoneNumber: phoneFromUrl || prev.phoneNumber,
          orderId: orderId || prev.orderId,
          amount: amount || prev.amount,
        }));
        if (maskedFromUrl) setMaskedPhoneHint(maskedFromUrl);
        else if (phoneFromUrl) setMaskedPhoneHint(maskPhone(phoneFromUrl));
      } else {
        console.log('Missing required parameters, setting loading to false');
      }
      setIsLoading(false);
    };

    extractDataFromURL();
  }, [location.search]);

  // Persist parsed/session data asynchronously (masked phone only)
  useEffect(() => {
    if (!sessionData?.sessionId) return;
    const persisted = {
      sessionId: sessionData.sessionId,
      orderId: formData.orderId || '',
      amount: formData.amount || '',
      name: formData.name || '',
      phoneMasked: maskedPhoneHint || maskPhone(formData.phoneNumber),
      sessionExpiry: sessionData.sessionExpiry,
    };
    const save = () => {
      try { sessionStorage.setItem('paymentSessionData', JSON.stringify(persisted)); } catch {}
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(save);
    } else {
      setTimeout(save, 0);
    }
  }, [sessionData, formData.orderId, formData.amount, formData.name, formData.phoneNumber, maskedPhoneHint]);

  // Start/Reset countdown when session data arrives
  useEffect(() => {
    if (!sessionData || sessionData.sessionExpiry == null) return;
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    // sessionExpiry is provided in seconds
    const totalSeconds = Math.max(0, Number(sessionData.sessionExpiry));
    setRemainingSeconds(totalSeconds);
    countdownRef.current = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev == null) return prev;
        if (prev <= 1) {
          clearInterval(countdownRef.current);
          countdownRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
    };
  }, [sessionData]);

  const formatTime = (totalSeconds) => {
    if (totalSeconds == null) return '';
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    if (hours > 0) {
      const hh = String(hours).padStart(2, '0');
      return `${hh}:${mm}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const fetchSessionData = async (sessionId, orderId, amount) => {
    console.log('Fetching session data for:', { sessionId, orderId, amount });
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`${API_BASE_URL}/payment/session/${sessionId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response status:', response.status);
      console.log('API Response ok:', response.ok);

      if (response.ok) {
        const data = await parseJsonSafe(response);
        if (data) {
          console.log('API Response data (parsed):', data);
          setSessionData(data);
          // Populate form with backend data
          const newFormData = {
            name: data.user?.name || '',
            phoneNumber: data.user?.phone || '',
            orderId: data.orderId || orderId,
            amount: data.amount || amount
          };
          console.log('Setting form data:', newFormData);
          setFormData(newFormData);
        } else {
          console.warn('Response body not JSON; falling back to URL parameters');
          // Fallback to URL parameters if API fails
          const urlParams = new URLSearchParams(location.search);
          const orderIdRaw = urlParams.get('order_id') || '';
          const amountRaw = urlParams.get('amount') || '';
          const expiryRaw = urlParams.get('session_expiry') || urlParams.get('expiry') || urlParams.get('sessionExpire') || '';
          const nameRaw = urlParams.get('name') || '';
          const phoneRaw = urlParams.get('phone') || '';
          const sessionExpiryFromUrl = parseInt(decodeURIComponent(expiryRaw).replace(/"/g, '').replace(/[^\d]/g, '').trim(), 10);
          setFormData({
            name: decodeURIComponent(nameRaw).replace(/\"/g, '').trim(),
            phoneNumber: decodeURIComponent(phoneRaw).replace(/\"/g, '').replace(/\D/g, '').slice(0, 10),
            orderId: decodeURIComponent(orderIdRaw).replace(/\"/g, '').trim(),
            amount: decodeURIComponent(amountRaw).replace(/\"/g, '').replace(/[^\d.]/g, '').trim()
          });
          if (!isNaN(sessionExpiryFromUrl) && sessionExpiryFromUrl > 0) {
            setSessionData({ sessionId, sessionExpiry: sessionExpiryFromUrl });
          }
        }
      } else {
        console.log('API failed with status:', response.status);
        // Fallback to URL parameters if API fails
        const urlParams = new URLSearchParams(location.search);
        const orderIdRaw = urlParams.get('order_id') || '';
        const amountRaw = urlParams.get('amount') || '';
        const expiryRaw = urlParams.get('session_expiry') || urlParams.get('expiry') || urlParams.get('sessionExpire') || '';
        const nameRaw = urlParams.get('name') || '';
        const phoneRaw = urlParams.get('phone') || '';
        const sessionExpiryFromUrl = parseInt(decodeURIComponent(expiryRaw).replace(/"/g, '').replace(/[^\d]/g, '').trim(), 10);
        setFormData({
          name: decodeURIComponent(nameRaw).replace(/\"/g, '').trim(),
          phoneNumber: decodeURIComponent(phoneRaw).replace(/\"/g, '').replace(/\D/g, '').slice(0, 10),
          orderId: decodeURIComponent(orderIdRaw).replace(/\"/g, '').trim(),
          amount: decodeURIComponent(amountRaw).replace(/\"/g, '').replace(/[^\d.]/g, '').trim()
        });
        if (!isNaN(sessionExpiryFromUrl) && sessionExpiryFromUrl > 0) {
          setSessionData({ sessionId, sessionExpiry: sessionExpiryFromUrl });
        }
      }
    } catch (error) {
      console.warn('Error fetching session data; using URL values if available:', error);
      // Fallback to URL parameters if API fails (no mock data)
      const urlParams = new URLSearchParams(location.search);
      const orderIdRaw = urlParams.get('order_id') || '';
      const amountRaw = urlParams.get('amount') || '';
      const expiryRaw = urlParams.get('session_expiry') || urlParams.get('expiry') || urlParams.get('sessionExpire') || '';
      const nameRaw = urlParams.get('name') || '';
      const phoneRaw = urlParams.get('phone') || '';
      const sessionExpiryFromUrl = parseInt(decodeURIComponent(expiryRaw).replace(/"/g, '').replace(/[^\d]/g, '').trim(), 10);
      setFormData({
        name: decodeURIComponent(nameRaw).replace(/\"/g, '').trim(),
        phoneNumber: decodeURIComponent(phoneRaw).replace(/\"/g, '').replace(/\D/g, '').slice(0, 10),
        orderId: decodeURIComponent(orderIdRaw).replace(/\"/g, '').trim(),
        amount: decodeURIComponent(amountRaw).replace(/\"/g, '').replace(/[^\d.]/g, '').trim()
      });
      if (!isNaN(sessionExpiryFromUrl) && sessionExpiryFromUrl > 0) {
        setSessionData({ sessionId, sessionExpiry: sessionExpiryFromUrl });
      }
    } finally {
      console.log('Setting loading to false');
      setIsLoading(false);
    }
  };

  // Coupon handlers removed
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate IDs
  // const transactionId = 'TXN' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
  // const referenceNumber = 'REF' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();

  // Validation rules
  const validations = {
    // Do not validate name and phone number (values may be masked or provided via backend)
    name: () => null,
    phoneNumber: () => null,
    orderId: (value) => {
      if (!value) return 'Order ID is required';
      if (value.trim().length < 3) return 'Order ID must be at least 3 characters long';
      return null;
    },
    amount: (value) => {
      if (!value && value !== 0) return 'Amount is required';
      const num = parseFloat(value);
      if (isNaN(num) || num < 0) return 'Minimum amount is ₹0';
      if (num > 100000) return 'Maximum amount is ₹1,00,000';
      return null;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Input change:', { name, value });
    
    let processedValue = value;

    // Process input based on field type
    if (name === 'name') {
      // Allow only letters and spaces
      processedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'phoneNumber') {
      processedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'orderId') {
      // Allow alphanumeric characters and common symbols
      processedValue = value.replace(/[^a-zA-Z0-9\-_]/g, '');
    } else if (name === 'amount') {
      // Allow only digits and a single dot
      processedValue = value.replace(/[^\d.]/g, '');
      let parts = processedValue.split('.');
      if (parts.length > 2) {
        processedValue = parts[0] + '.' + parts.slice(1).join('');
        parts = processedValue.split('.');
      }
      // Allow a single leading zero, but prevent multiple leading zeros like 00, 000
      if (/^0\d+/.test(processedValue)) {
        processedValue = processedValue.replace(/^0+/, '0');
      }
      // Restrict to 2 decimal places
      if (parts[1] && parts[1].length > 2) {
        processedValue = parts[0] + '.' + parts[1].slice(0, 2);
      }
    }

    console.log('Processed value:', { name, originalValue: value, processedValue });
    setFormData(prev => ({ ...prev, [name]: processedValue }));
    
    // Clear error and validate
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    if (processedValue) {
      const error = validations[name](processedValue);
      if (error) {
        console.log('Validation error:', { field: name, error });
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const validateForm = () => {
    console.log('Validating form with data:', formData);
    const newErrors = {};
    Object.keys(validations).forEach(field => {
      const error = validations[field](formData[field]);
      if (error) {
        console.log('Validation error for', field, ':', error);
        newErrors[field] = error;
      }
    });
    console.log('Validation result:', newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission attempted');
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    const sessionIdForSubmit = sessionData?.sessionId || (() => {
      const p = new URLSearchParams(location.search);
      const raw = p.get('session_id') || '';
      return decodeURIComponent(raw).replace(/"/g, '').trim();
    })();

    if (!sessionIdForSubmit) {
      alert('Missing session. Please open the payment link again.');
      return;
    }

    const payload = {
      sessionId: sessionIdForSubmit,
      orderId: formData.orderId,
      amount: parseFloat(formData.amount)
    };

    console.log('Submitting payment payload:', payload);
    setIsSubmitting(true);
    fetch(`${API_ROOT}/wallet/process-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(async (res) => {
        const data = await (async () => {
          try { return await res.json(); } catch { return null; }
        })();
        console.log('Process payment response:', res.status, data);
        if (res.ok && data?.success) {
          // Normalize and persist success data for the success page
          try {
            const d = data.data || {};
            const successPayload = {
              transactionId: d.transactionId || d.id || null,
              referenceNumber: (d.transaction && (d.transaction.reference || d.transaction.id)) || d.orderId || null,
              amount: d.amount,
              payeeName: 'Saara Creative Pvt Ltd',
              payeeVpa: 'saara-creative@upi',
              paidAt: d.processedAt || new Date().toISOString()
            };
            sessionStorage.setItem('paymentSuccessData', JSON.stringify(successPayload));
          } catch {}
          // Navigate to success screen
          window.location.href = '/payment-checkout/success';
        } else {
          const msg = data?.message || 'Failed to process payment';
          alert(msg);
        }
      })
      .catch((err) => {
        console.warn('Payment request failed:', err);
        alert('Network error. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // const isFormValid = formData.orderId && (formData.amount !== '' && formData.amount != null) && Object.keys(errors).length === 0;

  if (DEBUG_LOG) {
    console.log('Component render state:', {
      formData,
      errors,
      isTermsAccepted,
      isLoading,
      sessionData
    });
  }

  if (isLoading) {
    console.log('Rendering loading state');
    return (
      <div className="payment-checkout">
        <div className="checkout-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading payment information...</p>
          </div>
        </div>
      </div>
    );
  }

  if (DEBUG_LOG) console.log('Rendering main form');

  return (
    <div className="payment-checkout">
      <div className="checkout-container">
        <div className="checkout-header">
          <Link to="/payment-checkout" className="logo-link">
            <img src={logo} alt="MyChessCircle Logo" className="checkout-logo" />
          </Link>
          <h1 className="checkout-title">Payment Checkout</h1>
        </div>

        <div className="checkout-content">
          <div className="payment-form-section">
            <h2>Payment Information</h2>
            {sessionData && (
              <div className="session-info">
                <p><strong>Session Time Left:</strong> {formatTime(remainingSeconds != null ? remainingSeconds : Number(sessionData.sessionExpiry))}</p>
                {remainingSeconds === 0 && (
                  <span className="error-message">Session expired. Please refresh the payment link.</span>
                )}
              </div>
            )}
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-group">
                <label htmlFor="name">User Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  readOnly
                  className={errors.name ? 'error-input' : ''}
                  maxLength="50"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber ? maskPhone(formData.phoneNumber) : (maskedPhoneHint || '')}
                  readOnly
                  className={errors.phoneNumber ? 'error-input' : ''}
                  maxLength="10"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
                {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="orderId">Order ID:</label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleInputChange}
                  readOnly
                  className={errors.orderId ? 'error-input' : ''}
                  maxLength="20"
                />
                {errors.orderId && <span className="error-message">{errors.orderId}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="amount">Amount (₹):</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[0-9.]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                      e.preventDefault();
                    }
                    if (e.key === '.' && formData.amount.includes('.')) e.preventDefault();
                  }}
                  min="0"
                  max="100000"
                  step="0.01"
                  readOnly
                  className={errors.amount ? 'error-input' : ''}
                />
                {errors.amount && <span className="error-message">{errors.amount}</span>}
              </div>
              
              {/*  GST and Total Amount Display  */}
              <div className="form-group gst-row">
                <label>GST (18%):</label>
                <div className="gst-amount">
                  ₹{formData.amount ? (parseFloat(formData.amount) * 0.18).toFixed(2) : '0.00'}
                </div>
              </div>
              
              <div className="form-group total-row">
                <label>Total Amount:</label>
                <div className="total-amount">
                  ₹{formData.amount ? (parseFloat(formData.amount) * 1.18).toFixed(2) : '0.00'}
                </div>
              </div>
              
              
              {/* Proceed Button */}
              <div className="proceed-section">
                <div className="terms-container">
                  <input
                    type="checkbox"
                    id="termsCheckbox"
                    checked={isTermsAccepted}
                    onChange={(e) => setIsTermsAccepted(e.target.checked)}
                  />
                  <label htmlFor="termsCheckbox">
                    I agree to the <span className="terms-link" onClick={() => setIsTermsModalOpen(true)}>terms and conditions*</span>
                  </label>
                </div>

                <WalletTermsModal open={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />

                <button 
                  type="submit" 
                  className="proceed-btn"
                  disabled={!formData.orderId || !(formData.amount !== '' && formData.amount != null) || remainingSeconds === 0 || isSubmitting}
                >
                  Proceed to Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCheckout;