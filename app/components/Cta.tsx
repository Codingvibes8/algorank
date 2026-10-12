import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section id="cta" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid-pattern relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-brand-600/30 via-ink-900 to-ink-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/40 blur-[100px]"
          />
          <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-lime-pop">
            October intake · 4 slots left
          </p>
          <h2 className="text-balance relative mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to see how you rank in AI search?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-[15px] text-zinc-300">
            Join UK brands already in the pilot. Free AI visibility audit (£299
            value) with every pilot this month.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@algorank.co.uk?subject=Free%20AI%20visibility%20audit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-pop px-7 py-3.5 text-[15px] font-bold text-ink-950 transition hover:brightness-105 sm:w-auto"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@algorank.co.uk?subject=Pilot%20vs%20Retainer%20—%20which%20is%20right%3F"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Compare plans
            </a>
          </div>
          <p className="relative mt-5 text-[13px] text-zinc-400">
            No commitment · Start in 3 days · Cancel anytime after 3 months
          </p>
        </div>
      </div>
    </section>
  );
}
