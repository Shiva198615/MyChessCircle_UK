import "./HowToPlay.css"
import { FaUserPlus, FaCreditCard, FaGamepad, FaTrophy } from "react-icons/fa"

const steps = [
  {
    icon: <FaUserPlus className="how-icon" />, step: "01",
    title: "Sign Up & Verify",
    description: "Create your account and complete KYC verification with Aadhaar and PAN for secure gaming."
  },
  {
    icon: <FaCreditCard className="how-icon" />, step: "02",
    title: "Add Money",
    description: "Deposit funds to your wallet using cards or bank transfer. Instant and secure transactions."
  },
  {
    icon: <FaGamepad className="how-icon" />, step: "03",
    title: "Play & Win",
    description: "Join games, E-sports Chess Championships, or Challenge friends. Use your chess skills to become a Chess E-sports Entity."
  },
  {
    icon: <FaTrophy className="how-icon" />, step: "04",
    title: "Withdraw Winnings",
    description: "Withdraw your winnings instantly to your bank account. No hidden fees or delays."
  },
]

const HowToPlay = () => (
  <section className="how-to-play-section">
    <div className="how-header">
      <h2>How It Works</h2>
      <p className="how-sub">Get started in minutes and begin your journey to India's Chess E-sports Platform.</p>
    </div>
    <div className="how-cards-grid">
      {steps.map((step, idx) => (
        <div className="how-card" key={idx}>
          <div className="how-step-circle">{step.step}</div>
          <div className="how-icon-bg">{step.icon}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
)

export default HowToPlay