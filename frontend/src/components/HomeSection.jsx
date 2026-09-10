import React, { useState } from 'react';
import { ArrowRight, Sparkles, Code, Briefcase, Mail, Star, FolderGit2, Download, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import poojaWorkspaceImg from '../assets/pooja_workspace.jpg';
import ResumeModal from './ResumeModal';

const HomeSection = ({ setActiveTab }) => {
  const { personal } = portfolioData;
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="ambient-glow-purple top-10 left-10" />
      <div className="ambient-glow-pink top-80 right-10" />

      {/* HERO SECTION */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pt-4 sm:pt-8">
        
        {/* Left Column: Introductions */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AVAILABLE FOR FULL-TIME ROLES & ENGINEERING PROJECTS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Hi, I'm <span className="text-gradient-purple-pink">{personal.name}</span> <br />
            Full Stack <br />
            <span className="text-gradient-magenta-cyan">MERN Developer.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            {personal.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('skills')}
              className="btn-gradient-connect flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold cursor-pointer shadow-lg"
            >
              <span>Explore My Skills</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="reference-card hover:border-purple-500/50 flex items-center space-x-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white cursor-pointer transition-all hover:bg-slate-800/80 group shadow-md"
              title="Preview resume directly on screen"
            >
              <Eye className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>View Resume</span>
            </button>

            <a
              href="/Pooja_Patil_Resume.pdf"
              download="Pooja_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="reference-card hover:border-pink-500/50 flex items-center space-x-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white cursor-pointer transition-all hover:bg-slate-800/80 group shadow-md"
              title="Download Pooja Patil's Resume PDF"
            >
              <Download className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>Download</span>
            </a>

            <button
              onClick={() => setActiveTab('experience')}
              className="reference-card hover:border-purple-500/50 flex items-center space-x-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white cursor-pointer transition-all hover:bg-slate-800/80"
            >
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span>Experience</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>1 Year 1 Month Experience (Dexterous Tech)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
              <span>{personal.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Glow Halo */}
        <div className="lg:col-span-5 relative">
          
          {/* Floating Top Badge */}
          <div className="absolute -top-5 -left-2 sm:-left-5 z-20 flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-[#0b0f22]/90 border border-purple-500/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-purple-300">Software Engineer</div>
              <div className="text-xs font-bold text-white">Full Stack MERN</div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.25)] group">
            <img 
              src={poojaWorkspaceImg} 
              alt={personal.name} 
              className="w-full h-84 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Floating Bottom Badge */}
          <div className="absolute -bottom-5 -right-2 sm:-right-5 z-20 flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-[#0b0f22]/90 border border-emerald-500/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">Industry Experience</div>
              <div className="text-xs font-bold text-white">Dexterous Tech &bull; 1+ Yrs</div>
            </div>
          </div>
        </div>

      </div>

      {/* QUICK SECTION DIRECTORY CARDS */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
        {[
          {
            id: 'skills',
            title: 'Technical Skills',
            desc: '12 core frontend & tools',
            icon: Code,
            badge: '90% Avg',
          },
          {
            id: 'experience',
            title: 'My Journey',
            desc: 'Work experience & education',
            icon: Briefcase,
            badge: '1+ Years',
          },
          {
            id: 'projects',
            title: 'Featured Projects',
            desc: 'Live enterprise MERN systems',
            icon: FolderGit2,
            badge: '2 Live Systems',
          },
          {
            id: 'contact',
            title: 'Get in Touch',
            desc: 'Direct email, phone & form',
            icon: Mail,
            badge: '24h Reply',
          },
        ].map((card) => (
          <button
            key={card.id}
            onClick={() => setActiveTab(card.id)}
            className="reference-card reference-card-hover rounded-3xl p-6 flex flex-col justify-between text-left cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all">
                <card.icon className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900 border border-slate-800 text-purple-300">
                {card.badge}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-slate-400">
                {card.desc}
              </p>
            </div>

            <div className="mt-4 flex items-center space-x-1.5 text-xs font-semibold text-pink-400 group-hover:translate-x-1 transition-transform">
              <span>Explore Section</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        ))}
      </div>

      {/* Resume In-Browser Viewer Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />

    </div>
  );
};

export default HomeSection;
