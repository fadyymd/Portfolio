# 🚀 Fadi Medkour — Portfolio v2

> Personal portfolio built with **React 18 + Vite** — dark cinematic design, rich animations, interactive components, fully responsive.

---

## 📁 Project Structure

```
portfolio/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                      ← React root
    ├── App.jsx                       ← Root component
    │
    ├── styles/
    │   └── global.css                ← Design system, tokens, keyframes
    │
    ├── hooks/
    │   ├── useScrollReveal.js        ← IntersectionObserver scroll animations
    │   └── useTypewriter.js          ← Animated typewriter effect
    │
    ├── assets/
    │   ├── profile.jpeg              ← Profile photo
    │   └── svg/                      ← 12 original tech SVG icons
    │
    └── components/
        ├── UI/
        │   └── CursorGlow.jsx        ← Smooth cursor light trail
        │
        ├── Navbar/                   ← Sticky nav + mobile hamburger
        ├── Hero/                     ← Typewriter + tech ticker + floating cards
        ├── About/                    ← Profile + chips + SVG tech pills
        ├── Experience/               ← Accordion timeline (click to expand)
        ├── Skills/                   ← Tab switcher + animated progress bars
        ├── Projects/                 ← Filter tabs + hover overlays + SVG tags
        ├── Contact/                  ← Validated form + social links
        └── Footer/                   ← Multi-column footer with SVG built-with
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Typewriter** | Animated role cycling in hero |
| **Tech Ticker** | Auto-scrolling SVG icon strip |
| **Floating Cards** | Animated stats, React badge on hero photo |
| **Scroll Reveal** | Staggered entrance for every section |
| **Cursor Glow** | Smooth radial light following the mouse |
| **Experience Accordion** | Click to expand/collapse timeline items |
| **Skills Tabs** | Category switcher with animated progress bars |
| **Project Filter** | Filter projects by category (All / Full Stack / Frontend / Backend) |
| **Form Validation** | Real-time error messages on contact form |
| **Availability Badge** | Live green dot in contact section |
| **Responsive** | Mobile-first, works on all screen sizes |

---

## 🎨 Design Tokens

```css
--blue:   #1560f0   /* Primary accent  */
--cyan:   #00d4ff   /* Secondary glow  */
--purple: #7c3aed   /* Tertiary accent */
--gold:   #f0b429   /* Code highlights */
--bg:     #03060e   /* Page background */
--t1:     #eef3ff   /* Primary text    */
--ff-d:   'Syne'    /* Display font    */
--ff-m:   'Space Mono' /* Code font   */
--ff-b:   'Inter'   /* Body font       */
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deploy on Vercel

```bash
# Option A — CLI
npm i -g vercel
vercel

# Option B — GUI
# Push to GitHub → Import on vercel.com → Deploy ✅
```

---

## ✏️ Customise

| What | Where |
|---|---|
| Your name / bio | `src/components/About/About.jsx` |
| Typewriter words | `src/components/Hero/Hero.jsx` → `useTypewriter([...])` |
| Projects list | `src/components/Projects/Projects.jsx` → `PROJECTS` array |
| Timeline items | `src/components/Experience/Experience.jsx` → `TIMELINE` array |
| Contact links | `src/components/Contact/Contact.jsx` → `SOCIALS` array |
| Profile photo | Replace `src/assets/profile.jpeg` |
| Colors | `src/styles/global.css` → `:root` variables |

---

صُنع بـ ❤️ في الجزائر · © 2026 Fadi Medkour
