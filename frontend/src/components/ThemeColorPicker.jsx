import React, { useState, useEffect, useRef } from 'react';
import { Palette, Check } from 'lucide-react';

export const colorThemes = [
  {
    id: 'indigo',
    name: 'Electric Indigo',
    subtitle: 'Linear / Vercel',
    from: '#6366f1',
    to: '#06b6d4',
  },
  {
    id: 'emerald',
    name: 'Cyber Emerald',
    subtitle: 'Supabase / Mint',
    from: '#10b981',
    to: '#14b8a6',
  },
  {
    id: 'sapphire',
    name: 'Royal Sapphire',
    subtitle: 'Apple / Corporate',
    from: '#2563eb',
    to: '#38bdf8',
  },
  {
    id: 'violet',
    name: 'Midnight Violet',
    subtitle: 'Raycast / Neon',
    from: '#8b5cf6',
    to: '#f472b6',
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    subtitle: 'Warm Tech / Gold',
    from: '#f59e0b',
    to: '#ef4444',
  },
];

const ThemeColorPicker = ({ currentColor, onSelectColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentThemeObj = colorThemes.find((t) => t.id === currentColor) || colorThemes[0];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Palette Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 transition-all cursor-pointer shadow-sm group"
        title="Change Portfolio Color Theme"
      >
        <Palette className="w-4 h-4 text-slate-400 group-hover:rotate-45 transition-transform" />
        <div 
          className="w-3.5 h-3.5 rounded-full shadow-sm"
          style={{ background: `linear-gradient(135deg, ${currentThemeObj.from}, ${currentThemeObj.to})` }}
        />
        <span className="hidden lg:inline text-xs font-medium text-slate-300">Theme</span>
      </button>

      {/* Floating Theme Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2.5 w-60 rounded-2xl bg-[#090d1f]/95 backdrop-blur-xl border border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.6)] p-2 z-50 animate-fadeIn">
          <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
            <p className="text-xs font-bold text-white tracking-wide">Select Color Scheme</p>
            <p className="text-[11px] text-slate-400">Live preview across entire site</p>
          </div>

          <div className="space-y-1">
            {colorThemes.map((theme) => {
              const isSelected = currentColor === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onSelectColor(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-slate-800/80 text-white border border-slate-700/60' 
                      : 'hover:bg-slate-800/40 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div 
                      className="w-4 h-4 rounded-full shadow-sm shrink-0"
                      style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}
                    />
                    <div>
                      <div className="text-xs font-semibold leading-tight">{theme.name}</div>
                      <div className="text-[10px] text-slate-400">{theme.subtitle}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeColorPicker;
