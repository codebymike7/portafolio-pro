export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <div className="max-w-2xl w-full space-y-6">
        {/* Encabezado Estilo Terminal */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter">
          <span className="text-blue-500">$</span> BitForge.dev_
        </h1>

        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Especialista en arquitecturas escalables, rendimiento extremo 
          y soluciones Full Stack diseñadas bit a bit.
        </p>

        <div className="pt-6 border-t border-white/10">
          <p className="text-sm font-mono text-blue-400">
            // Actualmente construyendo el futuro del software
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12">
  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
    <h3 className="text-blue-400 font-mono text-sm">01. Frontend</h3>
    <p className="text-white font-bold">Next.js & React</p>
  </div>
  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
    <h3 className="text-green-400 font-mono text-sm">02. Backend</h3>
    <p className="text-white font-bold">Node & PostgreSQL</p>
  </div>
</div>
      </div>
    </main>
  );
}

