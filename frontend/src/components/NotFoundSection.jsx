import React from 'react';
import { 
  Home, 
  User, 
  Code, 
  Mail, 
  ArrowRight, 
  Sparkles,
  FolderGit2
} from 'lucide-react';
import astronautCatImg from '../assets/404_astronaut.jpg';

const NotFoundSection = ({ setActiveTab }) => {
  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Ambient background glow */}
      <div className="ambient-glow-purple top-10 left-1/4" />
      <div className="ambient-glow-cyan top-80 right-1/4" />

      {/* TOP SECTION: 404 & ASTRONAUT CAT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        
        {/* Left: 404 text & buttons (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Top Doodle */}
          <div className="font-handwriting text-pink-300 text-2xl rotate-[-4deg] select-none">
            Lost? Let's get you <br />
            back on track ♡
          </div>

          {/* Giant Cosmic 404 */}
          <div className="relative inline-block">
            <h1 className="text-8xl sm:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none text-gradient-purple-pink select-none filter drop-shadow-[0_0_35px_rgba(217,70,239,0.35)]">
              404
            </h1>
            <Sparkles className="w-8 h-8 text-pink-400 absolute -top-2 right-4 animate-bounce" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Oops! <span className="text-gradient-magenta-cyan">Page Not Found</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Looks like you've traveled to a part of the internet that doesn't exist. Don't worry, even the best developers take a wrong turn sometimes! ♡
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => setActiveTab('home')}
              className="btn-gradient-connect flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold cursor-pointer shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span>Go Back Home</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className="reference-card hover:border-purple-500/50 flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white cursor-pointer transition-all hover:bg-slate-800/80"
            >
              <FolderGit2 className="w-4 h-4 text-purple-400" />
              <span>Explore My Projects</span>
            </button>
          </div>

        </div>

        {/* Right: Astronaut Cat on Moon (5 cols) */}
        <div className="lg:col-span-5 relative">
          
          {/* Top Doodle */}
          <div className="absolute -top-6 right-8 z-20 font-handwriting text-purple-300 text-2xl rotate-[5deg] select-none pointer-events-none drop-shadow">
            Same Girl... <br />
            Still Exploring ♡
          </div>

          {/* Image Box */}
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.3)] group">
            <img 
              src={astronautCatImg} 
              alt="Astronaut Cat on Moon" 
              className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-50"></div>
          </div>

        </div>

      </div>

      {/* QUICK NAVIGATION CARDS */}
      <div className="relative z-10 pt-4">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide uppercase">
            Or maybe you were looking for...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              id: 'home',
              label: 'Home',
              desc: 'Back to the beginning',
              icon: Home,
            },
            {
              id: 'about',
              label: 'About',
              desc: 'Know more about me',
              icon: User,
            },
            {
              id: 'projects',
              label: 'Projects',
              desc: 'Check out my work',
              icon: Code,
            },
            {
              id: 'contact',
              label: 'Contact',
              desc: "Let's get in touch",
              icon: Mail,
            },
          ].map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveTab(card.id)}
              className="reference-card reference-card-hover rounded-3xl p-5 flex items-center justify-between group text-left cursor-pointer transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all flex-shrink-0">
                  <card.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {card.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {card.desc}
                  </div>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NotFoundSection;
