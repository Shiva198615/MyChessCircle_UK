"use client"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./HeroSection.css"
import googlePlay from "../../assets/images/google-play.png"
import appStore from "../../assets/images/app-store1.png"

const HeroSection = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("")
  const [isEmailLogin, setIsEmailLogin] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEmailLogin) {
      console.log("Sending app link to email:", email)
    } else {
      console.log("Sending app link to:", mobileNumber)
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>MASTER THE GAME OF KINGS</h1>
          <h2>Play Chess. Win Big.</h2>
          <p>Join thousands of players in exciting chess E-sports Chess Championships and win amazing prizes! *T&C Apply</p>

          <div className="hero-buttons">
            <Link to="/downloads" className="btn btn-primary">Play Now</Link>
            <Link to="/about-us" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>

        <div className="app-download-card">
          <div className="app-download-content">
            <h3>Download Official <span className="footer-logo-text">"MyChessCircle_UK"</span> App</h3>
            {/* <h4>LOGIN</h4> */}

            <div className="android-availability">
              <p>Android Available Now!</p>
              <button 
                onClick={() => navigate('/downloads')} 
                className="android-download-btn"
              >
                Click Here to Download
              </button>
            </div>
            
            {/* <form onSubmit={handleSubmit} className="app-download-form">
              <div className="input-group">
                {!isEmailLogin ? (
                  <>
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      placeholder="Enter Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      pattern="[0-9]{10}"
                      required
                    />
                  </>
                ) : (
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                )}
              </div>
              <button type="submit" className="get-app-btn">GET APP LINK</button>
              <p 
                className="login-toggle" 
                style={{ color: '#006A4E', cursor: 'pointer', marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}
                onClick={() => setIsEmailLogin(!isEmailLogin)}
              >
                {isEmailLogin ? 'Login with Phone Number' : 'Login with Email'}
              </p>
            </form> */}

            <p className="terms-text">
              By registering, you accept you are 18+ and agree to our{" "}
              <Link to="/terms-conditions">T&C</Link> &{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>

            <div className="app-store-links">
              <a href="#" className="app-store-btn" onClick={() => navigate('/downloads')}>
                <img src={googlePlay} alt="Google Play" />
              </a>
              <a href="#" className="app-store-btn" onClick={() => navigate('/downloads')}>
                <img src={appStore} alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection