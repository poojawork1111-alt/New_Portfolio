import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Mail, 
  ArrowRight, 
  Lock, 
  Home, 
  FolderGit2, 
  Settings, 
  Box, 
  Zap, 
  Heart,
  CheckCircle2,
  Sparkles,
  Cpu,
  BookOpen,
  FileCode2,
  User,
  Briefcase
} from 'lucide-react';
import comingSoonCatImg from '../assets/coming_soon_cat.jpg';

const ComingSoonSection = ({ setActiveTab }) => {
  // Live Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 30,
  });

  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setNotified(true);
      setEmail('');
      setTimeout(() => setNotified(false), 5000);
    }
  };

  const formatNum = (n) => String(n).padStart(2, '0');

  const plannedItems = [
    {
      title: "AI Resume Analyzer",
      badge: "In Development",
      desc: "Smart ATS resume parsing engine with skill-gap recommendations and match scoring.",
      icon: Cpu,
    },
    {
      title: "My Tech Blog",
      badge: "Now Live!",
      desc: "Deep-dives into MERN stack engineering, state management, REST design & clean architecture.",
      icon: BookOpen,
    },
    {
      title: "Detailed Case Studies",
      badge: "System Design",
      desc: "High-scale multi-vendor e-commerce and courier fleet logistics architectural breakdowns.",
      icon: FileCode2,
    },
  ];

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Ambient glow effects */}
      <div className="ambient-glow-purple top-20 left-10" />
      <div className="ambient-glow-cyan top-96 right-10" />

      {/* TOP HERO AREA */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pt-4 sm:pt-6">
        
        {/* Left: Text, Buttons, Countdown & Email Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Rocket className="w-3.5 h-3.5 text-pink-400" />
            <span>FEATURE IN PROGRESS • COMING SOON</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Something <span className="text-gradient-purple-pink">Exciting</span> <br />
            is on the <span className="text-gradient-magenta-cyan">Way!</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            This page or feature is planned and currently under active development. I'm building it with attention to performance, modern design, and clean architecture.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab && setActiveTab('home')}
              className="btn-gradient-connect flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold cursor-pointer shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <button
              onClick={() => setActiveTab && setActiveTab('projects')}
              className="reference-card hover:border-purple-500/50 flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white cursor-pointer transition-all hover:bg-slate-800/80"
            >
              <FolderGit2 className="w-4 h-4 text-purple-400" />
              <span>Explore Live Projects</span>
            </button>
          </div>

          {/* 4 Countdown Pill Cards */}
          <div className="pt-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
              <span>Estimated Launch Countdown</span>
            </div>
            
            <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-md">
              {[
                { val: formatNum(timeLeft.days), label: 'Days' },
                { val: formatNum(timeLeft.hours), label: 'Hours' },
                { val: formatNum(timeLeft.minutes), label: 'Minutes' },
                { val: formatNum(timeLeft.seconds), label: 'Seconds' },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="reference-card rounded-2xl p-3 sm:p-4 text-center border border-purple-500/20 shadow-[0_4px_20px_rgba(168,85,247,0.15)]"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-mono">
                    {item.val}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Notify Input Bar */}
          <div className="max-w-lg pt-2">
            <form onSubmit={handleNotify} className="relative flex items-center">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                <input
                  type="email"
                  placeholder="Enter your email for launch notification"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#080b18]/90 border border-slate-800 focus:border-purple-500 rounded-full pl-11 pr-32 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                  required
                />
              </div>

              <button
                type="submit"
                className="absolute right-1.5 btn-gradient-connect flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold cursor-pointer shadow-md"
              >
                <span>Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {notified && (
              <div className="flex items-center space-x-2 text-xs text-emerald-400 mt-2 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're on the priority list! I'll notify you as soon as this page goes live.</span>
              </div>
            )}

            <div className="flex items-center space-x-2 text-xs text-slate-500 mt-3">
              <Lock className="w-3.5 h-3.5" />
              <span>No spam, I promise! Only major release updates.</span>
            </div>
          </div>

        </div>

        {/* Right: Sleeping Kitten Artwork Scene (5 cols) */}
        <div className="lg:col-span-5 relative">
          
          {/* Top Doodle */}
          <div className="absolute -top-6 left-6 z-20 font-handwriting text-pink-300 text-2xl rotate-[-6deg] select-none pointer-events-none drop-shadow">
            Good Things <br />
            Take Time ♡
          </div>

          {/* Image Box */}
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.25)] group">
            <img 
              src={comingSoonCatImg} 
              alt="Sleeping kitten on books" 
              className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Side Doodle */}
          <div className="absolute -bottom-4 right-6 z-20 font-handwriting text-purple-300 text-xl rotate-[3deg] select-none pointer-events-none drop-shadow">
            Building a Brighter Tomorrow ♡
          </div>
        </div>

      </div>

      {/* PLANNED FEATURES IN THE ROADMAP */}
      <div className="relative z-10 mb-14">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>What's In The Works:</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plannedItems.map((item, idx) => (
            <div 
              key={idx}
              className="reference-card rounded-2xl p-5 border border-purple-500/20 bg-[#080b18]/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-pink-500/10 border border-pink-500/30 text-pink-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-purple-300 flex items-center space-x-1.5 font-medium">
                <span>Status: In progress</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK NAVIGATION CARDS */}
      <div className="relative z-10 pt-4 border-t border-slate-800/80">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide uppercase">
            Explore active sections of the portfolio:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'about', label: 'About', icon: User },
            { id: 'projects', label: 'Projects', icon: FolderGit2 },
            { id: 'experience', label: 'Experience', icon: Briefcase },
            { id: 'skills', label: 'Skills', icon: Zap },
            { id: 'contact', label: 'Contact', icon: Mail },
          ].map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveTab && setActiveTab(card.id)}
              className="reference-card reference-card-hover rounded-2xl p-4 flex flex-col items-center justify-center text-center group cursor-pointer transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all mb-2">
                <card.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                {card.label}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ComingSoonSection;
