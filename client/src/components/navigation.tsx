import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const updateActiveNav = () => {
      const sections = document.querySelectorAll('.section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', updateActiveNav);
    return () => window.removeEventListener('scroll', updateActiveNav);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-blue-400">
            Sohaib Jameel
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`nav-link relative transition-colors duration-300 hover:text-blue-400 ${
                  activeSection === id ? 'active' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center ml-4">
            <span className="mr-2 text-xs text-slate-400">🌞</span>
            <Switch checked={isDark} onCheckedChange={setIsDark} />
            <span className="ml-2 text-xs text-slate-400">🌙</span>
          </div>
          <button className="md:hidden text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
