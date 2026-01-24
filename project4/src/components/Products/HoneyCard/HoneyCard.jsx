import React from 'react';
import './HoneyCard.css';

const HoneyCard = ({ name, type, price, image }) => {
  return (
    <div className="honey-card">
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="card-image" />
        <div className="card-badge">{type}</div>
      </div>

      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-type">{type}</p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="card-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default HoneyCard;
