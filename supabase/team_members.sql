-- Issue 3: Team-Liste. Einmal im Supabase SQL Editor ausführen.

create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  name text not null check (char_length(btrim(name)) between 1 and 60),
  created_at timestamptz not null default now()
);

-- Pro Konto darf jeder Name nur einmal vorkommen (Groß-/Kleinschreibung egal).
create unique index team_members_user_name_key on public.team_members (user_id, lower(name));

-- Zugriffsregeln: Jede angemeldete Person sieht und ändert nur ihr eigenes Team.
alter table public.team_members enable row level security;

create policy "Eigenes Team lesen" on public.team_members
  for select to authenticated using (user_id = (select auth.uid()));

create policy "Eigenes Team anlegen" on public.team_members
  for insert to authenticated with check (user_id = (select auth.uid()));

create policy "Eigenes Team ändern" on public.team_members
  for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "Eigenes Team entfernen" on public.team_members
  for delete to authenticated using (user_id = (select auth.uid()));
