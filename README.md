# 📸 The Moment Studio

> A modern and immersive photography studio website designed to showcase stories, emotions, and unforgettable moments through photography.

## 🌐 Overview

**The Moment Studio** is a modern photography studio website built with Next.js, TypeScript, and Tailwind CSS.

The website focuses on creating a premium visual experience while keeping the interface clean, responsive, and easy to navigate. It includes a photography-focused hero section, services, gallery, pricing packages, client testimonials, FAQs, contact CTA, and a complete footer.

The design uses a dark, cinematic color palette with warm orange accents to create a sophisticated photography-studio aesthetic.

---

## ✨ Features

- 📸 Modern photography studio landing page
- 🎨 Premium dark-themed UI
- 🟠 Custom orange accent color system
- 📱 Fully responsive design
- 🧭 Responsive navigation
- 🖼️ Interactive image gallery
- 🔍 Gallery image preview/lightbox
- ✨ Image hover and zoom animations
- 🌀 Animated circular "See Our Latest Work" CTA
- 📷 Photography services section
- 💰 Photography pricing packages
- ⭐ Client testimonials
- ❓ Interactive FAQ accordion
- 📩 Get In Touch CTA section
- 📬 Newsletter subscription UI
- 🔗 Social media links
- 🦶 Responsive footer
- ⚡ Next.js optimized images and fonts
- 🎯 Component-based architecture

---

## 🛠️ Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- TypeScript
- Tailwind CSS

### Libraries

- Lucide React
- React Icons
- Next Font
- Next Image

---

## 🎨 Design

The website follows a cinematic photography-inspired design system.

### Primary Colors

| Color | Hex |
| --- | --- |
| Primary | `#160702` |
| Secondary | `#FFFFFF` |
| Text | `#B6B6B6` |
| Accent | `#FF3700` |
| Secondary Background | `#20110C` |

The dark background provides a cinematic feel, while the orange accent is used for buttons, highlights, icons, and important interactive elements.

---

## 📂 Project Structure

```text
photograph_studio/
│
├── public/
│   ├── hero.webp
│   ├── hero1.webp
│   ├── hero2.webp
│   ├── ...
│   │
│   └── images/
│
├── src/
│   │
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Gallery.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       ├── FAQ.tsx
│       ├── GetInTouch.tsx
│       └── Footer.tsx
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
