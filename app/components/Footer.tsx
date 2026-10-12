import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-mono text-lg font-bold text-white">
                A
              </span>
              <span className="text-[17px] font-bold tracking-tight text-white">Algorank</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              London-based AI SEO agency helping UK brands get cited in ChatGPT,
              Claude, Perplexity, Gemini and Google AI Overviews.
            </p>
            <div className="mt-5 space-y-2 text-sm text-zinc-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500" /> 128 Shoreditch High Street, London E1 6PG
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-500" /> hello@algorank.co.uk
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-500" /> +44 20 7946 0821
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Agency</p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              {[
                ["How it works", "#how"],
                ["Why Algorank", "#why"],
                ["Services", "#services"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Legal</p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              <li>Privacy Policy (GDPR)</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Data Processing Agreement</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-zinc-600 sm:flex-row">
          <p>© 2026 Algorank Ltd · Registered in England & Wales · All prices ex VAT</p>
          <p>Made in London · Optimised for AI search</p>
        </div>
      </div>
    </footer>
  );
}
