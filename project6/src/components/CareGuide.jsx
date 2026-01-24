import React from 'react';
import CareCard from './CareCard';
import './CareGuide.css';

const CareGuide = ({ heading, careItems }) => {
  return (
    <section className="care-guide">
      <div className="care-guide-container">
        <h2 className="care-guide-heading">{heading}</h2>
        <div className="care-cards-grid">
          {careItems.map((item, index) => (
            <CareCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareGuide;
