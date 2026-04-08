# 🚀 Fadi Medkour — Portfolio v5

> React 18 + Vite · Bilingual EN/AR · EmailJS · Custom cursor · Loading screen · Particles · Toast

📧 **Email:** twwityh@gmail.com

---

## 📁 Full Structure

```
portfolio/
├── .gitignore
├── README.md
├── index.html           ← Meta + Cairo font (Arabic)
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx          ← LangContext + all providers
    ├── i18n.js          ← EN + AR translations
    ├── styles/
    │   └── global.css   ← Design system + RTL + cursor:none
    ├── hooks/
    │   ├── useLang.js        ← Language + RTL dir switcher
    │   ├── useMouseTilt.js   ← 3D card tilt effect
    │   ├── useScrollReveal.js
    │   └── useTypewriter.js
    ├── assets/
    │   ├── profile.jpeg
    │   └── svg/         ← 12 clean-named tech icons
    └── components/
        ├── UI/
        │   ├── MouseFollower.jsx + .css   ← Custom dual cursor
        │   ├── LoadingScreen.jsx + .css   ← Animated intro screen
        │   ├── Particles.jsx              ← Canvas particle network
        │   ├── Toast.jsx + .css           ← Notification system
        │   └── BackToTop.jsx + .css       ← Circular progress button
        ├── Navbar/   ← Progress bar + EN|AR toggle + smooth hover
        ├── Hero/     ← Clean photo + parallax + skills row + ticker
        ├── About/    ← Clean photo + 3D tilt + facts + skill bars
        ├── Experience/ ← Split list+panel interaction
        ├── Skills/   ← Tabs + glow animated bars
        ├── Projects/ ← 3D tilt + ripple + filter tabs
        ├── Contact/  ← EmailJS + validation + toast feedback
        └── Footer/   ← Wave SVG + built-with SVGs
```

---

## 🖱️ Interactive Features

| Feature | Component |
|---|---|
| Custom dual cursor (dot + ring) | MouseFollower |
| Loading screen with progress | LoadingScreen |
| Particle network canvas | Particles |
| Toast notifications (success/error) | Toast |
| Scroll progress + back to top | Navbar / BackToTop |
| EN ↔ AR language switch + RTL | Navbar / useLang |
| Mouse parallax on Hero photo | Hero |
| 3D tilt on project cards | useMouseTilt |
| 3D tilt on About photo | useMouseTilt |
| Tech ticker strip | Hero |
| Animated typewriter role | useTypewriter |
| Animated counters | Hero / About |
| Animated skill bars | About / Skills |
| Mini skill bars in About | About |
| Tabs in Skills section | Skills |
| Filter + count in Projects | Projects |
| Ripple click on cards | Projects |
| Form validation + live clear | Contact |
| Char counter in message | Contact |

---

## 📧 Setup EmailJS

1. **https://emailjs.com** → free account
2. Add Gmail service → copy `SERVICE_ID`
3. Create template with `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Account → API Keys → copy `PUBLIC_KEY`
5. Edit `src/components/Contact/Contact.jsx`:

```js
const EMAILJS_SERVICE  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID'
const EMAILJS_KEY      = 'YOUR_PUBLIC_KEY'
```

---

## 🚀 Run

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → dist/
```

## 🌐 Deploy (Vercel)

```bash
npm i -g vercel && vercel
```

---

## ✏️ Customise

| What | File |
|---|---|
| All text (EN+AR) | `src/i18n.js` |
| EmailJS keys | `src/components/Contact/Contact.jsx` |
| Projects list | `src/components/Projects/Projects.jsx` → `PROJECTS` |
| Timeline | `src/components/Experience/Experience.jsx` → `TL_EN / TL_AR` |
| Colors | `src/styles/global.css` → `:root` |
| Photo | Replace `src/assets/profile.jpeg` |

---

صُنع بـ ❤️ في الجزائر · © 2026 Fadi Medkour | twwityh@gmail.com
