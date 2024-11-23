import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        {/* Journey Section */}
        <ScrollSection title="Our Journey">
          <p>
            Established in 2003 in the vibrant town of Viralimalai, Tamil Nadu, Sriram Coaters embarked on a remarkable journey in the metal fabrication and surface finishing industry. With over 20 years of unwavering dedication and continually refined expertise, we have carved a niche for ourselves as a leader in high-quality industrial services.
          </p>
          <p>
            Our journey began with a vision to revolutionize the manufacturing landscape by incorporating cutting-edge technology and superior craftsmanship, allowing us to build lasting partnerships with prestigious companies in the manufacturing and automotive sectors.
          </p>
        </ScrollSection>

        {/* Purpose and Goals Section */}
        <ScrollSection title="Purpose and Goals">
          <p>
            At Sriram Coaters, our purpose extends beyond merely providing services; we are committed to delivering value that fuels the success of our clients. Our primary goal is to ensure that every product we fabricate meets the highest standards of precision, durability, and innovation.
          </p>
          <p>
            We strive to be a trusted partner for our clients, understanding their unique needs and providing tailored solutions that enhance their operational efficiency and product quality. Our mission is to continue evolving our capabilities while prioritizing sustainability and environmental responsibility in all our processes.
          </p>
        </ScrollSection>

        {/* Team Section */}
        <ScrollSection title="Introduction to the Team">
          <p>
            Behind Sriram Coaters is a dedicated team of skilled professionals with extensive knowledge and experience in metal fabrication and surface finishing. Our team comprises talented engineers, technicians, and craftsmen who are passionate about their work and committed to exceeding client expectations.
          </p>
          <p>
            Each member of our team embraces a culture of collaboration, continuous learning, and innovation, ensuring that we stay at the forefront of industry advancements. Together, we aim to not only meet but exceed the high standards set by our clients.
          </p>
        </ScrollSection>

        {/* Offerings Section */}
        <ScrollSection title="Our Offerings">
          <ul className="offerings-list">
            <li><strong>CNC Machining:</strong> Utilizing state-of-the-art CNC machines for high-precision manufacturing.</li>
            <li><strong>Electroplating:</strong> Superior corrosion resistance and improved durability for metal products.</li>
            <li><strong>Powder Coating:</strong> Environmentally friendly solutions that enhance the longevity of metal products.</li>
            <li><strong>Window Fabrication:</strong> Customized solutions for commercial and residential applications.</li>
          </ul>
        </ScrollSection>

        {/* Customer Opinions Section */}
        <ScrollSection title="Customer Opinions">
          <p>
            The success of Sriram Coaters can be attributed to the trust and satisfaction of our clients. We have built meaningful relationships with various industries, who commend us for our unwavering commitment to quality and excellence. Feedback from our customers highlights our efficiency, attention to detail, and outstanding results.
          </p>
        </ScrollSection>

        {/* Achievements Section */}
        <ScrollSection title="Achievements">
          <p>
            Over the years, Sriram Coaters has achieved significant milestones that reflect our growth and expertise in the industry. Our commitment to quality has earned us industry certifications and accolades, reinforcing our position as a reliable partner in the manufacturing and automotive sectors.
          </p>
        </ScrollSection>

        {/* Call to Action Section */}
        <ScrollSection title="Ready to Partner with Us?">
          <p>
            Elevate your projects with industry-leading metal fabrication and surface finishing services. Contact us today for a consultation and experience the Sriram Coaters difference—where precision meets innovation.
          </p>
        </ScrollSection>

        {/* Contact Section */}
        <ScrollSection title="Contact Us">
          <p>Feel free to reach out to us using the following details:</p>
          <div className="contact-details">
            <p><strong>Address:</strong> 1234 Main Street, Viralimalai, Tamil Nadu, India</p>
            <p><strong>Email:</strong> info@sriramcoaters.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>
        </ScrollSection>
      </section>
    </div>
  );
};

// ScrollSection Component
const ScrollSection = ({ title, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`scroll-section ${inView ? 'visible' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );
};

export default AboutUs;
