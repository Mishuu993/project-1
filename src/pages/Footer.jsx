import React from "react";
import "./Home.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col">
          <div className="footer-logo">Brite Smile</div>
          <p>Your trusted dental clinic for a brighter, healthier smile.</p>
          <div className="footer-socials">
           
          </div>
        </div>

        <div className="footer-col">
          <h4 style={{color:"#0e90a4"}}>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4  style={{color:"#0e90a4"}}>Our Services</h4>
          <p>Teeth Cleaning</p>
          <p>Root Canal</p>
          <p>Dental Implants</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4  style={{color:"#0e90a4"}}>Working Hours</h4>
          <p>Mon-Fri: 9am - 7pm</p>
          <p>Sat: 10am - 5pm</p>
          <p>Sun: Closed</p>
        </div>

        {/* Column 5 */}
        <div className="footer-col">
          <h4  style={{color:"#0e90a4"}}>Contact Us</h4>
          <p>Email: info@britesmile.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: New Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Brite Smile | Designed with ❤️
      </div>
    </footer>
  );
}
