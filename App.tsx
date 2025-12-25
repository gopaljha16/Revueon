import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { CodeShowcase } from './components/CodeShowcase';
import { Installation } from './components/Installation';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark for premium "Aeon" feel
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="relative min-h-screen transition-colors duration-700 overflow-x-hidden bg-slate-50 dark:bg-[#080414]">
      {/* Global Background Elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-500/10 dark:bg-purple-600/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/10 dark:bg-indigo-600/5 blur-[160px] pointer-events-none rounded-full" />
      
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10 w-full">
        <Hero />
        <BentoFeatures />
        <CodeShowcase />
        <Installation />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;