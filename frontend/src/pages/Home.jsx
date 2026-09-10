import React, { useEffect } from 'react';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import ComingSoonSection from '../components/ComingSoonSection';
import NotFoundSection from '../components/NotFoundSection';

const Home = ({ activeTab, setActiveTab }) => {
  // Smooth scroll handler with offset for sticky navbar
  const scrollToSection = (id) => {
    if (id === '404' || id === 'coming-soon') {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Account for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  // On page load, if URL contains a valid hash, scroll to that section
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash && ['home', 'about', 'projects', 'experience', 'skills', 'blog', 'contact'].includes(hash)) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Scroll spy: Update activeTab in navbar based on current scroll position
  useEffect(() => {
    if (activeTab === '404' || activeTab === 'coming-soon') return;

    const sections = ['home', 'about', 'projects', 'experience', 'skills', 'blog', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          if (activeTab !== sections[i]) {
            setActiveTab(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab, setActiveTab]);

  // If 404 page is requested (wrong / non-existing URLs)
  if (activeTab === '404') {
    return (
      <div className="w-full relative overflow-hidden">
        <NotFoundSection setActiveTab={(tab) => {
          setActiveTab(tab);
          setTimeout(() => scrollToSection(tab), 100);
        }} />
      </div>
    );
  }

  // If Coming Soon page is requested (planned pages / future features)
  if (activeTab === 'coming-soon') {
    return (
      <div className="w-full relative overflow-hidden">
        <ComingSoonSection setActiveTab={(tab) => {
          setActiveTab(tab);
          setTimeout(() => scrollToSection(tab), 100);
        }} />
      </div>
    );
  }

  // Multi-section continuous scrolling layout (Home, About, Projects, Experience, Skills, Blog, Contact)
  return (
    <div className="w-full relative overflow-hidden space-y-16 sm:space-y-24">
      {/* 1. Home / Hero Section */}
      <section id="home" className="scroll-mt-20">
        <HomeSection setActiveTab={scrollToSection} />
      </section>

      {/* 2. About Section */}
      <section id="about" className="scroll-mt-20">
        <AboutSection setActiveTab={scrollToSection} />
      </section>

      {/* 3. Projects Section (Featured Live Production Projects & Roadmap) */}
      <section id="projects" className="scroll-mt-20">
        <ProjectsSection onExploreComingSoon={() => scrollToSection('coming-soon')} />
      </section>

      {/* 4. Experience Section */}
      <section id="experience" className="scroll-mt-20">
        <ExperienceSection onConnectClick={() => scrollToSection('contact')} />
      </section>

      {/* 5. Skills Section */}
      <section id="skills" className="scroll-mt-20">
        <SkillsSection onConnectClick={() => scrollToSection('contact')} />
      </section>

      {/* 6. Blog Section (Technical Articles & Case Studies) */}
      <section id="blog" className="scroll-mt-20">
        <BlogSection onConnectClick={() => scrollToSection('contact')} />
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="scroll-mt-20 pb-20">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
