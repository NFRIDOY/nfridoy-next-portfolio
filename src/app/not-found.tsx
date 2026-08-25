import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 px-6">
      <h1 className="text-7xl font-extrabold text-zinc-800 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-zinc-200 mb-2">Page Not Found</h2>
      <p className="text-zinc-500 text-sm mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
      >
        Back to Home
      </Link>
    </div>
  );
}
