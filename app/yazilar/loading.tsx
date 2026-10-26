// app/yazilar/loading.tsx
export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="h-10 w-10 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
      <p className="text-slate-400 text-sm font-medium">
        Veriler sunucudan çekiliyor, lütfen bekleyin...
      </p>
    </main>
  );
}
