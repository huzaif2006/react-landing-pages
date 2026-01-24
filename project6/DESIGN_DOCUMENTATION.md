# Room Plants - Indoor Plant Brand Landing Page

A beautiful, modern React landing page for an indoor plant brand called "Room Plants". Built with React functional components and vanilla CSS, featuring a fresh, calm, and cozy design aesthetic.

## 🎨 Design Philosophy

- **Fresh & Calm**: Soft colors and generous whitespace create a peaceful browsing experience
- **Minimal & Modern**: Clean layouts with no harsh borders, inspired by contemporary interior design
- **Cozy Atmosphere**: Warm color palette and rounded corners evoke the feeling of a well-designed home
- **Responsive**: Fully optimized for mobile, tablet, and desktop devices

## 🎯 Color Palette

```
Forest Green (#2e7d32)   - Primary accent color for headings and buttons
Soft Sage (#e8f5e9)      - Soft background for plant cards
Clay Beige (#f5f2ee)     - Warm neutral background sections
Leaf Accent (#81c784)    - Secondary green for CTAs and highlights
Text Dark (#2b2b2b)      - Primary text color for readability
```

## 📁 Project Structure

```
src/
├── components/           # Reusable components with individual CSS files
│   ├── Navbar.jsx / Navbar.css
│   ├── Hero.jsx / Hero.css
│   ├── About.jsx / About.css
│   ├── PlantCard.jsx / PlantCard.css
│   ├── PopularPlants.jsx / PopularPlants.css
│   ├── CareCard.jsx / CareCard.css
│   ├── CareGuide.jsx / CareGuide.css
│   ├── CTA.jsx / CTA.css
│   └── Footer.jsx / Footer.css
├── pages/
│   └── RoomPlantsLanding.jsx  # Main landing page component
├── App.jsx              # Root component
├── App.css              # App-wide styles
├── index.css            # Global styles and CSS variables
└── main.jsx             # Entry point
```

## 🧩 Component Overview

### Navbar
- **Props**: `logoText`, `links` (array of {label, href})
- Sticky navigation with smooth hover effects
- Clean, minimal design with proper spacing

### Hero Section
- **Props**: `title`, `subtitle`, `buttonText`, `image`
- Two-column layout (content + image)
- Large, readable typography
- Soft shadows on image for depth

### About Section
- **Props**: `heading`, `text`
- Centered content explaining plant benefits
- Generous padding for comfortable reading

### PlantCard (Reusable)
- **Props**: `name`, `light`, `price`, `image`
- Hover animations for interactivity
- Soft shadows and rounded corners
- Light requirement indicator with emoji

### PopularPlants Section
- **Props**: `heading`, `plants` (array of plant objects)
- Responsive grid layout (auto-fit columns)
- Uses PlantCard component for each plant
- Includes 6 dummy plants with real image URLs

### CareCard (Reusable)
- **Props**: `title`, `description`, `icon`
- Icon indicator for quick visual recognition
- Soft green background with subtle border
- Hover effects for engagement

### CareGuide Section
- **Props**: `heading`, `careItems` (array of care objects)
- Six essential plant care tips with emojis
- Responsive grid layout
- Uses CareCard component for each tip

### Call To Action (CTA)
- **Props**: `text`, `buttonText`
- Bright leaf-green background (#81c784)
- White button with shadow for contrast
- Centered, compelling copy

### Footer
- **Props**: `brandName`, `year`
- Dark background with light text
- Tagline for brand identity
- Auto-calculated year

## 🛠️ Technical Features

### React Best Practices
- ✅ Functional components only
- ✅ Props-driven design (no global state needed)
- ✅ Reusable component patterns
- ✅ Clean, semantic JSX structure

### Vanilla CSS Features
- ✅ CSS custom properties (variables) in index.css
- ✅ Flexbox layouts throughout
- ✅ CSS Grid for product/care cards
- ✅ Smooth transitions and hover effects
- ✅ Responsive design with media queries
- ✅ No external libraries or frameworks

### Design System
- Max-width: 1200px for content containers
- Consistent spacing scale (1rem, 1.5rem, 2rem, 3rem, 4rem)
- Rounded corners: 10-16px for various elements
- Subtle shadows: 0 4px 12px, 0 8px 20px
- Font: Segoe UI (system sans-serif stack)

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with 2+ columns
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Single column, optimized touches

```css
@media (max-width: 768px) {
  /* Mobile-specific styles */
}
```

## 🎬 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   ```
   http://localhost:5173/
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📊 Key Features Implemented

- ✅ Clean, minimal navbar with navigation links
- ✅ Hero section with two-column layout
- ✅ About section explaining benefits
- ✅ Popular Plants showcase with 6 sample plants
- ✅ Care Guide with 6 essential tips
- ✅ Call-to-action section for subscriptions
- ✅ Professional footer
- ✅ Fully responsive design
- ✅ Smooth animations and transitions
- ✅ Accessibility considerations
- ✅ Real placeholder images from Unsplash

## 🔧 Customization Guide

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --forest-green: #2e7d32;
  --soft-sage: #e8f5e9;
  --clay-beige: #f5f2ee;
  --leaf-accent: #81c784;
  --text-dark: #2b2b2b;
}
```

### Add More Plants
In `src/pages/RoomPlantsLanding.jsx`, add objects to the `plantsData` array:
```javascript
{
  name: 'Plant Name',
  light: 'Light Requirement',
  price: 29.99,
  image: 'https://image-url.jpg',
}
```

### Modify Navigation Links
In `src/pages/RoomPlantsLanding.jsx`, update the `navbarLinks` array:
```javascript
{
  label: 'Link Text',
  href: '#section-id',
}
```

### Update Care Tips
In `src/pages/RoomPlantsLanding.jsx`, add objects to the `careItems` array:
```javascript
{
  title: 'Care Tip Title',
  icon: '🌿',
  description: 'Description of the care tip.',
}
```

## 🎓 Learning Outcomes

This project demonstrates:

1. **Component Architecture**: Breaking down UI into reusable, prop-driven components
2. **CSS Organization**: Separating styles per component while maintaining consistency
3. **Responsive Design**: Mobile-first approach with media queries
4. **Design Systems**: Using variables, spacing scales, and color palettes
5. **React Patterns**: Props, composition, and functional components
6. **UI/UX Principles**: Clean design, visual hierarchy, whitespace usage
7. **Accessibility**: Semantic HTML, focus states, and proper contrast

## 🚀 Production Ready

The landing page is suitable for:
- Portfolio projects
- Academic assignments
- Freelance client work
- Starting point for e-commerce
- Design showcase and inspiration

## 📝 Notes

- All images use Unsplash public URLs (free for use)
- No external dependencies beyond React
- Fully self-contained component structure
- Easy to extend with additional sections
- Can be easily integrated with backend APIs for real plant data

---

**Created**: January 2026  
**Technology**: React 19 + Vite + Vanilla CSS  
**License**: Open for personal and commercial use
