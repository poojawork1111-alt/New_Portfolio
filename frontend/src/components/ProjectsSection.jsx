import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Cpu,
  BookOpen,
  FileCode2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ProjectsSection = ({ onExploreComingSoon }) => {
  const { projects } = portfolioData;

  const upcomingProjects = [
    {
      title: "AI Resume Analyzer",
      category: "AI & Full Stack",
      desc: "Smart ATS resume parsing engine with skill match scoring and automated recommendations.",
      icon: Cpu,
      status: "Coming Soon",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      title: "My Tech Blog",
      category: "Content & Tutorials",
      desc: "Deep-dives into MERN stack engineering, state management, REST design, and clean code.",
      icon: BookOpen,
      status: "Now Live!",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30"
    },
    {
      title: "Detailed Case Studies",
      category: "System Design",
      desc: "Architecture blueprints, database schema design, and scalability lessons from production apps.",
      icon: FileCode2,
      status: "Coming Soon",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20"
    }
  ];

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Ambient background glow */}
      <div className="ambient-glow-purple top-20 left-10" />
      <div className="ambient-glow-cyan top-96 right-10" />

      {/* TOP SECTION HEADER */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>MY WORK & PROJECTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Featured Live <span className="text-gradient-purple-pink">Projects</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Real-world production web applications and enterprise logistics platforms built with modern MERN architecture.
          </p>
        </div>

        <div className="flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-[#0e1327]/80 border border-purple-500/20 backdrop-blur-md shadow-md sm:self-end">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-semibold text-slate-200">Production-Grade Architecture</span>
        </div>
      </div>

      {/* 2 FEATURED LIVE PROJECT CARDS */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            className="reference-card reference-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-purple-500/20 group hover:border-purple-500/40 shadow-lg relative overflow-hidden"
          >
            {/* Top banner accent gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>

            <div>
              {/* Header: Status badge & Live Link */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{proj.status}</span>
                </span>

                <a 
                  href={proj.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-600/20 border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white transition-all shadow-sm cursor-pointer"
                  title={`Open ${proj.displayUrl} in a new tab`}
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Title & Subtitle (Clickable) */}
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/title inline-block mb-2 cursor-pointer"
                title={`Visit ${proj.title}`}
              >
                <h2 className="text-2xl font-bold text-white group-hover/title:text-purple-300 transition-colors inline-flex items-center gap-2">
                  <span>{proj.title}</span>
                  <ExternalLink className="w-4 h-4 text-purple-400 opacity-70 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 transition-all" />
                </h2>
              </a>
              
              <p className="text-sm font-medium text-pink-400 mb-4">
                {proj.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {proj.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.technologies.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-200 group-hover:border-purple-500/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Key Features & Engineering Points from Resume */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Engineering Contributions:
                </span>
                {proj.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Live Link & Button Bar */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 font-mono flex items-center space-x-1.5 hover:text-white cursor-pointer group/link py-1"
                title={`Visit ${proj.liveUrl} in new tab`}
              >
                <span className="text-slate-400">Live:</span>
                <span className="text-purple-300 group-hover/link:text-pink-300 underline font-semibold flex items-center space-x-1">
                  <span>{proj.displayUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5 inline text-purple-400 group-hover/link:text-pink-300" />
                </span>
              </a>
              
              <a 
                href={proj.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gradient-connect text-xs font-semibold text-white px-4 py-2 rounded-full flex items-center space-x-1.5 shadow-md cursor-pointer hover:scale-105 transition-all"
              >
                <span>Explore System</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* UPCOMING IN PIPELINE / ROADMAP PREVIEW */}
      <div className="relative z-10 reference-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-[#080b18]/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-pink-500/15 border border-pink-500/25 flex items-center justify-center text-pink-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Upcoming in Pipeline
              </h3>
              <p className="text-xs text-slate-400">
                Exciting new projects, research & case studies currently in progress
              </p>
            </div>
          </div>

          <button
            onClick={onExploreComingSoon}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-purple-600/20 border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white transition-all cursor-pointer shadow-sm w-fit"
          >
            <span>View Coming Soon Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingProjects.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0b0e1e]/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between hover:border-purple-500/30 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-900 border border-slate-800 text-pink-400">
                    {item.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Planned Release</span>
                <span className="text-purple-400 font-mono">Q3 / Q4 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectsSection;
