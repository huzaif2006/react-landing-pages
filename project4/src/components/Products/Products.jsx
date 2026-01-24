import React from 'react';
import HoneyCard from './HoneyCard/HoneyCard';
import './Products.css';

const Products = ({ products }) => {
  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="products-heading">Our Pure Honey Collection</h2>
        <p className="products-subtitle">
          Handpicked from the finest apiaries across the world
        </p>

        <div className="products-grid">
          {products.map((product, index) => (
            <HoneyCard
              key={index}
              name={product.name}
              type={product.type}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
