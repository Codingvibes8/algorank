import { ArrowRight } from "lucide-react";
import { hasStripePilot, pilotHref } from "../lib/site";

export default function Cta() {
  return (
    <section id="cta" className="scroll-mt-36">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid-pattern relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-brand-600/15 via-white to-white px-6 py-14 text-center shadow-sm sm:px-12 sm:py-20 dark:border-white/10 dark:from-brand-600/30 dark:via-ink-900 dark:to-ink-950 dark:shadow-none">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[100px] dark:bg-brand-500/40"
          />
          <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-lime-pop">
            October intake · 4 slots left
          </p>
          <h2 className="text-balance relative mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink-950 sm:text-5xl dark:text-white">
            Ready to see how you rank in AI search?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-[15px] text-zinc-600 dark:text-zinc-300">
            Join UK brands already in the pilot. Free AI visibility audit (£299
            value) with every pilot this month.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={pilotHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-pop px-7 py-3.5 text-[15px] font-bold text-ink-950 transition hover:brightness-105 sm:w-auto"
            >
              {hasStripePilot ? "Start pilot — £249" : "Get your free audit"}{" "}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#book"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/20 bg-white/60 px-7 py-3.5 text-[15px] font-semibold text-ink-950 transition hover:bg-white sm:w-auto dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Book a discovery call
            </a>
          </div>
          <p className="relative mt-5 text-[13px] text-zinc-500 dark:text-zinc-400">
            No commitment · Start in 3 days · Cancel anytime after 3 months
          </p>
        </div>
      </div>
    </section>
  );
}
