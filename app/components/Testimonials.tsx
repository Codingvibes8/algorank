import { Star, Quote } from "lucide-react";

const items = [
  {
    quote:
      "We went from zero mentions to being cited in 1 of every 4 ChatGPT answers in our category. The Monday emails tell our content writer exactly what to do.",
    name: "Amelia Hart",
    role: "Founder, Loopwork — SaaS, Manchester",
  },
  {
    quote:
      "Traditional SEO took us 9 months to move. Algorank's pilot showed AI visibility in week two, and two enterprise demos cited ChatGPT as the source.",
    name: "Daniel Okafor",
    role: "CMO, BrightLedger — Fintech, London",
  },
  {
    quote:
      "Finally an agency that understands google.co.uk properly. Local packs, reviews, AI Overviews — all up. Genuinely feels like an in-house team.",
    name: "Sophie Bennett",
    role: "Director, Bloom & Birch — E-commerce, Bristol",
  },
];

export default function Testimonials() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            UK clients
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
            Loved by founders from Shoreditch to Manchester
          </h2>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-lime-pop text-lime-pop" />
              ))}
            </span>
            4.9/5 from 60+ UK brands
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
            >
              <Quote className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-black/10 pt-4 dark:border-white/10">
                <p className="text-sm font-bold text-ink-950 dark:text-white">{t.name}</p>
                <p className="text-[13px] text-zinc-500 dark:text-zinc-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
