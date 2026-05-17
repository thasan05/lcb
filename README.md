# LinkedIn Community BD Website

Premium, community-driven landing experience built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, and dark/light theming.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm run start
```

## Project structure

- `app/layout.tsx` – global layout, metadata, providers.
- `app/page.tsx` – all homepage sections (hero, stats, about, events, testimonials, team, gallery, partners, benefits, FAQ, CTA, footer).
- `app/globals.css` – design tokens/utilities (glass, gradients, section container).
- `components/theme-provider.tsx` – next-themes wrapper.
- `components/site-chrome.tsx` – scroll progress and theme switcher.
- `lib/utils.ts` – className utility helper.

## Where to edit content

- Headline, section text, stats, event/testimonial/team data: `app/page.tsx`.
- Brand colors, shared styles, spacing helpers, glow/glass effects: `app/globals.css` and `tailwind.config.ts`.
- SEO title/description: `app/layout.tsx` metadata.

## Deployment

Optimized for Vercel: import repository and deploy with default Next.js settings.
