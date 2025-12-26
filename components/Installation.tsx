
import React from 'react';
import { Download, Terminal, CheckCircle2, ChevronRight, Copy } from 'lucide-react';

const Step = ({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start group">
    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-purple-500/10 border border-purple-200 dark:border-purple-800">
      <Icon size={20} className="sm:size-[28px]" />
    </div>
    <div className="pt-1 sm:pt-2">
      <div className="flex items-center gap-3 mb-2 sm:mb-3">
        <span className="text-[10px] sm:text-sm font-black text-purple-500/60 uppercase tracking-widest">Step {number}</span>
        <h4 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tighter">{title}</h4>
      </div>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-base sm:text-lg">{description}</p>
    </div>
  </div>
);

export const Installation: React.FC = () => {
  return (
    <section id="installation" className="py-20 md:py-32 px-4 md:px-6 bg-slate-100/30 dark:bg-slate-900/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6">
              Deployment Guide
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white mb-8 md:mb-10 tracking-tighter leading-tight">
              Ready in <span className="text-purple-600">60 Seconds.</span>
            </h2>
            <div className="space-y-10 md:space-y-12">
              <Step 
                number="01"
                title="Marketplace Install"
                description="Search for 'Revueon' in VS Code Extensions or run 'code --install-extension RevueonLabs.revueon'."
                icon={Download}
              />
              <Step 
                number="02"
                title="Workspace Link"
                description="Use Cmd+Shift+P and run 'Revueon: Connect'. We index your architecture locally for privacy."
                icon={Terminal}
              />
              <Step 
                number="03"
                title="Intelligent Coding"
                description="Revueon begins monitoring. You'll see smart markers and logic analysis appear as you type."
                icon={CheckCircle2}
              />
            </div>
            
            <div className="mt-12 md:mt-16 p-6 md:p-8 bg-purple-600 rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-2xl shadow-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 group hover:scale-[1.02] transition-all duration-500">
              <div className="text-center md:text-left">
                <p className="font-black text-xl md:text-2xl mb-1 md:mb-2 tracking-tight">Join the Aeon Era</p>
                <p className="text-purple-100 font-medium text-sm md:text-base">Over 50k+ developers trust Revueon.</p>
              </div>
              <a 
                href="https://marketplace.visualstudio.com/items?itemName=RevueonLabs.revueon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-base md:text-lg flex items-center justify-center gap-3 hover:shadow-lg transition-all active:scale-95"
              >
                Install Extension
                <ChevronRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative perspective-1000 w-full overflow-hidden">
            <div className="absolute inset-0 bg-purple-500/30 blur-[60px] md:blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative glass border border-white/40 dark:border-white/5 p-2 md:p-3 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl transition-transform duration-700">
              <div className="bg-[#0b0b14] rounded-[1.8rem] md:rounded-[3rem] p-6 md:p-10 font-mono text-[10px] md:text-sm border border-slate-800/50">
                <div className="flex items-center justify-between mb-6 md:mb-10 pb-4 md:pb-6 border-b border-slate-800/80">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 text-slate-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black">
                    <Terminal size={10} className="md:size-[12px]" />
                    Console
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6 overflow-x-auto pb-2">
                  <div className="flex gap-3 md:gap-4 items-center whitespace-nowrap">
                    <span className="text-purple-600 font-bold">$</span>
                    <span className="text-purple-300">revueon sync --repo=local</span>
                    <Copy size={12} className="ml-auto text-slate-700 cursor-pointer hover:text-purple-500 transition-colors" />
                  </div>
                  <div className="pl-4 md:pl-6 space-y-2 text-slate-400 border-l border-slate-800/50 whitespace-nowrap">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                      Analyzing graph topology...
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                      Loading temporal history...
                    </p>
                    <p className="text-green-400 font-bold pt-2">✔ Architecture Mapped Successfully.</p>
                  </div>
                  <div className="flex gap-3 md:gap-4 items-center pt-2 md:pt-4 whitespace-nowrap">
                    <span className="text-purple-600 font-bold">$</span>
                    <span className="text-slate-200">revueon check-drift</span>
                  </div>
                  <div className="pl-4 md:pl-6 bg-purple-500/10 border-l-4 border-purple-500/60 p-4 md:p-5 rounded-r-xl md:rounded-r-2xl min-w-[200px]">
                    <p className="text-purple-300 font-black text-[10px] md:text-xs uppercase mb-1">Drift Detected</p>
                    <p className="text-slate-400 text-[10px] md:text-xs leading-relaxed font-medium">
                      AuthStore.ts deviates from pattern.
                    </p>
                    <button className="mt-3 md:mt-4 text-[8px] md:text-[10px] bg-slate-800 text-purple-400 font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg border border-purple-500/30 hover:bg-purple-500 hover:text-white transition-all">
                      Fix with Grafting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
