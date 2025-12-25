import React from 'react';
import { Sun, Moon, Code2 } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass border border-white/20 dark:border-white/5 px-8 py-4 rounded-[2rem] shadow-2xl shadow-purple-500/5 transition-all">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-500/30 group cursor-pointer">
            <Code2 size={28} className="group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-950 dark:text-white">
            Ravueon
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-sm font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.15em]">
          <a href="#features" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Showcase</a>
          <a href="#installation" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Installation</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100/80 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all border border-slate-200 dark:border-white/10"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button className="hidden sm:block bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-3.5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-purple-600 dark:hover:bg-purple-500 dark:hover:text-white transition-all shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};