import React from 'react';
import { FaShieldAlt, FaBalanceScale } from 'react-icons/fa';
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <h2 className="disclaimer-heading">Our Commitment to You</h2>
      <div className="disclaimer-container">
        <div className="disclaimer-section">
          <div className="icon-heading">
            <FaShieldAlt className="icon" />
            <h3>Responsible Gaming</h3>
          </div>
          <p>We are committed to promoting responsible gaming practices. Our platform implements strict measures to ensure a safe and controlled gaming environment for all our users.</p>
        </div>

        <div className="disclaimer-section">
          <div className="icon-heading">
            <FaBalanceScale className="icon" />
            <h3>100% Legal</h3>
          </div>
          <p>Our operations are fully compliant with all applicable laws and regulations. We maintain the highest standards of legal compliance and transparency.</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer; 