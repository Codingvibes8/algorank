import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/app/lib/stripe";

/**
 * POST /api/stripe/webhook
 * Verifies the Stripe signature and acknowledges checkout completion.
 * Extend the `checkout.session.completed` branch to fulfil orders
 * (e.g. insert into Supabase, send onboarding email).
 */
export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  const stripe = getStripe();

  if (!stripe || !webhookSecret) {
    return NextResponse.json({ ok: false, error: "Webhook not configured." }, { status: 503 });
  }
  if (!signature) {
    return NextResponse.json({ ok: false, error: "Missing signature." }, { status: 400 });
  }

  const payload = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature failed:", err);
    return NextResponse.json({ ok: false, error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.info("Checkout completed:", {
      id: session.id,
      plan: session.metadata?.plan,
      customer: session.customer,
      subscription: session.subscription,
    });
    // TODO: fulfil — e.g. write to Supabase `orders` table / send welcome email.
  }

  return NextResponse.json({ ok: true, received: event.type });
}
