import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import AboutChess from "./pages/AboutChess";
import TermsConditions from "./pages/TermsConditions";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FairPlayPolicy from "./pages/FairPlayPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Taxation from "./pages/Taxation";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Legality from "./pages/Legality";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import ReferAndEarn from "./pages/ReferAndEarn";
import Faq from "./pages/Faq";
import Reviews from "./pages/Reviews";
import RulesAndRegulations from "./pages/RulesAndRegulations";
import SystemPermissions from "./pages/SystemPermissions";
import Tournaments from "./pages/Tournaments";
import Downloads from "./pages/Downloads";
import Product from "./pages/Product";
import Tutorials from "./pages/Tutorials";
import PaymentCheckout from "./pages/payment/PaymentCheckout";
import PaymentOverview from "./pages/payment/PaymentOverview";
import PaymentSucess from "./pages/payment/PaymentSucess";

// Component to conditionally render layout
const AppContent = () => {
  const location = useLocation();
  const isPaymentPage = location.pathname === '/payment-checkout' || location.pathname === '/payment-checkout/overview' || location.pathname === '/payment-checkout/success';
  const [blockNoticeVisible, setBlockNoticeVisible] = useState(false);
  const blockNoticeTimerRef = useRef(null);
  const noticeOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '16px'
  };
  const noticeBoxStyle = {
    background: '#fffbfb',
    border: '2px solid #e53935',
    color: '#b71c1c',
    padding: '14px 18px',
    borderRadius: '10px',
    fontWeight: 700,
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    textAlign: 'center',
    maxWidth: '90vw'
  };
  const BLOCK_MESSAGE = "Checkmate! This action in MyChessCircle is an illegal move.";
  const showBlockNotice = () => {
    setBlockNoticeVisible(true);
    if (blockNoticeTimerRef.current) clearTimeout(blockNoticeTimerRef.current);
    blockNoticeTimerRef.current = setTimeout(() => setBlockNoticeVisible(false), 2000);
  };

  useEffect(() => {
    const ALERT_COOLDOWN_MS = 5000;
    let lastAlertAt = 0;
    const alertOnce = () => {
      const now = Date.now();
      if (now - lastAlertAt > ALERT_COOLDOWN_MS) {
        lastAlertAt = now;
        showBlockNotice();
      }
    };

    const triggerDeterrent = () => {
      alertOnce();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(BLOCK_MESSAGE);
        }
      } catch (_) {
        // ignore
      }
    };

    const preventDefault = (e) => {
      e.preventDefault();
      triggerDeterrent();
    };

    const handleKeyDown = (e) => {
      const key = String(e.key || '').toLowerCase();
      const isModifier = e.ctrlKey || e.metaKey;

      const blockedCombos = ['c', 'v', 'x', 'u', 's', 'p', 'a'];
      if (isModifier && blockedCombos.includes(key)) {
        e.preventDefault();
        triggerDeterrent();
      }
      if (e.keyCode === 123 || key === 'f12') {
        e.preventDefault();
        triggerDeterrent();
      }
    };

    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('copy', preventDefault);
    document.addEventListener('cut', preventDefault);
    document.addEventListener('paste', preventDefault);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('copy', preventDefault);
      document.removeEventListener('cut', preventDefault);
      document.removeEventListener('paste', preventDefault);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <div className="app">
      {blockNoticeVisible && (
        <div style={noticeOverlayStyle}>
          <div style={noticeBoxStyle}>
            {BLOCK_MESSAGE}
          </div>
        </div>
      )}
      {/* Print-only blocker element controlled via CSS */}
      <div id="print-blocker" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: '#ffffff',
        color: '#000000',
        zIndex: 9999,
        fontWeight: 700
      }}>
        <div>
          <div style={{ fontSize: '20px' }}>{BLOCK_MESSAGE}</div>
        </div>
      </div>
      {!isPaymentPage && <Header />}
      <main className={`main-content ${isPaymentPage ? 'full-height' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-chess" element={<AboutChess />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/fair-play-policy" element={<FairPlayPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/taxation" element={<Taxation />} />
          <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
          <Route path="/legality" element={<Legality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/refer-and-earn" element={<ReferAndEarn />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
          <Route path="/system-permissions" element={<SystemPermissions />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/products" element={<Product />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/payment-checkout" element={<PaymentCheckout />} />
          <Route path="/payment-checkout/overview" element={<PaymentOverview />} />
          <Route path="/payment-checkout/success" element={<PaymentSucess />} />
        </Routes>
      </main>
      {!isPaymentPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;