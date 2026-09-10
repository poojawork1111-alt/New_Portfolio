import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const validTabs = ['home', 'about', 'projects', 'experience', 'skills', 'blog', 'contact', 'coming-soon', '404'];
  const comingSoonAliases = ['coming-soon', 'case-studies', 'ai-analyzer', 'roadmap'];
  
  const getInitialTab = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash) {
      if (comingSoonAliases.includes(hash)) {
        return 'coming-soon';
      }
      if (validTabs.includes(hash)) {
        return hash;
      }
      // Non-existing/wrong URL -> 404 page
      return '404';
    }
    const saved = localStorage.getItem('portfolio-active-tab');
    if (saved && validTabs.includes(saved)) {
      return saved;
    }
    return 'home';
  };

  const [activeTab, setActiveTabState] = useState(getInitialTab);
  const isAutoScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Called during user scrolling (scroll spy) to update active indicator in navbar
  const setActiveTabFromScroll = (tab) => {
    if (isAutoScrolling.current) return;
    setActiveTabState(tab);
    window.history.replaceState(null, '', `#${tab}`);
    localStorage.setItem('portfolio-active-tab', tab);
  };

  // Called when user clicks on a navbar link or button to scroll smoothly
  const scrollToSection = (tab) => {
    let targetTab = tab;
    if (comingSoonAliases.includes(tab)) {
      targetTab = 'coming-soon';
    }
    
    setActiveTabState(targetTab);
    window.history.replaceState(null, '', `#${targetTab}`);
    localStorage.setItem('portfolio-active-tab', targetTab);

    if (targetTab === '404' || targetTab === 'coming-soon') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(targetTab);
    if (el) {
      isAutoScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      const yOffset = -80; // Account for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // Re-enable scroll spy after smooth scroll animation completes
      scrollTimeout.current = setTimeout(() => {
        isAutoScrolling.current = false;
      }, 850);
    }
  };

  // On initial load with hash (e.g. #contact)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash) {
      if (comingSoonAliases.includes(hash)) {
        setActiveTabState('coming-soon');
        window.scrollTo({ top: 0 });
      } else if (hash === '404') {
        setActiveTabState('404');
        window.scrollTo({ top: 0 });
      } else if (validTabs.includes(hash) && hash !== 'home') {
        setTimeout(() => {
          scrollToSection(hash);
        }, 150);
      }
    }
  }, []);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const [colorTheme, setColorTheme] = useState(() => {
    return localStorage.getItem('portfolio-color-theme') || 'indigo';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-color-theme', colorTheme);
    localStorage.setItem('portfolio-color-theme', colorTheme);
  }, [colorTheme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${
      theme === 'light' ? 'theme-light bg-[#f8fafc] text-slate-900' : 'bg-[#060813] text-slate-100'
    }`}>
      {/* Navbar with active tab indicator & functional theme toggle & color palette picker */}
      <Navbar 
        activeTab={activeTab} 
        onNavClick={scrollToSection}
        onConnectClick={() => scrollToSection('contact')}
        theme={theme}
        setTheme={handleThemeChange}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        <Home 
          activeTab={activeTab} 
          setActiveTab={setActiveTabFromScroll}
          scrollToSection={scrollToSection}
        />
      </main>
    </div>
  );
}

export default App;
