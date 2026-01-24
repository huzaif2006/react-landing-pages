# Pure Honey Components Reference

Complete reference for all components, their props, and how to use them.

---

## 📋 Component Inventory

| Component | Type | Props | File |
|-----------|------|-------|------|
| Navbar | Layout | logoText, links | `components/Navbar/Navbar.jsx` |
| Hero | Section | title, subtitle, buttonText, image | `components/Hero/Hero.jsx` |
| About | Section | heading, text | `components/About/About.jsx` |
| Products | Container | products (array) | `components/Products/Products.jsx` |
| HoneyCard | Card | name, type, price, image | `components/Products/HoneyCard/HoneyCard.jsx` |
| Benefits | Container | benefits (array) | `components/Benefits/Benefits.jsx` |
| BenefitCard | Card | title, description, icon | `components/Benefits/BenefitCard/BenefitCard.jsx` |
| CTA | Section | text, buttonText | `components/CTA/CTA.jsx` |
| Footer | Layout | brandName, year | `components/Footer/Footer.jsx` |

---

## 🔷 Navbar Component

**Location:** `src/components/Navbar/Navbar.jsx`

**Props:**
```javascript
{
  logoText: string,    // Brand name displayed
  links: array         // Navigation link labels
}
```

**Example Usage:**
```jsx
<Navbar 
  logoText="Pure Honey" 
  links={['About', 'Products', 'Benefits', 'Contact']} 
/>
```

**Features:**
- Sticky positioning on scroll
- Mobile hamburger menu
- Brand logo with emoji
- Smooth hover effects
- Responsive to 768px breakpoint

**Styling Classes:**
- `.navbar` - Main container
- `.navbar-logo` - Logo area
- `.nav-menu` - Navigation links
- `.nav-link` - Individual links
- `.hamburger` - Mobile menu button

---

## 🔶 Hero Component

**Location:** `src/components/Hero/Hero.jsx`

**Props:**
```javascript
{
  title: string,       // Main headline
  subtitle: string,    // Descriptive text
  buttonText: string,  // CTA button label
  image: string        // Image URL
}
```

**Example Usage:**
```jsx
<Hero 
  title="Pure Honey, Straight from Nature"
  subtitle="Taste the authentic flavor of raw, organic honey..."
  buttonText="Shop Now"
  image="https://via.placeholder.com/400x400?text=Honey+Jar"
/>
```

**Features:**
- Two-column responsive layout
- Floating image animation
- Gradient button with hover effect
- Large typography
- Hero section background

**Styling Classes:**
- `.hero` - Section container
- `.hero-title` - Main headline
- `.hero-subtitle` - Description
- `.hero-button` - CTA button
- `.hero-image` - Image container

---

## 🌾 About Component

**Location:** `src/components/About/About.jsx`

**Props:**
```javascript
{
  heading: string,  // Section title
  text: string      // Description text
}
```

**Example Usage:**
```jsx
<About 
  heading="Why Raw Honey Matters"
  text="Our Pure Honey is harvested fresh and bottled immediately..."
/>
```

**Features:**
- Centered content layout
- Three feature cards (hardcoded: Organic, Pure, Bee-Friendly)
- Hover lift animations
- Icon badges
- Responsive grid

**Styling Classes:**
- `.about` - Section container
- `.about-heading` - Title
- `.about-text` - Description
- `.features` - Features grid
- `.feature-item` - Individual feature card

---

## 🏪 Products Component (Container)

**Location:** `src/components/Products/Products.jsx`

**Props:**
```javascript
{
  products: array // Array of product objects
}
```

**Product Object Structure:**
```javascript
{
  name: string,    // Product name
  type: string,    // Product type/variety
  price: string,   // Price (e.g., "12.99")
  image: string    // Product image URL
}
```

**Example Usage:**
```jsx
const products = [
  {
    name: 'Wildflower Honey',
    type: 'Raw & Organic',
    price: '12.99',
    image: 'https://via.placeholder.com/200x200?text=Wildflower'
  }
];

<Products products={products} />
```

**Features:**
- Responsive grid layout
- Auto-fit columns
- Maps over products array
- Renders HoneyCard for each product

**Styling Classes:**
- `.products` - Section container
- `.products-grid` - Product grid
- `.products-heading` - Title
- `.products-subtitle` - Subtitle

---

## 🍯 HoneyCard Component (Reusable)

**Location:** `src/components/Products/HoneyCard/HoneyCard.jsx`

**Props:**
```javascript
{
  name: string,   // Product name
  type: string,   // Product type (e.g., "Raw & Organic")
  price: string,  // Price in USD
  image: string   // Product image URL
}
```

**Example Usage:**
```jsx
<HoneyCard 
  name="Wildflower Honey"
  type="Raw & Organic"
  price="12.99"
  image="https://..."
/>
```

**Features:**
- Product image with background
- Type badge
- Product name and type display
- "Add to Cart" button
- Hover scale and shadow effects
- Price display

**Styling Classes:**
- `.honey-card` - Main card
- `.card-image` - Product image
- `.card-badge` - Type badge
- `.card-name` - Product name
- `.card-price` - Price display
- `.card-button` - Add to cart button

---

## 💪 Benefits Component (Container)

**Location:** `src/components/Benefits/Benefits.jsx`

**Props:**
```javascript
{
  benefits: array // Array of benefit objects
}
```

**Benefit Object Structure:**
```javascript
{
  title: string,       // Benefit title
  description: string, // Benefit description
  icon: string         // Icon/emoji
}
```

