import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/anmelden/actions";

export default async function Header() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const signedIn = Boolean(data?.claims);

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-2 font-semibold">
          <span className="inline-block h-3 w-3 rounded-full bg-accent" />
          Schichtplan
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="/wochenplan" className="flex min-h-11 items-center text-sm font-medium">
            Wochenplan
          </Link>
          <Link href="/team" className="flex min-h-11 items-center text-sm font-medium">
            Team
          </Link>
          {signedIn ? (
            <form action={signOut}>
              <button type="submit" className="flex min-h-11 items-center text-sm font-medium">
                Abmelden
              </button>
            </form>
          ) : (
            <Link href="/anmelden" className="flex min-h-11 items-center text-sm font-medium">
              Anmelden
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
