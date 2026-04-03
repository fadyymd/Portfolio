# 🚀 Fadi Medkour — Portfolio

> Personal portfolio built with **React + Vite** — dark editorial design, cinematic animations, fully responsive.

🌐 **Live:** [abdulbasit-005.vercel.app](https://abdulbasit-005.vercel.app/) *(reference)*

---

## 📁 Project Structure

```
portfolio/
├── index.html                        ← HTML entry point
├── vite.config.js                    ← Vite configuration
├── package.json                      ← Dependencies & scripts
├── .gitignore                        ← Git ignore rules
├── README.md                         ← This file
│
└── src/
    ├── main.jsx                      ← React root mount
    ├── App.jsx                       ← Root component
    │
    ├── styles/
    │   └── global.css                ← Design system (tokens, keyframes, base)
    │
    ├── hooks/
    │   ├── useScrollReveal.js        ← IntersectionObserver scroll animations
    │   └── useTypewriter.js          ← Typewriter effect hook
    │
    ├── assets/
    │   ├── profile.jpeg              ← Profile photo
    │   └── svg/                      ← Tech stack SVG icons
    │       ├── html-5-svgrepo-com.svg
    │       ├── css3-02-svgrepo-com.svg
    │       ├── js-official-svgrepo-com.svg
    │       ├── react-javascript-js-framework-facebook-svgrepo-com.svg
    │       ├── tailwind-svgrepo-com.svg
    │       ├── node-js-svgrepo-com.svg
    │       ├── mongodb-svgrepo-com.svg
    │       ├── mysql-svgrepo-com.svg
    │       ├── git-svgrepo-com.svg
    │       ├── github-svgrepo-com.svg
    │       ├── figma-svgrepo-com.svg
    │       └── adobe-illustrator-svgrepo-com.svg
    │
    └── components/
        ├── UI/
        │   └── CursorGlow.jsx        ← Animated cursor glow effect
        │
        ├── Navbar/
        │   ├── Navbar.jsx            ← Sticky navbar + mobile menu
        │   └── Navbar.css
        │
        ├── Hero/
        │   ├── Hero.jsx              ← Hero section + typewriter + stats
        │   └── Hero.css
        │
        ├── About/
        │   ├── About.jsx             ← About section + profile image
        │   └── About.css
        │
        ├── Experience/
        │   ├── Experience.jsx        ← Timeline career section
        │   └── Experience.css
        │
        ├── Skills/
        │   ├── Skills.jsx            ← Tech stack cards with icons
        │   └── Skills.css
        │
        ├── Projects/
        │   ├── Projects.jsx          ← Project cards with hover actions
        │   └── Projects.css
        │
        ├── Contact/
        │   ├── Contact.jsx           ← Contact form + social links
        │   └── Contact.css
        │
        └── Footer/
            ├── Footer.jsx            ← Footer with nav + socials
            └── Footer.css
```

---

## 🛠️ Tech Stack

| Technology        | Usage                                      |
|-------------------|--------------------------------------------|
| **React 18**      | UI components, hooks, state management     |
| **Vite 5**        | Dev server, HMR, production build          |
| **CSS Modules**   | Scoped per-component styles                |
| **Google Fonts**  | Syne (display) · Space Mono (code) · Inter |
| **IntersectionObserver** | Scroll reveal animations            |

---

## 🎨 Design System

| Token        | Value                   | Usage                  |
|--------------|-------------------------|------------------------|
| `--bg`       | `#04070f`               | Page background        |
| `--accent`   | `#1563ff`               | Primary blue           |
| `--acc`      | `#00d4ff`               | Cyan accent            |
| `--acm`      | `#6c3aed`               | Purple accent          |
| `--t1`       | `#eef2ff`               | Primary text           |
| `--t2`       | `#6b8299`               | Secondary text         |
| `--ff-display` | `'Syne'`              | Headings font          |
| `--ff-mono`  | `'Space Mono'`          | Code / labels font     |
| `--ff-body`  | `'Inter'`               | Body text font         |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Opens at → **http://localhost:5173**

### 3. Build for production

```bash
npm run build
```

Output goes to `dist/`

### 4. Preview production build locally

```bash
npm run preview
```

---

## 🌐 Deployment

### ▶ Vercel (recommended)

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — drag & drop
# Go to vercel.com → New Project → Import from GitHub
```

### ▶ Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### ▶ GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

---

## ✏️ Customisation

| What to change         | Where                                         |
|------------------------|-----------------------------------------------|
| Name / bio text        | `src/components/About/About.jsx`              |
| Hero typewriter words  | `src/components/Hero/Hero.jsx` → `useTypewriter([...])` |
| Projects list          | `src/components/Projects/Projects.jsx` → `PROJECTS` array |
| Experience / timeline  | `src/components/Experience/Experience.jsx` → `TIMELINE` array |
| Contact links          | `src/components/Contact/Contact.jsx` → `LINKS` array |
| Profile photo          | Replace `src/assets/profile.jpeg`             |
| Color palette          | `src/styles/global.css` → `:root` variables  |
| Fonts                  | `index.html` Google Fonts link + `global.css` `--ff-*` |

---

## 📝 License

MIT — feel free to fork, adapt, and make it yours.

---

صُنع بـ ❤️ في الجزائر · © 2026 Fadi Medkour
