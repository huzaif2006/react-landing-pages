import React from 'react';
import './About.css';

const About = ({ heading, text }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">{heading}</h2>
          <p className="about-text">{text}</p>
          
          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <h3>100% Organic</h3>
              <p>Raw, unprocessed honey from sustainable apiaries</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <h3>Pure & Clean</h3>
              <p>No additives, no processing, just pure honey</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🐝</span>
              <h3>Bee-Friendly</h3>
              <p>Ethical harvesting that respects bee colonies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
