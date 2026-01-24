import React from 'react';
import OrigamiCard from '../OrigamiCard/OrigamiCard';
import './ProductsSection.css';

const ProductsSection = ({ heading, products }) => {
  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-heading">{heading}</h2>
          <p className="products-subheading">Discover our collection of handcrafted 3D origami pieces</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <OrigamiCard
              key={index}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
