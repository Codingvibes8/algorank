"use client";

import { useState } from "react";
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  FileSearch,
} from "lucide-react";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

const inputCls =
  "w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-[15px] text-ink-950 placeholder:text-zinc-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-ink-950 dark:text-white dark:placeholder:text-zinc-500";

const labelCls =
  "mb-1.5 block text-sm font-semibold text-ink-950 dark:text-white";

const benefits = [
  "25-prompt citation test across all 5 AI platforms",
  "Gap analysis vs your 3 named competitors",
  "Exact first-week actions, in plain English",
  "Delivered within 3 working days",
];

export default function AuditForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const str = (k: string) => String(fd.get(k) ?? "").trim();
    const payload = {
      name: str("name"),
      email: str("email"),
      website: str("website"),
      competitors: [str("competitor1"), str("competitor2"), str("competitor3")].filter(
        Boolean,
      ),
      company_website: str("company_website"),
    };
    if (payload.name.length < 2) {
      setStatus({ state: "error", message: "Please enter your name." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) {
      setStatus({ state: "error", message: "Please enter a valid work email." });
      return;
    }
    if (!payload.website) {
      setStatus({ state: "error", message: "Please enter your website." });
      return;
    }
    if (payload.competitors.length < 1) {
      setStatus({ state: "error", message: "Please add at least one competitor." });
      return;
    }

    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({
          state: "error",
          message: data.error ?? "Something went wrong — please try again.",
        });
      } else {
        setStatus({ state: "success" });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error — check your connection and try again.",
      });
    }
  }

  return (
    <section id="audit" className="scroll-mt-36">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
              Free audit · £299 value
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
              See how AI search sees you — free
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Tell us where to look. We run your brand through the same
              25-prompt citation test paying clients get, and send the results
              within 3 working days. No call required.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[15px] text-zinc-700 dark:text-zinc-200"
                >
                  <FileSearch className="mt-0.5 h-4 w-4 shrink-0 text-lime-pop" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-1.5 text-[13px] text-zinc-500 dark:text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-lime-pop" />
              GDPR compliant — details used only to prepare your audit. No spam, ever.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-ink-900/60 dark:shadow-none">
            {status.state === "success" ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-lime-pop" />
                <h3 className="mt-4 text-xl font-bold text-ink-950 dark:text-white">
                  Audit request received
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  We&apos;re running your citation test now. Expect your audit
                  by email within 3 working days — then a Monday briefing every
                  week if you join the pilot.
                </p>
                <a
                  href="#pricing"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-lime-pop"
                >
                  Skip the wait — start the pilot <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="audit-name" className={labelCls}>
                      Full name
                    </label>
                    <input
                      id="audit-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Amelia Hart"
                      className={inputCls}
                      disabled={status.state === "sending"}
                    />
                  </div>
                  <div>
                    <label htmlFor="audit-email" className={labelCls}>
                      Work email
                    </label>
                    <input
                      id="audit-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="amelia@company.co.uk"
                      className={inputCls}
                      disabled={status.state === "sending"}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="audit-website" className={labelCls}>
                    Your website
                  </label>
                  <input
                    id="audit-website"
                    name="website"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="acme.co.uk"
                    className={inputCls}
                    disabled={status.state === "sending"}
                  />
                </div>

                <fieldset className="mt-4">
                  <legend className={labelCls}>Top 3 competitors</legend>
                  <div className="grid gap-3">
                    {[1, 2, 3].map((n) => (
                      <input
                        key={n}
                        name={`competitor${n}`}
                        type="text"
                        placeholder={
                          n === 1
                            ? "Competitor 1 (required)"
                            : `Competitor ${n} (optional)`
                        }
                        aria-label={`Competitor ${n}`}
                        className={inputCls}
                        disabled={status.state === "sending"}
                      />
                    ))}
                  </div>
                </fieldset>

                {/* Honeypot — hidden from humans, catches bots. */}
                <div
                  aria-hidden
                  className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
                >
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {status.state === "error" && (
                  <p
                    role="alert"
                    className="mt-4 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-red-700 dark:text-red-300"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 disabled:cursor-wait disabled:opacity-70"
                >
                  {status.state === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Get my free audit <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
