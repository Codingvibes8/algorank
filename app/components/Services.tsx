import {
  FileSearch,
  Code2,
  PenLine,
  MapPin,
  Link2,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "AI Visibility Audit",
    body: "25-prompt citation test across ChatGPT, Claude, Perplexity, Gemini and AI Overviews. Gap vs 3 UK competitors, £299 credited off retainer.",
    tag: "One-off · £299",
  },
  {
    icon: Code2,
    title: "Technical SEO",
    body: "Core Web Vitals, schema, llms.txt, crawl budget and AI-crawler access. Built so both Googlebot and GPTBot can read you perfectly.",
    tag: "Retainer",
  },
  {
    icon: PenLine,
    title: "AI-Ready Content",
    body: "Comparison pages, FAQs and statistics pages engineered to be cited — in British English, with UK sources and pricing in GBP.",
    tag: "Retainer",
  },
  {
    icon: MapPin,
    title: "Local SEO — London & UK",
    body: "Google Business Profile, Apple Maps, Yell, Yelp and reviews. Dominate “near me” and AI local packs across the boroughs.",
    tag: "Retainer",
  },
  {
    icon: Link2,
    title: "Digital PR & Citations",
    body: "UK press, niche directories and data studies that earn the third-party mentions LLMs trust when recommending brands.",
    tag: "Retainer",
  },
  {
    icon: BarChart3,
    title: "Monday Reporting",
    body: "Weekly email with share-of-voice, citation movement and next actions. Quarterly strategy reviews from our Shoreditch studio.",
    tag: "Included",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A full-stack AI SEO agency, not another tool login
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-zinc-400">
            Everything traditional SEO does, rebuilt for the era where the
            answer — not ten blue links — wins the click.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-500/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <s.icon className="h-7 w-7 text-brand-400" />
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-zinc-300">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
