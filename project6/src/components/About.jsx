import React from 'react';
import './About.css';

const About = ({ heading, text }) => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-heading">{heading}</h2>
        <p className="about-text">{text}</p>
      </div>
    </section>
  );
};

export default About;
