import React from 'react'
import './Reviews.css'
// import Manish from "../assets/images/Manish.jpeg"
// import Ankit from "../assets/images/Ankit.jpeg"
// import Sahil from "../assets/images/Sahil.jpeg"

const Reviews = () => {
  // const allTestimonials = [
  //   {
  //     id: 1,
  //     name: "Manish",
  //     image: Manish,
  //     quote: "MyChessCircle_UK has revolutionized online chess E-sports Championships. The platform is intuitive and the competition is world-class.",
  //   },
  //   {
  //     id: 2,
  //     name: "Ankit",
  //     image: Ankit,
  //     quote: "I love the E-sports Chess Championship structure on MyChessCircle_UK. It's challenging and rewarding at the same time.",
  //   },
  //   {
  //     id: 3,
  //     name: "Sahil",
  //     image: Sahil,
  //     quote: "As a casual player, MyChessCircle_UK gives me the opportunity to test my skills against players from all over the world.",
  //   },
  // ]

  return (
    <div className="reviews-container">
      <h1>Player Reviews</h1>
      <div style={{ fontSize: '24px', textAlign: 'center' }}><p>No Reviews yet!</p></div>
      {/* <div className="reviews-grid">
        {allTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="review-card">
            <div className="review-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="review-content">
              <h3 className="review-name">{testimonial.name}</h3>
              <p className="review-quote">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Reviews 