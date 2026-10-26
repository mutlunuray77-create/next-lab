// app/page.tsx
import Link from "next/link";
import { Counter } from "./components/Counter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          Hafta 6: Adım 4
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Server Component (Varsayılan)
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
        Server & Client Birlikteliği
      </h1>

      <p className="text-slate-400 max-w-md text-sm mb-4">
        Bu yazılar ve sayfa düzeni sunucuda hazır render edildi. Aşağıdaki sayaç
        ise sadece gerektiği için tarayıcıda çalışan bir Client Component.
      </p>

      {/* İstemci Bileşeni */}
      <Counter />

      <div className="mt-4">
        <Link
          href="/hakkimizda"
          className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-4"
        >
          Hakkımızda Sayfasına Git &rarr;
        </Link>
      </div>
    </main>
  );
}
