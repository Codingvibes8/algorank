# agent.md — Algorank

> London AI SEO agency landing page. Single-page Next.js site targeting the UK market.
> Source of truth for project rules: `AGENTS.md`.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 5
- Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` in `app/globals.css`)
- `lucide-react`, `next-themes`, `stripe` (server only). No other UI libraries.
- ESLint 9 + `eslint-config-next`. No test runner.

## Commands

```powershell
npm run dev    # local dev (Turbopack)
npm run build  # must pass before push
npm run lint   # eslint
```

PowerShell, `workdir: C:\Users\Owner\Desktop\algorank`. No `&&` chaining, no `head`.

## Structure

```text
app/
  page.tsx              # Home — section order lives here
  components/           # One file per landing section (server by default)
    Pricing.tsx         # Pilot / Growth / Scale + quarterly toggle (client, uses CheckoutButton)
    CheckoutButton.tsx  # POSTs to /api/checkout, falls back to audit/booking (client)
    CheckoutStatus.tsx  # ?checkout=success/cancelled banner (client, Suspense in page.tsx)
    Cta.tsx             # Final CTA panel (server)
  lib/
    site.ts             # Public conversion config (env-driven, no secrets)
    stripe.ts           # Server-only Stripe client + price-ID resolution
  api/
    audit/route.ts      # Audit intake: validate, honeypot, rate-limit, Supabase
    checkout/route.ts   # Stripe Checkout Sessions: POST {plan}
    stripe/webhook/route.ts  # Verified webhook, logs checkout.session.completed
```

## Rules

- Server components by default; `"use client"` only for interactivity.
- Tailwind utilities only; tokens `ink-950/900/800`, `brand-400/500/600`, `lime-pop`, `paper`.
- UK copy: British English, £ ex VAT, GMT, London place names. Never `$` or US spelling.
- Facts: Pilot £249 one-off · Growth £490/mo (quarterly £1,323/3mo) · 14-day refund, cancel after 3 months.
- Contact: 128 Shoreditch High Street, London E1 6PG · hello@algorank.co.uk · +44 20 7946 0821.
- Never hardcode payment/booking URLs; never expose `STRIPE_SECRET_KEY` or `SUPABASE_SERVICE_ROLE_KEY` client-side.
- Stripe test IDs (sandbox): pilot `price_1UQbX2ROID58K8APnbxNc7b1`, monthly `price_1UQbYBROID58K8APcit3a3mK`, quarterly `price_1UQbYEROID58K8APkrercTQA`.

## Verification

- `npm run build` must pass after any change.
- Check anchors (`#how #why #services #pricing #faq #cta`) and 360px mobile menu.
- No new dependencies or top-level routes without asking.
