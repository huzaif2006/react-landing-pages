import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, buttonText, image }) => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-button">{buttonText}</button>
        </div>
        <div className="hero-image-wrapper">
          <img src={image} alt="3D Origami" className="hero-image" />
          <div className="image-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
