import './CallToAction.css';

export default function CallToAction({ text, buttonText }) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <p className="cta-text">{text}</p>
        <button className="cta-button">{buttonText}</button>
      </div>
    </section>
  );
}
