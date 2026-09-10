import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Sparkles, Copy, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 3500 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    copied: <Copy className="w-5 h-5 text-purple-400 shrink-0" />,
    info: <Sparkles className="w-5 h-5 text-pink-400 shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.25)]',
    error: 'border-rose-500/40 shadow-[0_0_25px_rgba(244,63,94,0.25)]',
    copied: 'border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    info: 'border-pink-500/40 shadow-[0_0_25px_rgba(236,72,153,0.25)]',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-bounce-short sm:w-auto">
      <div 
        className={`flex items-center space-x-3 px-4 py-3.5 rounded-2xl bg-[#0c0f1e]/95 backdrop-blur-xl border ${borders[type] || borders.info} text-slate-100 shadow-2xl transition-all`}
      >
        <div className="p-1 rounded-xl bg-slate-900/80">
          {icons[type] || icons.info}
        </div>
        <div className="flex-1 pr-2">
          <p className="text-xs sm:text-sm font-medium leading-snug">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
