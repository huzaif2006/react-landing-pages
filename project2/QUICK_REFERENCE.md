# Talbeena Food - Developer Quick Reference

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`

## 📝 Component Quick Reference

### 1. **Navbar** - Navigation Header
```jsx
<Navbar 
  logoText="🌾 Talbeena Food"
  links={[
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' }
  ]}
/>
```
**Features:** Sticky, responsive, hover effects

### 2. **Hero** - Hero Section with CTA
```jsx
<Hero 
  title="Discover Natural Health & Wellness"
  subtitle="Premium quality products..."
  buttonText="Shop Now"
  image="https://image-url.com/hero.jpg"
/>
```
**Features:** Two-column grid, gradient background, image hover

### 3. **BenefitCard** - Reusable Benefit Display
```jsx
<BenefitCard
  title="100% Natural"
  description="Made with pure ingredients..."
/>
```
**Features:** Icon display, card hover animation, centered text

### 4. **BenefitsSection** - Benefits Container
```jsx
<BenefitsSection 
  benefits={[
    { title: '100% Natural', description: 'Pure ingredients...' },
    { title: 'Nutrient Rich', description: 'Packed with vitamins...' }
  ]}
/>
```
**Features:** Auto-fit grid, responsive columns

### 5. **ProductCard** - Reusable Product Display
```jsx
<ProductCard
  name="Talbeena Premium Blend"
  price={14.99}
  image="https://product-image.com/product.jpg"
/>
```
**Features:** Image hover zoom, "Add to Cart" button, price display

### 6. **ProductsSection** - Products Container
```jsx
<ProductsSection 
  products={[
    { name: 'Product 1', price: 14.99, image: 'url' },
    { name: 'Product 2', price: 12.99, image: 'url' }
  ]}
/>
```
**Features:** Grid layout, responsive design, product cards

### 7. **SunnahSection** - Hadith/Quote Display
```jsx
<SunnahSection
  hadithText="The best of your food is the barley..."
  reference="Narrated by At-Tirmidhi"
/>
```
**Features:** Blockquote styling, gradient background, brown tones

### 8. **CallToAction** - CTA Section
```jsx
<CallToAction
  text="Ready to transform your health?"
  buttonText="Get Started Today"
/>
```
**Features:** Centered layout, prominent button, green background

### 9. **Footer** - Footer Section
```jsx
<Footer 
  companyName="Talbeena Food"
  year={2024}
/>
```
**Features:** Multi-column layout, quick links, contact info

## 🎨 Color Constants (Vanilla CSS)

```css
/* Primary */
--primary-green: #2d5016;
--primary-light-green: #3d6b1f;

/* Accents */
--accent-beige: #f5deb3;
--accent-brown: #8b7355;
--accent-tan: #d4a574;

/* Backgrounds */
--bg-light: #faf8f3;
--bg-white: #ffffff;

/* Text */
--text-dark: #333333;
--text-brown: #5a4a42;
```

## 📊 Layout Patterns

### Flexbox Used For:
- Navbar: Horizontal alignment
- Hero Content: Vertical flex column
- Footer: Column layout with flex wrap
- Buttons & Controls: Alignment

### CSS Grid Used For:
- Hero Section: 2-column layout (content + image)
- Benefits Grid: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
- Products Grid: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Footer: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`

## 🔧 Common Customizations

### Change Primary Color
Find and replace `#2d5016` with your color in all component CSS files

### Add More Products
Edit `TalbeenaLanding.jsx`:
```jsx
const products = [
  // Existing products...
  {
    name: 'New Product Name',
    price: 19.99,
    image: 'https://image-url.com/product.jpg',
  },
];
```

### Modify Navigation Links
Edit `TalbeenaLanding.jsx`:
```jsx
const navLinks = [
  { name: 'New Link', href: '#new-section' },
  // ... other links
];
```

### Update Hero Section
Edit `TalbeenaLanding.jsx`:
```jsx
<Hero
  title="Your New Title"
  subtitle="Your new subtitle"
  buttonText="New Button Text"
  image="new-image-url"
/>
```

## 📱 Responsive Breakpoints

All components use this breakpoint:
```css
@media (max-width: 768px) {
  /* Mobile/tablet styles */
}
```

## 🎯 File Organization Best Practices

✅ Each component has its own folder  
✅ Each folder contains `.jsx` and `.css` files  
✅ CSS files are scoped to component classes  
✅ Props are properly typed in JSDoc comments  
✅ Sample data in main page component  

## 🐛 Debugging Tips

1. **Check Props**: Use React DevTools to inspect component props
2. **CSS Issues**: Open DevTools and inspect element to see applied styles
3. **Responsive Issues**: Use Chrome DevTools device emulation
4. **Image Loading**: Verify image URLs are correct and accessible

## 📚 File Sizes Reference

```
Navbar/          ~2KB
Hero/            ~2.5KB
BenefitCard/     ~1.5KB
BenefitsSection/ ~2KB
ProductCard/     ~2KB
ProductsSection/ ~2KB
SunnahSection/   ~2KB
CallToAction/    ~1.5KB
Footer/          ~2.5KB
TalbeenaLanding/ ~4KB
Global CSS/      ~2KB
─────────────────────
Total:           ~25KB (uncompressed)
```

## ⚡ Performance Tips

1. Use image compression for all product/hero images
2. Lazy load images using `loading="lazy"` attribute
3. Keep component files small and focused
4. Use CSS transitions instead of JavaScript animations
5. Minimize inline styles

## 🔗 External Resources

- [React Docs](https://react.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Web Docs](https://developer.mozilla.org)

## 🎓 Learning Exercises

1. Add a testimonials section with a new component
2. Create a subscription form component
3. Add smooth scroll behavior
4. Implement a dark mode toggle
5. Add loading skeletons for products
6. Create an image carousel for the hero section

---

**Need help? Check the components folder structure and read individual component JSX files for detailed documentation.**
