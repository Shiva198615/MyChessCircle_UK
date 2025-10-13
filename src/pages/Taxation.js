import "./TermsConditions.css" 

const Taxation = () => {
  return (
    <div className="terms-conditions-page">
      <div className="page-header">
        <h1>Taxation </h1>
      </div>

      <div className="content-container">
        <div className="terms-content">
          <p className="last-updated">Last Updated: 22-Aug-2025</p>

          <h2>Tax Policy for Saara Creative Pvt Ltd - Under Brand Name  <span className="footer-logo-text">“MyChessCircle_UK”</span> – India's Chess E-Sports Platform</h2>

          <h3>1. Introduction</h3>
          <p>This Tax Policy outlines the taxation rules applicable to users of Saara Creative Pvt Ltd - Under Brand Name <span style={{ fontStyle: 'italic' }}>“MyChessCircle_UK”</span>’s E-Sports Platform. As per the Income Tax Act, 1961, 
            particularly Section 115BB and Section 194B, all winnings earned through our platform are subject to taxation. Users must comply with tax regulations before withdrawing their winnings.</p>

          <h3>2. Tax Deduction at Source (TDS) on Rewards</h3>
          <p>As per Section 194B, if a player wins any rewards in a single game, Tournament, or event, TDS at 30% will be deducted before processing the withdrawal.</p>
          <p>Example Calculation of TDS Deduction</p>

          <table className="tax-table">
            <thead>
              <tr>
                <th>Rewards Winnings</th>
                <th>TDS @ 30%</th>
                <th>Cess @ 4% on TDS</th>
                <th>Total Tax Deducted</th>
                <th>Net Payable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₹15,000</td>
                <td>₹4,500</td>
                <td>₹180</td>
                <td>₹4,680</td>
                <td>₹10,320</td>
              </tr>
              <tr>
                <td>₹50,000</td>
                <td>₹15,000</td>
                <td>₹600</td>
                <td>₹15,600</td>
                <td>₹34,400</td>
              </tr>
              <tr>
                <td>₹1,00,000</td>
                <td>₹30,000</td>
                <td>₹1,200</td>
                <td>₹31,200</td>
                <td>₹68,800</td>
              </tr>
            </tbody>
          </table>

          <h3>3. Rewards</h3>
          <p>•	Any Reward winnings in a single game or Tournament, TDS will be applicable.</p>
          <p>•	However, players must declare such earnings in their annual income tax returns.</p>

          <h3>4. Taxation on Withdrawals</h3>
          <p>•	The taxable amount is the total net reward winnings (total earnings minus the platform fee used for playing).</p>
          <p>•	Before processing a withdrawal, our platform will automatically deduct TDS if applicable.</p>
          <p>•	Users will receive a TDS certificate (Form 16A) which can be used to file their income tax returns.</p>

          <h3>5. Reporting & Compliance</h3>
          <p>•	All TDS deductions will be reported to the Income Tax Department under the winner’s PAN number.</p>
          <p>•	Users must provide a valid PAN; otherwise, higher TDS rates (30% + penalty) may apply.</p>
          <p>•	Users can claim a TDS refund when filing their income tax returns, if applicable.</p>

          <h3>6. Annual Tax Filing Responsibility for Users</h3>
          <p>•	Even if TDS is deducted, players must report their gaming income while filing their annual tax returns.</p>
          <p>•	It is the responsibility of the user to pay additional taxes (if any) based on their income slab.</p>

          <h3>7. Non-Compliance & Penalty</h3>
          <p>•	Providing incorrect PAN details may result in higher TDS deductions.</p>    
          <p>•	Users attempting to evade tax reporting will be blacklisted from the platform and may face legal action.</p>

          <h3>8. Disclaimer</h3>
          <p>•	This policy is based on the prevailing Indian tax laws.</p>
          <p>•	Saara Creative Pvt Ltd - Under Brand Name  <span className="footer-logo-text">“MyChessCircle_UK”</span> – India's Chess E-Sports Platform is not liable for any personal tax liabilities of users beyond TDS deductions.</p>

        </div>
      </div>
    </div>
  )
}

export default Taxation