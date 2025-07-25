import { useState, useEffect } from "react";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Mobile Application Developer",
      company: "SoftLinks FZCO",
      period: "Jan 2023 - Present",
      dotColor: "bg-blue-500",
      titleColor: "text-blue-400",
      achievements: [
        "Led development of 6+ Flutter apps from scratch, reducing project delivery time by 30%",
        "Optimized app performance by 40% through efficient state management implementation",
        "Collaborated with backend and design teams to deploy features for 50,000+ active users",
        "Achieved 100% on-time deployment to app stores with zero rollback incidents"
      ]
    },
    {
      title: "Flutter Developer",
      company: "Techozon Software House",
      period: "Aug 2022 - Dec 2022",
      dotColor: "bg-purple-500",
      titleColor: "text-purple-400",
      achievements: [
        "Conducted weekly code reviews and reduced bugs by 40%",
        "Developed 4+ Flutter applications with responsive UIs, enhancing user retention by 25%",
        "Implemented RESTful API integration that decreased app load time by 1.5 seconds"
      ]
    },
    {
      title: "Flutter Developer",
      company: "Infusible Coders",
      period: "Jan 2022 - Jul 2022",
      dotColor: "bg-cyan-500",
      titleColor: "text-cyan-400",
      achievements: [
        "Maintained and optimized 3+ legacy apps, increasing performance efficiency by 35%",
        "Refactored modular architecture for improved scalability and developer onboarding",
        "Managed version control and deployment cycles with 98% build success rate"
      ]
    },
    {
      title: "Flutter Developer (Freelance)",
      company: "Fiverr",
      period: "Feb 2020 - Dec 2023",
      dotColor: "bg-green-500",
      titleColor: "text-green-400",
      achievements: [
        "Delivered 20+ custom mobile solutions for international clients",
        "Achieved 90% 5-star rating with consistent high-quality deliverables",
        "Enhanced client delivery timelines by 20% through reusable code components",
        "Integrated third-party APIs including payment gateways and Firebase services"
      ]
    }
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "COMSATS University Islamabad",
      period: "2018 - 2022",
      icon: "fas fa-graduation-cap",
      iconColor: "text-blue-400"
    },
    {
      title: "Mobile App Development Certification",
      institution: "Flutter & Dart Masterclass",
      period: "2021",
      icon: "fas fa-certificate",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Experience</h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-2000 delay-700 ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
          
          <div className={`space-y-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start transition-all duration-700 delay-${1200 + index * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className={`absolute left-6 w-4 h-4 ${exp.dotColor} rounded-full border-4 border-background animate-pulse shadow-lg`}></div>
                <div className="ml-16 glass-effect p-6 rounded-xl bg-white/90 dark:bg-background/80 backdrop-blur-sm shadow-lg dark:shadow-none border border-white/50 dark:border-transparent">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${exp.titleColor}`}>{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground">{exp.period}</div>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className={`transition-all duration-500 delay-${1400 + index * 200 + achievementIndex * 100} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className={`mt-20 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className={`text-3xl font-bold mb-8 text-center transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Education</h3>
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {education.map((edu, index) => (
              <div key={index} className={`glass-effect p-6 rounded-xl text-center bg-white/90 dark:bg-background/80 backdrop-blur-sm shadow-lg dark:shadow-none border border-white/50 dark:border-transparent transition-all duration-700 delay-${1800 + index * 200} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className={`text-3xl mb-4 ${edu.iconColor}`}>
                  <i className={edu.icon}></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">{edu.title}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
