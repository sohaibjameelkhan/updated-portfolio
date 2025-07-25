export default function ExperienceSection() {
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
      title: "BS Computer Science",
      institution: "KUST University",
      period: "2018 - 2022",
      icon: "fas fa-graduation-cap",
      iconColor: "text-blue-400"
    },
    {
      title: "Intermediate (ICS)",
      institution: "Punjab Group of Colleges",
      period: "2016 - 2018",
      icon: "fas fa-school",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-6 w-4 h-4 ${exp.dotColor} rounded-full border-4 border-slate-900`}></div>
                <div className="ml-16 glass-effect p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${exp.titleColor}`}>{exp.title}</h3>
                      <p className="text-slate-300">{exp.company}</p>
                    </div>
                    <div className="text-slate-400">{exp.period}</div>
                  </div>
                  <ul className="text-slate-300 space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl text-center">
                <div className={`text-3xl mb-4 ${edu.iconColor}`}>
                  <i className={edu.icon}></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">{edu.title}</h4>
                <p className="text-slate-300">{edu.institution}</p>
                <p className="text-slate-400 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
