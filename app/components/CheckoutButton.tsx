"use client";

import { useState, type ReactNode } from "react";
import type { PlanId } from "../lib/stripe";

type Props = {
  plan: PlanId;
  /** Shown when Stripe Checkout is not configured server-side. */
  fallbackHref: string;
  className?: string;
  children: ReactNode;
};

/**
 * Starts a Stripe Checkout Session via POST /api/checkout.
 * Falls back to `fallbackHref` when the server reports unconfigured.
 */
export default function CheckoutButton({ plan, fallbackHref, className, children }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = (await res.json()) as { ok: boolean; url?: string; error?: string };
      if (data.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      if (res.status === 503) {
        // Not configured — use the graceful fallback (audit form / booking).
        window.location.href = fallbackHref;
        return;
      }
      setError(data.error ?? "Could not start checkout.");
    } catch {
      setError("Could not start checkout — please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <span className="inline-flex w-full flex-col sm:w-auto">
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        aria-label={loading ? "Redirecting to secure checkout" : "Continue to secure checkout"}
        className={className}
      >
        {loading ? "Redirecting…" : children}
      </button>
      {error && (
        <span role="alert" className="mt-2 text-center text-xs text-red-600 dark:text-red-400">
          {error}
        </span>
      )}
    </span>
  );
}
