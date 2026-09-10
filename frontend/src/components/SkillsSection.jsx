import React from 'react';
import { 
  Lightbulb, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  BookOpen, 
  Rocket, 
  ArrowRight,
  Target
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

const SkillsSection = ({ onConnectClick }) => {
  const { technical, growth, currentFocus, otherSkills } = portfolioData.skills;

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="ambient-glow-purple top-10 left-10" />
      <div className="ambient-glow-pink top-80 right-10" />

      {/* TOP HEADER AREA */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>MY SKILLS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Turning Knowledge <br className="hidden sm:block" />
            <span className="text-gradient-purple-pink">Into Real-World Solutions</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            I continuously learn and improve my skills to build better, faster and more user-friendly web applications.
          </p>
        </div>

        <div className="flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-[#0e1327]/80 border border-purple-500/20 backdrop-blur-md shadow-md sm:self-end">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-semibold text-slate-200">Modern Full-Stack Stack</span>
        </div>
      </div>

      {/* MAIN SKILLS GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* LEFT COLUMN: TECHNICAL SKILLS & GROWTH (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* TECHNICAL SKILLS BOX */}
          <div className="reference-card rounded-3xl p-6 sm:p-7 relative">
            
            {/* Header & Doodle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>TECHNICAL SKILLS</span>
              </div>
              <div className="text-xs font-semibold text-purple-300">
                MERN & Cloud Tech
              </div>
            </div>

            {/* 12 Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
              {technical.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0b0e1e]/90 border border-slate-800/90 hover:border-purple-500/40 rounded-2xl p-3 flex flex-col items-center justify-between transition-all duration-200 group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(168,85,247,0.15)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <TechLogo type={tech.iconType} className="w-6 h-6" />
                  </div>
                  
                  <span className="text-xs font-semibold text-slate-200 text-center mb-2 truncate w-full">
                    {tech.name}
                  </span>

                  {/* Progress Bar & Number */}
                  <div className="w-full flex items-center space-x-1.5 mt-auto">
                    <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-mono font-medium text-slate-400">
                      {tech.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* SKILL GROWTH & CURRENT FOCUS (Side-by-side row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* SKILL GROWTH CARD */}
            <div className="reference-card rounded-3xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>SKILL GROWTH</span>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-[11px] font-medium text-purple-300 flex items-center space-x-1">
                  <span>Constantly Improving</span>
                  <span className="text-xs font-bold">↑</span>
                </div>
              </div>

              {/* Chart SVG */}
              <div className="relative h-44 w-full pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 310 135">
                  {/* Grid Lines */}
                  <line x1="35" y1="20" x2="295" y2="20" stroke="currentColor" className="text-white/5 dark:text-white/5 text-slate-300" strokeDasharray="3 3" />
                  <line x1="35" y1="50" x2="295" y2="50" stroke="currentColor" className="text-white/5 dark:text-white/5 text-slate-300" strokeDasharray="3 3" />
                  <line x1="35" y1="80" x2="295" y2="80" stroke="currentColor" className="text-white/5 dark:text-white/5 text-slate-300" strokeDasharray="3 3" />
                  <line x1="35" y1="110" x2="295" y2="110" stroke="currentColor" className="text-white/10 dark:text-white/10 text-slate-400" />

                  {/* Y Axis Labels */}
                  <text x="5" y="24" fill="currentColor" className="text-slate-400 text-[9px] font-medium">100%</text>
                  <text x="5" y="54" fill="currentColor" className="text-slate-400 text-[9px] font-medium">75%</text>
                  <text x="5" y="84" fill="currentColor" className="text-slate-400 text-[9px] font-medium">50%</text>
                  <text x="5" y="114" fill="currentColor" className="text-slate-400 text-[9px] font-medium">25%</text>

                  {/* Gradient Area under curve */}
                  <defs>
                    <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#c084fc" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="growthStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="35%" stopColor="#a855f7" />
                      <stop offset="70%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                  
                  <path 
                    d="M 55 100 C 90 88, 105 76, 125 70 C 160 56, 175 46, 195 40 C 225 32, 245 22, 265 18 L 265 110 L 55 110 Z" 
                    fill="url(#growthGrad)" 
                  />

                  {/* Growth Line */}
                  <path 
                    d="M 55 100 C 90 88, 105 76, 125 70 C 160 56, 175 46, 195 40 C 225 32, 245 22, 265 18" 
                    fill="none" 
                    stroke="url(#growthStroke)" 
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Data Points */}
                  <circle cx="55" cy="100" r="4.5" fill="#818cf8" stroke="#070913" strokeWidth="2" />
                  <circle cx="125" cy="70" r="4.5" fill="#a855f7" stroke="#070913" strokeWidth="2" />
                  <circle cx="195" cy="40" r="4.5" fill="#c084fc" stroke="#070913" strokeWidth="2" />
                  <circle cx="265" cy="18" r="6" fill="#f43f5e" stroke="#ffffff" strokeWidth="2.5" className="animate-pulse" />

                  {/* Current Year Badge above 2026 */}
                  <g transform="translate(245, -2)">
                    <rect x="0" y="0" width="40" height="14" rx="7" fill="#f43f5e" className="shadow-sm" />
                    <text x="20" y="10" fill="#ffffff" fontSize="8" fontWeight="700" textAnchor="middle">98%</text>
                  </g>

                  {/* X Axis Labels */}
                  <text x="43" y="128" fill="currentColor" className="text-slate-400 font-medium text-[10px]">2023</text>
                  <text x="113" y="128" fill="currentColor" className="text-slate-400 font-medium text-[10px]">2024</text>
                  <text x="183" y="128" fill="currentColor" className="text-slate-400 font-medium text-[10px]">2025</text>
                  <text x="251" y="128" fill="#f43f5e" className="font-bold text-[11px]">2026</text>
                </svg>
              </div>
            </div>

            {/* CURRENT FOCUS CARD */}
            <div className="reference-card rounded-3xl p-6">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-5">
                <Target className="w-4 h-4 text-pink-400" />
                <span>CURRENT FOCUS</span>
              </div>

              <div className="space-y-3.5">
                {currentFocus.map((focus, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-slate-300 group">
                    <span className="w-2 h-2 rounded-full border-2 border-purple-400 bg-purple-500/50 group-hover:scale-125 transition-transform flex-shrink-0"></span>
                    <span className="group-hover:text-white transition-colors">{focus}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: OTHER SKILLS & ALWAYS LEARNING (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* OTHER SKILLS BOX */}
          <div className="reference-card rounded-3xl p-6 sm:p-7">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span>OTHER SKILLS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherSkills.map((item, idx) => {
                const IconComponent = {
                  Lightbulb,
                  Users,
                  MessageSquare,
                  TrendingUp,
                }[item.icon] || Lightbulb;

                return (
                  <div 
                    key={idx}
                    className="bg-[#0b0e1e]/90 border border-slate-800/90 hover:border-purple-500/30 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center mb-3`}>
                      <IconComponent className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ALWAYS LEARNING QUOTE CARD */}
          <div className="reference-card rounded-3xl p-6 sm:p-7 relative overflow-hidden">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-4">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>ALWAYS LEARNING</span>
            </div>

            <blockquote className="text-slate-200 text-base font-medium italic leading-relaxed mb-6">
              “The more you learn, the more you build, the brighter your future gets.”
            </blockquote>

            <div className="flex justify-end items-center space-x-2">
              <span className="text-xs font-semibold text-purple-300">
                Continuous Improvement & Clean Code &bull; Pooja Patil
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* RESUME SKILL CATEGORIES MATRIX */}
      <div className="relative z-10 reference-card rounded-3xl p-6 sm:p-8 mb-12 border border-purple-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span>CORE DOMAINS & RESUME SKILL BREAKDOWN</span>
          </div>
          <span className="text-xs text-pink-400 font-medium">
            Full Stack MERN Competencies ♡
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Frontend */}
          <div className="bg-[#0b0e1e]/90 border border-slate-800 rounded-2xl p-4 hover:border-purple-500/30 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>Frontend</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.skills.categories.frontend.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-[#0b0e1e]/90 border border-slate-800 rounded-2xl p-4 hover:border-purple-500/30 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Backend</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.skills.categories.backend.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* State Management */}
          <div className="bg-[#0b0e1e]/90 border border-slate-800 rounded-2xl p-4 hover:border-purple-500/30 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>State Management</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.skills.categories.stateManagement.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="bg-[#0b0e1e]/90 border border-slate-800 rounded-2xl p-4 hover:border-purple-500/30 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-3 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              <span>Security & Auth</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.skills.categories.security.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-[#0b0e1e]/90 border border-slate-800 rounded-2xl p-4 hover:border-purple-500/30 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Tools & Deployment</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.skills.categories.tools.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="bg-[#0b0e1e]/90 border border-slate-800 rounded-2xl p-4 hover:border-purple-500/30 transition-all">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>Methodologies & Other</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.skills.categories.other.map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BANNER: LET'S BUILD SOMETHING AMAZING TOGETHER */}
      <div className="relative z-10 reference-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-slate-900/80 shadow-[0_10px_35px_rgba(168,85,247,0.15)]">
        <div className="flex items-center space-x-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
            <Rocket className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              I'm always open to new opportunities, collaborations or just a friendly chat about tech.
            </p>
          </div>
        </div>

        <button 
          onClick={onConnectClick}
          className="btn-gradient-connect flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap"
        >
          <span>Let's Connect</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default SkillsSection;
