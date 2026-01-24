import './About.css';

export default function About({ heading, text, image }) {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={image} alt="About Bonsai" />
        </div>
        <div className="about-content">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}
