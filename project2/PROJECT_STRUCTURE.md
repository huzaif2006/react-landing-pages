# Talbeena Food Landing Page

A professional React landing page for a premium food brand built with functional components and Vanilla CSS. This project demonstrates clean, beginner-friendly code with reusable components and proper prop usage.

## 🎯 Project Features

✅ **100% React Functional Components** - No class components  
✅ **Vanilla CSS Only** - No Tailwind, Bootstrap, or UI libraries  
✅ **Reusable Components** - BenefitCard and ProductCard with props  
✅ **Responsive Design** - Mobile-friendly with Flexbox and CSS Grid  
✅ **Natural Color Palette** - Beige, olive green, and brown tones  
✅ **Professional Styling** - Clean, modern, and food-brand appropriate  

## 📁 Project Structure

```
src/
├── pages/
│   ├── TalbeenaLanding.jsx      # Main landing page component
│   └── TalbeenaLanding.css      # Page-level styling
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx           # Header with navigation links
│   │   └── Navbar.css
│   │
│   ├── Hero/
│   │   ├── Hero.jsx             # Hero section with CTA button
│   │   └── Hero.css
│   │
│   ├── BenefitCard/
│   │   ├── BenefitCard.jsx       # Reusable benefit card component
│   │   └── BenefitCard.css
│   │
│   ├── BenefitsSection/
│   │   ├── BenefitsSection.jsx   # Container for benefit cards
│   │   └── BenefitsSection.css
│   │
│   ├── ProductCard/
│   │   ├── ProductCard.jsx       # Reusable product card component
│   │   └── ProductCard.css
│   │
│   ├── ProductsSection/
│   │   ├── ProductsSection.jsx   # Container for product cards
│   │   └── ProductsSection.css
│   │
│   ├── SunnahSection/
│   │   ├── SunnahSection.jsx     # Hadith/Sunnah section
│   │   └── SunnahSection.css
│   │
│   ├── CallToAction/
│   │   ├── CallToAction.jsx      # CTA section
│   │   └── CallToAction.css
│   │
│   └── Footer/
│       ├── Footer.jsx            # Footer with links and info
│       └── Footer.css
│
├── App.jsx                       # Root component
├── App.css
├── main.jsx                      # React entry point
├── index.css                     # Global styles
└── assets/                       # Images and static files
```

## 🎨 Color Palette

- **Primary Green**: `#2d5016` (Dark olive green)
- **Secondary Beige**: `#f5deb3` (Wheat/Tan)
- **Accent Brown**: `#8b7355` (Brown)
- **Light Accent**: `#d4a574` (Tan)
- **Light Background**: `#faf8f3` (Off-white)

## 📦 Components Overview

### Navbar
**Props:**
- `logoText` - Brand name/logo text
- `links` - Array of navigation links `[{name: 'Home', href: '#home'}, ...]`

**Features:** Sticky navigation, responsive menu

### Hero
**Props:**
- `title` - Main heading
- `subtitle` - Secondary text
- `buttonText` - CTA button label
- `image` - Hero image URL

**Features:** Two-column layout with gradient background

### BenefitCard (Reusable)
**Props:**
- `title` - Benefit title
- `description` - Benefit description

**Features:** Hover animation, icon display, card styling

### BenefitsSection
**Props:**
- `benefits` - Array of benefit objects

**Features:** Grid layout, responsive columns

### ProductCard (Reusable)
**Props:**
- `name` - Product name
- `price` - Product price
- `image` - Product image URL

**Features:** Hover zoom effect, "Add to Cart" button

### ProductsSection
**Props:**
- `products` - Array of product objects

**Features:** Auto-fit grid, responsive design

### SunnahSection
**Props:**
- `hadithText` - Hadith quote text
- `reference` - Source reference

**Features:** Quote styling, gradient background

### CallToAction
**Props:**
- `text` - CTA message
- `buttonText` - Button label

**Features:** Centered layout, prominent button

### Footer
**Props:**
- `companyName` - Brand name
- `year` - Copyright year

**Features:** Multi-column layout, quick links, contact info

## 🚀 Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd project2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 💻 Usage Example

The main landing page (`TalbeenaLanding.jsx`) demonstrates how to use all components:

```jsx
<Navbar logoText="🌾 Talbeena Food" links={navLinks} />
<Hero title="..." subtitle="..." buttonText="..." image="..." />
<BenefitsSection benefits={benefits} />
<ProductsSection products={products} />
<SunnahSection hadithText="..." reference="..." />
<CallToAction text="..." buttonText="..." />
<Footer companyName="Talbeena Food" year={2024} />
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Flexbox and CSS Grid layouts
- Media queries for tablets and phones
- Touch-friendly buttons and spacing

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- Image alt text
- Clear visual hierarchy

### Performance
- Lightweight CSS (no framework)
- Optimized image sizes
- Smooth transitions and animations
- Minimal JavaScript overhead

## 🎨 Customization

### Changing Colors
Update the CSS variables in component files:
- Change `#2d5016` (primary green)
- Change `#f5deb3` (beige accent)
- Change `#8b7355` (brown)

### Adding Products
Modify the `products` array in `TalbeenaLanding.jsx`:
```jsx
const products = [
  {
    name: 'Your Product',
    price: 19.99,
    image: 'image-url',
  },
  // ...
];
```

### Adding Benefits
Modify the `benefits` array in `TalbeenaLanding.jsx`:
```jsx
const benefits = [
  {
    title: 'Your Benefit',
    description: 'Benefit description',
  },
  // ...
];
```

## 📱 Responsive Breakpoints

- **Desktop**: Full layout
- **Tablet** (max-width: 768px): Adjusted font sizes, single column for hero
- **Mobile**: Stacked layouts, reduced padding/margins

## 🔧 Technology Stack

- **React 18+** - UI library with functional components
- **Vite** - Build tool and dev server
- **Vanilla CSS** - All styling done with pure CSS
- **JavaScript ES6+** - Modern JavaScript syntax

## 📝 Component Props Summary

| Component | Props | Required |
|-----------|-------|----------|
| Navbar | logoText, links | Yes |
| Hero | title, subtitle, buttonText, image | Yes |
| BenefitCard | title, description | Yes |
| BenefitsSection | benefits | Yes |
| ProductCard | name, price, image | Yes |
| ProductsSection | products | Yes |
| SunnahSection | hadithText, reference | Yes |
| CallToAction | text, buttonText | Yes |
| Footer | companyName, year | Yes |

## ✨ Best Practices Used

✅ Component composition and reusability  
✅ Proper prop passing and validation mindset  
✅ Separate CSS files per component  
✅ Clean, readable, beginner-friendly code  
✅ Semantic HTML structure  
✅ Mobile-first responsive design  
✅ Meaningful class names  
✅ Consistent spacing and typography  

## 🎓 Learning Outcomes

This project teaches:
- Building functional React components
- Component composition and reusability
- Props and component communication
- CSS Grid and Flexbox layouts
- Responsive web design
- Vanilla CSS best practices
- Professional code organization

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for learning and professional development**
