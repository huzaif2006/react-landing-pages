import React from 'react';
import './AboutSection.css';

const AboutSection = ({ heading, text }) => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">{heading}</h2>
          <p className="about-text">{text}</p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">✦</span>
              <span className="highlight-label">Handmade</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">✦</span>
              <span className="highlight-label">Premium Materials</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">✦</span>
              <span className="highlight-label">Artisan Crafted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
