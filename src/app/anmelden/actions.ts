"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AuthState = { error: string | null; email?: string };

function readCredentials(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  return { email, password };
}

export async function signIn(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const { email, password } = readCredentials(formData);
  if (!email || !password) {
    return { error: "Bitte gib deine E-Mail-Adresse und dein Passwort ein.", email };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error?.code === "email_not_confirmed") {
    return { error: "Dieses Konto ist noch nicht bestätigt. Bitte bestätige deine E-Mail-Adresse über den Link in der Mail.", email };
  }
  if (error) {
    return { error: "E-Mail-Adresse oder Passwort stimmen nicht. Bitte prüfe deine Eingabe.", email };
  }

  redirect("/wochenplan");
}

export async function signUp(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const { email, password } = readCredentials(formData);
  if (!email) {
    return { error: "Bitte gib deine E-Mail-Adresse ein.", email };
  }
  if (password.length < 8) {
    return { error: "Das Passwort braucht mindestens 8 Zeichen.", email };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error?.code === "over_email_send_rate_limit") {
    return { error: "Es gab zu viele Anfragen in kurzer Zeit. Bitte warte ein paar Minuten und versuche es dann noch einmal.", email };
  }
  if (error) {
    return { error: "Das Konto konnte nicht angelegt werden. Bitte prüfe die E-Mail-Adresse und versuche es noch einmal.", email };
  }

  // Bei bereits vergebener Adresse meldet Supabase keinen Fehler, liefert aber keine Identität.
  if (data.user && data.user.identities?.length === 0) {
    return { error: "Zu dieser E-Mail-Adresse gibt es schon ein Konto. Bitte melde dich an.", email };
  }

  if (!data.session) {
    return {
      error:
        "Das Konto ist angelegt, aber noch nicht bestätigt. Bitte schalte „Confirm email“ in Supabase aus oder bestätige die E-Mail.",
      email,
    };
  }

  redirect("/wochenplan");
}

export async function authenticate(prev: AuthState, formData: FormData): Promise<AuthState> {
  return formData.get("intent") === "signup" ? signUp(prev, formData) : signIn(prev, formData);
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/anmelden");
}
