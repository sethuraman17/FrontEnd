import React, { useEffect, useRef, useState } from 'react';
import { FaTools, FaUserGraduate, FaTrophy } from 'react-icons/fa'; // Importing icons from react-icons
import './Internship.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Internship = () => {
    const [visible, setVisible] = useState({});
    const sectionsRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };
    
        // Store a stable reference to the current value of sectionsRef
        const sections = sectionsRef.current;
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setVisible((prev) => ({
                    ...prev,
                    [entry.target.id]: entry.isIntersecting,
                }));
            });
        }, options);
    
        // Observe each section
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });
    
        // Cleanup
        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);
    

    return (
        <div className="internship-container">
            <header className="internship-header">
                <div className="internship-icon-container">
                    <div className="internship-icon">
                        <FaTools size={50} color="#2980b9" /> {/* Technology Icon */}
                    </div>
                    <div className="internship-icon">
                        <FaUserGraduate size={50} color="#2980b9" /> {/* Mentorship Icon */}
                    </div>
                    <div className="internship-icon">
                        <FaTrophy size={50} color="#2980b9" /> {/* Success Icon */}
                    </div>
                </div>
                <h1 className="internship-title" id="header">
                    Unleash Your Potential with Our Internship Program
                </h1>
                <h2 className="internship-subtitle" id="header">
                    Hands-On Experience in Cutting-Edge Technology
                </h2>
            </header>

            <section className="internship-content">
                {["technology", "mentorship", "success"].map((item, index) => (
                    <div
                        className={`internship-card ${visible[item] ? 'fade-in' : 'fade-out'}`}
                        id={item}
                        ref={el => sectionsRef.current[index] = el}
                        key={item}
                    >
                        <h3 className="internship-card-title">
                            {item === "technology" ? "Technology Exposure" : item === "mentorship" ? "Mentorship from Experts" : "Foundation for Success"}
                        </h3>
                        <p className="internship-description">
                            {item === "technology" ? 
                                "At Sam Coaters, immerse interns in the world of metal fabrication, CNC machining, and surface finishing. By mastering state-of-the-art equipment, you’ll enhance your skills and elevate your confidence as you transform theoretical knowledge into practical applications." : 
                            item === "mentorship" ? 
                                "Our program provides invaluable insights, with dedicated mentors guiding you every step of the way. Learn best practices in quality control and precision manufacturing from seasoned professionals who are passionate about nurturing the next generation of talent." : 
                            "Join us to pave your career path in engineering and manufacturing. Gain a real-world perspective on industrial processes and network with industry leaders. Your journey towards a successful future starts here!"}
                        </p>
                    </div>
                ))}
            </section>

            <div className="internship-cta">
                <h2 className="internship-cta-title">Possible H1 Headings</h2>
                <ul className="internship-cta-list">
                    <li>Launch Your Career with Us</li>
                    <li>Transform Your Skills Today</li>
                    <li>Master Manufacturing with Our Internship</li>
                    <li>Experience Real-World Engineering</li>
                    <li>Join Our Internship Program Now</li>
                </ul>
            </div>
            <div className="internship-keywords">
                <h2 className="internship-keywords-title">Keywords Used</h2>
                <ul className="internship-keywords-list">
                    <li>Internship Program</li>
                    <li>Metal Fabrication</li>
                    <li>CNC Machining</li>
                    <li>Surface Finishing</li>
                    <li>Quality Control</li>
                    <li>Precision Manufacturing</li>
                    <li>Engineering Careers</li>
                    <li>Hands-On Experience</li>
                    <li>Industrial Processes</li>
                </ul>
            </div>
            <div className="internship-meta">
                <h2 className="internship-meta-title">Meta Title</h2>
                <p className="internship-meta-content">"5 Reasons to Join Our Internship Program at Sriram Coaters"</p>
                <h2 className="internship-meta-title">Meta Description</h2>
                <p className="internship-meta-content">
                    "Discover hands-on training, expert mentorship, and a pathway to a successful engineering career with our internship program at Sriram Coaters. Embrace your future today!"
                </p>
            </div>

            {/* Register Now Button */}
            <div className="internship-register">
                <Link  to="contact-us">
                <button className="register-button">
                    Register Now for Internship
                </button>
                </Link>
          
            </div>
        </div>
    );
};

export default Internship;
