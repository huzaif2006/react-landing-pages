# Bonsai Trees - Professional React Landing Page

A high-quality, professionally-designed React landing page for "Bonsai Trees" - a nature brand showcasing miniature trees. Built with functional components and vanilla CSS.

## 🌿 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **React Functional Components**: Clean, reusable component architecture
- **Vanilla CSS Only**: No frameworks or libraries - pure, optimized CSS
- **Smooth Animations**: Subtle transitions and scroll-triggered effects
- **Natural Color Palette**: Carefully selected colors that evoke nature and calm
- **Professional Typography**: Proper hierarchy and spacing for readability
- **Flexbox Layout**: Modern, flexible layout system
- **Scroll-aware Navbar**: Navbar changes appearance on scroll
- **Image Optimization**: Responsive images with proper aspect ratios

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── HeroSection/
│   │   ├── HeroSection.jsx
│   │   └── HeroSection.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── BonsaiCollection/
│   │   ├── BonsaiCollection.jsx
│   │   ├── BonsaiCard.jsx
│   │   ├── BonsaiCollection.css
│   │   └── BonsaiCard.css
│   ├── CareTips/
│   │   ├── CareTips.jsx
│   │   ├── TipCard.jsx
│   │   ├── CareTips.css
│   │   └── TipCard.css
│   ├── CTA/
│   │   ├── CTA.jsx
│   │   └── CTA.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2f5d50` - Main brand color
- **Light Green**: `#e6f2ee` - Background accents
- **Earth Brown**: `#8b6f4e` - Secondary color
- **Off-White**: `#f9f9f7` - Main background
- **Text Dark**: `#2c2c2c` - Primary text
- **Text Light**: `#666666` - Secondary text

### Typography
- **Font Family**: System stack (SF Pro Display, Segoe UI, Roboto, etc.)
- **H1**: 3rem, font-weight: 700
- **H2**: 2.5rem, font-weight: 700
- **H3**: 1.5rem, font-weight: 600
- **Body**: 1rem, line-height: 1.6

### Spacing & Layout
- Max-width: 1200px (centered containers)
- Padding: 5rem vertical, 2rem horizontal
- Gap between sections: Generous spacing for breathing room
- Border-radius: 8-12px for soft corners
- Shadows: Subtle elevation effects

## 📦 Components

### Navbar
- **Props**: `logoText`, `links`
- Transparent initially, becomes solid on scroll
- Smooth color transitions
- Responsive mobile menu support

### HeroSection
- **Props**: `title`, `subtitle`, `buttonText`, `image`
- Large hero image of bonsai tree
- Text aligned with image using Flexbox
- Gradient overlay for text contrast

### About
- **Props**: `heading`, `text`, `image`
- Two-column layout (image + text)
- Balanced visual design
- Smooth fade-in animations

### BonsaiCollection
- **Props**: `heading`, `bonsaiData` (array)
- Responsive grid layout (auto-fit, minmax)
- **BonsaiCard Props**: `name`, `age`, `price`, `image`
- Hover effects with elevation
- Age badge overlay

### CareTips
- **Props**: `heading`, `tipsData` (array)
- **TipCard Props**: `title`, `description`, `icon`
- Left border accent on hover
- Icon support with emoji
- Minimal card design

### CTA (Call-to-Action)
- **Props**: `text`, `buttonText`
- Full-width gradient background
- Centered layout
- Prominent button with hover states

### Footer
- **Props**: `brandName`, `year`
- Simple, elegant dark footer
- Copyright and tagline

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

Creates optimized production build in `dist/` folder.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1024px (2-column grids)
- **Mobile**: Below 768px (single column)

## ✨ Key Design Features

1. **Organic Feel**: Rounded corners, soft shadows, and natural color palette create a calm, organic atmosphere
2. **Professional Hierarchy**: Clear visual hierarchy with proper sizing and spacing
3. **Animations**: Subtle fade-in, slide-in, and scale effects on scroll
4. **Interactive Elements**: Hover states on buttons, cards, and links
5. **Accessibility**: Semantic HTML, proper contrast ratios, readable fonts
6. **Performance**: Optimized CSS, no external dependencies

## 🎯 Real Data Integration

To connect with real data:

1. **Replace Image URLs**: Update `App.jsx` with your own image URLs or implement image imports
2. **Dynamic Bonsai Data**: Fetch from API and pass to `BonsaiCollection` component
3. **Form Integration**: Add form handling to CTA or contact section
4. **Link Navigation**: Update navbar links to route to actual pages

## 🔧 Customization

### Change Colors
Edit the CSS variables in `index.css`:
```css
:root {
  --primary-green: #2f5d50;
  --light-green: #e6f2ee;
  /* ... etc */
}
```

### Adjust Spacing
Modify padding/margin in component CSS files or global `index.css`

### Add More Sections
Create new components following the existing pattern:
1. Create `src/components/YourComponent/`
2. Add `YourComponent.jsx` and `YourComponent.css`
3. Import and use in `App.jsx`

## 🎓 Learning Points

This project demonstrates:
- React functional components and hooks
- Component composition and reusability
- Props-driven architecture
- CSS Grid and Flexbox layouts
- Responsive design techniques
- CSS animations and transitions
- Color theory and design principles
- Typography and visual hierarchy

## 📄 License

This is a learning project. Feel free to use it as a template for your own projects.

---

**Built with ❤️ for nature lovers**
