# Bonsai Trees - Landing Page Design Guide

## 🎨 Visual Design Summary

### Component Hierarchy & Layout

```
┌─────────────────────────────────────────────────────────────┐
│                      NAVBAR                                  │
│  Logo              Nav Links (transparent, solid on scroll) │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    HERO SECTION                              │
│  ┌──────────────────┐  ┌──────────────────────────────────┐ │
│  │   Hero Title     │  │                                  │ │
│  │   Subtitle       │  │     Hero Image                   │ │
│  │   CTA Button     │  │     (Bonsai Tree)                │ │
│  └──────────────────┘  └──────────────────────────────────┘ │
│  (Gradient Overlay: Primary Green + Earth Brown)            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   ABOUT SECTION                              │
│  ┌──────────────────────────┐  ┌──────────────────────────┐│
│  │    About Image           │  │   About Content          ││
│  │    (Bonsai Detail)       │  │   Heading + Text         ││
│  └──────────────────────────┘  └──────────────────────────┘│
│  (Light Green Background)                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│           BONSAI COLLECTION (Light Green BG)                │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │
│  │ BonsaiCard 1 │ │ BonsaiCard 2 │ │ BonsaiCard 3 │         │
│  │  + Badge     │ │  + Badge     │ │  + Badge     │         │
│  │  + Hover Fx  │ │  + Hover Fx  │ │  + Hover Fx  │         │
│  └──────────────┘ └──────────────┘ └──────────────┘         │
│  ┌──────────────┐ (Responsive Grid - 4 cols on desktop)     │
│  │ BonsaiCard 4 │                                            │
│  └──────────────┘                                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              CARE TIPS (Off-White BG)                        │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │
│  │ TipCard 1    │ │ TipCard 2    │ │ TipCard 3    │         │
│  │ 💧 Watering │ │ ☀️  Light    │ │ ✂️  Pruning  │         │
│  └──────────────┘ └──────────────┘ └──────────────┘         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │
│  │ TipCard 4    │ │ TipCard 5    │ │ TipCard 6    │         │
│  │ 🌡️ Temp     │ │ 💨 Humidity  │ │ 🌱 Fertilize │         │
│  └──────────────┘ └──────────────┘ └──────────────┘         │
│  (3-column grid, left border accent, white cards)           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              CALL-TO-ACTION SECTION                          │
│  ┌─────────────────────────────────────────────────────────┐│
│  │         Ready to start your bonsai journey?              ││
│  │              [Shop Now Button]                           ││
│  │  (Gradient: Primary Green → Earth Brown)                ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                  │
│  © 2026 Bonsai Trees. All rights reserved.                  │
│  Crafted with care for nature lovers everywhere.            │
│  (Dark Background: Text Dark #2c2c2c)                       │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Design Features by Component

### Navbar
- **State 1 (Top)**: Transparent bg, white text, 1.5rem padding
- **State 2 (Scrolled)**: White bg with shadow, dark text, 1rem padding
- **Logo**: Primary Green, 1.5rem font-weight 700
- **Links**: 2.5rem gap, smooth hover transitions

### Hero Section
- **Height**: min-height 100vh (full viewport)
- **Overlay**: Gradient mask (rgba(47, 93, 80, 0.9) + rgba(139, 111, 78, 0.8))
- **Layout**: Flexbox, gap: 4rem
- **Title**: 3.5rem white text
- **Subtitle**: 1.2rem light text
- **Button**: Light green bg, primary green text, scale on hover
- **Animations**: slideInLeft (content) + slideInRight (image)

### About Section
- **Layout**: Flexbox, image left + content right
- **Background**: Off-white
- **Padding**: 5rem vertical, 2rem horizontal
- **Image**: border-radius 12px, soft shadow
- **Heading**: 2.5rem, primary green
- **Text**: Light gray, 1.8 line-height

### Bonsai Collection
- **Grid**: auto-fit, minmax(280px, 1fr)
- **Background**: Light green
- **Card**: white bg, rounded corners, soft shadow
- **Image Height**: 250px (desktop), 200px (mobile)
- **Badge**: Primary green, positioned top-right
- **Hover**: elevation effect, image scale 1.05

### Care Tips
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Card**: Left border 4px primary green
- **Icon**: 2.5rem emoji
- **Hover**: Border changes to earth brown, shadow increase
- **Padding**: 2rem cards

### CTA Section
- **Background**: Gradient (primary green → earth brown)
- **Layout**: Centered flexbox
- **Spacing**: 4rem padding
- **Button**: White bg, hover to light green

### Footer
- **Background**: Text dark (#2c2c2c)
- **Text**: White primary, light secondary
- **Padding**: 2.5rem vertical, 2rem horizontal

## 🎨 Animation Effects

```
slideInLeft    - content fades in from left (0.8s)
slideInRight   - image fades in from right (0.8s)
fadeInUp       - elements fade and slide up (0.6s)
scale on hover - bonsai card images scale 1.05
elevation      - cards lift on hover with shadow increase
transform      - buttons translate up on hover (-2 to -3px)
```

## 📐 Spacing Scale

- Extra Small: 0.5rem (6px)
- Small: 1rem (16px)
- Medium: 1.5rem (24px)
- Large: 2rem (32px)
- Extra Large: 3rem (48px)
- Section Padding: 5rem (80px)

## 🎭 Visual Consistency Rules

1. **Max-width**: All content containers limited to 1200px
2. **Centering**: `margin: 0 auto` on all containers
3. **Border Radius**: 8px buttons, 12px images, 8-12px cards
4. **Shadows**: Always use CSS variables (--shadow, --shadow-hover)
5. **Colors**: Always use CSS variables from :root
6. **Transitions**: 0.3s ease as default
7. **Typography**: System fonts stack ensures fast loading
8. **Responsive**: Mobile-first with media queries at 768px and 1024px

## 🌱 Brand Voice & Feel

- **Calm & Natural**: Soft colors, generous spacing, smooth transitions
- **Professional**: Clear hierarchy, polished typography, proper contrast
- **Organic**: Rounded corners, natural imagery, earth-inspired palette
- **Approachable**: Friendly copy, clear CTAs, accessible design
