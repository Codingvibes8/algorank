import { ArrowRight, BadgeCheck, Inbox, Sparkles, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="grid-pattern relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-40 h-[420px] w-[420px] rounded-full bg-lime-pop/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-zinc-200 backdrop-blur transition hover:border-white/30"
          >
            <Sparkles className="h-3.5 w-3.5 text-lime-pop" />
            AI Search Optimisation · Built for UK brands
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <h1 className="text-balance mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            AI search insights delivered{" "}
            <span className="text-zinc-500">to your inbox.</span>
            <br />
            Rankings <span className="bg-gradient-to-r from-brand-400 to-lime-pop bg-clip-text text-transparent">in ChatGPT.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            No dashboards. No data dumps. No overwhelm. Algorank tracks your brand
            across ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews —
            then tells you exactly what to do every Monday morning.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 sm:w-auto"
            >
              Lock in pilot — £249
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              Monthly from £490/mo
            </a>
          </div>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-[13px] text-zinc-500">
            <ShieldCheck className="h-4 w-4 text-lime-pop" />
            Founding-client rate locked forever · Regular £890/mo after intake closes
          </p>

          {/* mock inbox report card */}
          <div className="animate-float-slow mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-ink-900/80 p-2 text-left shadow-2xl shadow-black/50 backdrop-blur">
            <div className="rounded-xl bg-ink-950/80 p-5 sm:p-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-pop font-bold text-ink-950">
                  <Inbox className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Monday briefing — your AI visibility
                  </p>
                  <p className="text-xs text-zinc-500">
                    Algorank · Every Monday 7:00am GMT · 3 min read
                  </p>
                </div>
                <span className="ml-auto hidden rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 sm:inline">
                  ↑ 12% this week
                </span>
              </div>
              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                {[
                  { k: "You", v: "23 citations", d: "↑ 12%", hot: true },
                  { k: "Competitor A", v: "41 citations", d: "—", hot: false },
                  { k: "Competitor B", v: "18 citations", d: "↓ 4%", hot: false },
                ].map((r) => (
                  <div
                    key={r.k}
                    className={`rounded-xl border p-4 ${
                      r.hot
                        ? "border-lime-pop/40 bg-lime-pop/5"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <p className="flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                      {r.hot && <BadgeCheck className="h-3.5 w-3.5 text-lime-pop" />}
                      {r.k}
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">{r.v}</p>
                    <p className="text-xs text-zinc-500">{r.d} vs last week</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-brand-500/30 bg-brand-600/10 p-4">
                <p className="text-[13px] leading-relaxed text-zinc-200">
                  <span className="font-semibold text-white">→ This week:</span>{" "}
                  add an FAQ block matching your top 3 competitor citations and
                  publish one comparison page for “best [category] UK”. Estimated
                  impact: +9 citations.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Powered by enterprise-grade infrastructure
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-zinc-500">
            <span>Stripe</span>
            <span>Supabase</span>
            <span>Anthropic</span>
            <span>OpenAI</span>
            <span>Google Cloud</span>
          </div>
        </div>
      </div>
    </section>
  );
}
