/**
 * Conversion configuration.
 *
 * All payment / booking URLs are env-driven so nothing is hardcoded in
 * components. Empty string = placeholder mode with graceful fallbacks:
 *  - Pilot CTA falls back to the audit form (#audit)
 *  - Booking section shows an email fallback card
 *
 * Required setup (see .env.example):
 *  NEXT_PUBLIC_STRIPE_PILOT_URL  Stripe Payment Link for the £249 pilot.
 *    In the link's settings set "after payment" redirect to
 *    https://algorank.co.uk/?pilot=success
 *  NEXT_PUBLIC_CAL_URL           Cal.com / Calendly scheduling URL.
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
