import React from "react";
import aboutImage from "../assets/images.png";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg"
import "../pages/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left-content">
          <h2  style={{ color: "black", fontStyle: "italic", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px white", }}>About Our <span className="highlight">Dental Clinic</span></h2>
          <p>
            Welcome to our state-of-the-art dental clinic where your smile is our top priority. 
            Our experienced dental team provides comprehensive care for patients of all ages.
          </p>
          <p>
            We use modern technology and techniques to offer pain-free treatments, ensuring 
            a safe and hygienic environment.
          </p>
          <p>
            Whether you need preventive care, emergency services, or aesthetic treatments, 
            our clinic is dedicated to giving you a confident, healthy smile.
          </p>
        </div>

        <div className="about-right-img">
          <img src={aboutImage} alt="Dental Clinic" />
        </div>
      </div>

      {/* ========== Info Cards + Features ========== */}
      <div className="cards-features-container">
        <div className="info-cards">
          <div className="info-card blue-card">
            <h3>🦷 Dental Care</h3>
            <p>Complete oral healthcare services including cleaning, fillings, braces, and implants.</p>
          </div>
          <div className="info-card red-card">
            <h3>💉 Emergency Support</h3>
            <p>24/7 emergency dental support for pain relief, injury cases, and urgent treatment.</p>
          </div>
          <div className="info-card green-card">
            <h3>📅 Easy Appointment</h3>
            <p>Book appointments online and avoid waiting with our smart scheduling system.</p>
          </div>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <h4>🦷 Preventive Care</h4>
            <p>Regular check-ups, cleanings, and oral hygiene guidance to prevent dental issues.</p>
          </div>
          <div className="feature-card">
            <h4>💎 Cosmetic Dentistry</h4>
            <p>Teeth whitening, veneers, and smile makeovers to enhance your appearance.</p>
          </div>
          <div className="feature-card">
            <h4>🛠 Restorative Treatments</h4>
            <p>Fillings, crowns, bridges, and implants to restore function and aesthetics.</p>
          </div>
          <div className="feature-card">
            <h4>⚡ Emergency Care</h4>
            <p>24/7 support for pain, trauma, or urgent dental issues.</p>
          </div>
        </div>
      </div>

      {/* ========== Team Section ========== */}
      <div className="team-section">
        <h3  style={{ color: "black", fontStyle: "italic", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px white", }}>Meet Our Dental Experts</h3>
        <div className="team-members-row">
          {/* Doctor 1 */}
          <div className="team-member-card">
            <div className="image-container">
              <img src={doctor1} alt="Dr. A" />
            </div>
            <h5>Dr. A</h5>
            <p className="specialization">Orthodontist</p>
            <div className="member-details">
              <p><strong>Degree:</strong> BDS, MDS (Orthodontics)</p>
              <p><strong>Experience:</strong> 12 years in braces and preventive care</p>
              <p><strong>Specialization:</strong> Braces, Invisalign, Preventive Orthodontics</p>
            </div>
          </div>
     


<div className="team-member-card">
            <div className="image-container">
              <img src={doctor2} alt="Dr. A" />
            </div>
            <h5>Dr.B</h5>
            <p className="specialization">Orthodontist</p>
            <div className="member-details">
              <p><strong>Degree:</strong> BDS, MDS (Orthodontics)</p>
              <p><strong>Experience:</strong> 12 years in braces and preventive care</p>
              <p><strong>Specialization:</strong> Braces, Invisalign, Preventive Orthodontics</p>
            </div>
          </div>
          {/* Doctor 2 */}
          <div className="team-member-card">
            <div className="image-container">
              <img src={doctor3} alt="Dr. B" />
            </div>
            <h5>Dr.Manisha Rathore</h5>
            <p className="specialization">Cosmetic Dentist</p>
            <div className="member-details">
              <p><strong>Degree:</strong> BDS, MDS (Cosmetic Dentistry)</p>
              <p><strong>Experience:</strong> 10 years in aesthetic treatments</p>
              <p><strong>Specialization:</strong> Teeth Whitening, Veneers, Smile Makeovers</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
