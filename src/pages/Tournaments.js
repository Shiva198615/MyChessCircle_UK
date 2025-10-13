"use client"
import { useState } from "react"
import "./Tournaments.css"

const Tournaments = () => {
  const [filter, setFilter] = useState("all")

  const tournaments = [
    {
      id: 1,
      title: "Grand Master Challenge",
      type: "daily",
      prize: "₹10,00,000",
      entryFee: "₹499",
      date: "June 15, 2025",
      time: "6:00 PM IST",
      duration: 10,
      players: {
        registered: 756,
        max: 1024,
      },
    },
    {
      id: 2,
      title: "Blitz Championship",
      type: "daily",
      prize: "₹5,00,000",
      entryFee: "₹299",
      date: "June 20, 2025",
      time: "7:00 PM IST",
      duration: 30,
      players: {
        registered: 412,
        max: 512,
      },
    },
    {
      id: 3,
      title: "Weekend Warrior",
      type: "weekly",
      prize: "₹2,00,000",
      entryFee: "₹199",
      date: "Every Weekend",
      time: "5:00 PM IST",
      duration: 10,
      players: {
        registered: 189,
        max: 256,
      },
    },
    {
      id: 4,
      title: "Rapid Fire",
      type: "weekly",
      prize: "₹50,000",
      entryFee: "₹100",
      date:  "Every Weekend",
      time: "8:00 PM IST",
      duration: "10",
      players: {
        registered: 1245,
        max: 2000,
      },
    },
    {
      id: 5,
      title: "Beginner's Battle",
      type: "monthly",
      prize: "₹25,000",
      entryFee: "₹80",
      date: "Second Saturday of Every Month",
      time: "7:00 PM IST",
      duration: 20,
      players: {
        registered: 876,
        max: 1000,
      },
    },
  ]

  const filteredTournaments =
    filter === "all" ? tournaments : tournaments.filter((tournament) => tournament.type === filter)

  return (
    <div className="tournaments-page">
      <div className="page-header">
        <h1>Upcoming E-sports Chess Championships</h1>
      </div>

      <div style={{ fontSize: '24px', textAlign: 'center' }}><p>Coming Soon.....</p></div>
      {/* <div className="tournaments-filter">
        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All E-sports Chess Championships</button>
        <button className={`filter-btn ${filter === "daily" ? "active" : ""}`} onClick={() => setFilter("daily")}>Daily</button>
        <button className={`filter-btn ${filter === "weekly" ? "active" : ""}`} onClick={() => setFilter("weekly")}>Weekly</button>
        <button className={`filter-btn ${filter === "monthly" ? "active" : ""}`} onClick={() => setFilter("monthly")}>Monthly</button>
      </div> */}

      {/* <div className="tournaments-list">
        {filteredTournaments.map((tournament) => (
          <div key={tournament.id} className="tournament-card">
            <div className="tournament-image">
              <div className="tournament-type">{tournament.type}</div>
            </div>

            <div className="tournament-details">
              <h3>{tournament.title}</h3>

              <div className="tournament-info-grid">
                <div className="info-item">
                  <span className="label">Prize Pool:</span>
                  <span className="value highlight">{tournament.prize}</span>
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
                  <span className="label">Time:</span>
                  <span className="value">{tournament.time}</span>
                </div>
                <div className="info-item">
                  <span className="label">Duration:</span>
                  <span className="value">{tournament.duration}mins</span>
                </div>
                <div className="info-item">
                  <span className="label">Players:</span>
                  <span className="value">
                    {tournament.players.registered}/{tournament.players.max}
                  </span>
                </div>
              </div>

              <div className="tournament-actions">
                <button className="details-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Tournaments