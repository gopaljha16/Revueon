
import React, { useRef } from 'react';
import { 
  History, MessageSquare, Layers, Brain, Eye, Search, Lock, 
  Terminal, BarChart3, Globe, Sparkles, Database, Cpu, Zap
} from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className = "", 
  variant = "default",
  isLarge = false
}: { 
  title: string; 
  description: string; 
  icon: any; 
  className?: string;
  variant?: "default" | "purple" | "glass";
  isLarge?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card group p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between border transition-all duration-700 ${
        variant === 'purple' 
          ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white border-purple-500 shadow-2xl shadow-purple-500/30' 
          : variant === 'glass'
          ? 'bg-purple-100/30 dark:bg-purple-950/20 border-purple-200/50 dark:border-purple-800/30 backdrop-blur-md'
          : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700'
      } ${className}`}
    >
      <div className="spotlight" />
      
      <div className="relative z-10">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-all group-hover:scale-110 group-hover:rotate-6 duration-500 ${
          variant === 'purple' 
            ? 'bg-white/20' 
            : 'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 shadow-sm'
        }`}>
          <Icon size={24} className="md:size-[28px]" />
        </div>
        <h3 className={`font-black mb-3 md:mb-4 tracking-tighter group-hover:translate-x-1 transition-transform duration-500 ${isLarge ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}>{title}</h3>
        <p className={`leading-relaxed font-medium ${isLarge ? 'text-base md:text-lg' : 'text-sm md:text-base'} ${
          variant === 'purple' ? 'text-purple-100' : 'text-slate-600 dark:text-slate-400'
        }`}>
          {description}
        </p>
      </div>
      
      {/* Animated bottom border glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000" />
    </div>
  );
};

export const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 md:mb-24 gap-8 md:gap-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6 text-purple-600 dark:text-purple-400 font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-xs">
            <Sparkles size={16} className="animate-pulse" />
            Hyper-Intelligence Layer
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white leading-[1] tracking-tighter">
            Reviews that evolve with your <span className="purple-gradient-text">Architecture.</span>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-sm font-medium border-l-4 border-purple-500 pl-6 md:pl-8 py-2 italic leading-relaxed">
          Revueon doesn't just read code; it understands the "Aeon"—the long-term impact of every commit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 auto-rows-auto md:auto-rows-[minmax(320px,auto)]">
        {/* Row 1 */}
        <FeatureCard 
          title="Aeon Temporal Memory"
          description="A deep-learning engine that remembers every design decision made in your repo over the last several years. It flags changes that contradict historical team standards or past architectural fixes."
          icon={History}
          className="md:col-span-12 lg:col-span-8"
          variant="purple"
          isLarge={true}
        />
        <FeatureCard 
          title="Predictive Logic"
          description="Simulates millions of execution paths in real-time to catch race conditions and memory leaks before you hit 'save'."
          icon={Brain}
          className="md:col-span-12 lg:col-span-4"
        />

        {/* Row 2 */}
        <FeatureCard 
          title="Deep Dependency Scan"
          description="Goes beyond simple version checks. Analyzes how your code actually interacts with 3rd-party libs to find hidden vulnerabilities."
          icon={Database}
          className="md:col-span-12 lg:col-span-4"
          variant="glass"
        />
        <FeatureCard 
          title="Live Sidebar Mentor"
          description="A context-aware chat assistant that lives in your sidebar. Ask anything: 'Why is this specific loop inefficient for our data set?'"
          icon={MessageSquare}
          className="md:col-span-12 lg:col-span-8"
        />

        {/* Row 3 */}
        <FeatureCard 
          title="Architectural Grafting"
          description="Revueon intelligently suggests where new features should live. It helps graft new logic into your existing patterns without creating technical debt."
          icon={Cpu}
          className="md:col-span-12 lg:col-span-7"
          variant="glass"
          isLarge={true}
        />
        <FeatureCard 
          title="Security Fortress"
          description="Military-grade real-time scanning for secret leaks, PII exposures, and complex SQL injection patterns."
          icon={Lock}
          className="md:col-span-12 lg:col-span-5"
        />
        
        {/* Row 4 */}
        <FeatureCard 
          title="Semantic Search Engine"
          description="Search your codebase with concepts, not just keywords. 'Find where we handle oauth state'—even if the word 'oauth' isn't there."
          icon={Search}
          className="md:col-span-12 lg:col-span-4"
        />
        <FeatureCard 
          title="Refactor Magic"
          description="Instantly modernize legacy spaghetti into clean, observable, and testable code patterns with one click."
          icon={Zap}
          className="md:col-span-12 lg:col-span-4"
        />
        <FeatureCard 
          title="Insight Metrics"
          description="Visual dashboards of your codebase's long-term health, complexity trends, and team productivity markers."
          icon={BarChart3}
          className="md:col-span-12 lg:col-span-4"
        />
      </div>
    </section>
  );
};
