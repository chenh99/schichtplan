"use client";

import { useActionState } from "react";
import { addMember, removeMember, renameMember, type TeamState } from "./actions";

export type Member = { id: string; name: string };

const initialState: TeamState = { error: null };

function AddForm() {
  const [state, formAction, pending] = useActionState(addMember, initialState);

  return (
    <form action={formAction} className="mb-8 flex max-w-md flex-col gap-2">
      <label htmlFor="new-name" className="text-sm font-medium">
        Neuer Name
      </label>
      <div className="flex gap-2">
        {/* key: Nach dem Speichern wird das Feld wieder leer. */}
        <input
          key={state.saved ? "saved" : "open"}
          id="new-name"
          name="name"
          type="text"
          autoComplete="off"
          maxLength={60}
          className="min-h-11 min-w-0 flex-1 rounded-lg border border-border bg-card px-3"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 font-semibold text-white disabled:opacity-60"
        >
          Speichern
        </button>
      </div>
      {state.error && (
        <p role="alert" className="rounded-lg bg-accent-soft px-3 py-2 text-sm">
          {state.error}
        </p>
      )}
    </form>
  );
}

function MemberRow({ member }: { member: Member }) {
  const [state, formAction, pending] = useActionState(renameMember, initialState);

  return (
    <li className="rounded-xl border border-border bg-card p-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <form action={formAction} className="flex min-w-0 flex-1 gap-2">
          <input type="hidden" name="id" value={member.id} />
          <label htmlFor={`name-${member.id}`} className="sr-only">
            Name von {member.name}
          </label>
          <input
            id={`name-${member.id}`}
            name="name"
            type="text"
            autoComplete="off"
            maxLength={60}
            defaultValue={member.name}
            className="min-h-11 min-w-0 flex-1 rounded-lg border border-border bg-card px-3"
          />
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-4 font-semibold disabled:opacity-60"
          >
            Speichern
          </button>
        </form>
        <form action={removeMember}>
          <input type="hidden" name="id" value={member.id} />
          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-border bg-card px-4 font-semibold sm:w-auto"
          >
            Entfernen
            <span className="sr-only">: {member.name}</span>
          </button>
        </form>
      </div>
      {state.error && (
        <p role="alert" className="mt-2 rounded-lg bg-accent-soft px-3 py-2 text-sm">
          {state.error}
        </p>
      )}
    </li>
  );
}

export default function TeamManager({ members }: { members: Member[] }) {
  return (
    <>
      <AddForm />
      {members.length === 0 ? (
        <p className="max-w-xl text-muted">
          Dein Team ist noch leer. Gib oben den ersten Namen ein und tippe auf „Speichern“.
        </p>
      ) : (
        <ul className="flex max-w-2xl flex-col gap-3">
          {members.map((member) => (
            <MemberRow key={`${member.id}-${member.name}`} member={member} />
          ))}
        </ul>
      )}
    </>
  );
}
