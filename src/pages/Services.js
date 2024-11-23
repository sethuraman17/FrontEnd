import React from 'react';
import './Services.css'; // External CSS for styling
import img1 from './images/IMG (6).jpg'
import img2 from './images/cnc2-resized.png'
import img3 from './images/IMG (4).jpg'
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div className="services-container">
     
      <section className="hero">
        <div className="hero-content">
          <h1>Precision Machining & Coating Services</h1>
          <p>Top-notch industrial solutions for all your manufacturing needs!</p>
          <div className="cta-buttons">
          <Link to="contact-us">
            <button className="cta-primary">Shop Services</button>
            <button className="cta-secondary">Get a Custom Quote</button>
          </Link>
          </div>
        </div>

        <div className="hero-image">
        
        </div>
      </section>

   
      <section className="services-shop">
        <h2>Explore Our Services</h2>
        <div className="services-grid">

          <div className="service-card">
            <img src={img1} alt="CNC Machining" />
            <h3>CNC Machining</h3>
            <p>Precision-engineered components tailored to your needs.</p>
            <Link to="contact-us">
             <button className="cta-primary" >View Details</button></Link>
          </div>
          
        
          <div className="service-card">
            <img src={img2} alt="Electroplating" />
            <h3>Electroplating</h3>
            <p>Corrosion-resistant finishes that enhance durability.</p>
            
            <Link to="contact-us">
            <button className="cta-primary" >View Details</button></Link>
          </div>
          
        
          <div className="service-card">
            <img src={img3} alt="Powder Coating" />
            <h3>Powder Coating</h3>
            <p>Eco-friendly, durable finishes for lasting aesthetics.</p>
            <Link to="contact-us">
             <button className="cta-primary" >View Details</button></Link>
          </div>
        </div>
      </section>

    
      <section className="quality-assurance">
        <h2>Quality Assurance You Can Trust</h2>
        <p>Every service undergoes stringent quality control, ensuring that your products exceed expectations.</p>
        
        <Link to="contact-us">
        <button className="cta-secondary">Learn More About Quality Standards</button>
        </Link>
      </section>


      <section className="final-cta">
        <h2>Need a Custom Solution?</h2>
        <p>Contact us to discuss your unique requirements, or explore our shop for immediate services!</p>
        <Link to="contact-us">
        <button className="Shop">Shop Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
