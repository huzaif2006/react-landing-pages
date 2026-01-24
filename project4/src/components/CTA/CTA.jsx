import React from 'react';
import './CTA.css';

const CTA = ({ text, buttonText }) => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-text">{text}</h2>
        <button className="cta-button">{buttonText}</button>
      </div>
    </section>
  );
};

export default CTA;
