
import './section4.css';

// Chota component jo har treat ki details dikhayega
function TreatCard(props) {
  return (
    <div className="treat-card">
      <img src={props.image} alt={props.name} className="treat-image" />
      <div className="treat-info">
        <h3 className="treat-name">{props.name}</h3>
        <span className="treat-price">{props.price}</span>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured Treats</h2>
      
      <div className="treats-grid">
        {/* Props ke zariye data bheja ja raha hai */}
        <TreatCard 
          image="https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2021/05/Eggless-Black-forest-Pastry-recipe-1.jpg" 
          name="Puff Pastry" 
          price="$8" 
        />
        <TreatCard 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbngFb9LMcKzkCNsevK-E8EprvxXWsiSmY1w&s" 
          name="Doughnuts" 
          price="$8" 
        />
        <TreatCard 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWydE_2AAz1rAbyiQ9IrXBn_qvD2z48WFgg&s" 
          name="Brownies" 
          price="$8" 
        />
      </div>
    </section>
  );
}

export default Section4;