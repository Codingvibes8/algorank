import { NextResponse } from "next/server";
import { getStripe, priceIdFor, type PlanId } from "@/app/lib/stripe";

const PLANS: Record<PlanId, { mode: "payment" | "subscription" }> = {
  pilot: { mode: "payment" },
  "growth-monthly": { mode: "subscription" },
  "growth-quarterly": { mode: "subscription" },
};

function isPlanId(value: unknown): value is PlanId {
  return (
    value === "pilot" ||
    value === "growth-monthly" ||
    value === "growth-quarterly"
  );
}

function baseUrl(req: Request): string {
  const configured = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");
  const origin = new URL(req.url).origin;
  return origin;
}

export async function POST(req: Request) {
  let plan: unknown;
  try {
    plan = ((await req.json()) as { plan?: unknown }).plan;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!isPlanId(plan)) {
    return NextResponse.json({ ok: false, error: "Unknown plan." }, { status: 400 });
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { ok: false, error: "Checkout is not configured yet — please book a call and we'll set you up manually." },
      { status: 503 },
    );
  }

  const price = priceIdFor(plan);
  if (!price) {
    return NextResponse.json(
      { ok: false, error: "That plan is not on sale online yet — please book a call instead." },
      { status: 503 },
    );
  }

  const origin = baseUrl(req);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: PLANS[plan].mode,
      line_items: [{ price, quantity: 1 }],
      success_url: `${origin}/?checkout=success&plan=${plan}`,
      cancel_url: `${origin}/?checkout=cancelled`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      metadata: { plan, site: "algorank" },
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }
    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    console.error("Stripe checkout failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not start checkout — please try again shortly." },
      { status: 500 },
    );
  }
}
