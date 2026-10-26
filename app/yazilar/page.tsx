// app/yazilar/page.tsx
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

// DİKKAT: Bileşenin başına 'async' yazdık!
// Bu sayfa sunucuda render edilir ve veriyi sunucuda bekler.
export default async function PostsPage() {
  // Sunucudan veri çekiyoruz (Tarayıcıda Network sekmesinde bu istek görünmez!)
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=4",
  );
  const posts: Post[] = await response.json();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Hafta 6: Adım 6
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold mt-2">
            Server-Side Data Fetching
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Bu veriler useEffect olmadan, sunucu tarafında çekilip sayfaya hazır
            basıldı.
          </p>
        </div>

        <Link
          href="/"
          className="text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-xl border border-slate-700 transition-all"
        >
          &larr; Ana Sayfa
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all"
          >
            <span className="text-xs font-mono text-purple-400 font-bold">
              Yazı #{post.id}
            </span>
            <h2 className="text-lg font-bold mt-1 mb-2 capitalize text-slate-100">
              {post.title}
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
