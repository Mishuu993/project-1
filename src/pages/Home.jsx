import React, { useEffect, useState } from "react";
import "../App.css";
import aboutImage from "../assets/image.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.png";
import About from "./About";
import Services from "./Services";
import Appointment from "./Appointment";
import Contact from "./Contact";



export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "", service: "Teeth Cleaning" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero Background Auto Slide
  const images = [hero1, hero2, hero3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Appointment booked!"); };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Your Smile, <span className="highlight">Our Priority</span></h1>
            <p>Expert dental care for a confident and healthy smile.</p>
           


<div className="hero-buttons">
  <a href="#appointment" className="btn-primary">Book Appointment</a>
  <a href="#services" className="btn-outline">Our Services</a>
</div>


          </div>
        </div>
      </section>

  


<About/>
<Services/>
<Appointment/>
<Contact/>

      

    



    </div>
  );
}
