// app/hakkimizda/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-4">
        Yeni Rota Oluştu
      </span>
      <h1 className="text-3xl font-bold mb-3">Hakkımızda Sayfası</h1>
      <p className="text-slate-400 max-w-md mb-8">
        Burası{" "}
        <code className="text-emerald-300 font-mono">
          app/hakkimizda/page.tsx
        </code>{" "}
        sayfasıdır.
      </p>

      <Link
        href="/"
        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all"
      >
        &larr; Ana Sayfaya Dön
      </Link>
    </main>
  );
}
