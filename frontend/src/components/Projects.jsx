import { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const fallbackProjects = [
    {
      id: 1,
      title: "DevConnect - Developer Community & Social Platform",
      description: "Full-stack developer networking platform featuring real-time chat, technical blog publishing, code snippets sharing, and interactive developer profiles.",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com/devconnect",
      githubUrl: "https://github.com/example/devconnect",
      featured: true
    },
    {
      id: 2,
      title: "CloudMetrics - DevOps & Cloud Monitoring Dashboard",
      description: "High-performance analytics dashboard providing real-time telemetry, server health metrics, latency heatmaps, and customizable alerting thresholds.",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Chart.js", "JavaScript", "REST API"],
      liveUrl: "https://example.com/cloudmetrics",
      githubUrl: "https://github.com/example/cloudmetrics",
      featured: true
    },
    {
      id: 3,
      title: "TaskFlow Pro - Agile Sprint & Team Collaboration",
      description: "Interactive Kanban and scrum management suite with drag-and-drop workflow, automated timeline estimation, and team activity audit logs.",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Express.js", "Node.js", "JWT Auth"],
      liveUrl: "https://example.com/taskflow",
      githubUrl: "https://github.com/example/taskflow",
      featured: true
    },
    {
      id: 4,
      title: "FastAPI Gateway & Microservices Orchestrator",
      description: "Scalable RESTful API gateway built with Express and Node.js implementing rate limiting, caching with Redis, request validation, and JWT authentication.",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Express.js", "Redis", "Docker", "REST API"],
      liveUrl: "https://example.com/api-gateway",
      githubUrl: "https://github.com/example/api-gateway",
      featured: false
    },
    {
      id: 5,
      title: "StreamPulse - Audio & Podcast Streaming App",
      description: "Sleek dark-mode audio player with visualizer, playlist curation, offline caching, and responsive fluid layout engineered with modern Tailwind CSS.",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Web Audio API"],
      liveUrl: "https://example.com/streampulse",
      githubUrl: "https://github.com/example/streampulse",
      featured: false
    },
    {
      id: 6,
      title: "StoreFront Commerce - Headless E-commerce API",
      description: "Production-grade e-commerce backend handling product catalogs, stripe payments integration, inventory webhooks, and transactional order confirmation emails.",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Express.js", "Stripe API", "MongoDB", "Nodemailer"],
      liveUrl: "https://example.com/storefront",
      githubUrl: "https://github.com/example/storefront",
      featured: false
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const queryParam = activeCategory === 'All' ? '' : `?category=${encodeURIComponent(activeCategory)}`;
        const res = await fetch(`/api/projects${queryParam}`);
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        } else {
          // Filter fallback
          filterFallback();
        }
      } catch (err) {
        console.warn('Using fallback projects:', err);
        filterFallback();
      } finally {
        setLoading(false);
      }
    };

    const filterFallback = () => {
      if (activeCategory === 'All') {
        setProjects(fallbackProjects);
      } else {
        setProjects(fallbackProjects.filter((p) => p.category === activeCategory));
      }
    };

    fetchProjects();
  }, [activeCategory]);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world applications showcasing React frontends, Tailwind styling, and Node/Express backend architectures.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 overflow-hidden flex flex-col shadow-xl shadow-black/30 hover:-translate-y-1.5"
            >
              {/* Image Preview */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
