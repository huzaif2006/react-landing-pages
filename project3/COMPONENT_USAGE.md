// Example: How to use the Bonsai Trees components

import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import BonsaiCollection from './components/BonsaiCollection/BonsaiCollection';
import CareTips from './components/CareTips/CareTips';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

// ============================================
// NAVBAR EXAMPLE
// ============================================
<Navbar 
  logoText="🌿 Your Brand"
  links={[
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' }
  ]}
/>

// ============================================
// HERO SECTION EXAMPLE
// ============================================
<HeroSection
  title="Discover Beautiful Bonsai Trees"
  subtitle="Handcrafted miniature trees that bring nature's serenity to your space."
  buttonText="Shop Now"
  image="https://example.com/hero-image.jpg"
/>

// ============================================
// ABOUT SECTION EXAMPLE
// ============================================
<About
  heading="The Art of Bonsai"
  text="Bonsai is an ancient Japanese art form that combines horticulture with artistic expression. Each tree is a living sculpture, representing balance and harmony with nature."
  image="https://example.com/about-image.jpg"
/>

// ============================================
// BONSAI COLLECTION EXAMPLE
// ============================================
<BonsaiCollection
  heading="Our Curated Collection"
  bonsaiData={[
    {
      name: 'Japanese Maple',
      age: 8,
      price: 129,
      image: 'https://example.com/maple.jpg'
    },
    {
      name: 'Ficus Retusa',
      age: 5,
      price: 89,
      image: 'https://example.com/ficus.jpg'
    },
    {
      name: 'Juniper Tree',
      age: 12,
      price: 159,
      image: 'https://example.com/juniper.jpg'
    },
    {
      name: 'Chinese Elm',
      age: 6,
      price: 99,
      image: 'https://example.com/elm.jpg'
    }
  ]}
/>

// ============================================
// CARE TIPS EXAMPLE
// ============================================
<CareTips
  heading="Essential Care Tips"
  tipsData={[
    {
      title: 'Watering',
      description: 'Water regularly, keeping soil moist but not waterlogged.',
      icon: '💧'
    },
    {
      title: 'Sunlight',
      description: 'Provide 5-6 hours of indirect sunlight daily.',
      icon: '☀️'
    },
    {
      title: 'Pruning',
      description: 'Regular pruning maintains shape and encourages growth.',
      icon: '✂️'
    },
    {
      title: 'Temperature',
      description: 'Keep in temperatures between 60-75°F (15-24°C).',
      icon: '🌡️'
    },
    {
      title: 'Humidity',
      description: 'Mist leaves regularly or use a humidity tray.',
      icon: '💨'
    },
    {
      title: 'Fertilizing',
      description: 'Feed during growing season with balanced fertilizer.',
      icon: '🌱'
    }
  ]}
/>

// ============================================
// CTA (CALL-TO-ACTION) EXAMPLE
// ============================================
<CTA
  text="Ready to transform your space with a bonsai tree?"
  buttonText="Start Your Collection"
/>

// ============================================
// FOOTER EXAMPLE
// ============================================
<Footer
  brandName="Bonsai Trees"
  year={new Date().getFullYear()}
/>

// ============================================
// COMPONENT CUSTOMIZATION GUIDE
// ============================================

/*
 * NAVBAR
 * ------
 * Props:
 *   - logoText (string): Your brand name or logo text
 *   - links (array): Array of link objects { label: string, href: string }
 *
 * Features:
 *   - Transparent background that turns solid on scroll
 *   - Responsive design for mobile
 *   - Smooth transitions
 *
 * Styling Customization:
 *   - Edit src/components/Navbar/Navbar.css
 *   - Change padding, colors, font-sizes
 *   - Adjust scroll threshold (currently 10px)
 */

