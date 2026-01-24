import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import PopularPlants from '../components/PopularPlants';
import CareGuide from '../components/CareGuide';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const RoomPlantsLanding = () => {
  // Navbar data
  const navbarLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Plants', href: '#plants' },
    { label: 'Care Guide', href: '#care' },
    { label: 'Contact', href: '#contact' },
  ];

  // Plants data
  const plantsData = [
    {
      name: 'Monstera Deliciosa',
      light: 'Bright Indirect Light',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1616694342806-431e36dd7953?w=400&h=300&fit=crop',
    },
    {
      name: 'Pothos Golden',
      light: 'Low to Bright Light',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c54?w=400&h=300&fit=crop',
    },
    {
      name: 'Snake Plant',
      light: 'Low Light Tolerant',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1620439131351-2d6329c63eb0?w=400&h=300&fit=crop',
    },
    {
      name: 'Fiddle Leaf Fig',
      light: 'Bright Indirect Light',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1578949494554-b587cbde4b09?w=400&h=300&fit=crop',
    },
    {
      name: 'Spider Plant',
      light: 'Bright Light',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1617768032884-f3a4e78a3e50?w=400&h=300&fit=crop',
    },
    {
      name: 'Peace Lily',
      light: 'Low Light',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1545181119-f3ef8ebf8e83?w=400&h=300&fit=crop',
    },
  ];

  // Care guide data
  const careItems = [
    {
      title: 'Watering',
      icon: '💧',
      description: 'Water your plants when the top inch of soil feels dry. Most plants prefer consistency over frequency.',
    },
    {
      title: 'Light',
      icon: '☀️',
      description: 'Understand your plant\'s light needs. Place near windows for bright indirect light, or away from direct sun.',
    },
    {
      title: 'Humidity',
      icon: '🌫️',
      description: 'Mist your plants or place them on pebble trays to maintain humidity levels they love.',
    },
    {
      title: 'Soil',
      icon: '🪨',
      description: 'Use well-draining soil appropriate for your plant type. Refresh soil annually for optimal growth.',
    },
    {
      title: 'Temperature',
      icon: '🌡️',
      description: 'Keep your plants in temperatures between 65-75°F. Avoid cold drafts and sudden temperature changes.',
    },
    {
      title: 'Fertilizing',
      icon: '🌿',
      description: 'Fertilize during growing season (spring & summer) monthly. Reduce frequency in fall and winter.',
    },
  ];

  return (
    <div>
      <Navbar logoText="🌿 Room Plants" links={navbarLinks} />

      <Hero
        title="Bring Nature Into Your Space"
        subtitle="Transform your home with beautiful indoor plants. Create a fresh, calm, and cozy atmosphere that reflects your style."
        buttonText="Shop Now"
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop"
      />

      <About
        heading="Why Choose Indoor Plants?"
        text="Indoor plants do more than just look beautiful. They purify the air, boost your mood, reduce stress, and add life to any room. Whether you're a plant parent or just starting your green journey, Room Plants has the perfect companion for every space and skill level. From low-maintenance succulents to lush tropical plants, discover how easy it is to create your own urban jungle."
      />

      <PopularPlants
        heading="Our Popular Collection"
        plants={plantsData}
      />

      <CareGuide
        heading="Plant Care Essentials"
        careItems={careItems}
      />

      <CTA
        text="Ready to grow your collection? Join our community of plant lovers and get exclusive tips, deals, and care guides delivered to your inbox."
        buttonText="Subscribe Today"
      />

      <Footer
        brandName="Room Plants"
        year={new Date().getFullYear()}
      />
    </div>
  );
};

export default RoomPlantsLanding;
