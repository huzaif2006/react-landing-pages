# Pure Honey Landing Page - Installation & Usage Guide

## 🚀 Quick Start

Your Pure Honey landing page is ready to use! Follow these steps to get started.

---

## ✅ What You Have

✨ **Complete React Landing Page**
- 9 professional components
- 2 reusable sub-components
- Vanilla CSS styling
- Fully responsive design
- Production-ready code

📦 **Package Contents**
- Navbar with mobile menu
- Hero section with CTA
- About section with features
- Products grid (6 items)
- Benefits section (6 items)
- Call-to-action banner
- Footer with links
- All custom CSS files

---

## 💻 Installation

### Step 1: Ensure Node.js is Installed
Check if you have Node.js installed:
```bash
node --version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### Step 2: Install Dependencies
```bash
cd c:\Users\Noman Traders\Downloads\web_dev\react\homework\react-landing-pages\project4
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The page will open at `http://localhost:5173`

---

## 📱 Viewing Your Page

### In Browser
- **Hero Section** - Impressive headline with image
- **About Section** - Why raw honey matters + features
- **Products** - 6 honey varieties with prices
- **Benefits** - 6 health benefits with icons
- **CTA Section** - Call-to-action banner
- **Footer** - Links and company info
- **Navbar** - Sticky menu with mobile hamburger

### Responsive Testing
- **Desktop** - Full layout, all features visible
- **Tablet** - Adjusted spacing, responsive grid
- **Mobile** - Stacked layout, hamburger menu

Test by:
1. Right-click → Inspect
2. Click device toggle (top-left)
3. Try different device sizes

---

## 🎨 Customizing Your Page

### 1. Change Text Content

Edit `src/pages/HoneyLanding.jsx`:

```jsx
// Change hero title
const heroData = {
  title: 'Your New Title Here',
  subtitle: 'Your new subtitle',
  buttonText: 'Your Button Text',
  image: 'your-image-url'
};
```

### 2. Change Colors

The color palette is defined in component CSS files.

