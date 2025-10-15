import { Link } from "react-router-dom";
import "./Footer.css";
    
import logo from "../../assets/images/homescreen_logo.png";
import googlePlay from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store1.png";

// import fraud from "../../assets/images/fraud.jfif";
// import knowyourlimits from "../../assets/images/know_your_limits.png";
// import eighteenplus from "../../assets/images/18-plus.png";
// import notbot from "../../assets/images/not-bot.png";
// import secure from "../../assets/images/secure.jpg";
// import itechlabs from "../../assets/images/itechlabs.jpg";

// import visa from "../../assets/images/visa.jpg";
// import mastercard from "../../assets/images/mastercard.png";
// import paypal from "../../assets/images/PayPalCard.png";
// import stripe from "../../assets/images/stripe.png";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-container">
            <div className="footer-logo">
              <img src={logo || "/placeholder.svg"} alt="ChessMasters Logo" />
            </div>
            

            <div className="social-icons">
              <a href="https://www.facebook.com/share/1C4gpZS1AQ/" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://x.com/check_mate32" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/mychesscircle?igsh=dWZqbmdzcmsyaHdq" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com/channel/UClwO6yq8I6DQFfrTUkA2_hA" target="_blank" rel="noreferrer"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-main-sections">
            <div className="footer-links-container">
              <div className="footer-links">
                <div className="footer-links-column">
                  <h4>About</h4>
                  <ul>
                  <li>
                    <Link to="/about-chess" onClick={scrollToTop}>{" >> About Chess"}</Link></li>
                    <li><Link to="/tournaments" onClick={scrollToTop}>{" >> E-sports Chess Championship"}</Link></li>
                    <li><Link to="/downloads" onClick={scrollToTop}>{" >> Downloads"}</Link></li>
                    <li><Link to="/rules-and-regulations" onClick={scrollToTop}>{" >> Rules and Regulations"}</Link></li>
                    <li><Link to="/about-us" onClick={scrollToTop}>{" >> About Us"}</Link></li>
                    <li><Link to="/reviews" onClick={scrollToTop}>{" >> Reviews"}</Link></li>
                  </ul>
                </div>

                <div className="footer-links-column">
                  <h4>Legal</h4>
                  <ul>
                    <li><Link to="/terms-conditions" onClick={scrollToTop}>{" >> Terms & Conditions"}</Link></li>
                    <li><Link to="/terms-of-service" onClick={scrollToTop}>{" >> Terms of Service"}</Link></li>
                    <li><Link to="/privacy-policy" onClick={scrollToTop}>{" >> Privacy Policy"}</Link></li>
                    <li><Link to="/fair-play-policy" onClick={scrollToTop}>{" >> Fair Play Policy"}</Link></li>
                    <li><Link to="/refund-policy" onClick={scrollToTop}>{" >> Refund Policy"}</Link></li>
                    <li><Link to="/taxation" onClick={scrollToTop}>{" >> Taxation"}</Link></li>
                    <li><Link to="/responsible-gaming" onClick={scrollToTop}>{" >> Responsible Gaming"}</Link></li>
                    <li><Link to="/legality" onClick={scrollToTop}>{" >> Legality"}</Link></li>
                  </ul>
                </div>

                <div className="footer-links-column">
                  <h4>Support</h4>
                  <ul>
                    <li><Link to="/contact" onClick={scrollToTop}>{" >> Contact Us"}</Link></li>
                    <li><Link to="/faq" onClick={scrollToTop}>{" >> FAQ"}</Link></li>
                  </ul>
                </div>
              </div>

              <div className="footer-download">
                <h4>Download Our App</h4>
                <div className="app-buttons">
                  <button type="button" className="app-button" aria-label="Google Play">
                    <img src={googlePlay} alt="Google Play" />
                  </button>
                  <button type="button" className="app-button" aria-label="App Store">
                    <img src={appStore} alt="App Store" />
                  </button>
                </div>
              </div>
            </div>

            <div className="footer-security-payment">
              {/* <div className="security-section">
                <h4>Security</h4>
                <div className="security-images">
                  <img src={fraud} alt="Fraud" />
                  <img src={knowyourlimits} alt="Know your Limits" />
                  <img src={eighteenplus} alt="18+" />
                  <img src={notbot} alt="Not a Bot" />
                  <img src={secure} alt="Secure" />
                  <img src={itechlabs} alt="iTechLabs" />
                </div>
              </div> */}

              {/* <div className="payment-section">
                <h4>Our Payment Partners</h4>
                <div className="payment-images">
                  <img src={visa} alt="Visa" />
                  <img src={mastercard} alt="Mastercard" />
                  <img src={paypal} alt="PayPal" />
                  <img src={stripe} alt="Stripe" />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="allrights">&copy; {new Date().getFullYear()} Saara Creative Pvt. Ltd. operating under the brand name  <span className="footer-logo-text">“MyChessCircle_UK”</span>, All rights reserved.</p>
          <p className="disclaimer">This platform is for entertainment purposes only. Saara Creative Pvt. Ltd. operating under the brand name  <span className="footer-logo-text">“MyChessCircle_UK”</span>, 
            operates in compliance with all applicable laws and regulations.</p>
          <div className="scroll-text">
            <p>If you reside in a state where online gaming is prohibited (e.g. ASSAM, TELANGANA, ODISHA, MEGHALAYA, NAGALAND, SIKKIM AND ANDHRA PRADESH), you are not permitted to register or 
              participate in any games on our platform.</p>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;