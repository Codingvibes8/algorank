/**
 * Conversion configuration.
 *
 * Checkout is served by POST /api/checkout (Stripe Checkout Sessions,
 * price IDs in STRIPE_*_PRICE_ID). The legacy Stripe Payment Link
 * (NEXT_PUBLIC_STRIPE_PILOT_URL) remains as a fallback if set.
 *
 * Empty / unconfigured = graceful fallbacks:
 *  - Pilot CTA falls back to the audit form (#audit)
 *  - Booking section shows an email fallback card
 *
 * Required setup (see .env.example):
 *  STRIPE_SECRET_KEY               Secret key (server only, test or live).
 *  STRIPE_PILOT_PRICE_ID           price_… for the £249 pilot (one-off).
 *  STRIPE_GROWTH_MONTHLY_PRICE_ID  price_… for £490/mo Growth retainer.
 *  STRIPE_GROWTH_QUARTERLY_PRICE_ID price_… for quarterly Growth (£1,323/3mo).
 *  STRIPE_WEBHOOK_SECRET           Signing secret for /api/stripe/webhook.
 *  NEXT_PUBLIC_STRIPE_PILOT_URL    Optional legacy Stripe Payment Link.
 *  NEXT_PUBLIC_CAL_URL             Cal.com / Calendly scheduling URL.
 *  SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY  Audit form storage (server only).
 */

export const SITE = {
  email: "hello@algorank.co.uk",
  phone: "+44 20 7946 0821",
  stripePilotUrl: process.env.NEXT_PUBLIC_STRIPE_PILOT_URL?.trim() ?? "",
  calUrl: process.env.NEXT_PUBLIC_CAL_URL?.trim() ?? "",
} as const;

export const hasStripePilot = SITE.stripePilotUrl.startsWith("https://");
export const hasCal = SITE.calUrl.startsWith("https://");

/** Where the Pilot plan CTA should point. */
export const pilotHref = hasStripePilot ? SITE.stripePilotUrl : "#audit";
