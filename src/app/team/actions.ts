"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type TeamState = { error: string | null; saved?: boolean };

const MAX_NAME_LENGTH = 60;

function readName(formData: FormData) {
  return String(formData.get("name") ?? "").trim();
}

function validate(name: string): string | null {
  if (!name) {
    return "Bitte gib einen Namen ein.";
  }
  if (name.length > MAX_NAME_LENGTH) {
    return `Der Name darf höchstens ${MAX_NAME_LENGTH} Zeichen lang sein.`;
  }
  return null;
}

async function requireClient() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (!data?.claims) {
    redirect("/anmelden?hinweis=anmelden");
  }
  return supabase;
}

function errorFor(code: string | undefined): string {
  if (code === "23505") {
    return "Diesen Namen gibt es in deinem Team schon.";
  }
  return "Das hat leider nicht geklappt. Bitte versuche es noch einmal.";
}

export async function addMember(_prev: TeamState, formData: FormData): Promise<TeamState> {
  const name = readName(formData);
  const invalid = validate(name);
  if (invalid) {
    return { error: invalid };
  }

  const supabase = await requireClient();
  const { error } = await supabase.from("team_members").insert({ name });
  if (error) {
    return { error: errorFor(error.code) };
  }

  revalidatePath("/team");
  revalidatePath("/wochenplan");
  return { error: null, saved: true };
}

export async function renameMember(_prev: TeamState, formData: FormData): Promise<TeamState> {
  const id = String(formData.get("id") ?? "");
  const name = readName(formData);
  const invalid = validate(name);
  if (invalid) {
    return { error: invalid };
  }

  const supabase = await requireClient();
  const { error } = await supabase.from("team_members").update({ name }).eq("id", id);
  if (error) {
    return { error: errorFor(error.code) };
  }

  revalidatePath("/team");
  revalidatePath("/wochenplan");
  return { error: null, saved: true };
}

export async function removeMember(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const supabase = await requireClient();
  await supabase.from("team_members").delete().eq("id", id);

  revalidatePath("/team");
  revalidatePath("/wochenplan");
}
