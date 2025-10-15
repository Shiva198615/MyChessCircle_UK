import "./TermsConditions.css" 

const Faq = () => {
  return (
    <div className="terms-conditions-page">
      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="content-container">
        <div className="terms-content">
          <h2>Frequently Asked Questions (FAQ) – Saara Creative Pvt Ltd - Under Brand Name “MyChessCircle_UK” Online Gaming Application</h2>

          <p>Welcome to our Online Chess Gaming Platform! Below are some frequently asked questions to help you understand the game, platform rules, and policies.</p>  

          <h3>1. General Questions</h3>
          <ol>
            <li>
              <p>1. Is MyChessCircle legal in the UK?</p>
              <p>Yes. MyChessCircle is a skill-based chess platform, not a game of chance. We comply with UK Gambling Commission rules, Remote Gaming Duty (RGD) requirements, and consumer protection law.</p>
            </li>
            <li>
              <p>2. Who can play on MyChessCircle UK?</p>
              <p>Only players who are:</p>
              <ul>
                <li>• 18 years or older, and</li>
                <li>• Resident in jurisdictions where online skill-based games are permitted.</li>
              </ul>
              <p>Players must verify their identity before participating in prize-based games.</p>
            </li>
            <li>
              <p>3. How does MyChessCircle ensure fair play?</p>
              <ul>
                <li>• Anti-cheat technology to detect use of chess engines or bots.</li>
                <li>• Fair match algorithms for random play.</li>
                <li>• Strict account monitoring and penalties for violations.</li>
              </ul>
              <p>Fair play is central to our platform, and offenders may face suspension or permanent bans.</p>
            </li>
            <li>
              <p>4. What types of games are available?</p>
              <ul>
                <li>• One-to-One Matches – Compete against a single opponent.</li>
                <li>• Random Play – Instant matches with available players.</li>
                <li>• Tournaments – Structured competitions with prize pools, fair time controls, and leaderboard rankings.</li>
              </ul>
            </li>
            <li>
              <p>5. What happens if I lose internet connection during a game?</p>
              <p>Players are given a short reconnection window. If the connection is not restored, the game may be considered forfeited. Refunds are not issued for internet or device-related issues.</p>
            </li>
            <li>
              <p>6. Can non-UK players join?</p>
              <p>Yes, but only if online skill-based gaming is legal in their jurisdiction. Players outside the UK are responsible for checking their local laws and tax rules.</p>
            </li>
          </ol>

          <h3>2. Gameplay & Rules</h3>
          <p>7. How does the chess game work?</p>
          <ul>
            <li>•	Players can challenge opponents in one-on-one matches or participate in daily, weekly, and monthly Tournaments.</li>
            <li>•	The standard FIDE rules apply, including moves like Castling, En Passant, and Pawn Promotion.</li>
            <li>•	Each player gets 10 minutes on the timer, and the winner is decided based on checkmate, timeout, or points.</li>
          </ul>
          <p>8. What happens if a player runs out of time?</p>
          <p>If a player’s timer reaches zero, the game ends, and the opponent wins based on the points system.</p>
          <p>9. How are points calculated?</p>
          <p>Each piece holds specific points:</p>
          <ul>
          <li>•	Pawn: 1 point</li>
          <li>•	Knight: 3 points</li>
          <li>•	Bishop: 3 points</li>
          <li>•	Rook: 5 points</li>
          <li>•	Queen: 9 points</li>
          </ul>
          <p>The player with the higher points at timeout wins.</p>
          <p>10. Can I challenge my friends?</p>
          <p>Yes! You can invite and challenge your friends to private matches using our invite feature.</p>

          <h3>3. Account & Wallet</h3>
          
          <p>11. Do I need to pay tax on my winnings?</p>
          <p>No. In the UK, players do not pay personal tax on gaming winnings. Winnings are completely tax-free. MyChessCircle handles all its obligations (Remote Gaming Duty and Corporation Tax) separately.</p>
          <p>12. Is my money safe on this platform?</p>
          <p>Yes, we use encrypted payment gateways and secure transactions to protect your funds.</p>
          <p>13. Is there a minimum withdrawal amount?</p>
          <p>Yes, the minimum withdrawal amount is £100.</p>
          <p>14. Why is KYC verification required?</p>
          <p>KYC is required to comply with legal regulations and ensure secure transactions.</p>
          <p>15. How do I deposit and withdraw money?</p>
            <ul>
              <li>• Deposits can be made securely via UK-licensed payment gateways.</li>
              <li>• Withdrawals are processed back to your verified bank account.</li>
              <li>• Processing times may vary depending on banking partners.</li>
            </ul>
            <p>16. Is my data safe with MyChessCircle?</p>
            <p>Yes. We are GDPR-compliant and ensure that your personal and financial data is stored securely, encrypted, and never shared without your consent.</p>

          <h3>4. E-sports Chess Championships & Rewards</h3>
          <p>17. What types of E-sports Chess Championships are available?</p>
          <ul>
            <li>•	Daily Tournaments – Short matches with exciting rewards.</li>
            <li>•	Weekly Tournaments – Competitive challenges with higher stakes.</li>
            <li>•	Monthly Mega Tournaments – Grand events with huge prize pools.</li>
          </ul>
          <p>18. How do I join a E-sports Chess Championship?</p>
          <ul>
            <li>•	Go to the Tournaments Section.</li>
            <li>•	Select the Tournament you want to participate in.</li>
            <li>•	Register and pay the entry fee (if applicable).</li>
          </ul>
          <p>19. What happens if I disconnect during a match?</p>
          <ul>
            <li>•	If your connection drops, your timer continues running.</li>
            <li>•	If you do not reconnect in time, your opponent may win by timeout.</li>
          </ul>

          <h3>5. Regulatory & Compliance</h3>
          <p>20. Is MyChessCircle regulated under the UK Gambling Commission (UKGC)?</p>
          <p>Yes. MyChessCircle operates as a skill-based online gaming platform. While traditional gambling law primarily applies to chance-based games, we proactively align with UKGC standards to ensure player protection, fairness, and responsible gaming practices.</p>
          <p>21. Does MyChessCircle pay Remote Gaming Duty (RGD)?</p>
          <p>Yes. We are fully compliant with HMRC Remote Gaming Duty (RGD) rules, which apply to online platforms offering prize competitions. RGD is payable at 21% of gross gaming yield (GGY), calculated as: GGY = Stakes Collected – Prizes Paid Out.</p>
          <p>22. Does MyChessCircle pay Corporation Tax?</p>
          <p>Yes. After deducting allowable operating costs and Remote Gaming Duty, profits are subject to Corporation Tax in the UK at the applicable rate (25% from April 2023 onwards).</p>
          <p>23. How does MyChessCircle protect consumers?</p>
          <ul>
            <li>• 18+ Age Verification – No underage play.</li>
            <li>• Fair Play Policy – Anti-cheating systems detect chess engines and collusion.</li>
            <li>• Responsible Gaming Tools – Deposit limits, self-exclusion options, and links to support (GamCare, BeGambleAware).</li>
            <li>• Clear Terms & Conditions – Players must consent before gameplay or deposits.</li>
          </ul>
          <p>24. How does MyChessCircle handle player funds?</p>
          <ul>
            <li>• Player wallets are segregated from company operational accounts.</li>
            <li>• Withdrawals are processed only to verified bank accounts.</li>
            <li>• Compliance with Payment Services Regulations (PSR 2017) and partnerships with UK FCA-licensed payment gateways.</li>
          </ul>
          <p>25. Is VAT applicable on player stakes?</p>
          <p>No. In the UK, stakes in gambling/skill gaming are exempt from VAT. Instead, the applicable duty is Remote Gaming Duty (RGD).</p>
          <p>26. How does MyChessCircle comply with GDPR & data protection law?</p>
          <ul>
            <li>• Full GDPR compliance with UK Data Protection Act 2018.</li>
            <li>• Use of encrypted servers and secure data transfer protocols.</li>
            <li>• Players can request data access, correction, or deletion at any time.</li>
          </ul>
          <p>27. Are winnings taxable for players?</p>
          <p>No. In the UK, gaming and gambling winnings are tax-free for players. The tax burden lies solely on the operator through RGD and Corporation Tax.</p>
          <p>28. Does MyChessCircle require any specific licenses?</p>
          <p>Yes. Depending on final legal classification, MyChessCircle operates under: UKGC license for remote gaming (if applicable). Esports & skill-based competition exemption framework where applicable. Compliance with UK Consumer Rights Act 2015 for fair terms.</p>
          <p>29. Who oversees compliance within the company?</p>
          <p>MyChessCircle UK has a Compliance & Legal Officer responsible for: filing returns with HMRC (RGD, Corporation Tax), ensuring all UKGC licensing requirements are met, and conducting regular audits for fairness and player fund security.</p>
          <p>30. Where can I get support?</p>
          <p>You can contact us via:</p>
          <p>• Email: support@mychesscircle.uk</p>
          <p>• Helpdesk (in-app support)</p>

        </div>
      </div>
    </div>
  )
}

export default Faq