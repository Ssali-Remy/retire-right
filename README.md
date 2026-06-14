# Retire Right Advisory

A premium, modern marketing website for **Retire Right Advisory** — helping individuals and organizations build financial security, discover purpose, and enjoy a fulfilling retirement.

> **Plan Today. Thrive Tomorrow.**

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom brand design system
- **next/font** (Inter + Plus Jakarta Sans) and **next/image**
- Zero runtime UI dependencies — all icons and animations are hand-built

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm run start   # production build
```

## Features

- **Sticky navigation** with scroll-aware styling, mobile menu, and **dark mode** (no flash, persisted)
- **Hero** with brand headline, dual CTAs, floating stat cards, and trust strip
- **About** with mission and five core values (Security, Growth, Purpose, Wellness, Community)
- **Services** — Retirement Planning, Investment Advisory, Lifestyle & Interest Assessment, Corporate Programs
- **Interactive Retirement Readiness Quiz** — animated score ring + lifestyle profile suggestions
- **Community**, **Wellness**, **Impact** (animated count-up metrics), and **Life After Retirement** card grid
- **Testimonials carousel** (autoplay + manual controls)
- **Blog** preview grid, **FAQ** accordion, **Newsletter** signup, and a **consultation booking form**
- **Elegant footer** with quick links and social
- Fully **responsive**, **accessible** (skip link, focus states, reduced-motion support), and **SEO-optimized** (metadata, Open Graph, JSON-LD, sitemap, robots)
- Smooth **scroll-reveal** animations and subtle hover effects throughout

## Brand system

| Token | Value | Use |
| --- | --- | --- |
| Navy | `#0F2744` | Trust & stability |
| Emerald | `#2E8B57` | Growth & financial wellbeing |
| Gold | `#D4AF37` | Elegance & success accents |
| Beige / Light gray | `#FAF8F2` | Clean, premium backgrounds |

Defined in `tailwind.config.ts`. Imagery is loaded from Unsplash (configured in `next.config.mjs`).

## Project structure

```
app/            layout, page composition, global styles, robots & sitemap
components/     all section + UI components (Navbar, Hero, Quiz, ... Footer)
```
