import React from 'react';

const WalletTermsModal = ({ open, onClose }) => {
	if (!open) return null;
	return (
		<div className="terms-modal" onClick={onClose}>
			<div className="terms-modal-content" onClick={(e) => e.stopPropagation()}>
				<h2>Wallet Transactions - Terms &amp; Conditions</h2>
				<h3>1. Legal Version (Detailed Terms &amp; Conditions)</h3>

				<h4>Add Money (Deposits)</h4>
				<ol>
					<li>Players may add funds to their wallet using available payment methods.</li>
					<li>An 18% GST (Goods &amp; Services Tax) will be deducted at the time of adding money.</li>
					<li>The net balance (after GST deduction) will be credited to the Player's Wallet.
						<ul>
							<li>Example: If a player adds £100, then £18 (GST) will be deducted, and £82 will be credited to the wallet.</li>
						</ul>
					</li>
					<li>The amount once added is non-refundable, except as required by applicable law.</li>
				</ol>

				<h4>Withdrawals</h4>
				<ol>
					<li>Players may withdraw available wallet balances subject to the following conditions:
						<ul>
							<li>Minimum withdrawal amount is £50.</li>
							<li>Withdrawals below £50 will not be processed.</li>
						</ul>
					</li>
					<li>Taxes and charges as applicable under Indian law will be deducted before crediting the withdrawal amount.</li>
					<li>Withdrawals will be processed to the verified bank account/UPI ID linked with the player's profile.</li>
				</ol>

				<h4>Winnings &amp; Tax Deductions</h4>
				<ol>
					<li>All winnings are subject to Tax Deducted at Source (TDS) as per the provisions of the Income Tax Act, 1961 and applicable gaming tax laws in India.</li>
					<li>TDS will be deducted on net winnings before crediting to the Player's Wallet.
						<ul>
							<li>Currently, winnings above the threshold limit prescribed under law (£100 or as notified by the Government) are subject to TDS at the applicable rate.</li>
						</ul>
					</li>
					<li>A TDS certificate (Form 16A) will be issued to the Player for such deductions, enabling them to claim credit while filing Income Tax returns.</li>
				</ol>

				<h4>Compliance</h4>
				<ol>
					<li>Players must ensure that all wallet transactions are conducted using their own verified payment instruments.</li>
					<li>Saara Creative reserves the right to verify any transaction and request additional KYC documents before processing withdrawals.</li>
					<li>By adding money, withdrawing, or using winnings, the player acknowledges and accepts applicable taxes, deductions, and legal requirements.</li>
				</ol>

				<h4>Disclaimer</h4>
				<ol>
					<li>Tax laws are subject to change. Any amendments notified by the Government of India will automatically apply to these Terms &amp; Conditions.</li>
					<li>Saara Creative is not responsible for a Player's individual tax liability beyond statutory deductions made at source.</li>
				</ol>

				<button className="close-modal-btn" onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default WalletTermsModal;
