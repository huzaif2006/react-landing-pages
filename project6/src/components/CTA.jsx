import React from 'react';
import './CTA.css';

const CTA = ({ text, buttonText }) => {
  return (
    <section className="cta">
      <div className="cta-container">
        <p className="cta-text">{text}</p>
        <button className="cta-button">{buttonText}</button>
      </div>
    </section>
  );
};

export default CTA;
