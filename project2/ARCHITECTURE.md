# 🌾 Talbeena Food - Architecture Diagram

## Component Hierarchy

```
App.jsx
  └── TalbeenaLanding.jsx (Main Page)
      ├── Navbar (sticky)
      │   └── Navigation Links Array
      │
      ├── Hero Section
      │   ├── Title, Subtitle
      │   ├── CTA Button
      │   └── Hero Image
      │
      ├── Benefits Section (Grid Container)
      │   ├── BenefitCard #1
      │   │   ├── Icon (✓)
      │   │   ├── Title
      │   │   └── Description
      │   ├── BenefitCard #2
      │   ├── BenefitCard #3
      │   ├── BenefitCard #4
      │   ├── BenefitCard #5
      │   └── BenefitCard #6
      │
      ├── Products Section (Grid Container)
      │   ├── ProductCard #1
      │   │   ├── Product Image
      │   │   ├── Product Name
      │   │   ├── Price
      │   │   └── "Add to Cart" Button
      │   ├── ProductCard #2
      │   ├── ProductCard #3
      │   ├── ProductCard #4
      │   ├── ProductCard #5
      │   └── ProductCard #6
      │
      ├── Sunnah Section (Hadith Quote)
      │   ├── Title
      │   ├── Hadith Text
      │   └── Reference
      │
      ├── Call To Action
      │   ├── Message Text
      │   └── CTA Button
      │
      └── Footer
          ├── Company Info
          ├── Quick Links
          ├── Contact Details
          └── Copyright
```

---

## Data Flow Diagram

```
TalbeenaLanding.jsx (Data Source)
│
├── navLinks Array (5 items)
│   └─→ Navbar Component
│       └─→ Renders Links via .map()
│
├── benefits Array (6 items)
│   └─→ BenefitsSection Component
│       └─→ Maps to BenefitCard Components (6 cards)
│           └─→ Each card receives: title, description
│
├── products Array (6 items)
│   └─→ ProductsSection Component
│       └─→ Maps to ProductCard Components (6 cards)
│           └─→ Each card receives: name, price, image
│
├── hadithText + reference
│   └─→ SunnahSection Component
│
├── ctaText + ctaButtonText
│   └─→ CallToAction Component
│
└── companyName + year
    └─→ Footer Component
```

---

## File Organization

```
src/
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx ────────┐
│   │   └── Navbar.css         │
│   │                           │
│   ├── Hero/                   │
│   │   ├── Hero.jsx ───────────┤
│   │   └── Hero.css            │
│   │                           │
│   ├── BenefitCard/            │
│   │   ├── BenefitCard.jsx ────┤
│   │   └── BenefitCard.css     │
│   │                           │
│   ├── BenefitsSection/        │
│   │   ├── BenefitsSection.jsx ┼─→ Used by TalbeenaLanding.jsx
│   │   └── BenefitsSection.css │
│   │                           │
│   ├── ProductCard/            │
│   │   ├── ProductCard.jsx ────┤
│   │   └── ProductCard.css     │
│   │                           │
│   ├── ProductsSection/        │
│   │   ├── ProductsSection.jsx ┤
│   │   └── ProductsSection.css │
│   │                           │
│   ├── SunnahSection/          │
│   │   ├── SunnahSection.jsx ──┤
│   │   └── SunnahSection.css   │
│   │                           │
│   ├── CallToAction/           │
│   │   ├── CallToAction.jsx ───┤
│   │   └── CallToAction.css    │
│   │                           │
│   └── Footer/                 │
│       ├── Footer.jsx ─────────┤
│       └── Footer.css          │
│
├── pages/
│   ├── TalbeenaLanding.jsx ◄──────┘
│   └── TalbeenaLanding.css
│
├── App.jsx (imports TalbeenaLanding)
├── App.css
├── main.jsx (entry point)
└── index.css (global styles)
```

---

## CSS Cascade

```
Global Styles (index.css)
    │
    ├─→ Reset & defaults
    ├─→ Typography
    ├─→ Color scheme
    └─→ Responsive variables

Component Styles (*.css files)
    │
    ├─→ Navbar.css (0-70 lines)
    ├─→ Hero.css (0-90 lines)
    ├─→ BenefitCard.css (0-80 lines)
    ├─→ BenefitsSection.css (0-35 lines)
    ├─→ ProductCard.css (0-90 lines)
    ├─→ ProductsSection.css (0-35 lines)
    ├─→ SunnahSection.css (0-85 lines)
    ├─→ CallToAction.css (0-65 lines)
    ├─→ Footer.css (0-95 lines)
    └─→ TalbeenaLanding.css (0-10 lines)

Page Styles (App.css)
    └─→ Root container styling
```

---

## Color Theme Application

