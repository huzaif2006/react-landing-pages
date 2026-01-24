import ProductCard from '../ProductCard/ProductCard';
import './ProductsSection.css';

export default function ProductsSection({ products }) {
  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">Our Premium Products</h2>
        <p className="products-subtitle">
          Handpicked natural ingredients for your health and wellness
        </p>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
