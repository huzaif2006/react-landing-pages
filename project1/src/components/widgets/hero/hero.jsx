
import Navbar from '../../layout/navbar';
import Button from '../../shared/button';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-container">

      {/* overlay */}
      <div className='overlay'></div>


      {/* Aapka Navbar yahan aa jayega */}
      <Navbar />

      <div className="hero-content">
        <div className="hero-text">
          <p className="subtitle">Delicious Cafe</p>
          <h1 className="main-title">Sweet Treats, <br /> Perfect Eats</h1>
          
          <div className="hero-action">
            {/* Aapka Shop Now button yahan use ho raha hai */}
            <Button text="Shop Now" type="primary" />
      </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;