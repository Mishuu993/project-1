// import React, { useState } from "react";
// import { Link } from "react-router-dom"; 
// import "./Navbar.css";
// import logo from "../assets/logo.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src={logo} alt="Dental Clinic Logo" className="logo-img" />
//         <span>Dental Clinic</span>
//       </div>

//       <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
//         </li>
//         <li>
//           <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
//         </li>
//         <li>
//           <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
//         </li>
//         <li>
//           <Link to="/appointment" onClick={() => setIsOpen(false)}>Appointment</Link>
//         </li>
//         <li>
//           <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//         </li>

//          <li>
//           <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
//         </li>
//       </ul>

//       <div className="menu-icon" onClick={toggleMenu}>
//         ☰
//       </div>
//     </nav>
//   );
// }

// export default Navbar;








import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(checkLogin === "true");
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Dental Clinic Logo" className="logo-img" />
        <span>Dental Clinic</span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/appointment" onClick={() => setIsOpen(false)}>Appointment</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

        {!isLoggedIn ? (
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
        ) : (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
