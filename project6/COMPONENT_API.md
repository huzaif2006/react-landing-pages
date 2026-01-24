# Room Plants Component API Reference

## Component Props Documentation

### Navbar Component
**File**: `src/components/Navbar.jsx`

```javascript
<Navbar
  logoText="🌿 Room Plants"
  links={[
    { label: 'Home', href: '#home' },
    { label: 'Plants', href: '#plants' },
  ]}
/>
```

**Props**:
- `logoText` (string): Brand name or logo text displayed on the left
- `links` (array of objects): Navigation links
  - `label` (string): Link text
  - `href` (string): Link destination

**Features**:
- Sticky positioning at top of page
- Responsive design hides on smaller screens
- Hover effects on links
- Clean, minimal styling

---

### Hero Component
**File**: `src/components/Hero.jsx`

```javascript
<Hero
  title="Bring Nature Into Your Space"
  subtitle="Transform your home with beautiful indoor plants..."
  buttonText="Shop Now"
  image="https://images.unsplash.com/..."
/>
```

**Props**:
- `title` (string): Main heading
- `subtitle` (string): Descriptive text below title
- `buttonText` (string): CTA button text
- `image` (string): Image URL for the right column

**Features**:
- Two-column flexbox layout
- Responsive stacking on mobile
- Large, attention-grabbing typography
- Image with subtle shadow effect

---

### About Component
**File**: `src/components/About.jsx`

```javascript
<About
  heading="Why Choose Indoor Plants?"
  text="Indoor plants do more than just look beautiful..."
/>
```

**Props**:
- `heading` (string): Section title
- `text` (string): Body text explaining benefits

**Features**:
- Centered, single-column layout
- Max-width container for readability
- Soft background color
- Large, readable font sizes

---

### PlantCard Component
**File**: `src/components/PlantCard.jsx`

```javascript
<PlantCard
  name="Monstera Deliciosa"
  light="Bright Indirect Light"
  price={29.99}
  image="https://images.unsplash.com/..."
/>
```

**Props**:
- `name` (string): Plant common name
- `light` (string): Light requirement description
- `price` (number): Plant price in USD
- `image` (string): Product image URL

**Features**:
- Reusable card component
- Hover animations (lift effect)
- Image scaling on hover
- Soft shadows and rounded corners

---

### PopularPlants Section
**File**: `src/components/PopularPlants.jsx`

```javascript
<PopularPlants
  heading="Our Popular Collection"
  plants={[
    {
      name: 'Monstera Deliciosa',
      light: 'Bright Indirect Light',
      price: 29.99,
      image: 'https://...',
    },
    // ... more plants
  ]}
/>
```

**Props**:
- `heading` (string): Section title
- `plants` (array of objects): Plant data
  - `name` (string): Plant name
  - `light` (string): Light requirements
  - `price` (number): Price
  - `image` (string): Image URL

**Features**:
- Uses PlantCard components
- Responsive grid layout (auto-fit)
- Maintains consistent spacing
- Scales beautifully on all devices

---

### CareCard Component
**File**: `src/components/CareCard.jsx`

```javascript
<CareCard
  title="Watering"
  description="Water your plants when..."
  icon="💧"
/>
```

**Props**:
- `title` (string): Care tip title
- `description` (string): Detailed explanation
- `icon` (string): Emoji or text icon (optional)

**Features**:
- Soft green background
- Centered text alignment
- Icon display at top
- Subtle border and hover effect

---

### CareGuide Section
**File**: `src/components/CareGuide.jsx`

```javascript
<CareGuide
  heading="Plant Care Essentials"
  careItems={[
    {
      title: 'Watering',
      icon: '💧',
      description: 'Water when top inch of soil is dry...',
    },
    // ... more care items
  ]}
/>
```

**Props**:
- `heading` (string): Section title
- `careItems` (array of objects): Care tips
  - `title` (string): Tip title
  - `icon` (string): Emoji icon
  - `description` (string): Explanation

**Features**:
- Uses CareCard components
- Grid layout responsive design
- 6-item collection in demo
- Easy to extend with more tips

---

### CTA (Call To Action) Component
**File**: `src/components/CTA.jsx`

```javascript
<CTA
  text="Ready to grow your collection? Join our community..."
  buttonText="Subscribe Today"
/>
```

**Props**:
- `text` (string): CTA message
- `buttonText` (string): Button text

**Features**:
- Bright background color (leaf green)
- White button for contrast
- Centered layout
- Minimal but impactful design

---

### Footer Component
**File**: `src/components/Footer.jsx`

```javascript
<Footer
  brandName="Room Plants"
  year={2026}
/>
```

**Props**:
- `brandName` (string): Company/brand name
- `year` (number): Copyright year (often `new Date().getFullYear()`)

**Features**:
- Dark background with light text
- Copyright and tagline
- Responsive sizing
- Simple, clean footer

---

## Usage in RoomPlantsLanding

See `src/pages/RoomPlantsLanding.jsx` for a complete example of how to:
- Import all components
- Define prop data
- Assemble components into a full page
- Pass dynamic data (like current year)

## Styling Approach

### Global Styles
Located in `src/index.css`:
- CSS custom properties (variables)
- Base element styling
- Utility classes

### Component Styles
Each component has its own CSS file:
- `Navbar.css`
- `Hero.css`
- `About.css`
- `PlantCard.css`
- `PopularPlants.css`
- `CareCard.css`
- `CareGuide.css`
- `CTA.css`
- `Footer.css`

## Customization Tips

### Typography
All components use Segoe UI. To change globally:
```css
/* In index.css */
:root {
  font-family: 'Your Font', sans-serif;
}
```

### Spacing
Component padding/margin follows a consistent scale:
- Small: 0.5rem, 0.8rem
- Medium: 1rem, 1.5rem
- Large: 2rem, 2.5rem
- Extra Large: 3rem, 4rem

### Hover Effects
Most interactive elements use:
```css
transition: transform 0.3s ease, box-shadow 0.3s ease;
```

---

## Performance Notes

- ✅ All components are simple, pure React functions
- ✅ No unnecessary re-renders (props only)
- ✅ CSS is scoped per component
- ✅ Images use Unsplash CDN (cached)
- ✅ No JavaScript animation libraries needed

---

## Accessibility Considerations

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Focus states on interactive elements
- Sufficient color contrast ratios
- Alt text support for images
- Keyboard navigation support

---

**Last Updated**: January 2026  
**React Version**: 19+  
**CSS**: Vanilla (No preprocessor needed)
