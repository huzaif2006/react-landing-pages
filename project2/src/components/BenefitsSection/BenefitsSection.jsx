import BenefitCard from '../BenefitCard/BenefitCard';
import './BenefitsSection.css';

export default function BenefitsSection({ benefits }) {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">Why Choose Talbeena Food?</h2>
        <p className="benefits-subtitle">
          Discover the benefits of our premium natural food products
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
