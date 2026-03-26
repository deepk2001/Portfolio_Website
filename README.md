# Deep Kotecha — Portfolio

A modern, dark-themed portfolio built with **Next.js 14**, featuring:
- Animated particle hero with canvas
- Smooth section reveals
- Fully responsive design
- Tech-noir aesthetic with cyan accents

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules + Google Fonts (Syne + Space Mono)
- **Animation**: CSS animations + Canvas API
- **Deployment**: Vercel

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts — it auto-detects Next.js and deploys instantly.

### Option 2: GitHub + Vercel Dashboard

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Click **Deploy** — done! ✅

Vercel auto-deploys on every push to `main`.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main page — assembles all sections
│   └── globals.css      # Design system & global styles
├── components/
│   ├── Navbar.tsx/css
│   ├── Hero.tsx/css      # Particle canvas hero
│   ├── About.tsx/css
│   ├── Experience.tsx/css
│   ├── Projects.tsx/css
│   ├── Research.tsx/css
│   ├── Skills.tsx/css
│   ├── Contact.tsx/css
│   └── Footer.tsx/css
└── lib/
    └── data.ts           # ← All resume content lives here
```

## ✏️ Customization

All portfolio content is centralized in **`src/lib/data.ts`**.
To update your info, edit that file — everything else updates automatically.

To change colors, edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --bg: #080a0f;        /* background */
  --cyan: #00d4ff;      /* accent color */
  --white: #f0f4f8;     /* text color */
}
```
