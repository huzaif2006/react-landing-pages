import React from 'react';
import PlantCard from './PlantCard';
import './PopularPlants.css';

const PopularPlants = ({ plants, heading }) => {
  return (
    <section className="popular-plants">
      <div className="popular-plants-container">
        <h2 className="popular-plants-heading">{heading}</h2>
        <div className="plants-grid">
          {plants.map((plant, index) => (
            <PlantCard
              key={index}
              name={plant.name}
              light={plant.light}
              price={plant.price}
              image={plant.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPlants;
