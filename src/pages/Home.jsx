
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import aboutImage from "../assets/image.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.png";

import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Your Smile, <span className="highlight">Our Priority</span>
            </h1>
            <p>Expert dental care for a confident and healthy smile.</p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/appointment")}
              >
                Book Appointment
              </button>

              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Contact />
    </div>
  );
}
