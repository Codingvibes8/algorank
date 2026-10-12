-- Algorank audit intake. Run once in the Supabase SQL editor.
-- Writes go through POST /api/audit using the service-role key (server only),
-- which bypasses RLS. Enabling RLS with no policies locks out anon access.

create table if not exists public.audit_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  website text not null,
  competitors text[] not null default '{}'
);

alter table public.audit_requests enable row level security;

create index if not exists audit_requests_created_at_idx
  on public.audit_requests (created_at desc);
