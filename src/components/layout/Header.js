"use client"
import React, { useState, useEffect, useRef } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import "./Header.css"
import logo from "../../assets/images/homescreen_logo.png"

const COMPLIANCE_PATHS = [
  "/terms-conditions",
  "/terms-of-service",
  "/privacy-policy",
  "/fair-play-policy",
  "/refund-policy",
  "/taxation",
  "/about-us",
  "/responsible-gaming",
  "/legality",
  "/rules-and-regulations",
]

const navLinkClass = ({ isActive }) =>
  `nav-link${isActive ? " nav-link-active" : ""}`

const dropdownLinkClass = ({ isActive }) =>
  isActive ? "dropdown-link-active" : ""

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const isComplianceSection = COMPLIANCE_PATHS.includes(location.pathname)
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

  // Close dropdown when clicking outside of it (like a modal)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    const handleEscape = (event) => {
      if (isDropdownOpen && event.key === 'Escape') {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isDropdownOpen])

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
              <NavLink to="/" end className={navLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-chess" className={navLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>About Chess</NavLink>
            </li>
            <li className="nav-item dropdown" ref={dropdownRef}>
              <button type="button" className={`dropdown-btn${isComplianceSection ? " nav-link-active" : ""}`} onClick={toggleDropdown}>
                Terms & Compliance <i className={`arrow ${isDropdownOpen ? "up" : "down"}`}></i>
              </button>
              <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
                <NavLink to="/terms-conditions" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Terms & Conditions</NavLink>
                <NavLink to="/terms-of-service" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Terms of Service</NavLink>
                <NavLink to="/privacy-policy" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Privacy Policy</NavLink>
                <NavLink to="/fair-play-policy" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Fair Play Policy</NavLink>
                <NavLink to="/refund-policy" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Refund Policy</NavLink>
                <NavLink to="/taxation" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Taxation</NavLink>
                <NavLink to="/about-us" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>About Us</NavLink>
                <NavLink to="/responsible-gaming" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Responsible Gaming</NavLink>
                <NavLink to="/legality" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Legality</NavLink>
                <NavLink to="/rules-and-regulations" className={dropdownLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Rules & Regulations</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/tournaments" className={navLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>E-sports Chess Championship</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className={navLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/downloads" className={navLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Downloads</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/refer-and-earn" className={navLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Refer & Earn</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/contact" className={navLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tutorials" className={navLinkClass} onClick={() => { handleLinkClick(); scrollToTop(); }}>Tutorials</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header