**To change Honey Gold (#f2b705):**
1. Open any component CSS file
2. Search for `#f2b705`
3. Replace with your color
4. Example locations:
   - `src/components/Navbar/Navbar.css`
   - `src/components/Hero/Hero.css`
   - `src/components/Products/HoneyCard/HoneyCard.css`

**Main colors to customize:**
```css
Honey Gold:   #f2b705  → Yellow/Orange
Deep Amber:   #c6862b  → Brown
Dark Brown:   #5a3e1b  → Header text
Cream White:  #fff8ec  → Backgrounds
Text Dark:    #2b2b2b  → Body text
```

### 3. Add Real Images

Replace placeholder image URLs:

```jsx
// Current:
image: 'https://via.placeholder.com/400x400?text=Honey+Jar'

// Change to:
image: 'path/to/your/image.jpg'
// or
image: 'https://yourwebsite.com/honey-jar.jpg'
```

### 4. Customize Products

Edit `productsData` in `HoneyLanding.jsx`:

```jsx
const productsData = [
  {
    name: 'Product Name',
    type: 'Product Type',
    price: '19.99',
    image: 'product-image-url'
  },
  // Add more products...
];
```

### 5. Customize Benefits

Edit `benefitsData` in `HoneyLanding.jsx`:

```jsx
const benefitsData = [
  {
    title: 'Benefit Title',
    description: 'Benefit description here',
    icon: '⚡'  // Use any emoji
  },
  // Add more benefits...
];
```

### 6. Change Navbar Links

Edit `navLinks` in `HoneyLanding.jsx`:

```jsx
const navLinks = ['About', 'Products', 'Benefits', 'Contact'];
// Change to:
const navLinks = ['Our Story', 'Shop', 'Benefits', 'FAQ'];
```

### 7. Update Footer

Edit `footerData` in `HoneyLanding.jsx`:

```jsx
const footerData = {
  brandName: 'Your Brand Name',
  year: 2026
};
```

---

## 📁 File Organization Guide

### Main Page File
**`src/pages/HoneyLanding.jsx`**
- Contains all data (products, benefits, etc.)
- Imports and assembles all components
- Edit here to change content

### Component Files Structure
Each component has its own folder:

```
Component Name/
├── ComponentName.jsx    → React component
└── ComponentName.css    → Styling
```

### Where to Make Changes

| What to Change | File to Edit |
|---|---|
| Page text content | `src/pages/HoneyLanding.jsx` |
| Products list | `src/pages/HoneyLanding.jsx` |
| Benefits list | `src/pages/HoneyLanding.jsx` |
| Colors | Component CSS files |
| Layout/spacing | Component CSS files |
| Navigation links | `src/pages/HoneyLanding.jsx` |

---

## 🎯 Common Customizations

### Change Brand Name
1. Open `src/pages/HoneyLanding.jsx`
2. Find: `<Navbar logoText="Pure Honey" ... />`
3. Change to: `<Navbar logoText="Your Brand" ... />`
4. Also update footer: `brandName: 'Your Brand'`

### Make Buttons Clickable
Add `onClick` handler:

```jsx
// In HoneyLanding.jsx, update buttonText to include onClick:
<Hero 
  title="..."
  subtitle="..."
  buttonText="Shop Now"
  image="..."
  onShopClick={() => window.location.href = '/shop'}
/>

// Then in Hero.jsx, add the handler:
<button className="hero-button" onClick={onShopClick}>
  {buttonText}
</button>
```

### Change Button Colors
In component CSS files, find `.button` class:

```css
.hero-button {
  background: linear-gradient(135deg, #f2b705 0%, #c6862b 100%);
  /* Change the hex codes above */
}
```

### Adjust Spacing
In component CSS, modify padding:

```css
.section {
  padding: 6rem 2rem;  /* Change 6rem and 2rem */
}
```

### Change Font Size
In component CSS, modify font-size:

```css
.title {
  font-size: 3.5rem;  /* Change this value */
}
```

---

## 🚀 Building for Production

### Create Production Build
```bash
npm run build
```

This creates an optimized `dist/` folder ready to deploy.

### Deploy to Popular Platforms

**Vercel (Easiest)**
1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repo
4. Click Deploy
5. Done!

**Netlify**
1. Push code to GitHub
2. Go to netlify.com
3. New site from Git
4. Choose your repo
5. Deploy

**GitHub Pages**
1. Build: `npm run build`
2. Upload `dist/` folder contents
3. Enable Pages in repo settings

---

## 📊 Project Stats

- **Total Components:** 9
- **Reusable Components:** 2 (HoneyCard, BenefitCard)
- **CSS Files:** 10 (one per component)
- **Lines of Code:** ~2000+
- **Color Palette:** 5 colors
- **Responsive Breakpoints:** 2 (768px, 1200px)
- **Dependencies:** React only (no UI libraries)

---

## 🎓 Learning & Understanding

### Component Structure
Each component receives `props` and returns JSX:

```jsx
const HoneyCard = ({ name, type, price, image }) => {
  return (
    <div className="honey-card">
      {/* Component content */}
    </div>
  );
};

export default HoneyCard;
```

### CSS Structure
Each component has matching CSS file with scoped class names:

```css
.honey-card { /* Main container */ }
.card-image { /* Image styling */ }
.card-button { /* Button styling */ }
```

### Data Flow
1. **HoneyLanding.jsx** - Main page with all data
2. Components receive data via props
3. Components render based on props
4. Easy to swap data or connect to backend

---

## 🔧 Troubleshooting

### Page Not Loading
```bash
# Try clearing node_modules
rm -r node_modules
npm install
npm run dev
```

### Styles Not Applying
- Clear browser cache (Ctrl+F5)
- Check CSS file names match import paths
- Verify CSS files are in component folders

### Images Not Showing
- Replace placeholder URLs with real image paths
- Ensure image URLs are accessible
- Use absolute URLs for external images

### Mobile Menu Not Working
- Check browser console for errors
- Ensure media query is set to 768px
- Verify hamburger icon displays on mobile

---

## 📝 Performance Tips

✅ **For Better Performance:**
1. Replace placeholder images with optimized versions
2. Use modern image formats (WebP)
3. Compress images before uploading
4. Use CDN for image hosting
5. Minify CSS/JS before deployment (Vite does this)

---

## 🎯 Next Steps

1. **Customize Content**
   - Update text in HoneyLanding.jsx
   - Add your real products
   - Customize colors

2. **Add Real Images**
   - Replace placeholder URLs
   - Create image folder in public/
   - Use relative paths

3. **Make It Interactive**
   - Add onClick handlers to buttons
   - Connect to backend for products
   - Add form for contact/email signup

4. **Deploy**
   - Run `npm run build`
   - Deploy to Vercel/Netlify
   - Share with world!

---

## 📞 Support Resources

- **React Docs:** https://react.dev
- **CSS Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Responsive Design:** https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- **Deployment:** Check Vercel/Netlify docs

---

## ✨ You're Ready!

Everything is set up and ready to go. Start customizing and make it your own!

```bash
npm run dev
```

Then open http://localhost:5173 and see your beautiful honey landing page! 🍯

Happy coding! 🚀
