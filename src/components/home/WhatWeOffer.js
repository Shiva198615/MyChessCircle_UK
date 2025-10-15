import React from 'react';
import './WhatWeOffer.css';
import { FaChess, FaShieldAlt, FaTrophy, FaMoneyBillWave, FaUserShield, FaHeadset } from 'react-icons/fa';

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: <FaChess />,
      title: "A True Game of Skill",
      description: [
        "Pure skill-based gaming platform",
        "Competitive & fair environment",
        "Earn rewards through expertise"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Compliant Gaming",
      description: [
        "Fully compliant with Indian gaming laws",
        "Encrypted transactions & data protection",
        "Strict anti-fraud policies"
      ]
    },
    {
      icon: <FaTrophy />,
      title: "Competitive Gaming Modes",
      description: [
        "One-on-One Chess Matches",
        "E-sports Chess Championship - Daily/Weekly/Monthly",
        "Blitz & Rapid Modes",
        "Custom Private Matches"
      ]
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Prize Money Gaming with Instant Withdrawals",
      description: [
        "Prize Money matches",
        "Instant withdrawals",
        "Multiple payment options (Credit/Debit cards and bank transfer)"
      ]
    },
    {
      icon: <FaUserShield />,
      title: "Advanced Anti-Cheating Mechanisms",
      description: [
        "AI-based detection systems",
        "Engine-assisted move prevention",
        "Multiple account detection"
      ]
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support & Community Engagement",
      description: [
        "24/7 dedicated support",
        "Quick resolution of queries",
        "Active community engagement"
      ]
    }
  ];

  return (
    <section className="what-we-offer">
      <div className="offerings-container">
        <div>
          <h2>What We Offer</h2>
          <div className="offerings-grid">
            {offerings.map((offering, index) => (
              <div key={index} className="offering-card">
                <div className="offering-icon">{offering.icon}</div>
                <h3>{offering.title}</h3>
                <ul>
                  {offering.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;