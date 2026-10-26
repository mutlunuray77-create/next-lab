// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-black text-rose-500 font-mono mb-2">404</h1>
      <h2 className="text-2xl font-bold mb-3">Aradığın Sayfa Bulunamadı!</h2>
      <p className="text-slate-400 max-w-md text-sm mb-6">
        Gitmek istediğin rota sistemde mevcut değil. Bu ekran{" "}
        <code className="text-rose-400 font-mono">not-found.tsx</code> ile
        yakalandı.
      </p>

      <Link
        href="/"
        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all"
      >
        Ana Sayfaya Güvenle Dön
      </Link>
    </main>
  );
}
