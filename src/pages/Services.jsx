import React, { useRef } from "react";
import "../App.css";

// Import service images
import cleaning from "../assets/cleaning.jpg";
import cavity from "../assets/cavity.jpg";
import rootcanal from "../assets/root.jpg";
import braces from "../assets/braces.jpg";
import implants from "../assets/dental.jpg";
import cosmetic from "../assets/cosmetic.jpg";
import orthodontics from "../assets/orthodontics.jpg";
import whitening from "../assets/whitening.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const servicesFull = [
  { title: "Teeth Cleaning", desc: "Professional cleaning to remove plaque, tartar, and stains.", img: cleaning },
  { title: "Cavity Filling", desc: "Restore decayed teeth using safe and durable fillings.", img: cavity },
  { title: "Root Canal Treatment", desc: "Treat infected tooth pulp to save your natural tooth.", img: rootcanal },
  { title: "Braces & Aligners", desc: "Correct misaligned teeth using braces or aligners.", img: braces },
  { title: "Dental Implants", desc: "Permanent replacement for missing teeth with implants.", img: implants },
  { title: "Cosmetic Dentistry", desc: "Enhance your smile with veneers, whitening, and makeovers.", img: cosmetic },
  { title: "Orthodontics", desc: "Specialized treatment for straightening teeth & bite correction.", img: orthodontics },
  { title: "Teeth Whitening", desc: "Brighten your smile with safe and professional whitening.", img: whitening },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="services" className="section">
      <h2
        style={{
          color: "white",
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
          textShadow: "2px 2px 4px black",
        }}
        className="section-title"
      >
        Our Services
      </h2>

      <div className="services-wrapper">
        {/* Left Button */}
        <button className="scroll-btn left" onClick={scrollLeft}>
          <IoIosArrowBack size={20} />
        </button>

        {/* Services Scroll */}
        <div className="services-scroll" ref={scrollRef}>
          {servicesFull.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-img">
                <img src={service.img} alt={service.title} />
              </div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </section>
  );
}
