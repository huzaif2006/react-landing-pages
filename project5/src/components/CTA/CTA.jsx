import React from 'react';
import './CTA.css';

const CTA = ({ text, buttonText }) => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-text">{text}</h2>
        <button className="cta-button">{buttonText}</button>
        <div className="cta-decoration"></div>
      </div>
    </section>
  );
};

export default CTA;
