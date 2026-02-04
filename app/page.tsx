"use client";
import { motion } from "framer-motion";
import { Terminal, Code2, Mail, ArrowUpRight, Github, MessageCircle, Globe } from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white p-4 overflow-hidden font-sans">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full space-y-4"
      >
        {/* Header Codex7 */}
        <motion.div variants={item} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-3xl relative overflow-hidden group">
          <motion.div 
            animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.05, 1] }} 
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-12 -right-12 text-[15rem] font-bold text-white pointer-events-none select-none opacity-10"
          >
            7
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent italic text-center md:text-left">
            Codex7_
          </h1>
          <p className="text-blue-400 font-mono mt-4 flex items-center justify-center md:justify-start gap-2 tracking-[0.2em] text-[10px] uppercase font-bold">
            <Terminal size={14} className="animate-pulse" /> Fullstack Elite Solutions
          </p>
        </motion.div>

        {/* Bento Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tecnologías */}
          <motion.div variants={item} className="md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-[2.5rem] flex flex-col justify-between min-h-[200px]">
            <div className="flex justify-between items-start text-gray-500 font-mono text-[10px] uppercase tracking-widest italic">
              <span>Stack Tecnológico</span>
              <Code2 size={18} className="text-blue-500" />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-2xl md:text-3xl font-bold tracking-tighter">
              <span className="text-white/90">Next.js 14</span>
              <span className="text-white/90">TypeScript</span>
              <span className="text-white/70">Node.js</span>
            </div>
          </motion.div>

          {/* WhatsApp Directo */}
          <motion.a 
            variants={item}
            href="https://wa.me/5491136139401?text=Hola%20Codex7!%20Me%20interesa%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="bg-green-600 p-6 rounded-[2.5rem] flex flex-col justify-between group transition-all"
          >
            <div className="flex justify-between items-start">
              <MessageCircle size={28} />
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase font-bold opacity-70">Fast Response</p>
              <p className="text-2xl font-bold italic tracking-tighter text-white">WhatsApp</p>
            </div>
          </motion.a>
        </div>

        {/* Grid Inferior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Botón Formspree (Email) */}
          <motion.a 
            variants={item}
            href="https://formspree.io/f/mzdvnarr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-blue-600 p-6 rounded-[2.5rem] flex items-center justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <p className="text-[10px] font-mono uppercase font-bold opacity-70">Inquiries</p>
              <p className="text-2xl font-bold italic tracking-tighter text-white">Send an Email</p>
            </div>
            <Mail size={32} className="relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Github */}
          <motion.a 
            variants={item}
            href="https://github.com/codebymike7"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] flex flex-col justify-between group transition-all"
          >
             <Github size={24} className="text-white/50 group-hover:text-white transition-colors" />
             <p className="text-xl font-bold italic tracking-tighter">Github</p>
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
}
