import React from 'react';
import './PlantCard.css';

const PlantCard = ({ name, light, price, image }) => {
  return (
    <div className="plant-card">
      <div className="plant-image">
        <img src={image} alt={name} />
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{name}</h3>
        <p className="plant-light">☀️ {light}</p>
        <p className="plant-price">${price}</p>
      </div>
    </div>
  );
};

export default PlantCard;
