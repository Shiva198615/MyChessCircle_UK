"use client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./DownloadApp.css"
import googlePlay from "../../assets/images/google-play2.png"
import appStore from "../../assets/images/app-store2.png"

const DownloadApp = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()// Handle app link sending logic
    console.log("Sending app link to:", mobileNumber)
  }

  return (
    <section className="download-app-section">
      <div className="download-content">
        <div className="download-text">
        <h2>
          Download the <span className="footer-logo-text">“MyChessCircle_UK”</span> App
        </h2>

          <p>Play chess anytime, anywhere. Join E-sports Chess Championships, improve your skills, and win big prizes!</p>

          <div className="app-features">
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <div className="feature-text">Daily Tournaments</div>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <div className="feature-text">Weekly Tournaments</div>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <div className="feature-text">Monthly Tournaments</div>
            </div>
            <div className="feature">
              <div className="feature-icon">🧠</div>
              <div className="feature-text">Skill Development</div>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <div className="feature-text">Prize Money</div>
            </div>
          </div>
        </div>

        <div className="download-actions">
        <h3>Coming Soon....</h3>
          <form onSubmit={handleSubmit} className="download-form">
            <div className="input-group">
              <span className="country-code">+91</span>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                pattern="[0-9]{10}"
                required
              />
            </div>
            <button type="submit" className="get-app-btn">GET APP LINK</button>
          </form>

          <div className="app-store-buttons">
            {/* <a href="#" className="app-store-btn" onClick={() => navigate('/downloads')}>
              <img src={googlePlay} alt="Google Play" />
            </a>
            <a href="#" className="app-store-btn" onClick={() => navigate('/downloads')}>
              <img src={appStore} alt="App Store" />
            </a> */}
            <button type="button" className="app-store-btn" onClick={() => navigate('/downloads')} aria-label="Google Play">
              <img src={googlePlay} alt="Google Play" />
            </button>
            <button type="button" className="app-store-btn" onClick={() => navigate('/downloads')} aria-label="App Store">
              <img src={appStore} alt="App Store" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadApp