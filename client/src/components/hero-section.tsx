import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const subtitles = [
    "Senior Mobile Application Developer",
    "Flutter & Native iOS/Android Expert",
    "Building Apps for 50K+ Users",
    "4+ Years of Innovation"
  ];

  useEffect(() => {
    let subtitleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      const current = subtitles[subtitleIndex];
      
      if (isDeleting) {
        setCurrentSubtitle(current.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentSubtitle(current.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let delay = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        delay = 500;
      }
      
      timeout = setTimeout(typeWriter, delay);
    };

    const initialDelay = setTimeout(typeWriter, 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
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
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-pattern section pt-20">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500 transform rotate-45 animate-float opacity-20"></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-12 animate-float opacity-30"
          style={{ animationDelay: '-2s' }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-12 h-12 border-2 border-cyan-400 rounded-full animate-float opacity-25"
          style={{ animationDelay: '-4s' }}
        ></div>
        <div 
          className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-45 animate-float opacity-20"
          style={{ animationDelay: '-1s' }}
        ></div>
        
        {/* Particle effects */}
        {[
          { top: '10%', left: '5%', delay: '0s' },
          { top: '20%', left: '90%', delay: '-1s' },
          { top: '80%', left: '10%', delay: '-2s' },
          { top: '60%', left: '85%', delay: '-3s' },
          { top: '40%', left: '15%', delay: '-4s' },
          { top: '70%', left: '75%', delay: '-5s' }
        ].map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Professional headshot image */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500 animate-pulse-glow">
            <img 
              src="/profile.png" 
              alt="Muhammad Sohaib Jameel - Senior Mobile Application Developer" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Sohaib</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-slate-300 mb-8 h-16">
          <span className="typing-cursor">{currentSubtitle}</span>
        </div>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Senior Mobile Application Developer with 4+ years of experience crafting high-performance iOS and Android applications using Flutter, Dart, Kotlin, and Swift.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Connect
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
