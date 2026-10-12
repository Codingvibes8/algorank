"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How does Algorank track AI citations?",
    a: "Each week we run your 25 custom prompts (built around how UK buyers actually ask) across ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews. Every brand mention and citation is logged, deduplicated and benchmarked against your competitors. Results land in your inbox every Monday at 7am GMT.",
  },
  {
    q: "How long until I see my first report?",
    a: "Your first report lands within 72 hours of onboarding. The 8-week pilot is designed to show movement by week 2–3, with compounding gains as we implement content and technical fixes each week.",
  },
  {
    q: "Which AI platforms do you track?",
    a: "ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews. That's where the overwhelming majority of UK B2B and consumer AI-search queries happen. We deliberately don't spread thin across 10+ niche tools.",
  },
  {
    q: "Do you just report, or do you do the work?",
    a: "Both. Unlike self-serve GEO tools, every Algorank retainer includes implementation: technical fixes, new content, schema, digital PR and review strategy — done by our London team, not left on your to-do list.",
  },
  {
    q: "How many competitors can I track?",
    a: "Pilot includes 2 competitors, Growth includes 3. Scale plans support unlimited competitors and multiple markets. You can swap a competitor once per month as your landscape changes.",
  },
  {
    q: "Can I upgrade from Pilot to Retainer?",
    a: "Yes — your £249 pilot fee is credited against your first retainer quarter. Most pilot clients roll straight onto Growth at the locked founding rate of £490/mo.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. The pilot carries a full satisfaction refund, and retainers include a 14-day money-back guarantee. After that, you can cancel anytime after the initial 3 months with 30 days' notice.",
  },
  {
    q: "Is my data secure and GDPR compliant?",
    a: "Fully. We're a UK-registered company, data is hosted in the EU/UK on Supabase and Google Cloud, and we sign DPAs on Scale plans. We never sell data or train models on your confidential prompts.",
  },
  {
    q: "What if I'm not mentioned at all yet?",
    a: "That's normal — most UK brands start at zero. The audit shows exactly why competitors get cited instead, and the pilot roadmap is built to earn your first citations within weeks, not months.",
  },
  {
    q: "Do you still do traditional Google SEO?",
    a: "Absolutely. AI visibility compounds classic SEO: technical health, content depth and authoritative mentions help you in both Google's blue links and AI answers. Every plan covers both.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/10 bg-ink-900/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-[15px] text-zinc-400">
            Everything you need to know about working with Algorank.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen ? "border-brand-500/40 bg-white/[0.04]" : "border-white/10 bg-ink-950"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-semibold text-white">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-lime-pop text-ink-950" : "bg-white/10 text-white"
                    }`}
                  >
                    <Plus className={`h-4 w-4 transition-transform ${isOpen ? "rotate-45" : ""}`} />
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
