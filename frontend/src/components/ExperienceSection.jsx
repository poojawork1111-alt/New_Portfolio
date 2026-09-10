import React from 'react';
import { 
  Building2, 
  Monitor, 
  GraduationCap, 
  CheckCircle2, 
  Code, 
  FolderGit2, 
  Layers, 
  Star, 
  Send, 
  ArrowRight,
  Sparkles,
  Award,
  Briefcase
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import contactDeskImg from '../assets/contact_desk.jpg';

const ExperienceSection = ({ onConnectClick }) => {
  const { timeline, learnings, stats } = portfolioData.experience;

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Ambient background glow */}
      <div className="ambient-glow-purple top-20 left-10" />
      <div className="ambient-glow-pink top-96 right-10" />

      {/* TOP HEADER */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>MY EXPERIENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Professional <span className="text-gradient-purple-pink">Journey</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg mt-2">
            A journey of continuous learning, building, and growing.
          </p>
        </div>

        <div className="flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-[#0e1327]/80 border border-purple-500/20 backdrop-blur-md shadow-md sm:self-end">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-semibold text-slate-200">1+ Years Engineering Track Record</span>
        </div>
      </div>

      {/* MAIN CONTENT: TIMELINE & RIGHT PANEL */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* LEFT COLUMN: TIMELINE (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {timeline.map((item) => {
            const IconComponent = {
              Building2,
              Monitor,
              GraduationCap,
              Award,
              Briefcase,
            }[item.icon] || Building2;

            return (
              <div key={item.id} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                
                {/* Timeline Date Column */}
                <div className="sm:w-32 flex-shrink-0 pt-3 sm:text-right">
                  <span className="text-xs font-semibold text-slate-400 font-mono tracking-wide">
                    {item.period}
                  </span>
                </div>

                {/* Vertical Node Indicator */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 border-2 border-slate-900 shadow-[0_0_10px_rgba(217,70,239,0.8)] z-10"></div>
                  <div className="w-[2px] h-full bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent -mt-1"></div>
                </div>

                {/* Timeline Card */}
                <div className="flex-1 reference-card reference-card-hover rounded-3xl p-6 relative">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.technologies.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900/80 border border-slate-800 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {item.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-purple-400 text-sm mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: ARTWORK & WHAT I'VE LEARNED (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Cozy Workspace Desk Image */}
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/25 shadow-[0_0_35px_rgba(168,85,247,0.2)] group">
            <img 
              src={contactDeskImg} 
              alt="Developer Workspace" 
              className="w-full h-56 sm:h-64 object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-60"></div>
            
            <div className="absolute bottom-3 right-4 px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-xs font-semibold text-slate-200">
              ⚡ Agile Sprints & Production PRs
            </div>
          </div>

          {/* Inspirational Quote Card */}
          <div className="reference-card rounded-3xl p-6 relative">
            <div className="flex items-start space-x-3 mb-2">
              <span className="text-3xl text-purple-400 font-serif leading-none">“</span>
              <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed pt-1">
                Every line of code and production release adds depth to engineering expertise.
              </p>
              <Sparkles className="w-5 h-5 text-pink-400 flex-shrink-0" />
            </div>
          </div>

          {/* What I've Learned Card */}
          <div className="reference-card rounded-3xl p-6 sm:p-7 relative">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-200 mb-5">
              <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300">
                🧠
              </div>
              <span>What I've Learned</span>
            </div>

            <div className="space-y-3 mb-5">
              {learnings.map((learning, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>{learning}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <span className="text-xs font-semibold text-purple-300">
                Production Best Practices &bull; Clean Architecture
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* STATS ROW (4 CARDS) */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {stats.map((stat, idx) => {
          const IconComp = {
            Code,
            FolderGit2,
            Users: Layers,
            Star,
          }[stat.icon] || Code;

          return (
            <div 
              key={idx}
              className="reference-card reference-card-hover rounded-3xl p-5 sm:p-6 flex items-center space-x-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* BOTTOM BANNER: OPEN TO NEW OPPORTUNITIES */}
      <div className="relative z-10 reference-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-slate-900/80 shadow-[0_10px_35px_rgba(168,85,247,0.15)]">
        <div className="flex items-center space-x-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
            <Send className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Open to New Opportunities
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Always excited to work on challenging projects and be part of an innovative team.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-xs font-semibold text-purple-300 px-3.5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span>⚡ Ready to Deploy & Deliver</span>
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

    </div>
  );
};

export default ExperienceSection;
