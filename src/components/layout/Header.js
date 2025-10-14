"use client"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../../assets/images/homescreen_logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  // const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  // const navigate = useNavigate() 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // const toggleProductDropdown = () => {
  //   setIsProductDropdownOpen(!isProductDropdownOpen)
  // }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    // setIsProductDropdownOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={handleLinkClick}><img src={logo || "/placeholder.svg"} alt="ChessMasters Logo" className="logo" /></Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-chess" className="nav-link" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>About Chess</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="dropdown-btn" onClick={toggleDropdown}>
                Terms & Compliance <i className={`arrow ${isDropdownOpen ? "up" : "down"}`}></i>
              </button>
              <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
                <Link to="/terms-conditions" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Terms & Conditions</Link>
                <Link to="/terms-of-service" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Terms of Service</Link>
                <Link to="/privacy-policy" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Privacy Policy</Link>
                <Link to="/fair-play-policy" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Fair Play Policy</Link>
                <Link to="/refund-policy" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Refund Policy</Link>
                <Link to="/taxation" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Taxation</Link>
                <Link to="/about-us" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>About Us</Link>
                <Link to="/responsible-gaming" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Responsible Gaming</Link>
                <Link to="/legality" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Legality</Link>
                <Link to="/rules-and-regulations" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Rules & Regulations</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/tournaments" className="nav-link" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>E-sports Chess Championship</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/downloads" className="nav-link" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Downloads</Link>
            </li>
            <li className="nav-item">
              <Link to="/refer-and-earn" className="nav-link" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Refer & Earn</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/tutorials" className="nav-link" onClick={(e) => {handleLinkClick(e); scrollToTop(e)}}>Tutorials</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header