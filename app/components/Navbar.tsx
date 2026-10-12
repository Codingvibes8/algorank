"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, MapPin } from "lucide-react";

const links = [
  { label: "How it works", href: "#how" },
  { label: "Why Algorank", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top banner — mirrors Citara's founding-rate urgency, UK version */}
      <div className="bg-lime-pop text-ink-950">
        <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[13px] font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-ink-950" />
          October intake — 4 of 12 London pilot slots left · Free AI visibility audit (£299 value)
        </p>
      </div>

      <nav
        className={`border-b transition-colors ${
          scrolled
            ? "border-white/10 bg-ink-950/90 backdrop-blur-xl"
            : "border-transparent bg-ink-950/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-mono text-lg font-bold text-white">
              A
            </span>
            <span className="leading-none">
              <span className="block text-[17px] font-bold tracking-tight text-white">
                Algorank
              </span>
              <span className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-zinc-400">
                <MapPin className="h-3 w-3" /> London · UK
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#pricing"
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#cta"
              className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-lime-pop"
            >
              Get free audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-zinc-200 hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-ink-950 px-4 pb-5 pt-3 lg:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-zinc-200 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink-950"
            >
              Get free audit <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
