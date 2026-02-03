export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white p-4">
      <div className="max-w-4xl w-full space-y-4">
        
        {/* Header Principal */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
          <h1 className="text-5xl font-bold tracking-tighter mb-2">BitForge.dev_</h1>
          <p className="text-gray-400 text-lg">Fullstack Architect & Performance Specialist</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Caja Grande: Stack */}
          <div className="md:col-span-2 bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10 p-6 rounded-3xl">
            <h2 className="text-blue-400 font-mono text-sm mb-4">// Tech Stack</h2>
            <div className="flex flex-wrap gap-2 text-2xl font-bold">
              <span>Next.js</span> <span className="text-white/20">•</span>
              <span>React</span> <span className="text-white/20">•</span>
              <span>Node.js</span> <span className="text-white/20">•</span>
              <span>TypeScript</span>
            </div>
          </div>

          {/* Caja Pequeña: Status */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-center items-center">
            <div className="h-4 w-4 bg-green-500 rounded-full animate-ping mb-2" />
            <span className="text-sm font-mono text-gray-400">Available for hire</span>
          </div>

        </div>
      </div>
    </main>
  );
}
