import './ProductCard.css';

export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <button className="product-button">Add to Cart</button>
      </div>
    </div>
  );
}
