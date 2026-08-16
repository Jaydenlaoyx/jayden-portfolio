import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
          404
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-6 max-w-md leading-7 text-[var(--muted)]">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}