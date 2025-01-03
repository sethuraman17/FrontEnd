import React, { useState } from "react";
import "./Contactus.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    requirement: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS service
    emailjs.send(
      "service_mqq6fu9",
     "template_9zrok6w",
      formData,
      "DMlyjUW-Z7AalN8HT"
    )
    .then((response) => {
      setLoading(false);
      setMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        requirement: "",
      });
    })
    .catch((error) => {
      setLoading(false);
      setMessage("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Start Your Enquiry</h1>
        <p>We are here to assist you. Please provide your details below.</p>
      </div>

      <div className="contact-content">
        {/* Left Section: Contact Form */}
        <div className="contact-left">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Your Mobile Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="requirement">Requirement</label>
              <textarea
                id="requirement"
                name="requirement"
                rows="5"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Describe your requirement"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {message && <p className="success-message">{message}</p>}
        </div>

        {/* Right Section: Contact Information */}
        <div className="contact-right">
          <h3>Contact Information</h3>
          <div className="contact-info">
            <h4>
              <FaMapMarkerAlt /> Location
            </h4>
            <p>199/1, Ambal Nagar, Boothakudi Village,</p>
            <p> Pudukkottai,621316, Viralimalai,</p>
            <p>Tamil Nadu, India</p>
            <h4>
              <FaPhone /> Reach Us
            </h4>
            <p>Sethuraman</p>
            <p>+91 86675 62719</p>

            <h4>
              <FaEnvelope /> Email Us
            </h4>
            <p>info@sriram-coaters.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
