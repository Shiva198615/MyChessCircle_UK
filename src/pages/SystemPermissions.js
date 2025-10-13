import "./TermsConditions.css"

const SystemPermissions = () => {
  return (
    <div className="terms-conditions-page">
      <div className="page-header">
        <h1>System Permissions</h1>
      </div>
      <div className="content-container">
        <div className="terms-content">
            <h2>System Permissions for Online Gaming Application – Saara Creative Pvt Ltd - Under Brand Name <span className="footer-logo-text">“MyChessCircle_UK”</span></h2>
            <p>Our online gaming application requires certain system permissions to ensure seamless gameplay, security, and an enhanced user experience. Below is a list of required permissions and their purpose.</p>
            
            <h3>1. Mandatory Permissions</h3>
            <h4>(A) Internet & Network Access</h4>
            <p>Permission: ACCESS_NETWORK_STATE, INTERNET</p>
            <p>Purpose: </p>
            <ul>
            <li>o	Required for real-time gameplay in online matches.</li>
            <li>o	Ensures stable connectivity and prevents sudden disconnections.</li>
            <li>o	Enables server communication for fetching game updates, scores, and leaderboard details.</li>
            </ul>
            <h4>(B) Storage Access (Read & Write)</h4>
            <p>Permission: READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE</p>
            <p>Purpose: </p>
            <ul>
            <li>o	Required to save game data, cache assets, and retrieve saved preferences.</li>
            <li>o	Allows downloading and storing updates, UI elements, and chess board configurations.</li>
            </ul>
            <h4>(C) Device & App History</h4>
            <p>Permission: GET_TASKS</p>
            <p>Purpose: </p>
            <ul>
            <li>o	Detects unauthorized activities such as multi-account usage or cheating.</li>
            <li>o	Prevents fraudulent activities that could affect fair gameplay.</li>
            </ul>
            <h4>(D) Push Notifications</h4>
            <p>Permission: RECEIVE_BOOT_COMPLETED, POST_NOTIFICATIONS</p>
            <p>Purpose: </p>
            <ul>
            <li>o	Sends alerts for Tournaments updates, game invites, winnings, and bonus rewards.</li>
            <li>o	Keeps users updated about upcoming challenges and offers.</li>
            </ul>

            <h3>2. Optional Permissions</h3>
            <h4>(E) Camera Access (For KYC & Profile Picture Upload)</h4>
            <p>Permission: CAMERA</p>
            <p>Purpose: </p>
            <ul>
            <li>o	Enables users to upload profile pictures.</li>
            <li>o	Required for identity verification (KYC) during withdrawals.</li>
            </ul>
            <h4>(F) Location Access (For Legal Compliance & Regional Features)</h4>
            <p>Permission: ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION</p>
            <p>Purpose: </p>
            <ul>
            <li>o	Ensures the app complies with regional gaming laws and restrictions.</li>
            <li>o	Helps in providing location-based offers & Tournaments.</li>
            </ul>
            <h4>(G) Contacts & Phone State (For Friend Invites & Security)</h4>
            <p>Permission: READ_CONTACTS, READ_PHONE_STATE</p>
            <p>Purpose: </p>
            <ul>
            <li>o Allows users to invite friends to play chess via their contacts.</li>
            <li>o Helps in detecting suspicious logins & fraud prevention.</li>
            </ul>
            <h4>(H) Microphone Access (For In-Game Voice Chat – Future Feature)</h4>
            <p>Permission: RECORD_AUDIO</p>
            <p>Purpose: Enables voice chat between players during a game. (Feature may be added in future updates.)</p>
           
            <h3>3. Security & Data Privacy Measures</h3>
            <ul>
              <li>• The app will never collect personal data without the user’s consent.</li>
              <li>• Permissions will be used only for the intended purpose mentioned above.</li>
              <li>• Users can disable optional permissions at any time via app settings.</li>
              <li>• We comply with data security laws and ensure GDPR & IT Act, 2000 compliance.</li>
            </ul>

            <h3>4. How to Manage Permissions?</h3>
            <ul>
              <li>• Android: Users can modify app permissions via Settings &gt; Apps &gt; [App Name] &gt; Permissions.</li>
              <li>• iOS: Users can manage permissions via Settings &gt; Privacy &gt; [App Name].</li>
            </ul>

        </div>
      </div>
    </div>
  )
}

export default SystemPermissions