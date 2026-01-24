import TipCard from './TipCard';
import './CareTips.css';

export default function CareTips({ heading, tipsData }) {
  return (
    <section className="care-tips">
      <div className="care-tips-container">
        <h2>{heading}</h2>
        <div className="tips-grid">
          {tipsData.map((tip, index) => (
            <TipCard
              key={index}
              title={tip.title}
              description={tip.description}
              icon={tip.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
