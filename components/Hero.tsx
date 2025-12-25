
import React from 'react';
import { ArrowRight, Sparkles, Terminal, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Dynamic Aura Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] md:h-[800px] bg-gradient-to-b from-purple-100/30 dark:from-purple-900/10 via-transparent to-transparent rounded-full blur-[120px] md:blur-[180px] -z-10" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full bg-white dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/60 text-purple-600 dark:text-purple-400 text-[10px] md:text-sm font-black uppercase tracking-[0.1em] md:tracking-[0.2em] mb-8 md:mb-12 shadow-2xl shadow-purple-500/10 float">
          <Sparkles size={14} className="text-yellow-500" />
          <span>New: Aeon Reasoning v1.0</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-slate-950 dark:text-white mb-6 md:mb-10 leading-[0.9] md:leading-[0.85] break-words">
          Reviewing <br />
          <span className="purple-gradient-text italic">Since Eons.</span>
        </h1>
        
        <p className="max-w-4xl mx-auto text-lg md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 mb-10 md:mb-16 leading-tight font-medium tracking-tight px-2">
          Stop writing code that expires in a week. <br className="hidden md:block" /> 
          Revueon brings deep architectural intelligence directly to your editor.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 px-4">
          <button className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-7 bg-purple-600 hover:bg-purple-700 text-white rounded-[1.5rem] md:rounded-[2.5rem] font-black text-xl md:text-2xl flex items-center justify-center gap-3 md:gap-4 transition-all shadow-2xl shadow-purple-500/40 hover:scale-105 active:scale-95 group">
            Install Revueon
            <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
          </button>
          <a href="#installation" className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-7 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-[1.5rem] md:rounded-[2.5rem] font-black text-xl md:text-2xl hover:border-purple-400 dark:hover:border-purple-600 transition-all flex items-center justify-center gap-3 md:gap-4 shadow-xl">
            <Terminal size={24} className="text-purple-500" />
            Quick Setup
          </a>
        </div>

        {/* Hero Visual - Scaled for mobile */}
        <div className="mt-16 md:mt-32 relative max-w-6xl mx-auto group px-2">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-[2rem] md:rounded-[4rem] blur-[60px] md:blur-[120px] opacity-20 group-hover:opacity-60 transition-opacity duration-1000" />
          <div className="relative z-10 p-1.5 md:p-3 bg-white/20 dark:bg-slate-800/40 rounded-[2.2rem] md:rounded-[4rem] border border-white/30 dark:border-white/5 backdrop-blur-3xl overflow-hidden shadow-[0_0_80px_-20px_rgba(168,85,247,0.4)]">
            <div className="bg-slate-950 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-slate-800/50 shadow-inner">
               <div className="flex items-center gap-3 md:gap-4 px-6 md:px-10 py-4 md:py-6 bg-slate-900/80 border-b border-slate-800 backdrop-blur-md">
                <div className="flex gap-1.5 md:gap-2.5">
                  <div className="w-2.5 md:w-4 h-2.5 md:h-4 rounded-full bg-red-500/40" />
                  <div className="w-2.5 md:w-4 h-2.5 md:h-4 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 md:w-4 h-2.5 md:h-4 rounded-full bg-green-500/40" />
                </div>
                <div className="mx-auto text-[8px] md:text-[11px] font-mono text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.4em] font-black flex items-center gap-2 md:gap-3">
                  <Shield size={12} className="text-purple-500/50" />
                  aeon-core-active
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=2000" 
                alt="Extension Interface Preview" 
                className="w-full h-auto object-cover grayscale-[0.7] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
