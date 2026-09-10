import { Layout, Server, Zap, Shield, Sparkles, CheckCircle } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: Layout,
      title: 'Frontend Mastery',
      description: 'Crafting responsive, accessible, and dynamic interfaces with React.js and Tailwind CSS with smooth micro-interactions.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Server,
      title: 'Robust Backend APIs',
      description: 'Designing high-throughput, modular RESTful APIs and middleware using Node.js and Express.js.',
      color: 'from-emerald-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Performance & Speed',
      description: 'Optimized asset bundles, efficient state management, and lightweight server routes for instant page loads.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Clean Architecture',
      description: 'Well-structured component trees, reusable design systems, and secure request handling principles.',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  const highlights = [
    'Modular React architecture with custom hooks',
    'Tailwind CSS design systems and dynamic utility styling',
    'Express.js REST API creation and robust error handling',
    'Asynchronous state management and API integration',
    'Cross-browser and mobile-first responsiveness',
    'Modern development workflows with Vite and Git',
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Design with <span className="text-gradient">Powerful Logic</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I am a full-stack web developer passionate about engineering seamless digital experiences. Whether it is an intricate React interface or an Express backend with database models, I love bringing ideas to life through clean, performant code.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Narrative & Checklist Box */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-indigo-950/40 border border-slate-800/80 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Focused on delivering end-to-end solutions
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My approach combines strong fundamentals in modern JavaScript with practical experience across the full stack. On the frontend, I utilize React and Tailwind CSS to construct intuitive user journeys. On the backend, I leverage Node.js and Express to guarantee dependable data flow and high-speed response times.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm group"
                >
                  <span>Discuss a project with me</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-950/70 rounded-2xl p-6 border border-slate-800/80 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  What I bring to the table:
                </h4>
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
