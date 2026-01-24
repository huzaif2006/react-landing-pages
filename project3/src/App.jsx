import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import BonsaiCollection from './components/BonsaiCollection/BonsaiCollection';
import CareTips from './components/CareTips/CareTips';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './App.css';

// Placeholder image URLs (using a service like picsum.photos)
const heroImage = 'https://cdn.shopify.com/s/files/1/0356/0076/0877/files/AdobeStock_179294033_1024x1024.jpg?v=1717144004';
const aboutImage = 'https://formnutrition.com/wp-content/uploads/2020/06/Kaya-Mooney-02-1100x675.jpg';

const bonsaiData = [
  {
    name: 'Ficus Retusa',
    age: 5,
    price: 89,
    image: 'https://vegetaldesignqc.com/cdn/shop/files/73752167-2EE8-4A3E-8036-22F5AE19C606_1200x1200.jpg?v=1715714523'
  },
  {
    name: 'Japanese Maple',
    age: 8,
    price: 129,
    image: 'https://m.media-amazon.com/images/I/717rhCfM-uL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Juniper Tree',
    age: 12,
    price: 159,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcsUlaI0zNIfdmFbHxaDJadZs05cIzicA7A&s'
  },
  {
    name: 'Chinese Elm',
    age: 6,
    price: 99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekp4pdd15Tsk1p0VNNY2Oxiil6oF-FvM5wQ&s'
  }
];

const tipsData = [
  {
    title: 'Watering',
    description: 'Water your bonsai regularly, keeping the soil moist but not waterlogged. The frequency depends on the species, climate, and season. Check the soil daily.',
    icon: '💧'
  },
  {
    title: 'Light',
    description: 'Most bonsai trees require 5-6 hours of indirect sunlight daily. Place your tree near a bright window and rotate it regularly for even growth.',
    icon: '☀️'
  },
  {
    title: 'Pruning',
    description: 'Regular pruning is essential to maintain the shape and encourage growth. Prune in spring and summer when the tree is actively growing.',
    icon: '✂️'
  },
  {
    title: 'Temperature',
    description: 'Keep your bonsai in temperatures between 60-75°F (15-24°C). Avoid placing it near heating vents or in cold drafts.',
    icon: '🌡️'
  },
  {
    title: 'Humidity',
    description: 'Most bonsai appreciate higher humidity. Mist the leaves regularly or place the tree on a humidity tray with water and pebbles.',
    icon: '💨'
  },
  {
    title: 'Fertilizing',
    description: 'Feed your bonsai with a balanced fertilizer during the growing season (spring and summer). Reduce feeding in fall and winter.',
    icon: '🌱'
  }
];

function App() {
  return (
    <>
      <Navbar 
        logoText="🌿 Bonsai Trees"
        links={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Collection', href: '#collection' },
          { label: 'Care Tips', href: '#care' },
          { label: 'Contact', href: '#contact' }
        ]}
      />
      
      <HeroSection
        title="Welcome to Bonsai Trees"
        subtitle="Discover the art and beauty of miniature trees. Each bonsai is a living masterpiece, crafted with patience and care. Bring nature's serenity into your home."
        buttonText="Explore Collection"
        image={heroImage}
      />

      <About
        heading="The Art of Bonsai"
        text="Bonsai is an ancient Japanese art form that involves growing and styling miniature trees. For over 1,000 years, bonsai enthusiasts have cultivated these living sculptures, combining horticulture with artistic expression. Our collection features carefully selected specimens that represent the beauty, balance, and harmony inherent in nature. Whether you're a seasoned collector or a beginner, we're here to help you discover the timeless appeal of bonsai trees."
        image={aboutImage}
      />

      <BonsaiCollection
        heading="Our Bonsai Collection"
        bonsaiData={bonsaiData}
      />

      <CareTips
        heading="Essential Care Tips"
        tipsData={tipsData}
      />

      <CTA
        text="Ready to start your bonsai journey?"
        buttonText="Shop Now"
      />

      <Footer
        brandName="Bonsai Trees"
        year={new Date().getFullYear()}
      />
    </>
  );
}

export default App;
