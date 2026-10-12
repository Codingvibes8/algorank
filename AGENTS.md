# AGENTS.md — Algorank

> London-based AI SEO agency site targeting the UK market. Next.js App Router + TypeScript + Tailwind CSS v4.

## Stack

- Next.js 16 (App Router, Turbopack, static prerender), React 19, TypeScript 5
- Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` tokens in `app/globals.css`)
- `lucide-react` for icons. No other UI/component libraries.
- ESLint 9 + `eslint-config-next`. No test runner configured.

## Commands

```powershell
npm run dev    # local dev (Turbopack)
npm run build  # production build — must pass before push
npm run start  # serve production build
npm run lint   # eslint
```

Run commands with `workdir: C:\Users\Owner\Desktop\algorank`. PowerShell — no `&&` chaining, no `head`.

## Structure

```text
app/
  layout.tsx            # Root layout, Geist fonts, en-GB metadata + OpenGraph
  globals.css           # Tailwind import, @theme tokens, shared utilities
  page.tsx              # Home — composes section components in order
  components/
    Navbar.tsx          # Fixed nav + October intake banner (client)
    Hero.tsx            # Headline, CTAs, Monday-briefing mock card (server)
    Stats.tsx           # 43% / 87% / 4.4x shift band (server)
    HowItWorks.tsx      # 3-step process (server)
    Comparison.tsx      # Other tools vs Algorank (server)
    Services.tsx        # 6-card service grid (server)
    Pricing.tsx         # Pilot / Growth / Scale + monthly-quarterly toggle (client)
    Testimonials.tsx    # 3 UK testimonials (server)
    Faq.tsx             # 10-item accordion, first item open (client)
    Cta.tsx             # Final CTA panel (server)
    Footer.tsx          # Shoreditch address, legal (server)
public/                 # Static assets (Next defaults only)
```

## Conventions

- **Server by default.** Add `"use client"` only for interactivity (`Navbar` mobile menu + scroll state, `Pricing` billing toggle, `Faq` accordion).
- **Styling:** Tailwind utilities only. Theme tokens: `ink-950/900/800`, `brand-400/500/600`, `lime-pop`, `paper`. Dark navy base (`bg-ink-950`), white text, lime accents. Reuse `grid-pattern` and `animate-float-slow` from `globals.css`.
- **Copy rules (UK):** British English (optimise, organisation, personalised, behaviour), £ GBP prices ex VAT, GMT time references, `google.co.uk` context, London/UK place names. Never use `$` or US spelling in user-facing copy.
- **Pricing facts:** Pilot £249 one-off · Growth £490/mo (10% off quarterly) · Scale custom. Founding rate locked; regular £890/mo after intake. 14-day money-back, cancel after 3 months.
- **Contact facts:** 128 Shoreditch High Street, London E1 6PG · hello@algorank.co.uk · +44 20 7946 0821.
- **Components:** default exports, props typed inline or via `type`. Keep sections self-contained with local data arrays (see `Pricing.tsx` `Plan` type as the pattern). Anchor ids: `top, how, why, services, pricing, faq, cta`.
- **Accessibility:** every toggle/menu button needs `aria-label`; keep semantic `section/article/figure` structure.

## Verification

- After any change: `npm run build` must compile with no TS/ESLint errors.
- Manually check anchors (`#how #why #services #pricing #faq #cta`) and mobile menu at 360px width.
- Do not add dependencies without asking. Do not create new top-level routes unless requested — single landing page.

## Git

- Branch `main`, remote `https://github.com/Codingvibes8/algorank.git`.
- Commit messages: short imperative, e.g. `Add quarterly toggle to pricing`.
