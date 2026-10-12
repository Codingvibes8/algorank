import { ArrowUpRight, Mail, Video } from "lucide-react";
import { SITE, hasCal } from "../lib/site";

export default function BookCall() {
  return (
    <section
      id="book"
      className="scroll-mt-36 border-y border-black/10 bg-white dark:border-white/10 dark:bg-ink-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            Discovery call
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
            Book a 30-minute call
          </h2>
          <p className="mt-2 text-[15px] text-zinc-600 dark:text-zinc-400">
            We&apos;ll review your audit live, show you the citation gap, and
            map your first 8 weeks. No pitch decks — just your data.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {hasCal ? (
            <div>
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-paper shadow-sm dark:border-white/10 dark:bg-ink-950 dark:shadow-none">
                <iframe
                  src={SITE.calUrl}
                  title="Book a discovery call with Algorank"
                  loading="lazy"
                  className="h-[680px] w-full border-0"
                  allow="camera; microphone"
                />
              </div>
              <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-500">
                <a
                  href={SITE.calUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-ink-950 underline-offset-4 hover:underline dark:text-white"
                >
                  Prefer a new tab? Open booking <ArrowUpRight className="h-4 w-4" />
                </a>
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-black/10 bg-paper p-8 text-center shadow-sm sm:p-12 dark:border-white/10 dark:bg-ink-950 dark:shadow-none">
              <Video className="mx-auto h-10 w-10 text-brand-600 dark:text-brand-400" />
              <h3 className="mt-4 text-xl font-bold text-ink-950 dark:text-white">
                Online booking opens soon
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Email us with two or three times that suit you this week and
                we&apos;ll confirm a 30-minute Google Meet within one working day.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Discovery%20call%20—%20Algorank%20pilot`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-lime-pop"
              >
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
