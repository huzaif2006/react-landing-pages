import './CTA.css';

export default function CTA({ text, buttonText }) {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>{text}</h2>
        <button className="cta-button">{buttonText}</button>
      </div>
    </section>
  );
}
