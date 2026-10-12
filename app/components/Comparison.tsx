import { Check, X, Inbox, LayoutDashboard, Users } from "lucide-react";

const rows: { label: string; old: string; us: string; win: boolean }[] = [
  { label: "Delivery", old: "Log in daily", us: "Email every Monday", win: true },
  { label: "Coverage", old: "10+ AI platforms", us: "5 that matter in the UK", win: true },
  { label: "Format", old: "Complex dashboards", us: "Simple email reports", win: true },
  { label: "Output", old: "Data dumps", us: "Actionable next steps", win: true },
  { label: "Built for", old: "Agencies", us: "Founders & in-house teams", win: true },
];

export default function Comparison() {
  return (
    <section id="why" className="scroll-mt-24 border-y border-white/10 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            Why Algorank is different
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Most GEO tools give you dashboards full of data.
          </h2>
          <p className="mt-2 text-lg text-zinc-400">
            Algorank gives you insights — plus the done-for-you work to act on them.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-ink-950 p-7">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              <LayoutDashboard className="h-4 w-4" /> Other GEO tools
            </p>
            <ul className="mt-5 space-y-3.5">
              {rows.map((r) => (
                <li key={r.label} className="flex items-center gap-3 text-[15px] text-zinc-400">
                  <X className="h-4 w-4 shrink-0 text-zinc-600" />
                  {r.old}
                </li>
              ))}
              <li className="flex items-center gap-3 border-t border-white/10 pt-3.5 text-[15px] text-zinc-400">
                <X className="h-4 w-4 shrink-0 text-zinc-600" />
                £35–£85/mo · self-serve
              </li>
            </ul>
          </div>

          <div className="relative rounded-2xl border border-lime-pop/40 bg-gradient-to-b from-lime-pop/10 to-transparent p-7">
            <span className="absolute -top-3 left-6 rounded-full bg-lime-pop px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-950">
              Winner
            </span>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
              <Inbox className="h-4 w-4 text-lime-pop" /> Algorank
            </p>
            <ul className="mt-5 space-y-3.5">
              {rows.map((r) => (
                <li key={r.label} className="flex items-center gap-3 text-[15px] font-medium text-white">
                  <Check className="h-4 w-4 shrink-0 text-lime-pop" />
                  {r.us}
                </li>
              ))}
              <li className="flex items-center gap-3 border-t border-white/10 pt-3.5 text-[15px] font-semibold text-white">
                <Check className="h-4 w-4 shrink-0 text-lime-pop" />
                From £490/mo · done-for-you
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
          {[
            {
              icon: Inbox,
              t: "Email-first delivery",
              d: "Reports land every Monday at 7am GMT. Read with your coffee. No login required.",
            },
            {
              icon: Users,
              t: "London team, UK focus",
              d: "Spelling, SERPs, competitors and citations tuned for google.co.uk — not generic US data.",
            },
            {
              icon: Check,
              t: "Action over data",
              d: "Every report includes exact next steps — and we implement them for you on retainer.",
            },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-white/10 bg-ink-950 p-6">
              <f.icon className="h-6 w-6 text-brand-400" />
              <h3 className="mt-3 font-bold text-white">{f.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
