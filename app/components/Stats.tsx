export default function Stats() {
  const stats = [
    {
      value: "43%",
      label: "Monthly growth",
      body: "AI search queries are growing faster than traditional search. Early movers are capturing UK market share.",
    },
    {
      value: "87%",
      label: "On 5 platforms",
      body: "ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews drive the majority of UK B2B AI queries. Focus beats breadth.",
    },
    {
      value: "4.4×",
      label: "Higher value",
      body: "Visitors from AI citations convert at 4.4× the rate of traditional organic search. Quality over quantity.",
    },
  ];

  return (
    <section className="border-y border-black/10 bg-white dark:border-white/10 dark:bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
          The AI search shift
        </p>
        <h2 className="text-balance mx-auto mt-3 max-w-2xl text-center text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
          AI search is reshaping discovery
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-zinc-600 dark:text-zinc-400">
          While traditional SEO chases Google rankings, your customers are
          already asking AI for recommendations.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-black/10 bg-paper p-7 text-center shadow-sm dark:border-white/10 dark:bg-ink-950 dark:shadow-none"
            >
              <p className="bg-gradient-to-b from-ink-950 to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-white dark:to-zinc-500">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-lime-pop">
                {s.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-500">
          The question isn&apos;t if AI search matters — it&apos;s whether
          you&apos;re being mentioned.
        </p>
      </div>
    </section>
  );
}
