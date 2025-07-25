export default function SkillsSection() {
  const skills = [
    { icon: 'fab fa-flutter', name: 'Flutter', description: 'Cross-platform', color: 'text-blue-400' },
    { icon: 'fab fa-swift', name: 'Swift', description: 'iOS Native', color: 'text-orange-400' },
    { icon: 'fab fa-android', name: 'Kotlin', description: 'Android Native', color: 'text-green-400' },
    { icon: 'fas fa-code', name: 'Dart', description: 'Programming', color: 'text-blue-500' },
    { icon: 'fas fa-fire', name: 'Firebase', description: 'Backend Services', color: 'text-yellow-400' },
    { icon: 'fas fa-server', name: 'REST APIs', description: 'Integration', color: 'text-blue-600' },
    { icon: 'fab fa-aws', name: 'AWS', description: 'Cloud Services', color: 'text-orange-500' },
    { icon: 'fas fa-credit-card', name: 'Stripe', description: 'Payments', color: 'text-purple-400' },
    { icon: 'fab fa-github', name: 'GitHub', description: 'Version Control', color: 'text-gray-400' },
    { icon: 'fas fa-mobile-alt', name: 'Xcode', description: 'iOS Development', color: 'text-blue-400' },
    { icon: 'fab fa-android', name: 'Android Studio', description: 'Android Development', color: 'text-green-500' },
    { icon: 'fas fa-paint-brush', name: 'Figma', description: 'UI/UX Design', color: 'text-pink-400' }
  ];

  // Create duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-slate-900 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        {/* Horizontal scrolling skills container */}
        <div className="relative">
          <div 
            className="overflow-x-auto scrollbar-hide group"
            onMouseEnter={(e) => {
              const scrollContainer = e.currentTarget.querySelector('.animate-scroll-left');
              if (scrollContainer) {
                (scrollContainer as HTMLElement).style.animationPlayState = 'paused';
              }
            }}
            onMouseLeave={(e) => {
              const scrollContainer = e.currentTarget.querySelector('.animate-scroll-left');
              if (scrollContainer) {
                (scrollContainer as HTMLElement).style.animationPlayState = 'running';
              }
            }}
          >
            <div className="flex animate-scroll-left space-x-8 whitespace-nowrap pb-4" style={{ width: 'max-content' }}>
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="skill-card glass-effect p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 flex-shrink-0 w-56">
                  <div className={`text-4xl mb-4 ${skill.color}`}>
                    {skill.icon === 'fab fa-flutter' ? (
                      <div className="flex justify-center">
                        <img 
                          src="/flutter-icon.png" 
                          alt="Flutter" 
                          className="w-12 h-12" 
                        />
                      </div>
                    ) : (
                      <i className={skill.icon}></i>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-slate-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