```
Primary Color (#2d5016)
  ├─→ Navbar background
  ├─→ Headings (h1, h2, h3)
  ├─→ Buttons backgrounds
  ├─→ Icons & accents
  └─→ Footer background

Accent Color (#f5deb3)
  ├─→ Navbar text
  ├─→ Button text
  ├─→ Sunnah section text
  ├─→ Footer text
  └─→ Hero gradient background

Secondary Brown (#8b7355)
  ├─→ Body text
  ├─→ Subtitles
  ├─→ Sunnah section gradient
  └─→ Footer dividers

Tertiary Tan (#d4a574)
  ├─→ Link hovers
  ├─→ Border accents
  ├─→ Button hovers
  └─→ Product prices

Background Colors
  ├─→ #faf8f3 (Light off-white for sections)
  ├─→ #fff9f0 (Very light cream for cards)
  └─→ #ffffff (White for product cards)
```

---

## Responsive Breakpoint Logic

```
Desktop (1200px+)
├─→ Full 3-column grids
├─→ Hero: 2-column layout
├─→ Full font sizes
├─→ Maximum padding
└─→ All features visible

Tablet (768px - 1199px)
├─→ 2-column auto-fit grids
├─→ Hero: 1-column stack
├─→ 90% font sizes
├─→ Medium padding
└─→ Touch-friendly

Mobile (<768px)
├─→ 1-column stacked layout
├─→ Hero: 1-column stack
├─→ 80% font sizes
├─→ Minimal padding
└─→ Large touch targets
```

---

## Event Flow

```
User Interaction
    │
    ├─→ Navbar
    │   └─→ Anchor links (scroll behavior)
    │
    ├─→ Hero Button
    │   └─→ Hover animation
    │
    ├─→ Benefit Cards
    │   └─→ Hover lift animation
    │
    ├─→ Product Cards
    │   ├─→ Image hover zoom
    │   ├─→ Button hover effects
    │   └─→ Hover lift animation
    │
    ├─→ CTA Button
    │   └─→ Hover animation + lift
    │
    └─→ Footer Links
        └─→ Hover color change
```

---

## Performance Optimization

```
Load Time Optimization
├─→ No external UI libraries
├─→ Lightweight CSS (~640 lines total)
├─→ Minimal JavaScript
├─→ External image URLs (CDN hosted)
└─→ Responsive images

Runtime Optimization
├─→ Smooth CSS transitions (0.3s)
├─→ No heavy JavaScript
├─→ Efficient .map() functions
├─→ CSS Grid auto-fit
└─→ No unnecessary re-renders

Deployment Optimization
├─→ Vite build system
├─→ Production build compression
├─→ Code splitting ready
└─→ Tree-shaking enabled
```

---

## Development Workflow

```
Development Environment
    │
    ├─→ npm install (dependencies)
    ├─→ npm run dev (Vite dev server)
    ├─→ Hot Module Replacement (HMR)
    ├─→ ESLint checking
    └─→ Browser auto-refresh

Production Build
    │
    ├─→ npm run build
    ├─→ Minified CSS
    ├─→ Optimized JavaScript
    ├─→ dist/ folder generated
    └─→ Ready to deploy

Deployment Options
    │
    ├─→ Netlify (free, easy)
    ├─→ Vercel (optimized for React)
    ├─→ GitHub Pages (free)
    ├─→ Traditional hosting
    └─→ Docker containerization
```

---

## Component Lifecycle

```
Initial Load
├─→ App.jsx loads
├─→ TalbeenaLanding.jsx renders
├─→ All components mount
├─→ CSS files load
└─→ Page visible

User Interaction
├─→ Hover effects trigger
├─→ CSS transitions play
├─→ No state updates needed
└─→ Pure functional rendering

Navigation
├─→ Anchor links work
├─→ Smooth scroll enabled
├─→ No page reload
└─→ SPA experience
```

---

## Props Flow Map

```
TalbeenaLanding
│
├─→ Navbar
│   ├─→ logoText: "🌾 Talbeena Food"
│   └─→ links: [{name: '...', href: '...'}]
│
├─→ Hero
│   ├─→ title: "Discover Natural Health..."
│   ├─→ subtitle: "Experience the goodness..."
│   ├─→ buttonText: "Shop Now"
│   └─→ image: "https://image-url.jpg"
│
├─→ BenefitsSection
│   └─→ benefits: [{title: '...', description: '...'}]
│       └─→ Maps to BenefitCard × 6
│           ├─→ title
│           └─→ description
│
├─→ ProductsSection
│   └─→ products: [{name: '...', price: 0, image: '...'}]
│       └─→ Maps to ProductCard × 6
│           ├─→ name
│           ├─→ price
│           └─→ image
│
├─→ SunnahSection
│   ├─→ hadithText: "The best of your food..."
│   └─→ reference: "Narrated by At-Tirmidhi"
│
├─→ CallToAction
│   ├─→ text: "Ready to transform..."
│   └─→ buttonText: "Get Started Today"
│
└─→ Footer
    ├─→ companyName: "Talbeena Food"
    └─→ year: 2024 (dynamic)
```

---

## Summary Statistics

```
Components:         9 reusable components
Reusable:           2 (BenefitCard, ProductCard)
CSS Scopes:         9 separate CSS files
Props Total:        20+ props across all components
Sample Data:        18 items (5+6+6+1)
Color Palette:      7 colors
Responsive Points:  2 breakpoints
Lines of Code:      ~1,000 (React + CSS)
Documentation:      ~2,500 lines (8 guides)
```

---

**Architecture is clean, scalable, and beginner-friendly! 🎉**
