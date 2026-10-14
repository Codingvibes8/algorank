import Stripe from "stripe";

let cached: Stripe | null = null;

/** Server-only Stripe client. Returns null when STRIPE_SECRET_KEY is unset. */
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return null;
  if (!cached) {
    cached = new Stripe(key);
  }
  return cached;
}

export type PlanId = "pilot" | "growth-monthly" | "growth-quarterly";

const PRICE_ENV: Record<PlanId, string> = {
  pilot: "STRIPE_PILOT_PRICE_ID",
  "growth-monthly": "STRIPE_GROWTH_MONTHLY_PRICE_ID",
  "growth-quarterly": "STRIPE_GROWTH_QUARTERLY_PRICE_ID",
};

/** Resolve the configured Price ID for a plan, or null when unconfigured. */
export function priceIdFor(plan: PlanId): string | null {
  const id = process.env[PRICE_ENV[plan]]?.trim();
  return id && id.startsWith("price_") ? id : null;
}

export function isStripeCheckoutConfigured(): boolean {
  return (
    !!process.env.STRIPE_SECRET_KEY?.trim() &&
    priceIdFor("pilot") !== null
  );
}
