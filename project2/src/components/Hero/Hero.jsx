import './Hero.css';

export default function Hero({ title, subtitle, buttonText, image }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-button">{buttonText}</button>
        </div>
        <div className="hero-image">
          <img src={image} alt="Hero" />
        </div>
      </div>
    </section>
  );
}
