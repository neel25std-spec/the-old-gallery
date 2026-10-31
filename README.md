# The Old Gallery – Fine Dining & Heritage Cuisine

> **Independent Design Concept – Not the Official Website**  
> An award-winning portfolio concept for **The Old Gallery Restro Cafe**, Kanir More, Sarbamangala Pally, Malda, West Bengal.

[![React](https://img.shields.io/badge/React-19.3-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg)](https://tailwindcss.com/)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse_Performance-97%2F100-success.svg)](https://developer.chrome.com/docs/lighthouse/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🏛️ Overview

**The Old Gallery** website is a modern, responsive, high-performance web experience celebrating colonial vintage aesthetics, slow-cooked royal delicacies, and the legendary warmth of Bengal hospitality.

### Visual Identity
- **Primary Navy:** `#25243D` & **Deep Navy:** `#17172B`
- **Antique Gold:** `#D6B45C` & **Warm Gold:** `#E9CE83`
- **Editorial Cream:** `#F5EBDD`
- **Warm Wood Accent:** `#593A25`
- **Typography:** *Cinzel*, *Cormorant Garamond* (display serifs) & *DM Sans* (legible body)

---

## ⚡ Performance Engineering

This project is built and optimized for instant loading, especially on mobile networks:

| Audit Category | Score |
| :--- | :---: |
| **Performance** | **97 / 100** |
| **Accessibility** | **97 / 100** |
| **Best Practices** | **100 / 100** |
| **SEO** | **100 / 100** |

### Key Optimizations
- **Next-Gen Image Formats:** Responsive WebP conversion with PNG fallback (`71%` overall payload reduction).
- **Responsive Preloading:** Critical viewport-matched `<link rel="preload">` and `<picture>` with `fetchpriority="high"`.
- **Dynamic Code-Splitting:** Below-the-fold page sections lazily loaded with `React.lazy()` and `<Suspense>`.
- **Vendor Chunk Isolation:** Core libraries (`react`, `react-dom`) and icons (`lucide-react`) separated into discrete browser-cached bundles.
- **Asynchronous Font Delivery:** Non-render-blocking Google Fonts loading strategy preventing FCP delays.
- **Zero Layout Shifts (`CLS: 0.01`):** Explicit dimensional aspect ratios defined across all imagery.

---

## 📁 Project Structure

```text
TheOldGallery/
├── public/
│   ├── images/              # Optimized WebP and PNG brand assets
│   ├── favicon.svg          # Fallback site favicon
│   └── robots.txt           # Search crawler directives
├── src/
│   ├── assets/              # Static internal media
│   ├── components/          # Reusable UI components (MenuCard, Lightbox)
│   ├── sections/            # Page sections (Hero, About, Menu, Gallery, etc.)
│   ├── config/              # Central configuration (siteConfig.ts)
│   ├── data/                # Culinary menu and gallery data sets
│   ├── styles/              # Global CSS & Tailwind configuration (index.css)
│   ├── types/               # TypeScript interfaces and definitions
│   ├── App.tsx              # Root single-page application orchestrator
│   └── main.tsx             # Application entrypoint
├── .env.example             # Environment configuration template
├── .gitignore               # Production-grade git exclusion rules
├── index.html               # Semantic HTML5 template with SEO & OpenGraph tags
├── package.json             # Dependencies and build scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build and manual chunking settings
```

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Linter:** Oxlint

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.x` or higher
- npm `9.x` or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/the-old-gallery.git

# Navigate to project directory
cd the-old-gallery

# Install dependencies
npm install
```

### Environment Configuration
Copy the template environment file:
```bash
cp .env.example .env.local
```

---

## 💻 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with HMR at `http://localhost:5173/` |
| `npm run build` | Compiles TypeScript and builds production bundles into `dist/` |
| `npm run preview` | Serves the production build locally at `http://localhost:4173/` |
| `npm run lint` | Runs fast Oxlint analysis across the codebase |

---

## 🌐 Production Deployment

The project builds standard static HTML/CSS/JS files and can be deployed directly to modern static web hosts:

### Vercel / Netlify
1. Connect the GitHub repository.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Set optional environment variables defined in `.env.example`.

---

## 📄 Legal Notice

*This project is an **independent portfolio redesign concept** created for design demonstration purposes. It is not the official website of The Old Gallery, Malda, and does not process financial transactions.*
