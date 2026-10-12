import { Radar, GitCompareArrows, MailCheck } from "lucide-react";

const steps = [
  {
    n: "1",
    icon: Radar,
    title: "Track what matters",
    body: "We monitor ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews — the platforms driving UK buying decisions.",
    bullets: ["25 custom prompts tracked weekly", "Every citation logged and analysed", "No manual checking required"],
  },
  {
    n: "2",
    icon: GitCompareArrows,
    title: "Compare to competitors",
    body: "See exactly how you stack up in your niche across the UK market.",
    bullets: ["Weekly share-of-voice chart", "Citation gap analysis", "Know what to target next"],
  },
  {
    n: "3",
    icon: MailCheck,
    title: "Know what to do next",
    body: "Every Monday, a plain-English email with citation frequency, ranking vs competitors and specific actions.",
    bullets: ["Which queries to prioritise", "Exact content changes to make", "Not just data. Direction."],
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-36">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            How Algorank works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
            Three things. Done well. Delivered to your inbox.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition hover:border-brand-500/50 hover:shadow-md dark:border-white/10 dark:bg-gradient-to-b dark:from-white/[0.06] dark:to-transparent dark:shadow-none dark:hover:border-brand-500/40"
            >
              <span className="pointer-events-none absolute -right-2 -top-6 text-[110px] font-bold leading-none text-ink-950/[0.05] dark:text-white/[0.05]">
                {s.n}
              </span>
              <s.icon className="h-8 w-8 text-lime-pop" />
              <h3 className="mt-5 text-xl font-bold text-ink-950 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">{s.body}</p>
              <ul className="mt-5 space-y-2.5 border-t border-black/10 pt-5 dark:border-white/10">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500 dark:bg-brand-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-lime-pop"
          >
            Start tracking — from £490/mo
          </a>
        </div>
      </div>
    </section>
  );
}
