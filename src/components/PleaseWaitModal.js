import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const boxBaseStyle = {
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const getBoxStyle = () => {
  const width = window.innerWidth;
  if (width < 480) {
    // Mobile
    return {
      ...boxBaseStyle,
      padding: '1.2rem 1rem',
      minWidth: '70vw',
      fontSize: '1rem',
    };
  } else if (width < 900) {
    // Tablet
    return {
      ...boxBaseStyle,
      padding: '1.5rem 2rem',
      minWidth: '40vw',
      fontSize: '1.1rem',
    };
  } else {
    // Desktop
    return {
      ...boxBaseStyle,
      padding: '2rem 3rem',
      minWidth: '320px',
      fontSize: '1.2rem',
    };
  }
};

const PleaseWaitModal = ({ show }) => {
  if (!show) return null;
  return (
    <div style={modalStyle}>
      <div style={getBoxStyle()}>
        <div className="spinner" style={{marginBottom: '1rem'}}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#1976d2" strokeWidth="4" strokeDasharray="90 60" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" from="0 20 20" to="360 20 20" />
            </circle>
          </svg>
        </div>
        <div>Please wait...</div>
      </div>
    </div>
  );
};

export default PleaseWaitModal; 