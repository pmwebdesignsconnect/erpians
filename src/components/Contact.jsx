import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    emailjs
      .send(
        "service_agakh48", // service ID
        "template_473jkop", // template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "cVvqp1UI-m2cnJnFk" // public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);

          alert("Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);

          alert("Failed to send message. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: [
        "28-134, old neredmet, near three temples, Neredmet, Hyderabad, Tirumalagiri, Telangana, India, 500056",
      ],
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 96767 96324"],
    },
    {
      icon: "📧",
      title: "Email",
      details: ["hr@erpians.in"],
    },
    {
      icon: "🌐",
      title: "Website",
      details: ["www.erpians.in"],
    },
  ];

  return (
    <section className="contact">
      <div className="container">
        <h1>Contact Us</h1>

        <div className="contact-content">
          {/* LEFT SIDE */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <h3>
                  {info.icon} {info.title}
                </h3>

                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form">
            <h2>Send us a Message</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;