import { ArrowRight, ExternalLink, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

const Hero = () => {
  const techStack = [
    { name: 'React.js', color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript (ES6+)', color: 'from-amber-400 to-yellow-500' },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-500' },
    { name: 'Node.js', color: 'from-emerald-500 to-green-600' },
    { name: 'Express.js', color: 'from-slate-400 to-slate-200' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background glowing gradient orbs */}
      <div className="glow-orb w-96 h-96 bg-indigo-600/30 -top-10 -left-20 animate-pulse" />
      <div className="glow-orb w-[30rem] h-[30rem] bg-purple-600/25 top-1/3 -right-24" />
      <div className="glow-orb w-80 h-80 bg-pink-600/20 bottom-10 left-1/4" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro & Call to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-medium shadow-inner shadow-indigo-500/20">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Full-Stack Opportunities
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Building Scalable <br />
              <span className="text-gradient">Web Applications</span> <br />
              From Front to Back.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hi, I'm a passionate full-stack developer specialized in creating performant, interactive interfaces with{' '}
              <strong className="text-white font-semibold">React & Tailwind CSS</strong> backed by robust, secure REST APIs built with{' '}
              <strong className="text-white font-semibold">Node.js & Express.js</strong>.
            </p>

            {/* Tech Stack Badges */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Core Technology Stack
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white rounded-lg bg-slate-800/80 border border-slate-700/60 shadow-sm hover:border-indigo-400/50 hover:bg-slate-800 transition-all cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/25"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl text-slate-300 bg-slate-900/80 border border-slate-700/80 hover:text-white hover:bg-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-400">Responsive UIs</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-400">Full-Stack</p>
                <p className="text-xs text-slate-400">Architecture</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">REST APIs</p>
                <p className="text-xs text-slate-400">Express & Node</p>
              </div>
            </div>
          </div>

          {/* Right Column: Code Showcase / Mock Window */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glass Code Container */}
              <div className="rounded-2xl bg-slate-950/90 border border-slate-700/70 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>server.js + App.jsx</span>
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-2">
                  <p className="text-slate-500">// Modern Full-Stack Stack</p>
                  <p>
                    <span className="text-purple-400">import</span> express{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-emerald-300">'express'</span>;
                  </p>
                  <p>
                    <span className="text-purple-400">import</span> React{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-emerald-300">'react'</span>;
                  </p>
                  <p className="pt-2">
                    <span className="text-indigo-400">const</span> developer = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-emerald-300">"Full-Stack Engineer"</span>,
                  </p>
                  <p className="pl-4">
                    frontend: [<span className="text-cyan-300">"React"</span>,{' '}
                    <span className="text-teal-300">"Tailwind CSS"</span>],
                  </p>
                  <p className="pl-4">
                    backend: [<span className="text-emerald-300">"Node.js"</span>,{' '}
                    <span className="text-indigo-300">"Express.js"</span>],
                  </p>
                  <p className="pl-4">
                    focus: <span className="text-pink-300">"Fast, Scalable & Beautiful"</span>,
                  </p>
                  <p className="pl-4">
                    status: <span className="text-emerald-400">"Ready to build"</span>
                  </p>
                  <p>&#125;;</p>
                  <p className="pt-2 text-indigo-400">
                    app.<span className="text-blue-300">use</span>(
                    <span className="text-emerald-300">'/api'</span>, portfolioRoutes);
                  </p>
                  <p className="text-indigo-400">
                    app.<span className="text-blue-300">listen</span>(5000, () =&gt; &#123;
                  </p>
                  <p className="pl-4 text-slate-400">
                    console.<span className="text-blue-300">log</span>(
                    <span className="text-emerald-300">'Ready for action!'</span>);
                  </p>
                  <p>&#125;);</p>
                </div>

                {/* Bottom Status bar */}
                <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Full Stack Ready
                  </span>
                  <span className="font-mono text-[11px]">UTF-8 • JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
