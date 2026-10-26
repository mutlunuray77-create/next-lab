// app/ogrenciler/[id]/page.tsx
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StudentDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-4">
        Dinamik Rota Yakalandı ([id])
      </span>

      <h1 className="text-3xl font-extrabold mb-2">Öğrenci Detay Sayfası</h1>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm w-full my-6">
        <p className="text-slate-400 text-sm">URL'den Okunan Dinamik Değer:</p>
        <p className="text-3xl font-mono font-bold text-cyan-400 mt-2">#{id}</p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold rounded-xl border border-slate-700 transition-all"
        >
          &larr; Ana Sayfa
        </Link>
      </div>
    </main>
  );
}
