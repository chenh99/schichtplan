import type { Metadata } from "next";
import WeekGrid from "@/components/WeekGrid";

export const metadata: Metadata = {
  title: "Wochenplan",
};

const EXAMPLE_PEOPLE = ["Anna", "Ben", "Chiara", "David", "Elif"];

export default function WochenplanPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold leading-tight">Wochenplan</h1>
      <p className="mb-6 max-w-xl text-muted">
        Wähle für jede Person und jeden Tag die Startzeit. Der Plan wird noch nicht gespeichert, beim
        Neuladen ist er wieder leer.
      </p>
      <WeekGrid people={EXAMPLE_PEOPLE} />
    </main>
  );
}
