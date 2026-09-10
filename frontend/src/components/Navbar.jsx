import React from 'react';
import { Sun, Moon, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ThemeColorPicker from './ThemeColorPicker';

const Navbar = ({ 
  activeTab, 
  setActiveTab, 
  onNavClick, 
  onConnectClick, 
  theme = 'dark', 
  setTheme,
  colorTheme = 'indigo',
  setColorTheme 
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id) => {
    if (onNavClick) {
      onNavClick(id);
    } else if (setActiveTab) {
      setActiveTab(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#060813]/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand / Logo */}
        <button 
          onClick={() => handleItemClick('home')}
          className="flex items-center space-x-3 group focus:outline-none text-left cursor-pointer"
        >
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_var(--accent-glow)] group-hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, var(--accent-from), var(--accent-to))' }}
          >
            P.
          </div>
          <div>
            <span className="font-bold text-lg text-white tracking-tight group-hover:text-purple-300 transition-colors">
              {portfolioData.personal.name}
            </span>
          </div>
        </button>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(to right, var(--accent-from), var(--accent-to))',
                      boxShadow: '0 0 12px var(--accent-glow)' 
                    }}
                  >
                    <span 
                      className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full blur-[1px]"
                      style={{ background: 'var(--accent-to)' }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Color Palette Switcher, Theme Toggle, Resume & Let's Connect */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Dynamic Color Theme Switcher */}
          <ThemeColorPicker 
            currentColor={colorTheme} 
            onSelectColor={setColorTheme} 
          />

          {/* Resume Download Button */}
          <a
            href="/Pooja_Patil_Resume.pdf"
            download="Pooja_Patil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-pink-500/60 hover:text-white hover:bg-slate-800 transition-all shadow-sm cursor-pointer group"
            title="Download Pooja Patil's Resume (PDF)"
          >
            <Download className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </a>

          {/* Theme Pill Toggle */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-full p-1 shadow-inner">
            <button 
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                theme === 'light' 
                  ? 'bg-amber-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.5)]' 
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Switch to Light mode"
              onClick={() => setTheme && setTheme('light')}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button 
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.5)]' 
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Switch to Dark mode"
              onClick={() => setTheme && setTheme('dark')}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

          {/* Let's Connect Button */}
          <button
            onClick={onConnectClick || (() => setActiveTab('contact'))}
            className="hidden sm:inline-flex btn-gradient-connect items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex items-center justify-around py-2.5 px-2 border-t border-slate-800/80 bg-[#080b18]/95 overflow-x-auto text-xs">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                isActive ? 'bg-purple-600/30 text-purple-300 font-semibold border border-purple-500/40' : 'text-slate-400'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
