import React, { useState } from "react";
import axios from "axios";

function ContactForm({ agentEmail }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/send-email", {
        to: agentEmail,
        ...formData,
      });
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Email</button>
    </form>
  );
}

function PropertyDetails({ property }) {
  return (
    <div>
      <h2>{property.address}</h2>
      <p>{property.description}</p>
      <img src={property.images[0]} alt={property.address} />
      <p>Location: {property.location}</p>
      <h3>Contact Agent</h3>
      <ContactForm agentEmail={property.agentEmail} />
    </div>
  );
}