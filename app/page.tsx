"use client";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Globe, Mail, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white p-4 overflow-hidden font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full space-y-4"
      >
        {/* Header Codex7 con Efecto Glitch Suave */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-2xl relative overflow-hidden group">
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 text-[12rem] font-bold text-white pointer-events-none select-none"
          >
            7
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Codex7_
          </h1>
          <p className="text-blue-400 font-mono mt-4 flex items-center gap-2 tracking-widest text-sm">
            <Terminal size={16} className="animate-pulse" /> FULLSTACK SOLUTIONS
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Caja de Stack con Iconos */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-gray-500 font-mono text-xs uppercase tracking-widest">Selected Tech</h2>
              <Code2 size={20} className="text-blue-500" />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-2xl font-semibold italic">
              <span className="hover:text-blue-400 transition-colors">Next.js 14</span>
              <span className="hover:text-yellow-400 transition-colors">TypeScript</span>
              <span className="hover:text-green-400 transition-colors">Node.js</span>
            </div>
          </motion.div>

          {/* Botón de Contacto Dinámico */}
          <motion.a 
            href="mailto:tu-correo@ejemplo.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-500 p-6 rounded-[2rem] flex flex-col justify-between group transition-all"
          >
            <div className="flex justify-between items-start w-full">
              <Mail size={24} />
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase opacity-70">Get in touch</p>
              <p className="text-xl font-bold">Start Project</p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
}
