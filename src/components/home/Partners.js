import "./Partners.css"

const Partners = () => {
  const partners = [
    { id: 1, name: "FIDE", logo: "/images/partners/fide.png" },
    { id: 2, name: "Chess.com", logo: "/images/partners/chess-com.png" },
    { id: 3, name: "International Chess Federation", logo: "/images/partners/icf.png" },
    { id: 4, name: "World Chess Championship", logo: "/images/partners/wcc.png" },
  ]

  return (
    <section className="partners-section">
      <div className="section-header">
        <h2>Official Partners</h2>
      </div>

      <div className="partners-container">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img src={partner.logo || "/placeholder.svg"} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners