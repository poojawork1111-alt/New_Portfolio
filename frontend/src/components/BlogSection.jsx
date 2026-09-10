import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Search, 
  Tag, 
  Code2, 
  ShieldCheck, 
  Database, 
  Zap, 
  Sparkles, 
  X, 
  Check, 
  Copy, 
  Share2,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  ShieldCheck: ShieldCheck,
  Database: Database,
  Zap: Zap,
};

const BlogSection = ({ onConnectClick }) => {
  const { blogs } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState(null);
  const [shareSuccess, setShareSuccess] = useState(false);

  const categories = ['All', 'React & State', 'Backend & Security', 'Database & Systems', 'UI/UX & Performance'];

  // Filter blogs based on category & search query
  const filteredBlogs = (blogs || []).filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedBlog) {
        setSelectedBlog(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedBlog]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBlog]);

  const handleCopyCode = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(idx);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleShare = (blog) => {
    const url = `${window.location.origin}/#blog-${blog.slug}`;
    navigator.clipboard.writeText(url);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <BookOpen className="w-4 h-4 text-pink-400" />
          <span>Tech Insights & Case Studies</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Engineering Articles & <span className="text-gradient-purple-pink">Real-World Lessons</span>
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Deep dives into full-stack MERN architecture, state normalization, REST API security, and high-concurrency database queries drawn directly from my production development experience.
        </p>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="reference-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-10 border border-purple-500/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`blog-filter-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] scale-105'
                    : 'bg-[#090d1c] text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by topic, keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2 rounded-xl text-xs sm:text-sm bg-[#090d1c] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* ARTICLES GRID */}
      {filteredBlogs.length === 0 ? (
        <div className="reference-card rounded-3xl p-12 text-center border border-purple-500/20 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
          <p className="text-sm text-slate-400 mb-6">
            No technical articles matched your search query "{searchQuery}". Try selecting another category or clearing filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {filteredBlogs.map((blog) => {
            const IconComponent = iconMap[blog.icon] || BookOpen;

            return (
              <article
                key={blog.id}
                className="blog-card reference-card reference-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-purple-500/20 hover:border-purple-500/40 shadow-lg group transition-all"
              >
                {/* Top Meta Info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
                      <IconComponent className="w-3.5 h-3.5 text-pink-400" />
                      <span>{blog.category}</span>
                    </span>

                    <div className="flex items-center space-x-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{blog.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-pink-400" />
                        <span>{blog.readTime}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2 leading-snug">
                    {blog.title}
                  </h3>

                  <h4 className="text-xs sm:text-sm font-medium text-pink-300/90 mb-3">
                    {blog.subtitle}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Bottom Tags & Read CTA */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {blog.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="blog-tag-pill px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-[#090d1c] border border-slate-800 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="blog-read-btn inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-white group-hover:text-pink-400 transition-colors cursor-pointer"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleShare(blog)}
                      className="p-2 rounded-xl bg-slate-800/60 hover:bg-purple-600/30 text-slate-400 hover:text-white transition-all cursor-pointer"
                      title="Copy link to article"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* BOTTOM CTA: ARCHITECTURE DISCUSSION */}
      <div className="relative z-10 reference-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-slate-900/80 shadow-[0_10px_35px_rgba(168,85,247,0.15)]">
        <div className="flex items-center space-x-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Want to Discuss System Architecture?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              I love discussing scalable state patterns, robust API security, and database query optimizations. Feel free to reach out for tech conversations or job opportunities!
            </p>
          </div>
        </div>

        <button
          onClick={onConnectClick}
          className="btn-gradient-connect flex-shrink-0 flex items-center space-x-2 px-6 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] cursor-pointer hover:scale-105"
        >
          <span>Let's Connect</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* FULL ARTICLE READER MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#090d1c] border border-purple-500/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-slate-800/90 bg-slate-900/60 backdrop-blur-md flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center flex-wrap gap-2.5 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
                    {selectedBlog.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedBlog.date}</span>
                  </span>
                  <span className="text-xs text-slate-400 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-pink-400" />
                    <span>{selectedBlog.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  {selectedBlog.title}
                </h2>
                <p className="text-sm text-pink-300/90 font-medium">
                  {selectedBlog.subtitle}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  Written by <span className="text-purple-300 font-semibold">{portfolioData.personal.name}</span> • Full Stack MERN Developer
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="p-2.5 rounded-2xl bg-slate-800 hover:bg-pink-600/30 text-slate-300 hover:text-white transition-all cursor-pointer flex-shrink-0"
                title="Close article (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-200">
              
              {/* Executive Summary */}
              <div className="p-4 sm:p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-sm leading-relaxed text-purple-200">
                <span className="font-bold text-pink-400 mr-2">📌 Executive Summary:</span>
                {selectedBlog.excerpt}
              </div>

              {/* Sections Breakdown */}
              {selectedBlog.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>{sec.heading}</span>
                  </h3>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Code Snippet Box */}
                  {sec.codeSnippet && (
                    <div className="rounded-2xl border border-slate-800 bg-[#050811] overflow-hidden my-4 shadow-md">
                      <div className="px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span className="font-mono text-purple-300 font-semibold">
                          {sec.language || 'javascript'}
                        </span>

                        <button
                          onClick={() => handleCopyCode(sec.codeSnippet, sIdx)}
                          className="flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                        >
                          {copiedCodeIndex === sIdx ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
                        <code>{sec.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* Key Takeaway */}
                  {sec.keyTakeaway && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-300 flex items-start space-x-3">
                      <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-white mr-1.5">Key Architecture Insight:</strong>
                        {sec.keyTakeaway}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Tags in Modal Footer */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedBlog.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-purple-300 border border-purple-500/20"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleShare(selectedBlog)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-purple-600/30 text-xs font-semibold text-slate-200 hover:text-white transition-all cursor-pointer"
                  >
                    {shareSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span>Share Article</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setSelectedBlog(null);
                      if (onConnectClick) onConnectClick();
                    }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Discuss Article</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default BlogSection;
