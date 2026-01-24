import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import CraftProcess from '../components/CraftProcess/CraftProcess';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';
import './OrigamiLanding.css';

// Dummy product data
const dummyProducts = [
  {
    name: 'Geometric Crane',
    category: 'Paper Sculptures',
    price: 45,
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a2f2a24-d2cd-4908-b750-9e714c693654/d4wvgyc-c9150963-1dbe-45b0-ac26-4e661cab8a8e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83YTJmMmEyNC1kMmNkLTQ5MDgtYjc1MC05ZTcxNGM2OTM2NTQvZDR3dmd5Yy1jOTE1MDk2My0xZGJlLTQ1YjAtYWMyNi00ZTY2MWNhYjhhOGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N5phXOE6mDSl5xeIvERf23wdB6nMBW8oEeXHWccZrhg'
  },
  {
    name: 'Elegant Lotus',
    category: 'Floral Art',
    price: 55,
    image: 'https://i.pinimg.com/1200x/8e/cd/30/8ecd300989096ca8272dff087ee70017.jpg'
  },
  {
    name: 'Dragon Model',
    category: 'Fantasy Series',
    price: 65,
    image: 'https://i.etsystatic.com/16229038/r/il/e029fa/2419091214/il_fullxfull.2419091214_hmxw.jpg'
  },
  {
    name: 'Butterfly Wings',
    category: 'Nature Inspired',
    price: 38,
    image: 'https://m.media-amazon.com/images/I/51+Vasx4kpL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Sakura Blossom',
    category: 'Japanese Art',
    price: 50,
    image: 'https://craftzone.com.au/cdn/shop/files/sd321_02_48fa_1024x1024@2x.jpg?v=1727771186'
  },
  {
    name: 'Star Fragment',
    category: 'Geometric',
    price: 42,
    image: 'https://alexandertoys.com/wp-content/uploads/2022/07/ORIGAMI_fox-1000x1000.jpg'
  }
];

// Craft process steps
const craftSteps = [
  {
    title: 'Material Selection',
    description: 'We carefully choose premium Japanese washi paper and artisan cardstock for durability and aesthetic appeal.'
  },
  {
    title: 'Design Planning',
    description: 'Each piece starts with detailed sketches and planning to ensure precision and artistic vision.'
  },
  {
    title: 'Hand Folding',
    description: 'Every fold is made by hand with precision tools, bringing the design to life.'
  },
  {
    title: 'Finishing Touch',
    description: 'Final assembly, quality checks, and careful packaging ensure each piece arrives perfect.'
  }
];

const OrigamiLanding = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="origami-landing">
      <Navbar 
        logoText="3D Origami"
        links={navLinks}
      />

      <HeroSection
        title="Handcrafted 3D Origami Art"
        subtitle="Discover the beauty of precision folding and artistic craftsmanship. Each piece tells a story of patience, creativity, and dedication to the ancient art of origami."
        buttonText="Explore Collection"
        image="https://alexandertoys.com/wp-content/uploads/2022/07/ORIGAMI_fox-1000x1000.jpg"
      />

      <AboutSection
        heading="About Our Origami Craft"
        text="At 3D Origami, we believe in the power of handmade art. Each creation is meticulously crafted using premium materials and traditional folding techniques refined over decades. Our artisans combine precision with creativity to produce stunning 3D origami pieces that celebrate the intersection of geometry and artistic expression. From vibrant colored paper to delicate folds, every origami creation is a testament to our commitment to quality and authentic craftsmanship."
      />

      <ProductsSection
        heading="Our Collection"
        products={dummyProducts}
      />

      <CraftProcess
        heading="Our Craft Process"
        steps={craftSteps}
      />

      <CTA
        text="Ready to Own a Piece of Art?"
        buttonText="Shop Now"
      />

      <Footer
        brandName="3D Origami"
        year={2024}
      />
    </div>
  );
};

export default OrigamiLanding;
