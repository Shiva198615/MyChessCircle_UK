import { Link } from "react-router-dom"
import "./FeaturedTournaments.css"

const FeaturedTournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "Grand Master Challenge",
      prize: "£10,00,000",
      entryFee: "£499",
      date: "June 15, 2023",
      players: 1024,
      image: "/images/tournament1.jpg",
    },
    {
      id: 2,
      title: "Blitz Championship",
      prize: "£5,00,000",
      entryFee: "£299",
      date: "June 20, 2023",
      players: 512,
      image: "/images/tournament2.jpg",
    },
    {
      id: 3,
      title: "Weekend Warrior",
      prize: "£2,00,000",
      entryFee: "£199",
      date: "Every Weekend",
      players: 256,
      image: "/images/tournament3.jpg",
    },
  ]

  return (
    <section className="featured-tournaments">
      <div className="section-header">
        <h2>Featured Tournaments</h2>
        <Link to="/tournaments" className="view-all">
          View All
        </Link>
      </div>

      <div className="tournaments-grid">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="tournament-card">
            <div className="tournament-image">
              <img src={tournament.image || "/placeholder.svg"} alt={tournament.title} />
            </div>
            <div className="tournament-details">
              <h3>{tournament.title}</h3>
              <div className="tournament-info">
                <div className="info-item">
                  <span className="label">Prize Pool:</span>
                  <span className="value">{tournament.prize}</span>
                </div>
                <div className="info-item">
                  <span className="label">Entry Fee:</span>
                  <span className="value">{tournament.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="label">Date:</span>
                  <span className="value">{tournament.date}</span>
                </div>
                <div className="info-item">
                  <span className="label">Players:</span>
                  <span className="value">{tournament.players}</span>
                </div>
              </div>
              <button className="join-btn">Join Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedTournaments