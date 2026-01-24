import React from 'react';
import BenefitCard from './BenefitCard/BenefitCard';
import './Benefits.css';

const Benefits = ({ benefits }) => {
  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <h2 className="benefits-heading">Why Choose Pure Honey?</h2>
        <p className="benefits-subtitle">
          Discover the natural benefits of raw, organic honey
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
