import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Products from '../components/Products/Products';
import Benefits from '../components/Benefits/Benefits';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';
import './HoneyLanding.css';

const HoneyLanding = () => {
  // Navbar data
  const navLinks = ['About', 'Products', 'Benefits', 'Contact'];

  // Hero data
  const heroData = {
    title: 'Pure Honey, Straight from Nature',
    subtitle: 'Taste the authentic flavor of raw, organic honey sourced from sustainable apiaries around the world. No additives, no processing—just pure golden sweetness.',
    buttonText: 'Shop Now',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/048/773/864/small/honey-and-honeycomb-on-transparent-background-png.png'
  };

  // About data
  const aboutData = {
    heading: 'Why Raw Honey Matters',
    text: 'Our Pure Honey is harvested fresh and bottled immediately to preserve all the natural enzymes, antioxidants, and nutrients. Unlike processed honey, our raw varieties maintain their complete nutritional profile and authentic taste. Every jar tells a story of dedicated beekeepers and thriving bee colonies.'
  };

  // Products data
  const productsData = [
    {
      name: 'Wildflower Honey',
      type: 'Raw & Organic',
      price: '12.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-3tA3ML8v4AZTrpNhUusxrTYV_3q8EZI4Q&s'
    },
    {
      name: 'Manuka Honey',
      type: 'Premium Grade',
      price: '24.99',
      image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/man/man00158/l/80.jpg'
    },
    {
      name: 'Acacia Honey',
      type: 'Light & Delicate',
      price: '15.99',
      image: 'https://honeyworldpk.com/wp-content/uploads/2025/12/Raw-Sunflower-Honey-500Gram-Jar-570x684.jpg'
    },
    {
      name: 'Buckwheat Honey',
      type: 'Dark & Rich',
      price: '14.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmdJ2iOETAWt9i5U-HnTmkpJku1Itq2n4IQ&s'
    },
    {
      name: 'Clover Honey',
      type: 'Classic Flavor',
      price: '11.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DcPKcHXyPfbTK_QIy1O8euGCRfSHVHFs9w&s'
    },
    {
      name: 'Infused Honey Set',
      type: 'Limited Edition',
      price: '29.99',
      image: 'https://lhr.greenvalley.pk/cdn/shop/files/sue-bee-clover-honey-1.13kg_dc55197e-a75c-43e9-b792-09fea0f5b96e.webp?v=1754899187'
    }
  ];

  // Benefits data
  const benefitsData = [
    {
      title: 'Natural Energy Boost',
      description: 'Raw honey is packed with natural glucose and fructose, providing sustained energy throughout your day without crashes.',
      icon: '⚡'
    },
    {
      title: 'Immune Support',
      description: 'Rich in antioxidants and antimicrobial properties that naturally support your immune system and overall wellness.',
      icon: '🛡️'
    },
    {
      title: 'Soothing & Calming',
      description: 'A spoonful of honey can soothe throat irritation and promote peaceful sleep. A natural remedy trusted for generations.',
      icon: '🌙'
    },
    {
      title: 'Digestive Health',
      description: 'Contains enzymes and prebiotics that support healthy digestion and promote beneficial gut bacteria growth.',
      icon: '🌿'
    },
    {
      title: 'Skin & Beauty',
      description: 'Honey\'s natural moisturizing and antibacterial properties make it perfect for skincare and hair treatments.',
      icon: '✨'
    },
    {
      title: 'Pure & Unprocessed',
      description: 'No heating, no filtering, no additives. Just raw honey the way nature intended—completely natural.',
      icon: '🍯'
    }
  ];

  // CTA data
  const ctaData = {
    text: 'Join Thousands of Happy Customers',
    buttonText: 'Start Your Order Today'
  };

  // Footer data
  const footerData = {
    brandName: 'Pure Honey',
    year: new Date().getFullYear()
  };

  return (
    <div className="honey-landing">
      <Navbar logoText="Pure Honey" links={navLinks} />
      <Hero {...heroData} />
      <About {...aboutData} />
      <Products products={productsData} />
      <Benefits benefits={benefitsData} />
      <CTA {...ctaData} />
      <Footer {...footerData} />
    </div>
  );
};

export default HoneyLanding;
