# 🚀 Fadi Medkour — Portfolio v3

> Professional portfolio built with **React 18 + Vite** — dark cinematic design, rich interactivity, fully responsive.

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
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css          ← Design tokens, keyframes, utilities
    ├── hooks/
    │   ├── useScrollReveal.js  ← Staggered scroll animations
    │   └── useTypewriter.js    ← Animated role cycling
    ├── assets/
    │   ├── profile.jpeg
    │   └── svg/                ← 12 short-named tech icons
    │       html.svg · css.svg · js.svg · react.svg · tailwind.svg
    │       nodejs.svg · mongodb.svg · mysql.svg
    │       git.svg · github.svg · figma.svg · illustrator.svg
    └── components/
        ├── UI/CursorGlow.jsx           ← Mouse-following glow
        ├── Navbar/ (jsx + css)         ← Scroll progress bar, numbered mobile menu
        ├── Hero/   (jsx + css)         ← Mouse parallax, tech ticker, 4 floating cards
        ├── About/  (jsx + css)         ← Hover-reveal tech pills, facts grid
        ├── Experience/ (jsx + css)     ← List+panel split layout, animated
        ├── Skills/     (jsx + css)     ← Tab switcher, glow progress bars, icon grid
        ├── Projects/   (jsx + css)     ← Filter tabs, ripple click, hover overlay
        ├── Contact/    (jsx + css)     ← Live validation, animated input borders
        └── Footer/     (jsx + css)     ← Wave divider, SVG built-with
```

---

## ✨ Interactive Features

| Feature | Component |
|---|---|
| Scroll progress bar (top) | Navbar |
| Numbered mobile menu | Navbar |
| Mouse parallax on hero photo | Hero |
| Animated tech ticker strip | Hero |
| 4 floating cards (stats, React, Node, passion) | Hero |
| Hover-reveal tech pills on photo | About |
| Stats & facts floating card | About |
| List + animated detail panel | Experience |
| Category tab switcher | Skills |
| Glow progress bars (re-animate on tab switch) | Skills |
| Project filter with count badges | Projects |
| Ripple click effect on project cards | Projects |
| Form with real-time validation | Contact |
| Animated input underline on focus | Contact |
| Availability + response stats | Contact |
| Wave SVG footer divider | Footer |
| Scroll-staggered reveals everywhere | Global |
| Cursor glow (scales on hover) | Global |

---

## 🎨 Design Tokens

```css
--blue:   #1560f0   --cyan:  #00d4ff   --purple: #7c3aed
--gold:   #f0b429   --green: #10b981   --bg:     #02050d
--t1:     #eef3ff   --t2:    #6b82a0   --t3:     #253650
--ff-d: 'Syne'   --ff-m: 'Space Mono'   --ff-b: 'Inter'
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview build locally
```

## 🌐 Deploy on Vercel

```bash
npm i -g vercel && vercel
# Or: push to GitHub → import on vercel.com
```

---

## ✏️ Quick Customisation

| What | File |
|---|---|
| Name, bio, chips | `src/components/About/About.jsx` |
| Typewriter roles | `src/components/Hero/Hero.jsx` → `useTypewriter([...])` |
| Projects | `src/components/Projects/Projects.jsx` → `PROJECTS` array |
| Timeline | `src/components/Experience/Experience.jsx` → `TIMELINE` array |
| Contact links | `src/components/Contact/Contact.jsx` → `SOCIALS` array |
| Profile photo | Replace `src/assets/profile.jpeg` |
| Colors | `src/styles/global.css` → `:root` variables |

---

صُنع بـ ❤️ في الجزائر · © 2026 Fadi Medkour
