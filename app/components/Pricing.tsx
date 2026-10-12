"use client";

import { useState } from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

type Plan = {
  name: string;
  monthly: number | null;
  oneoff: number | null;
  blurb: string;
  cta: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "8-Week Pilot",
    monthly: null,
    oneoff: 249,
    blurb: "Prove it works before you commit. 8 weekly reports, done-for-you fixes.",
    cta: "Start pilot — £249",
    features: [
      "8 weekly personalised reports",
      "First report within 72 hours",
      "15 queries tracked",
      "2 competitor comparison",
      "All 5 AI platforms",
      "2 strategy calls",
      "Full refund if not satisfied",
    ],
    badge: "Limited time",
  },
  {
    name: "Growth Retainer",
    monthly: 490,
    oneoff: null,
    blurb: "Our most popular plan. Tracking + implementation, every single week.",
    cta: "Become a client — £490/mo",
    features: [
      "Everything in Pilot, plus:",
      "Weekly reports, ongoing",
      "25 queries tracked",
      "3 competitor comparison",
      "Content & technical fixes done-for-you",
      "Priority support (Slack)",
      "Cancel after 3 months",
    ],
    badge: "Best value",
    highlight: true,
  },
  {
    name: "Scale / Enterprise",
    monthly: null,
    oneoff: null,
    blurb: "Multi-brand, multi-market or regulated industries. Custom scope, SLA.",
    cta: "Book a call",
    features: [
      "50+ queries & markets",
      "Unlimited competitors",
      "Digital PR & content team",
      "Quarterly board-level reviews",
      "GDPR & data-processing agreement",
      "Dedicated strategist in London",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-36 border-y border-black/10 bg-white dark:border-white/10 dark:bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            Get started
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
            Choose your path
          </h2>
          <p className="mt-2 text-[15px] text-zinc-600 dark:text-zinc-400">
            Start with an 8-week pilot or lock in founding-client pricing. All
            prices ex VAT.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-paper p-1.5 pl-5 text-sm dark:border-white/10 dark:bg-ink-950">
            <span className={!annual ? "font-semibold text-ink-950 dark:text-white" : "text-zinc-500 dark:text-zinc-500"}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual billing"
              className={`relative h-7 w-12 rounded-full transition ${annual ? "bg-lime-pop" : "bg-black/15 dark:bg-white/15"}`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full transition-all ${annual ? "left-6 bg-ink-950" : "left-1 bg-white dark:bg-white"}`}
              />
            </button>
            <span className={annual ? "font-semibold text-ink-950 dark:text-white" : "text-zinc-500 dark:text-zinc-500"}>
              Quarterly <span className="text-lime-pop">−10%</span>
            </span>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.highlight
                  ? "border-lime-pop/50 bg-gradient-to-b from-lime-pop/15 to-white shadow-md dark:border-lime-pop/50 dark:from-lime-pop/10 dark:to-transparent dark:shadow-xl dark:shadow-lime-pop/5"
                  : "border-black/10 bg-paper shadow-sm dark:border-white/10 dark:bg-ink-950 dark:shadow-none"
              }`}
            >
              {p.badge && (
                <span
                  className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                    p.highlight ? "bg-lime-pop text-ink-950" : "bg-ink-950 text-white dark:bg-white/10 dark:text-white"
                  }`}
                >
                  {p.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-ink-950 dark:text-white">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                {p.monthly !== null ? (
                  <>
                    <span className="text-4xl font-bold tracking-tight text-ink-950 dark:text-white">
                      £{annual ? Math.round(p.monthly * 0.9) : p.monthly}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500">/mo{annual ? " · billed quarterly" : ""}</span>
                  </>
                ) : p.oneoff !== null ? (
                  <>
                    <span className="text-4xl font-bold tracking-tight text-ink-950 dark:text-white">£{p.oneoff}</span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500">one-off</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold tracking-tight text-ink-950 dark:text-white">Custom</span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.blurb}</p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-black/10 pt-5 dark:border-white/10">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-pop" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  p.highlight
                    ? "bg-lime-pop text-ink-950 hover:brightness-105 dark:hover:brightness-110"
                    : "bg-ink-950 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-zinc-200"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-zinc-500 dark:text-zinc-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-lime-pop" /> 14-day money-back guarantee
          </span>
          <span>Start within 3 days</span>
          <span>Cancel anytime after 3 months</span>
          <span>Secure payment via Stripe · GBP</span>
        </div>
      </div>
    </section>
  );
}
