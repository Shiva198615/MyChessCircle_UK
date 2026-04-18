import "./Downloads.css"
// import { FaAndroid, FaApple } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import React from 'react';
// import PleaseWaitModal from '../components/PleaseWaitModal';
// import { fetchApkDownloadUrl } from '../api/download';
import androidImage from '../assets/images/android_image.png';
import iosImage from '../assets/images/ios_image.png';

const Downloads = () => {
  const navigate = useNavigate();
  // const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="downloads-page">
      <div className="page-header"><h1>Downloads</h1></div>

      <div className="download-containers">
        <div className="download-container android">
          <div className="platform-icon">
            <img 
              src={androidImage} 
              alt="Android Logo"
              className="platform-logo"
            />
          </div>
          <h2>Android App</h2>
          <p>Launching soon in PlayStore</p>
          <div className="download-info">
            <span className="version">Status: Will be in production soon.</span>
            <span className="size">Launch Update: Certifications in progress.</span>
          </div>
          <button className="download-btn secondary" disabled onClick={() => navigate('/downloads')}>Coming Soon</button>
          {/* <button
            className="download-btn primary"
            onClick={async () => {
              setShowModal(true);
              try {
                const url = await fetchApkDownloadUrl();
                setShowModal(false);
                window.location.href = url;
              } catch (e) {
                setShowModal(false);
                alert(e.message);
              }
            }}
          >
            Download APK
          </button>
          <PleaseWaitModal show={showModal} /> */}
        </div>

        <div className="download-container ios">
          <div className="platform-icon">
            <img 
              src={iosImage} 
              alt="iOS Logo"
              className="platform-logo"
            />
          </div>
          <h2>iOS App</h2>
          <p>Launching soon in App Store</p>
          <div className="download-info">
            <span className="status">Status: Will be in production soon.</span>
            <span className="release">Launch Update: Certifications in progress.</span>
          </div>
          <button className="download-btn secondary" disabled onClick={() => navigate('/downloads')}>Coming Soon</button>
        </div>
      </div>
    </div>
  )
}

export default Downloads