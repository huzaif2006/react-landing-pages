import BonsaiCard from './BonsaiCard';
import './BonsaiCollection.css';

export default function BonsaiCollection({ heading, bonsaiData }) {
  return (
    <section className="bonsai-collection">
      <div className="bonsai-collection-container">
        <h2>{heading}</h2>
        <div className="bonsai-grid">
          {bonsaiData.map((item, index) => (
            <BonsaiCard
              key={index}
              name={item.name}
              age={item.age}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
