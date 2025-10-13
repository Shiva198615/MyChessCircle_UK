"use client"
import { useState } from "react"
import "./Contact.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolio-sever.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
        setFormSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setFormSubmitted(false);
        }, 4000);
      } else {
        console.error('Failed to submit form:', response.status);
        alert('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>

      <div className="content-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We're here to help and answer any question you might have. We look forward to hearing from you!</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><FaEnvelope /></div>
                <div className="method-details">
                  <h3>Email</h3>
                  <p>support@mychesscircle.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon"><FaPhone /></div>
                <div className="method-details">
                  <h3>Phone</h3>
                  <p>9113577605 / 8867468556</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon"><FaMapMarkerAlt /></div>
                <div className="method-details">
                  <h3>Address</h3>
                  <p>No.50, First Floor, Jaya Arcade, Muddinapalya Main Road, Opp to Shantha Hospital, BEL Layout 1st Stage, Bedarahalli, Bengaluru Urban</p>
                   <p>Pin Code : 560091</p>
                    <p>State : Karnataka</p>
                    <p>Country: India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us On</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/share/1C4gpZS1AQ/" target="_blank"><FaFacebook /></a>
                <a href="https://x.com/check_mate32" target="_blank"><FaTwitter /></a>
                <a href="https://www.instagram.com/mychesscircle?igsh=dWZqbmdzcmsyaHdq" target="_blank"><FaInstagram /></a>
                <a href="https://www.youtube.com/channel/UClwO6yq8I6DQFfrTUkA2_hA" target="_blank"><FaYoutube /></a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>

            {formSubmitted ? (
              <div className="form-success-message">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" >Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <Link to="/faq" className="view-all-link" onClick={scrollToTop}>View All</Link>
          </div>

          <div className="faq-list">
            <div className="faq-item">
              <h3>How do I withdraw my winnings?</h3>
              <p>Withdrawals can be requested through UPI or bank transfer and KYC verification is mandatory before making a withdrawal.</p>
            </div>

            <div className="faq-item">
              <h3>What happens if I disconnect during a match?</h3>
              <p>If your connection drops, your timer continues running and if you do not reconnect in time, your opponent may win by timeout.</p>
            </div>

            <div className="faq-item">
              <h3>Is this a E-Sports Platform platform?</h3>
              <p>Yes, our platform allows users to participate in both free and paid chess games, where they can win rewards based on their performance.</p>
            </div>

            <div className="faq-item">
              <h3>How do I deposit money into my wallet?</h3>
              <p>You can add funds using UPI, credit/debit cards, net banking, and wallets through our secure payment gateway.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact