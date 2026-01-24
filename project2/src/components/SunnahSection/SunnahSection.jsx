import './SunnahSection.css';

export default function SunnahSection({ hadithText, reference }) {
  return (
    <section className="sunnah-section">
      <div className="sunnah-container">
        <div className="sunnah-content">
          <h2 className="sunnah-title">Wisdom from Hadith</h2>
          <blockquote className="hadith-quote">
            <p>{hadithText}</p>
            <footer className="hadith-reference">— {reference}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
