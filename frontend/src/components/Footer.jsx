import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = ({ setActiveTab }) => {
  const { personal } = portfolioData;

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="w-full bg-[#050711] border-t border-slate-900/80 pt-12 pb-10 px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand */}
        <div className="flex items-center space-x-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            P.
          </div>
          <div>
            <div className="font-bold text-base text-white">
              {personal.name}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {personal.role}
            </div>
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 font-medium">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className="hover:text-purple-300 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: Message & Social Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="text-center sm:text-right">
            <div className="text-xs text-slate-400">
              Designed & Engineered by <span className="font-semibold text-slate-200">{personal.name}</span>
            </div>
            <div className="text-[11px] text-purple-400 font-medium tracking-wide">
              React 19 &bull; Node.js &bull; Tailwind CSS
            </div>
          </div>

          <div className="flex items-center space-x-2.5">
            {[
              { label: 'GitHub', url: personal.socials.github, icon: '🐙' },
              { label: 'LinkedIn', url: personal.socials.linkedin, icon: '💼' },
              { label: 'Email', url: personal.socials.email, icon: '✉️' },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 flex items-center justify-center text-sm text-slate-300 hover:text-white transition-all hover:scale-105"
                title={soc.label}
              >
                <span>{soc.icon}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
