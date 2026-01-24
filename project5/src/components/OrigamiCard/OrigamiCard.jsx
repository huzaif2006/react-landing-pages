import React from 'react';
import './OrigamiCard.css';

const OrigamiCard = ({ name, category, price, image }) => {
  return (
    <div className="origami-card">
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="card-image" />
        <div className="card-overlay">
          <button className="card-button">View Details</button>
        </div>
      </div>
      <div className="card-content">
        <span className="card-category">{category}</span>
        <h3 className="card-name">{name}</h3>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default OrigamiCard;
