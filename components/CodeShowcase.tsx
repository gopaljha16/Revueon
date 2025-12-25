
import React from 'react';
import { Check, Wand2, ShieldAlert } from 'lucide-react';

export const CodeShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-20 md:py-32 px-4 md:px-6 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs md:text-sm">
              <ShieldAlert size={16} />
              Real-time Awareness
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              Stop <span className="text-purple-600">Guessing.</span> <br className="hidden sm:block" />Start Knowing.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-10 leading-relaxed font-medium">
              Revueon identifies deep logical flaws that standard linters miss. It understands your business domain, not just your syntax.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                "Zero-latency background analysis",
                "Deep architectural drift detection",
                "Smart context-aware chat",
                "Security vulnerability shielding"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 p-4 rounded-xl md:rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-left">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-xs md:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#0b0b14] rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden font-mono text-[10px] md:text-sm group relative">
              <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-[#14141f] border-b border-slate-800/50">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-red-500/40" />
                  <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-green-500/40" />
                </div>
                <span className="text-slate-500 text-[8px] md:text-[10px] uppercase font-bold tracking-widest truncate">UserService.ts — Edited</span>
              </div>
              <div className="p-4 md:p-8 space-y-2 md:space-y-3 overflow-x-auto">
                <div className="flex gap-3 md:gap-4 whitespace-nowrap">
                  <span className="text-slate-700 select-none">24</span>
                  <code className="text-purple-400">export async function deleteUser(id: string) &#123;</code>
                </div>
                <div className="flex gap-3 md:gap-4 group/line relative whitespace-nowrap">
                  <span className="text-slate-700 select-none">25</span>
                  <code className="text-slate-400">  const user = await db.users.findUnique(&#123; where: &#123; id &#125; &#125;);</code>
                </div>
                <div className="flex gap-3 md:gap-4 bg-red-500/10 border-l-4 border-red-500/60 -mx-4 md:-mx-8 px-4 md:px-8 py-1 group/alert whitespace-nowrap relative">
                  <span className="text-slate-700 select-none">26</span>
                  <code className="text-red-300">  await db.users.delete(&#123; where: &#123; id &#125; &#125;);</code>
                  
                  {/* AI Tooltip Overlay - Adjusted for Mobile Positioning */}
                  <div className="absolute top-full left-0 md:top-[-5rem] md:right-4 mt-2 md:mt-0 bg-slate-900 border-2 border-purple-500 rounded-xl md:rounded-2xl p-4 md:p-5 shadow-2xl flex items-start gap-3 md:gap-4 max-w-[280px] md:max-w-xs z-30 opacity-0 group-hover/alert:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-purple-600 flex flex-shrink-0 items-center justify-center shadow-lg">
                      <Wand2 size={16} className="text-white md:size-[20px]" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-white font-black mb-1">Architecture Inconsistency</p>
                      <p className="text-[9px] md:text-[11px] text-slate-400 leading-relaxed font-medium">
                        Your project uses <span className="text-purple-400 font-bold">soft-deletes</span>. Direct deletion violates policy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4 bg-green-500/10 border-l-4 border-green-500/60 -mx-4 md:-mx-8 px-4 md:px-8 py-1 whitespace-nowrap">
                  <span className="text-slate-700 select-none">27</span>
                  <code className="text-green-300">  await db.users.update(&#123; where: &#123; id &#125;, data: &#123; deleted: true &#125; &#125;);</code>
                </div>
                <div className="flex gap-3 md:gap-4 whitespace-nowrap">
                  <span className="text-slate-700 select-none">28</span>
                  <code className="text-purple-400">&#125;</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
