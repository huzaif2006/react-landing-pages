import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import SunnahSection from '../components/SunnahSection/SunnahSection';
import CallToAction from '../components/CallToAction/CallToAction';
import Footer from '../components/Footer/Footer';
import './TalbeenaLanding.css';

export default function TalbeenaLanding() {
  // Sample data for Navbar
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Sample data for Benefits
  const benefits = [
    {
      title: '100% Natural',
      description:
        'Our products are made with pure, natural ingredients with no artificial additives or preservatives.',
    },
    {
      title: 'Nutrient Rich',
      description:
        'Packed with essential vitamins and minerals to support your daily health and wellness needs.',
    },
    {
      title: 'Sustainably Sourced',
      description:
        'We source our ingredients ethically and sustainably from trusted local and international suppliers.',
    },
    {
      title: 'Time-Honored Formula',
      description:
        'Based on traditional recipes passed down through generations, combined with modern nutrition science.',
    },
    {
      title: 'No Preservatives',
      description:
        'Free from artificial preservatives, colors, and flavors - just pure goodness in every serving.',
    },
    {
      title: 'Energy Boost',
      description:
        'Carefully formulated to provide sustained energy throughout your day without crashes.',
    },
  ];

  // Sample data for Products
  const products = [
    {
      name: 'Talbeena Premium Blend',
      price: 14.99,
      image:
        'https://haramainfoods.com/cdn/shop/files/Chocolate_Talbeena.jpg?v=1755558790',
    },
    {
      name: 'Organic Barley Mix',
      price: 12.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW2T18mxI535Qoai_2-pB4BL85EMG-BrjUQ&s',
    },
    {
      name: 'Ancient Grains Blend',
      price: 16.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJz9yFAMNAe3m_pN1ZBJkzy-RlBwPP3VUmhA&s',
    },
    {
      name: 'Honey Enriched Formula',
      price: 18.99,
      image:
        'https://theearths.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1752922953-WhatsApp%20Image%202025-07-18%20at%203.56.30%20PM.jpeg&w=3840&q=75',
    },
    {
      name: 'Date & Grain Blend',
      price: 15.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWLQ1ZzJDvJog5mjawIDKouoq9-npNRsCvw&s',
    },
    {
      name: 'Wellness Combination',
      price: 19.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6vq8Akn2bCPgiyTxSuRDvotfe5Cb8ZgRPg&s',
    },
  ];

  return (
    <div className="talbeena-landing">
      <Navbar logoText="🌾 Talbeena Food" links={navLinks} />

      <Hero
        title="Discover Natural Health & Wellness"
        subtitle="Experience the goodness of our premium Talbeena products, crafted with natural ingredients following time-honored traditions."
        buttonText="Shop Now"
        image="https://aftabqarshi.com.pk/cdn/shop/files/3C82135C-5ECD-4225-ACDE-07484A84E626.png?v=1741012828"
      />

      <BenefitsSection benefits={benefits} />

      <ProductsSection products={products} />

      <SunnahSection
        hadithText="The best of your food is the barley. It calms the agitation of the heart and cures it, and it smoothens the belly."
        reference="Narrated by At-Tirmidhi"
      />

      <CallToAction
        text="Ready to transform your health with premium natural products?"
        buttonText="Get Started Today"
      />

      <Footer companyName="Talbeena Food" year={new Date().getFullYear()} />
    </div>
  );
}
