export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white p-4 font-sans">
      <div className="max-w-4xl w-full space-y-4">
        
        {/* Header - Identidad Codex7 */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <span className="text-8xl font-bold">7</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Codex7_
          </h1>
          <p className="text-blue-400 text-lg font-mono">Fullstack Development Agency</p>
        </div>

        {/* Bento Grid con Mejoras Visuales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/[0.08] transition-colors">
            <h2 className="text-gray-500 font-mono text-sm mb-4">// Core Stack</h2>
            <div className="grid grid-cols-2 gap-4 text-xl font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" /> Next.js 14
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" /> TypeScript
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" /> Node.js
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" /> Tailwind
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 rounded-3xl flex flex-col justify-between shadow-lg shadow-blue-500/20">
            <span className="text-sm font-bold uppercase tracking-widest">Status</span>
            <p className="text-2xl font-bold italic">Building the future</p>
          </div>
        </div>
      </div>
    </main>
  );
}
