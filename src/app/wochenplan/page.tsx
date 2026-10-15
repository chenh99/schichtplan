import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import WeekGrid from "@/components/WeekGrid";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Wochenplan",
};

export default async function WochenplanPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (!data?.claims) {
    redirect("/anmelden?hinweis=anmelden");
  }

  const { data: members, error } = await supabase
    .from("team_members")
    .select("id, name")
    .order("created_at", { ascending: true });
  const people = members ?? [];

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold leading-tight">Wochenplan</h1>
      <p className="mb-6 max-w-xl text-muted">
        Wähle für jede Person und jeden Tag die Startzeit. Der Plan wird noch nicht gespeichert, beim
        Neuladen ist er wieder leer.
      </p>
      {error ? (
        <p role="alert" className="max-w-xl rounded-lg bg-accent-soft px-3 py-2 text-sm">
          Das Team konnte nicht geladen werden. Bitte lade die Seite neu.
        </p>
      ) : people.length === 0 ? (
        <p className="max-w-xl">
          Du hast noch niemanden in deinem Team.{" "}
          <Link href="/team" className="font-semibold underline">
            Lege zuerst auf der Seite „Team“ Mitarbeitende an.
          </Link>
        </p>
      ) : (
        <WeekGrid people={people} />
      )}
    </main>
  );
}
