import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PaymentOverview.css';
import logo from '../../assets/images/homescreen_logo.png';

const PaymentOverview = () => {
  const [overviewData, setOverviewData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get data from sessionStorage
    const storedData = sessionStorage.getItem('paymentOverviewData');
    if (storedData) {
      setOverviewData(JSON.parse(storedData));
    } else {
      // Redirect back to payment checkout if no data
      navigate('/payment-checkout');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      console.log('Payment submitted:', overviewData);
      // Prepare success payload
      const successPayload = {
        transactionId: overviewData?.transactionId,
        amount: overviewData?.amount,
      };
      sessionStorage.setItem('paymentSuccessData', JSON.stringify(successPayload));
      // Clear overview data
      sessionStorage.removeItem('paymentOverviewData');
      setIsSubmitting(false);
      // Navigate to success page
      navigate('/payment-checkout/success');
    }, 2000);
  };

  const handleBack = () => {
    navigate('/payment-checkout');
  };

  if (!overviewData) {
    return (
      <div className="payment-overview">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const totalAmount = (parseFloat(overviewData.amount) || 0) - (overviewData.discount || 0);

  return (
    <div className="payment-overview">
      <div className="overview-container">
        <div className="overview-header">
          <Link to="/payment-checkout" className="logo-link">
            <img src={logo} alt="MyChessCircle Logo" className="checkout-logo" />
          </Link>
          <h1 className="overview-title">Payment Overview</h1>
        </div>

        <div className="overview-content">
          <div className="overview-section">
            <h2>Order Summary</h2>
            <div className="summary-details">
              {[
                ['Transaction ID:', overviewData.transactionId],
                ['Reference Number:', overviewData.referenceNumber],
                ['Phone Number:', overviewData.phoneNumber],
                ['Amount:', `£${Number(overviewData.amount).toFixed(2)}`],
                ['Tax:', '£0.00'],
                ['Discount:', `£${overviewData.discount.toFixed(2)}`],
                ['Total Amount:', `£${totalAmount.toFixed(2)}`, 'total-row total-amount']
              ].map(([label, value, className]) => (
                <div key={label} className={`summary-row ${className || ''}`}>
                  <span className="summary-label">{label}</span>
                  <span className={`summary-value ${className || ''}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="action-buttons">
            <button 
              type="button" 
              className="back-btn"
              onClick={handleBack}
            >
              ← Back
            </button>
            <button 
              type="submit" 
              className="pay-now-btn"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverview; 