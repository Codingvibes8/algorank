"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { pilotHref } from "../lib/site";

/**
 * Shows a one-off banner after Stripe redirects back.
 * Configure the Payment Link: after payment → ?pilot=success,
 * on cancel → ?pilot=cancelled.
 */
export default function CheckoutStatus() {
  const params = useSearchParams();
  const state = params.get("pilot");

  if (state === "success") {
    return (
      <div className="px-4 pt-28 sm:pt-32">
        <div className="mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border border-lime-pop/50 bg-lime-pop/10 p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-pop" />
          <div>
            <p className="font-bold text-ink-950 dark:text-white">
              Payment received — welcome to the pilot
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Your first report lands within 72 hours. Meanwhile,{" "}
              <a href="#audit" className="font-semibold underline underline-offset-4">
                send us your competitors
              </a>{" "}
              so we can start tracking immediately.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (state === "cancelled") {
    return (
      <div className="px-4 pt-28 sm:pt-32">
        <div className="mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
          <RotateCcw className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />
          <div>
            <p className="font-bold text-ink-950 dark:text-white">
              Checkout cancelled — no charge made
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Your slot is still held.{" "}
              <a
                href={pilotHref}
                className="font-semibold underline underline-offset-4"
              >
                Try again
              </a>{" "}
              or{" "}
              <a href="#book" className="font-semibold underline underline-offset-4">
                book a call
              </a>{" "}
              if you have questions first.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
