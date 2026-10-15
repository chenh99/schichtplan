import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AuthForm from "./AuthForm";

export const metadata: Metadata = {
  title: "Anmelden",
};

export default async function AnmeldenPage({ searchParams }: PageProps<"/anmelden">) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (data?.claims) {
    redirect("/wochenplan");
  }

  const { hinweis } = await searchParams;

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold leading-tight">Anmelden</h1>
      <p className="mb-6 max-w-xl text-muted">
        Melde dich mit deiner E-Mail-Adresse an oder lege ein neues Konto an, um deinen Wochenplan zu bauen.
      </p>
      {hinweis === "anmelden" && (
        <p role="status" className="mb-6 max-w-sm rounded-lg bg-accent-soft px-3 py-2 text-sm">
          Bitte melde dich zuerst an, um den Wochenplan zu sehen.
        </p>
      )}
      <AuthForm />
    </main>
  );
}
