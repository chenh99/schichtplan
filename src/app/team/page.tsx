import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import TeamManager from "./TeamManager";

export const metadata: Metadata = {
  title: "Team",
};

export default async function TeamPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getClaims();
  if (!auth?.claims) {
    redirect("/anmelden?hinweis=anmelden");
  }

  const { data: members, error } = await supabase
    .from("team_members")
    .select("id, name")
    .order("created_at", { ascending: true });

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold leading-tight">Team</h1>
      <p className="mb-6 max-w-xl text-muted">
        Lege hier einmal alle Mitarbeitenden an. Der Wochenplan nutzt diese Namen in der Reihenfolge, in der du sie
        angelegt hast.
      </p>
      {error ? (
        <p role="alert" className="max-w-xl rounded-lg bg-accent-soft px-3 py-2 text-sm">
          Das Team konnte nicht geladen werden. Bitte lade die Seite neu.
        </p>
      ) : (
        <TeamManager members={members ?? []} />
      )}
    </main>
  );
}
