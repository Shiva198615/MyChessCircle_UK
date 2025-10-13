"use client"
import { useState, useEffect } from "react"
import "./Testimonials.css"
import Manish from "../../assets/images/Manish.jpeg"
import Ankit from "../../assets/images/Ankit.jpeg"
import Sahil from "../../assets/images/Sahil.jpeg"
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "-Manish",
      image: Manish,
      quote:"MyChessCircle_UK has revolutionized online chess E-sports Championships. The platform is intuitive and the competition is world-class.",
    },
    {
      id: 2,
      name: "-Ankit",
      image: Ankit,
      quote: "I love the E-sports Chess Championship structure on MyChessCircle_UK. It's challenging and rewarding at the same time.",
    },
    {
      id: 3,
      name: "-Sahil",
      image: Sahil,
      quote:"As a casual player, MyChessCircle_UK gives me the opportunity to test my skills against players from all over the world.",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2>What Players Say</h2>
        <Link to="/reviews" className="view-all-link" onClick={scrollToTop}>View All</Link>
      </div>

      <div className="testimonials-slider">
        <div className="testimonials-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-content">
                <div className="testimonial-image">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                </div>
                <div className="testimonial-text">
                  <p className="quote">"{testimonial.quote}"</p>
                  <h4 className="name">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials