export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
          colbem-console
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Internal API service for Colbe. Not a public-facing page.
        </p>
        <a
          href="/api/health"
          className="rounded-full border border-black/8 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black/4 dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
        >
          /api/health
        </a>
      </main>
    </div>
  );
}