**Example Usage:**
```jsx
const benefits = [
  {
    title: 'Natural Energy Boost',
    description: 'Raw honey is packed with glucose and fructose...',
    icon: '⚡'
  }
];

<Benefits benefits={benefits} />
```

**Features:**
- Responsive grid layout
- 6 benefit cards displayed
- Maps over benefits array
- Renders BenefitCard for each benefit

**Styling Classes:**
- `.benefits` - Section container
- `.benefits-grid` - Benefits grid
- `.benefits-heading` - Title
- `.benefits-subtitle` - Subtitle

---

## ⭐ BenefitCard Component (Reusable)

**Location:** `src/components/Benefits/BenefitCard/BenefitCard.jsx`

**Props:**
```javascript
{
  title: string,       // Benefit title
  description: string, // Benefit description
  icon: string         // Icon or emoji
}
```

**Example Usage:**
```jsx
<BenefitCard 
  title="Natural Energy Boost"
  description="Raw honey provides sustained energy..."
  icon="⚡"
/>
```

**Features:**
- Icon display (emoji)
- Title and description
- Hover top-border effect
- Centered layout
- Shadow on hover

**Styling Classes:**
- `.benefit-card` - Main card
- `.benefit-icon` - Icon display
- `.benefit-title` - Title
- `.benefit-description` - Description

---

## 📢 CTA Component

**Location:** `src/components/CTA/CTA.jsx`

**Props:**
```javascript
{
  text: string,      // Main message
  buttonText: string // Button label
}
```

**Example Usage:**
```jsx
<CTA 
  text="Join Thousands of Happy Customers"
  buttonText="Start Your Order Today"
/>
```

**Features:**
- Full-width dark section
- Large typography
- Prominent gradient button
- Strong contrast design
- Responsive padding

**Styling Classes:**
- `.cta` - Section container
- `.cta-text` - Main message
- `.cta-button` - CTA button

---

## 🔗 Footer Component

**Location:** `src/components/Footer/Footer.jsx`

**Props:**
```javascript
{
  brandName: string, // Company/brand name
  year: number       // Copyright year
}
```

**Example Usage:**
```jsx
<Footer 
  brandName="Pure Honey"
  year={2026}
/>
```

**Features:**
- Brand section with description
- Multiple link columns
- Quick links section
- Contact info section
- Social media links
- Auto-generated copyright with year
- Multi-column responsive layout

**Hardcoded Sections:**
- Quick Links: About Us, Products, Benefits
- Contact: Email, Phone, Address
- Social: Facebook, Instagram, Twitter

**Styling Classes:**
- `.footer` - Main container
- `.footer-brand` - Brand section
- `.footer-links` - Links container
- `.footer-column` - Link column
- `.footer-bottom` - Copyright section

---

## 🔄 Component Hierarchy

```
HoneyLanding
├── Navbar
├── Hero
├── About
├── Products
│   └── HoneyCard (mapped)
│       ├── Image
│       ├── Badge
│       ├── Name/Type
│       └── Button
├── Benefits
│   └── BenefitCard (mapped)
│       ├── Icon
│       ├── Title
│       └── Description
├── CTA
└── Footer
    ├── Brand
    ├── Links
    └── Copyright
```

---

## 📦 Data Structure in HoneyLanding.jsx

```jsx
// Navigation
const navLinks = ['About', 'Products', 'Benefits', 'Contact'];

// Hero
const heroData = {
  title: '...',
  subtitle: '...',
  buttonText: '...',
  image: '...'
};

// About
const aboutData = {
  heading: '...',
  text: '...'
};

// Products
const productsData = [
  { name: '...', type: '...', price: '...', image: '...' },
  // ... more products
];

// Benefits
const benefitsData = [
  { title: '...', description: '...', icon: '...' },
  // ... more benefits
];

// CTA
const ctaData = {
  text: '...',
  buttonText: '...'
};

// Footer
const footerData = {
  brandName: '...',
  year: 2026
};
```

---

## 🎨 CSS Class Naming Convention

All CSS classes follow a simple, consistent pattern:

```
.component-name { }          /* Main component */
.component-section { }       /* Sub-sections */
.component-element { }       /* Specific elements */
```

Examples:
- `.navbar` → main nav
- `.navbar-logo` → logo inside nav
- `.nav-link` → link inside nav

---

## 🔌 Passing Props Example

```jsx
// In HoneyLanding.jsx
<HoneyCard 
  name={product.name}
  type={product.type}
  price={product.price}
  image={product.image}
/>

// Or using spread operator
<HoneyCard {...product} />
```

---

## 🚀 Adding New Data

### Add New Product
```jsx
productsData.push({
  name: 'New Honey',
  type: 'Type Here',
  price: '19.99',
  image: 'image-url'
});
```

### Add New Benefit
```jsx
benefitsData.push({
  title: 'New Benefit',
  description: 'Description here',
  icon: '🎯'
});
```

### Add New Nav Link
```jsx
navLinks.push('New Link');
```

---

## 📊 Props Type Reference

| Type | Example | Used In |
|------|---------|---------|
| string | "Hello" | All text content |
| array | [1, 2, 3] | Products, Benefits, Links |
| object | { a: 1 } | heroData, aboutData |
| number | 2026 | Year in footer |
| url | "https://..." | Images |

---

## ✅ Component Checklist

- [x] Navbar - Navigation with mobile menu
- [x] Hero - Landing section
- [x] About - Information section
- [x] Products - Product grid
- [x] HoneyCard - Product card component
- [x] Benefits - Benefits section
- [x] BenefitCard - Benefit card component
- [x] CTA - Call-to-action
- [x] Footer - Footer with links

---

This reference covers everything you need to understand and customize the Pure Honey landing page components! 🍯
