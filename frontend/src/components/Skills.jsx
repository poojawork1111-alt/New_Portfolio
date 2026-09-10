import { useState, useEffect } from 'react';
import { Sparkles, Code2, Server, Wrench, Layers } from 'lucide-react';

const Skills = () => {
  const [skillsData, setSkillsData] = useState({
    frontend: [
      { name: 'React.js', level: 92, category: 'Frontend' },
      { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
      { name: 'HTML5 & CSS3', level: 95, category: 'Frontend' },
      { name: 'Vite & Tooling', level: 88, category: 'Frontend' },
      { name: 'Responsive Design', level: 90, category: 'Frontend' },
    ],
    backend: [
      { name: 'Node.js', level: 88, category: 'Backend' },
      { name: 'Express.js', level: 90, category: 'Backend' },
      { name: 'RESTful APIs', level: 92, category: 'Backend' },
      { name: 'JWT & Auth', level: 85, category: 'Backend' },
      { name: 'Middleware Architecture', level: 88, category: 'Backend' },
    ],
    databaseAndTools: [
      { name: 'MongoDB / Mongoose', level: 82, category: 'Database' },
      { name: 'PostgreSQL / SQL', level: 80, category: 'Database' },
      { name: 'Git & GitHub', level: 90, category: 'Tools' },
      { name: 'Postman & API Testing', level: 88, category: 'Tools' },
      { name: 'npm / Node Ecosystem', level: 92, category: 'Tools' },
    ],
  });

  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Fetch dynamic skills from Express Backend
    const fetchSkills = async () => {
      try {
        const res = await fetch('/api/skills');
        if (res.ok) {
          const data = await res.json();
          if (data && (data.frontend || data.backend)) {
            setSkillsData(data);
          }
        }
      } catch (err) {
        console.warn('Using local fallback skills:', err);
      }
    };
    fetchSkills();
  }, []);

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'frontend', label: 'Frontend (React & CSS)', icon: Code2 },
    { id: 'backend', label: 'Backend (Node & Express)', icon: Server },
    { id: 'tools', label: 'Databases & Tools', icon: Wrench },
  ];

  const renderSkillCard = (skill, index, colorGradient) => (
    <div
      key={index}
      className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 shadow-md group"
    >
      <div className="flex items-center justify-between mb-2.5">
        <span className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
          {skill.level}%
        </span>
      </div>
      {/* Progress Track */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorGradient} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient">Skill Matrix</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of the programming languages, frameworks, and backend technologies I work with every day.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Group */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Frontend Ecosystem</h3>
                  <p className="text-xs text-slate-400">React, Tailwind & JavaScript</p>
                </div>
              </div>
              <div className="space-y-3">
                {skillsData.frontend?.map((skill, i) =>
                  renderSkillCard(skill, i, 'from-cyan-500 to-blue-500')
                )}
              </div>
            </div>
          )}

          {/* Backend Group */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Backend & Architecture</h3>
                  <p className="text-xs text-slate-400">Node.js, Express & REST APIs</p>
                </div>
              </div>
              <div className="space-y-3">
                {skillsData.backend?.map((skill, i) =>
                  renderSkillCard(skill, i, 'from-emerald-500 to-teal-500')
                )}
              </div>
            </div>
          )}

          {/* Database & Tools Group */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Databases & DevOps</h3>
                  <p className="text-xs text-slate-400">Data Storage, Git & Workflow</p>
                </div>
              </div>
              <div className="space-y-3">
                {skillsData.databaseAndTools?.map((skill, i) =>
                  renderSkillCard(skill, i, 'from-purple-500 to-pink-500')
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
