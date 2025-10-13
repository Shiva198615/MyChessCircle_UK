import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PaymentSucess.css';
import logo from '../../assets/images/homescreen_logo.png';
import confetti from 'canvas-confetti';

const formatDateTime = (date) => {
  try {
    const d = new Date(date);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const datePart = d.toLocaleDateString(undefined, options);
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    return `${datePart} ${hours}:${minutes} ${ampm}`;
  } catch {
    return '';
  }
};

const generateUpiTxnId = () => {
  const base = Date.now().toString().slice(-10);
  const rand = Math.floor(Math.random() * 90 + 10).toString();
  return base + rand; // 12 digits
};

const normalizeSuccess = (raw) => {
  if (!raw) return null;
  // If already normalized
  if (raw.transactionId || raw.referenceNumber) return raw;
  // If full API response structure
  const d = raw.data || raw;
  return {
    transactionId: d.transactionId || (d.transaction && d.transaction.id) || null,
    referenceNumber: (d.transaction && (d.transaction.reference || d.orderId)) || d.orderId || null,
    amount: d.amount,
    payeeName: 'Saara Creative Pvt Ltd',
    payeeVpa: 'saara-creative@upi',
    paidAt: d.processedAt || new Date().toISOString(),
  };
};

const PaymentSucess = () => {
  const [successData, setSuccessData] = useState(null);
  const navigate = useNavigate();
  const iconRef = useRef(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('paymentSuccessData');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSuccessData(normalizeSuccess(parsed));
        return;
      } catch {}
    }
    navigate('/payment-checkout');
  }, [navigate]);

  useEffect(() => {
    if (!successData || !iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    // fire a couple of bursts
    confetti({ particleCount: 70, startVelocity: 40, spread: 70, origin: { x, y } });
    confetti({ particleCount: 50, startVelocity: 50, spread: 100, scalar: 0.9, origin: { x, y } });
  }, [successData]);

  if (!successData) {
    return (
      <div className="payment-success">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const GST_RATE = 0.18;
  const resolveNumber = (v) => {
    const n = Number(v);
    return isNaN(n) ? null : n;
  };
  const totalFromData =
    resolveNumber(successData.totalAmount) ??
    resolveNumber(successData.amountWithTax) ??
    resolveNumber(successData.amountIncludingTax) ??
    resolveNumber(successData.total) ??
    null;
  const baseAmount = resolveNumber(successData.amount) ?? 0;
  const amountNumber = totalFromData != null ? totalFromData : Number((baseAmount * (1 + GST_RATE)).toFixed(2));
  const displayDateTime = successData.paidAtFormatted || formatDateTime(successData.paidAt || new Date());
  const payeeName = successData.payeeName || 'Saara Creative Pvt Ltd';
  const payeeVpa = successData.payeeVpa || 'saara-creative@upi';

  return (
    <div className="payment-success">
      <div className="success-container">
        <div className="success-header">
          <Link to="/" className="logo-link">
            <img src={logo} alt="MyChessCircle Logo" className="success-logo" />
          </Link>
          <h1 className="success-title">Payment Successful</h1>
        </div>

        <div className="success-content">
          <div className="success-card">
            <div className="success-icon" aria-hidden="true" ref={iconRef}>
              <svg className="checkmark" viewBox="0 0 52 52">
                <path className="checkmark-check" d="M14 27l7 7 17-17" />
              </svg>
            </div>
            <h2 className="success-message">Thank you! Your payment has been received.</h2>

            <div className="amount">₹{Number(amountNumber).toFixed(2)}</div>

            <div className="payee">
              <div className="paid-to">Paid to</div>
              <div className="payee-name">{payeeName}</div>
              <div className="payee-id">{payeeVpa}</div>
            </div>

            <div className="info">
              <div className="info-line">{displayDateTime}</div>
              <div className="info-line">Transaction ID: {successData.transactionId || successData.referenceNumber}</div>
            </div>
          </div>

          <div className="action-buttons single">
            <button
              type="button"
              className="pay-now-btn"
              onClick={() => {
                sessionStorage.removeItem('paymentSuccessData');
                navigate('/');
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucess;
