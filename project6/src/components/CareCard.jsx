import React from 'react';
import './CareCard.css';

const CareCard = ({ title, description, icon }) => {
  return (
    <div className="care-card">
      {icon && <div className="care-icon">{icon}</div>}
      <h3 className="care-title">{title}</h3>
      <p className="care-description">{description}</p>
    </div>
  );
};

export default CareCard;