/*
 * HERO SECTION
 * -----------
 * Props:
 *   - title (string): Main heading
 *   - subtitle (string): Subheading/description
 *   - buttonText (string): CTA button label
 *   - image (string): Image URL
 *
 * Features:
 *   - Full viewport height
 *   - Gradient overlay
 *   - Flexbox layout
 *   - Slide-in animations
 *   - Responsive two-column → single column on mobile
 *
 * Image Size Tips:
 *   - Aspect ratio: 1:1 (square) works well
 *   - Min width: 500px recommended
 *   - Format: JPG or WebP for performance
 */

/*
 * ABOUT SECTION
 * -----------
 * Props:
 *   - heading (string): Section title
 *   - text (string): Body text content
 *   - image (string): Image URL
 *
 * Features:
 *   - Two-column layout (image + text)
 *   - Fade-in animations
 *   - Light green background
 *   - Responsive layout
 *
 * Content Tips:
 *   - Keep heading under 60 characters
 *   - Use multiple paragraphs separated by "\n\n"
 *   - Keep text scannable with good line-height
 */

/*
 * BONSAI COLLECTION
 * ----------------
 * Props:
 *   - heading (string): Section title
 *   - bonsaiData (array): Array of bonsai objects
 *     - name (string): Bonsai type/name
 *     - age (number): Years old
 *     - price (number): Price in dollars
 *     - image (string): Image URL
 *
 * Features:
 *   - Responsive grid (4 cols → 2 cols → 1 col)
 *   - Hover elevation effect
 *   - Age badge overlay
 *   - Image scale animation on hover
 *
 * Grid Behavior:
 *   - Desktop (1200px+): 4 columns
 *   - Tablet (768-1024px): 2 columns
 *   - Mobile (<768px): 1 column
 */

/*
 * CARE TIPS
 * --------
 * Props:
 *   - heading (string): Section title
 *   - tipsData (array): Array of tip objects
 *     - title (string): Tip heading
 *     - description (string): Tip content
 *     - icon (string): Emoji icon
 *
 * Features:
 *   - Cards with left border
 *   - Emoji icons
 *   - Hover effects
 *   - Responsive grid
 *
 * Icon Options:
 *   - Use any emoji: 💧 💧 ☀️ ✂️ 🌡️ 💨 🌱 🌿 🍃 ✨ 🏔️ 🌸
 *   - Or add custom icons (SVG, font-icons)
 */

/*
 * CTA (CALL-TO-ACTION)
 * ------------------
 * Props:
 *   - text (string): Main message
 *   - buttonText (string): Button label
 *
 * Features:
 *   - Gradient background
 *   - Centered layout
 *   - Full-width section
 *   - Prominent button
 *
 * Best Practices:
 *   - Keep message concise
 *   - Use action-oriented button text
 *   - Test button placement on mobile
 */

/*
 * FOOTER
 * ------
 * Props:
 *   - brandName (string): Your brand/company name
 *   - year (number): Current year (use new Date().getFullYear())
 *
 * Features:
 *   - Dark background
 *   - Copyright notice
 *   - Tagline
 *   - Simple elegant design
 *
 * Customization:
 *   - Edit text in Footer.jsx
 *   - Add more links or social media
 *   - Adjust colors in Footer.css
 */

// ============================================
// STYLING VARIABLES
// ============================================

/*
 * Edit these in src/index.css :root selector
 *
 * :root {
 *   --primary-green: #2f5d50;        // Main brand color
 *   --light-green: #e6f2ee;          // Light accent
 *   --earth-brown: #8b6f4e;          // Secondary color
 *   --off-white: #f9f9f7;            // Background
 *   --text-dark: #2c2c2c;            // Primary text
 *   --text-light: #666666;           // Secondary text
 *   --shadow: 0 4px 12px rgba(...);  // Default shadow
 *   --shadow-hover: 0 8px 20px rgba(...); // Hover shadow
 * }
 */

// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================

/*
 * Mobile: < 768px
 *   - Single column layouts
 *   - Larger touch targets
 *   - Reduced padding
 *
 * Tablet: 768px - 1024px
 *   - Two column grids
 *   - Medium padding
 *   - Adjusted font sizes
 *
 * Desktop: 1200px+
 *   - Multi-column layouts
 *   - Full spacing
 *   - Large typography
 */
