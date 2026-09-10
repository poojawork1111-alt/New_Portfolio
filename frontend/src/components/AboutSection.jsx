import React, { useState } from 'react';
import { Sparkles, Code2, Heart, Award, ArrowRight, MapPin, GraduationCap, Download, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import poojaPhotoImg from '../assets/pooja_photo.jpg';
import ResumeModal from './ResumeModal';
import AnimatedCounter from './AnimatedCounter';

const AboutSection = ({ setActiveTab }) => {
  const { personal, experience } = portfolioData;
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Ambient background glow */}
      <div className="ambient-glow-purple top-10 left-10" />
      <div className="ambient-glow-pink top-80 right-10" />

      {/* TOP HERO */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        
        {/* Left: Bio & Philosophy (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>ABOUT ME</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Crafting Digital Experiences with <br />
            <span className="text-gradient-purple-pink">Passion & Precision.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I am a Full Stack MERN Developer building robust and scalable web applications. Following my graduation in Computer Science (8.98 CGPA), I completed intensive UI Full Stack with React.js training followed by an industry internship at <strong>Naresh i Technologies</strong>, advancing to my current role at <strong>Dexterous Technology</strong>.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            At <strong>Dexterous Technology</strong> (since Aug 2025), I engineer core features for multi-vendor e-commerce platforms (EW Shopping) and courier fleet panels. My focus areas include REST API architecture, user roles & admin access control (RBAC), state management with Redux Toolkit, and performance optimization with lazy loading.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
              <GraduationCap className="w-4 h-4 text-pink-400" />
              <span>B.Sc. in Computers (8.98 CGPA)</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
              <Award className="w-4 h-4 text-sky-400" />
              <span>Naresh IT UI Full Stack & Internship</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="btn-gradient-connect flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold cursor-pointer shadow-md group"
              title="Preview resume directly on screen"
            >
              <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>View Resume (PDF)</span>
            </button>

            <a
              href="/Pooja_Patil_Resume.pdf"
              download="Pooja_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="reference-card hover:border-pink-500/50 flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold text-white cursor-pointer transition-colors group"
              title="Download Pooja Patil's Resume PDF directly"
            >
              <Download className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>Download</span>
            </a>

            <button
              onClick={() => setActiveTab('skills')}
              className="reference-card hover:border-purple-500/50 flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold text-white cursor-pointer transition-colors"
            >
              <span>View My Skills</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className="reference-card hover:border-purple-500/50 px-5 py-3 rounded-full text-sm font-semibold text-white cursor-pointer transition-colors"
            >
              <span>My Experience</span>
            </button>
          </div>
        </div>

        {/* Right: Profile Scene (5 cols) */}
        <div className="lg:col-span-5 relative">
          
          {/* Floating Top Badge */}
          <div className="absolute -top-5 -left-2 sm:-left-4 z-20 flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-[#0b0f22]/95 border border-purple-500/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <GraduationCap className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-bold text-white">8.98 CGPA &bull; B.Sc. Computers</span>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.25)] group">
            <img 
              src={poojaPhotoImg} 
              alt={personal.name} 
              className="w-full h-84 sm:h-96 object-cover object-top group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Floating Bottom Badge */}
          <div className="absolute -bottom-5 -right-2 sm:-right-4 z-20 flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-[#0b0f22]/95 border border-emerald-500/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-white">Full Stack Engineer &bull; Dexterous Tech</span>
          </div>
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
        {experience.stats.map((stat, idx) => (
          <div 
            key={idx}
            className="reference-card rounded-3xl p-6 text-center border border-purple-500/15 shadow-md hover:border-purple-500/40 transition-all hover:-translate-y-1"
          >
            <div className="text-3xl sm:text-4xl font-black text-gradient-purple-pink mb-1">
              <AnimatedCounter value={stat.value} />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {stat.label}
            </div>
          </div>
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

export default AboutSection;
