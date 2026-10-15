"use client";

import { useActionState } from "react";
import { authenticate, type AuthState } from "./actions";

const initialState: AuthState = { error: null };

export default function AuthForm() {
  const [state, formAction, pending] = useActionState(authenticate, initialState);

  return (
    <form action={formAction} className="flex max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          E-Mail-Adresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={state.email ?? ""}
          required
          className="min-h-11 rounded-lg border border-border bg-card px-3"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-medium">
          Passwort
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="min-h-11 rounded-lg border border-border bg-card px-3"
        />
        <p className="text-sm text-muted">Mindestens 8 Zeichen.</p>
      </div>

      {state.error && (
        <p role="alert" className="rounded-lg bg-accent-soft px-3 py-2 text-sm">
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          name="intent"
          value="signin"
          disabled={pending}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 font-semibold text-white disabled:opacity-60"
        >
          Anmelden
        </button>
        <button
          type="submit"
          name="intent"
          value="signup"
          disabled={pending}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-5 font-semibold disabled:opacity-60"
        >
          Konto anlegen
        </button>
      </div>
    </form>
  );
}
