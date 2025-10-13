import "./TermsConditions.css"

const RulesAndRegulations = () => {
  return (
    <div className="terms-conditions-page">
      <div className="page-header">
        <h1>Rules & Regulations - MyChessCircle (UK)</h1>
      </div>

      <div className="content-container">
        <div className="terms-content">
            <p><strong>Effective Date:</strong> 15-Sep-2025</p>
            <p><strong>Last Updated:</strong> 15-Sep-2025</p>
            <p>These Rules & Regulations govern participation in <strong>MyChessCircle</strong> games and tournaments. By registering, players confirm that they have read, understood, and agreed to these rules.</p>

            <h3>1. General Rules (Applicable to All Modes)</h3>
            <ul>
              <li>1.1 <strong>Eligibility</strong> – Only players aged <strong>18 years and above</strong> are permitted.</li>
              <li>1.2 <strong>Account Use</strong> – Each player may maintain <strong>only one account</strong>. Multiple accounts or fraudulent registrations are prohibited.</li>
              <li>1.3 <strong>Fair Play</strong> – Players must:
                <ul>
                  <li>• Compete personally (no use of chess engines, bots, or third-party assistance).</li>
                  <li>• Play through the official <strong>MyChessCircle</strong> app or website.</li>
                  <li>• Refrain from collusion, cheating, or manipulating outcomes.</li>
                </ul>
              </li>
              <li>1.4 <strong>Connectivity</strong> – Players are responsible for maintaining a <strong>stable internet connection</strong>. Disconnections may result in <strong>forfeiture</strong> of the match.</li>
              <li>1.5 <strong>Time Control</strong> – Each game will be played under a <strong>chess clock system</strong> (see mode-specific rules below).</li>
              <li>1.6 <strong>Conduct</strong> – Offensive chat, harassment, or abusive behaviour will lead to account suspension.</li>
              <li>1.7 <strong>Dispute Resolution</strong> – Any disputes must be raised with <strong>support@mychesscircle.com</strong> within <strong>24 hours</strong> of match completion. Decisions by the Platform are final.</li>
            </ul>

            <h3>2. One-to-One Play (Challenge Mode)</h3>
            <ul>
              <li>2.1 <strong>Game Setup</strong> – A player may directly invite a friend or another registered user.</li>
              <li>2.2 <strong>Entry Fee</strong> – The agreed stake is deducted from both players’ wallets before the match begins.</li>
              <li>2.3 <strong>Game Format</strong> –
                <ul>
                  <li>• Each player receives <strong>10 minutes on the clock</strong>.</li>
                  <li>• Standard FIDE rules apply.</li>
                </ul>
              </li>
              <li>2.4 <strong>Result Determination</strong> –
                <ul>
                  <li>• <strong>Win</strong> = <strong>100%</strong> of prize pool credited to the winner’s wallet (after deductions, if applicable).</li>
                  <li>• <strong>Draw</strong> = Entry fee refunded equally to both players.</li>
                </ul>
              </li>
              <li>2.5 <strong>Disconnection Rule</strong> – If a player disconnects for more than <strong>2 minutes</strong>, the game is auto-forfeited.</li>
            </ul>

            <h3>3. Random Play (Auto-Matchmaking)</h3>
            <ul>
              <li>3.1 <strong>Game Matching</strong> – Players are paired randomly with available opponents of similar ranking.</li>
              <li>3.2 <strong>Entry Fee & Prize Pool</strong> – Same as One-to-One, stakes are pooled and awarded to the winner.</li>
              <li>3.3 <strong>Game Format</strong> –
                <ul>
                  <li>• Each player receives <strong>5 minutes on the clock</strong>.</li>
                  <li>• Blitz chess rules apply (FIDE blitz rules).</li>
                </ul>
              </li>
              <li>3.4 <strong>No-Show Rule</strong> – If a player fails to make the first move within <strong>60 seconds</strong>, the opponent is declared winner.</li>
              <li>3.5 <strong>Disconnection Rule</strong> – Same as One-to-One (2 minutes rule).</li>
            </ul>

            <h3>4. Tournaments</h3>
            <ul>
              <li>4.1 <strong>Registration</strong> – Players must register within the announced period and pay the entry fee.</li>
              <li>4.2 <strong>Tournament Structure</strong> –
                <ul>
                  <li>• Format: <strong>Knockout / Swiss / Round Robin</strong> (as announced per event).</li>
                  <li>• Each round has a <strong>10-minute clock per player</strong>.</li>
                  <li>• <strong>10-minute break</strong> is provided between rounds.</li>
                </ul>
              </li>
              <li>4.3 <strong>Prize Pool</strong> – Prize distribution is announced before tournament start. Winnings are credited <strong>after each level</strong> as per platform policy.</li>
              <li>4.4 <strong>Tie-Breakers</strong> – Determined by:
                <ul>
                  <li>• Head-to-head record.</li>
                  <li>• Buchholz system (in Swiss format).</li>
                  <li>• Blitz playoff (if required).</li>
                </ul>
              </li>
              <li>4.5 <strong>Forfeiture</strong> –
                <ul>
                  <li>• Non-appearance within <strong>5 minutes</strong> = automatic loss.</li>
                  <li>• Disconnection = loss after <strong>2 minutes</strong> of inactivity.</li>
                </ul>
              </li>
              <li>4.6 <strong>Fair Play Checks</strong> – Tournament games may be subject to <strong>anti-cheating analysis</strong>. Accounts found guilty of engine use or collusion will be suspended.</li>
              <li>4.7 <strong>Refund Policy</strong> – Entry fees are <strong>non-refundable</strong>, except if the Platform cancels the tournament due to technical issues.</li>
            </ul>

            <h3>5. Prizes & Payouts</h3>
            <ul>
              <li>5.1 Prizes are credited to the player’s <strong>MyChessCircle</strong> wallet.</li>
              <li>5.2 Withdrawals are subject to <strong>KYC verification</strong> and standard processing timelines.</li>
              <li>5.3 Tax obligations (if any) are the responsibility of the player in their jurisdiction.</li>
            </ul>

            <h3>6. Platform Rights</h3>
            <ul>
              <li>6.1 <strong>MyChessCircle</strong> reserves the right to:
                <ul>
                  <li>• Modify rules for specific tournaments.</li>
                  <li>• Suspend players for violations of fair play.</li>
                  <li>• Cancel or reschedule events due to technical or operational reasons.</li>
                </ul>
              </li>
              <li>6.2 All Platform decisions are <strong>final and binding</strong>.</li>
            </ul>

            <h3>7. Governing Law</h3>
            <p>These Rules & Regulations are governed by the laws of the <strong>United Kingdom</strong>, subject to <strong>exclusive jurisdiction of UK courts</strong>.</p>

        </div>
      </div>
    </div>
  )
}

export default RulesAndRegulations