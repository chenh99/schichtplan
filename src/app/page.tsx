import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">Schichtplan</h1>
      <p className="max-w-xl text-lg text-muted">Der Wochenplan für dein Team, an einem Ort.</p>
      <Link
        href="/wochenplan"
        className="mt-8 inline-flex min-h-11 w-fit items-center rounded-lg bg-accent px-5 font-semibold text-white"
      >
        Wochenplan öffnen
      </Link>
    </main>
  );
}
