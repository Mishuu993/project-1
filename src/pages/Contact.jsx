
import React, { useState } from "react";
import "../App.css";
import doctorImage from "../assets/doctor1.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact:"",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const existingContacts =
        JSON.parse(localStorage.getItem("contacts")) || [];

      console.log("📂 Existing Contacts (Before):", existingContacts);

      const updatedContacts = [...existingContacts, formData];

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));

      console.log("✅ New Contact Saved:", formData);
      console.log("📋 All Contacts (After):", updatedContacts);

      alert("Message sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Error saving to localStorage:", error);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 style={{ color: "white", fontStyle: "italic", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px black", }} className="section-title">📩 Contact Us</h2>

      <div className="contact-container">
        {/* Doctor Info */}
        <div className="doctor-info">
          <img src={doctorImage} alt="Dr. Sharma" className="doctor-img" />
          <h3>Dr. A Sharma</h3>
          <p><strong>Specialization:</strong> Orthodontist</p>
          <p><strong>Experience:</strong> 12+ Years</p>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>✉️ Email:</strong> info@dentalclinic.com</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

<input
            type="contact"
            name="contact"
            placeholder="contact no."
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>

      {/* Map below */}
      <div className="map-container">
        <iframe
          title="clinic-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.911818555964!2d75.78727031504364!3d26.91243388314264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6d7e9c3b7b9%3A0xa0dbb1cf31c2e5!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1694599999999!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>
    </section>
  );
}
