import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type AuditPayload = {
  name?: unknown;
  email?: unknown;
  website?: unknown;
  competitors?: unknown;
  /** Honeypot — legitimate users never fill this. */
  company_website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** 5 submissions per IP per 10 minutes. Best-effort in-memory (resets on redeploy). */
const RATE_LIMIT = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (RATE_LIMIT.size > 1000) {
    for (const [k, v] of RATE_LIMIT) {
      if (v.resetAt <= now) RATE_LIMIT.delete(k);
    }
  }
  const entry = RATE_LIMIT.get(ip);
  if (!entry || entry.resetAt <= now) {
    RATE_LIMIT.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function normaliseUrl(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  let s = raw.trim().replace(/\s+/g, "");
  if (!s) return null;
  if (s.length > 200) return null;
  if (!/^https?:\/\//i.test(s)) s = `https://${s}`;
  try {
    const url = new URL(s);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function badRequest(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(req: Request) {
  let body: AuditPayload;
  try {
    body = (await req.json()) as AuditPayload;
  } catch {
    return badRequest("Invalid request body.");
  }

  // Honeypot: pretend success so bots learn nothing.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const website = normaliseUrl(body.website);
  const competitors = Array.isArray(body.competitors)
    ? body.competitors
        .filter((c): c is string => typeof c === "string")
        .map((c) => c.trim())
        .filter(Boolean)
        .slice(0, 3)
    : [];

  if (name.length < 2 || name.length > 100) {
    return badRequest("Please enter your name.");
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return badRequest("Please enter a valid work email.");
  }
  if (!website) {
    return badRequest("Please enter a valid website (e.g. acme.co.uk).");
  }
  if (competitors.length < 1 || competitors.some((c) => c.length > 120)) {
    return badRequest("Please add at least one competitor.");
  }

  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return badRequest("Too many requests — please try again in a few minutes.", 429);
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return badRequest(
      "Audit intake is not configured yet — please email hello@algorank.co.uk and we'll prepare your audit manually.",
      503,
    );
  }

  try {
    const supabase = createClient(supabaseUrl, serviceKey);
    const { error } = await supabase.from("audit_requests").insert({
      name,
      email,
      website,
      competitors,
    });
    if (error) throw error;
  } catch (err) {
    console.error("Audit insert failed:", err);
    return badRequest("Could not save your request — please try again shortly.", 500);
  }

  return NextResponse.json({ ok: true });
}
