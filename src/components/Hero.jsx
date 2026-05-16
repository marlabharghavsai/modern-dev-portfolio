import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Parallax speed={-20} className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary-500/20 rounded-full blur-[80px]" />
        <Parallax speed={10} className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary-400 font-medium tracking-wide mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-500"></span>
              Hi, my name is Bharghav Sai
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">digital experiences</span> that matter.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              I'm a Full Stack Developer specializing in building exceptional websites, applications, and everything in between. Focused on modern, accessible, and performant user interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
