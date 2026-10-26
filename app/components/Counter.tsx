// app/components/Counter.tsx
"use client"; // <-- İŞTE SİHİRLİ SATIR! Bunu yazmazsak useState hata verir.

import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl max-w-sm w-full mx-auto my-6 text-center shadow-lg">
      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
        Client Component ('use client')
      </span>

      <p className="text-slate-300 text-xs mt-3">
        Bu kart tarayıcıda çalışır; çünkü içinde{" "}
        <code className="text-amber-300 font-mono">useState</code> ve{" "}
        <code className="text-amber-300 font-mono">onClick</code> var.
      </p>

      <div className="my-5">
        <span className="text-4xl font-extrabold text-white font-mono">
          {count}
        </span>
      </div>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all cursor-pointer"
        >
          - Azalt
        </button>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-purple-600/30"
        >
          + Artır
        </button>
      </div>
    </div>
  );
};
