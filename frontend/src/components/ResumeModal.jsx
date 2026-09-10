import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-[#0c0f1d] border border-purple-500/30 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.25)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#080a14]/90 backdrop-blur">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Pooja Patil - Resume
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-normal hidden sm:inline-block">
                  MERN Developer
                </span>
              </h2>
              <p className="text-xs text-slate-400">Previewing official PDF</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="/Pooja_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center space-x-1.5 transition-colors cursor-pointer"
              title="Open in new browser tab"
            >
              <ExternalLink className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline">Open New Tab</span>
            </a>

            <a
              href="/Pooja_Patil_Resume.pdf"
              download="Pooja_Patil_Resume.pdf"
              className="btn-gradient-connect p-2 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 cursor-pointer shadow-md"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-500/20 hover:text-rose-300 border border-slate-700 text-slate-400 transition-colors cursor-pointer"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / PDF Viewer */}
        <div className="flex-1 w-full bg-slate-950/60 p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src="/Pooja_Patil_Resume.pdf#toolbar=1"
            title="Pooja Patil Resume PDF"
            className="w-full h-full rounded-xl border border-slate-800/80 bg-slate-900"
          >
            <div className="p-8 text-center text-slate-300">
              <p className="mb-4">Your browser does not support inline PDF viewing.</p>
              <a
                href="/Pooja_Patil_Resume.pdf"
                download="Pooja_Patil_Resume.pdf"
                className="btn-gradient-connect inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
