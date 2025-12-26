
import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/utils/icon.png" 
                alt="Revueon Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-slate-900 dark:text-white">Revueon</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              Leveling up the world's code quality, one review at a time. Long-lasting intelligence for modern developers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-purple-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-purple-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Product</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Extension</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-purple-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 Revueon AI. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>hello@revueon.ai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
