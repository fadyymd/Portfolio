# 🚀 Fadi Medkour — Portfolio v4

> React 18 + Vite · Bilingual EN/AR · EmailJS · Dark cinematic · Fully interactive

📧 **Email:** twwityh@gmail.com

---

## 📁 Structure

```
portfolio/
├── index.html             ← Meta tags + Cairo font (Arabic)
├── package.json · vite.config.js · .gitignore
└── src/
    ├── App.jsx            ← LangContext provider
    ├── i18n.js            ← All EN + AR translations
    ├── styles/global.css  ← Tokens · keyframes · RTL rules
    ├── hooks/
    │   ├── useLang.js         ← Language + RTL switcher
    │   ├── useScrollReveal.js
    │   └── useTypewriter.js
    ├── assets/
    │   ├── profile.jpeg
    │   └── svg/ (12 clean names)
    └── components/
        ├── UI/CursorGlow.jsx
        ├── Navbar/   ← Scroll progress + EN|AR toggle
        ├── Hero/     ← Parallax · ticker · 4 float cards
        ├── About/    ← Hover pills · facts grid
        ├── Experience/ ← Split list+panel
        ├── Skills/   ← Tabs + glow bars
        ├── Projects/ ← Filter + ripple click
        ├── Contact/  ← EmailJS + validation + char counter
        └── Footer/   ← Wave SVG
```

---

## 🌍 Bilingual EN / AR

Click **EN | AR** in the navbar to switch languages. The entire site switches including:
- All UI text (nav, sections, buttons, forms)
- Arabic typewriter roles in Hero
- RTL layout (direction flips, corners mirror, animations adapt)
- Arabic font (Cairo) auto-loaded

---

## 📧 Setup EmailJS (real email delivery)

1. Go to **https://www.emailjs.com** → create free account
2. Add an **Email Service** (Gmail recommended) → copy `SERVICE_ID`
3. Create an **Email Template** with these variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   Body: {{message}}
   To: twwityh@gmail.com
   ```
4. Go to **Account → API Keys** → copy `PUBLIC_KEY`
5. Open `src/components/Contact/Contact.jsx` and replace:
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
| Translations | `src/i18n.js` |
| EmailJS keys | `src/components/Contact/Contact.jsx` |
| Projects | `src/components/Projects/Projects.jsx` → `PROJECTS` |
| Timeline | `src/components/Experience/Experience.jsx` → `TL_EN` / `TL_AR` |
| Colors | `src/styles/global.css` → `:root` |
| Photo | Replace `src/assets/profile.jpeg` |

---

صُنع بـ ❤️ في الجزائر · © 2026 Fadi Medkour | twwityh@gmail.com
