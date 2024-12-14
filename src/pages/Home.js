// src/Welcome.js
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // Import the hook
import './HomePage.css'; // Custom styles for the Welcome component
import cnc1 from './images/IMG (8).jpg'; 
import cnc2 from './images/IMG (1).jpg';
import cnc3 from './images/IMG (5).jpg';
import cnc4 from './images/IMG (6).jpg';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [index, setIndex] = useState(0);

  // Phrases and images to cycle through
  const phrases = [
    'TRANSFORM YOUR INDUSTRIAL NEEDS',
    'WITH PRECISION ENGINEERING',
    'PRECISION, DURABILITY, AND QUALITY',
    "THAT'S THE SRIRAM COATERS PROMISE"
  ];
  const images = [cnc1, cnc2, cnc3, cnc4];

  // Change phrase and image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Cycle through phrases
    }, 6000); 

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [phrases.length]);

  // In-View hooks for each section
  const [refWelcome, inViewWelcome] = useInView({ threshold: 0.1 });
  const [refAboutUs, inViewAboutUs] = useInView({ threshold: 0.1 });
  const [refServices, inViewServices] = useInView({ threshold: 0.1 });
  const [refWhyChooseUs, inViewWhyChooseUs] = useInView({ threshold: 0.1 });
  const [refTestimonials, inViewTestimonials] = useInView({ threshold: 0.1 });
  const [refGetStarted, inViewGetStarted] = useInView({ threshold: 0.1 });

  return (
    <div className="homepage-container">
      {/* Welcome Section */}
      <div className={`welcome-section ${inViewWelcome ? 'fade-in' : 'hidden'}`} ref={refWelcome}>
        <div className="text-content">
          <h1>{phrases[index]}</h1>
          <h2>{index % 2 === 0 ? 'SRIRAM COATERS' : 'YOUR CNC PARTNER'}</h2>
          <div className="button-container">
            {index === 0 && (
              <Link to="about-us">
                <button className="btn btn-primary slide-in">About Us</button>
              </Link>
            )}
            {index === 1 && (
              <Link to="contact-us">
                <button className="btn btn-primary slide-in">Contact Us</button>
              </Link>
            )}
            {index === 2 && (
              <Link to="services">
                <button className="btn btn-primary slide-in">Our Services</button>
              </Link>
            )}
            {index === 3 && (
              <Link to="about-us">
                <button className="btn btn-primary slide-in">About Us</button>
              </Link>
            )}
          </div>
        </div>
        <div className="image-content">
          <img src={images[index]} alt={`CNC ${index + 1}`} className="img-fluid" />
        </div>
      </div>

      {/* About Us Section */}
      <div className={`about-us-section ${inViewAboutUs ? 'fade-in' : 'hidden'}`} ref={refAboutUs} id="about-us">
        <h2>About Us</h2>
        <p>
          At Sriram Coaters, we are dedicated to providing cutting-edge industrial services that meet the complex needs of today’s manufacturing and engineering sectors. 
          With over 20 years of experience, our expert team specializes in CNC machining, electroplating, powder coating, and window fabrication. We pride ourselves on 
          delivering reliable, high-quality solutions tailored to our clients' specifications, ensuring every product not only meets but exceeds industry standards.
        </p>
      </div>

      {/* Services Section */}
      <div className={`services-section ${inViewServices ? 'fade-in' : 'hidden'}`} ref={refServices}>
        <h3>Our Services</h3>
        <div className="service">
          <h4>Precision Manufacturing at Its Best</h4>
          <p>Our state-of-the-art CNC machining services utilize three dedicated machines to deliver unrivaled accuracy and efficiency. Whether you need prototypes or large production runs, our skilled operators ensure your components are crafted to perfection.</p>
        </div>
        <div className="service">
          <h4>Enhance Durability with Electroplating</h4>
          <p>Our electroplating processes provide a high-quality finish that enhances the durability and resistance of your metals. Trust Sriram Coaters for a robust surface treatment that extends the life of your products and improves their aesthetic appeal.</p>
        </div>
        <div className="service">
          <h4>Eco-Friendly Powder Coating Solutions</h4>
          <p>Choose us for environmentally friendly coating solutions that offer superior corrosion resistance and aesthetic enhancement. Our powder coating services not only look great but are also built to withstand the test of time and the harshest environments.</p>
        </div>
        <div className="service">
          <h4>Custom Fabrication for Every Need</h4>
          <p>We specialize in custom window fabrication for both commercial and residential projects. Our bespoke solutions align with your architectural goals while maintaining the highest standards of quality and durability.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={`why-choose-us-section ${inViewWhyChooseUs ? 'fade-in' : 'hidden'}`} ref={refWhyChooseUs}>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Experience You Can Trust: Over 20 years in the industry means we have the expertise needed to handle your unique specifications.</li>
          <li>Quality Assurance: Our commitment to quality ensures that every service we provide meets rigorous industry standards.</li>
          <li>Timely Delivery: We strive to deliver on or before your deadlines, making us a reliable partner for your business.</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className={`testimonials-section ${inViewTestimonials ? 'fade-in' : 'hidden'}`} ref={refTestimonials}>
        <h3>Testimonials</h3>
        <blockquote>"Sriram Coaters has consistently provided us with top-notch CNC machined components that fit perfectly every time. Their team's attention to detail is unparalleled." - Michael T., Engineering Manager</blockquote>
        <blockquote>"The powder coating services have elevated our product quality. Not only do they look fantastic, but we've also seen significant improvements in durability." - Sarah L., Manufacturing Lead</blockquote>
        <blockquote>"Working with Sriram Coaters on our window fabrication project was a game-changer. Their custom solutions helped bring our architectural vision to life." - David R., Construction Project Manager</blockquote>
      </div>

      {/* Get Started Section */}
      <div className={`get-started-section ${inViewGetStarted ? 'fade-in' : 'hidden'}`} ref={refGetStarted}>
        <h3>Get Started</h3>
        <p>Are you ready to elevate your projects with precision-engineered solutions? Contact us today for a free quote and discover how Sriram Coaters can meet your industrial needs.</p>
        <Link to="/contact-us">
          <button className="btn btn-primary">Request a Quote Now</button>
        </Link>
      </div>

      {/* Contact Us Section */}
      <div className={`contact-us-section ${inViewGetStarted ? 'fade-in' : 'hidden'}`} ref={refGetStarted}>
        <h4>Contact Us</h4>
        <p>Phone: +91 98765 43210</p>
        <p>Email: info@sriramcoaters.com</p>
        <p>Address: 199/1, Ambal Nagar, Boothakudi Village, Viralimalai, Viralimalai, Pudukkottai-621316, Tamil Nadu, India</p>
      </div>
    </div>
  );
};

export default Welcome;
