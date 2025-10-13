import "./TermsConditions.css"

const PrivacyPolicy = () => {
  return (
    <div className="terms-conditions-page">
      <div className="page-header">
        <h1>Privacy Policy</h1>
      </div>

      <div className="content-container">
        <div className="terms-content">

          <p><span style={{ fontWeight: 'bold', color: 'white' }}>Effective Date:</span> 22-Aug-2025</p>
          <p><span style={{ fontWeight: 'bold', color: 'white' }}>Entity:</span> Saara Creative Private Limited ("Company", "We", "Our", "Us")</p>
          <p><span style={{ fontWeight: 'bold', color: 'white' }}>Platform:</span> MyChessCircle_UK – India's Chess E-Sports Platform</p>

          <h3>1. Information We Collect</h3>
          <ul>
            <li>• Personal details: Name, email, phone, age.</li>
            <li>• KYC documents: PAN, Aadhaar (for withdrawals).</li>
            <li>• Payment details: Bank/UPI for transactions.</li>
            <li>• Gameplay data: Tournament history, scores, rankings.</li>
            <li>• Device data: IP, OS, device type (for fraud prevention).</li>
          </ul>

          <h3>2. Use of Data</h3>
          <ul>
            <li>• Player registration & account management.</li>
            <li>• Tournament participation and ranking updates.</li>
            <li>• Fraud detection and prevention of duplicate accounts.</li>
            <li>• Processing platform fees and rewards withdrawals.</li>
          </ul>

          <h3>3. Data Protection</h3>
          <ul>
            <li>• Encrypted storage and transmission of sensitive data.</li>
            <li>• Payments processed only through <span style={{ fontWeight: 'bold', color: 'white' }}>secure, RBI-compliant gateways</span>.</li>
            <li>• Access to data restricted to authorized personnel.</li>
          </ul>

          <h3>4. Age Restriction</h3>
          <ul>
            <li>• Strictly <span style={{ fontWeight: 'bold', color: 'white' }}>18+ participation only</span>.</li>
            <li>• Accounts of minors will be suspended immediately.</li>
          </ul>

          <h3>5. Sharing of Information</h3>
          <p>We do not sell data. Information may be shared only with:</p>
          <ul>
            <li>• Regulatory authorities, if required by law.</li>
            <li>• Payment gateways & banks for transaction processing.</li>
            <li>• Fraud prevention and security service providers.</li>
          </ul>

          <h3>6. User Rights</h3>
          <ul>
            <li>• Right to request data correction or account closure.</li>
            <li>• Right to request information on data usage.</li>
          </ul>

          <h3>7. Grievance Officer</h3>
          <p><span style={{ fontWeight: 'bold', color: 'white' }}>Grievance Officer</span></p>
          <ul>
            <li>Saara Creative Private Limited</li>
            <li>Email: support@mychesscircle.uk</li>
            <li>Phone: +91-9113577605 / 8867468556</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy