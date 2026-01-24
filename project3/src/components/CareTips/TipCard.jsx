import './TipCard.css';

export default function TipCard({ title, description, icon }) {
  return (
    <div className="tip-card">
      {icon && <div className="tip-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
