import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const servicesFull = [
  "Teeth Cleaning",
  "Cavity Filling",
  "Root Canal Treatment",
  "Braces & Aligners",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Orthodontics",
];

export default function Appointment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "Teeth Cleaning",
  });

  // ✅ Redirect to login if not logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save appointment
    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const updatedAppointments = [...existingAppointments, formData];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    console.log("✅ New Appointment:", formData);
    console.log("📋 All Appointments:", updatedAppointments);

    alert("✅ Appointment booked successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      service: "Teeth Cleaning",
    });
  };

  return (
    <section id="appointment" className="appointment-section">
      <h2 style={{ color: "black", fontStyle: "italic", fontFamily: "Georgia, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", }} className="section-title">Book Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            {servicesFull.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-submit">
          Book Now
        </button>
      </form>
    </section>
  );
}
