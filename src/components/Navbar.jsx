import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Dental Clinic Logo" className="logo-img" />
        <span>Dental Clinic</span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/appointment" onClick={() => setIsOpen(false)}>Appointment</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>

         <li>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;








