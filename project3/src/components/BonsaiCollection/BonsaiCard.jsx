import './BonsaiCard.css';

export default function BonsaiCard({ name, age, price, image }) {
  return (
    <div className="bonsai-card">
      <div className="bonsai-card-image">
        <img src={image} alt={name} />
        <span className="bonsai-badge">{age} years old</span>
      </div>
      <div className="bonsai-card-content">
        <h3>{name}</h3>
        <p className="bonsai-price">${price}</p>
      </div>
    </div>
  );
}
