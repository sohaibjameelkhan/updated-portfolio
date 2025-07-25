export default function ProjectsSection() {
  const projects = [
    {
      title: "ICD Happiness Club",
      description: "A comprehensive social and e-commerce platform featuring real-time chat, offers management, and seamless shopping experience. Successfully onboarded 10,000+ active users in the first year.",
      icon: "fas fa-shopping-cart",
      iconColor: "text-4xl mb-2",
      bgGradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      titleColor: "text-blue-400",
      tags: [
        { name: "Flutter", color: "bg-blue-500/20 text-blue-300" },
        { name: "Firebase", color: "bg-green-500/20 text-green-300" },
        { name: "Real-time Chat", color: "bg-purple-500/20 text-purple-300" }
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.icd.hc&hl=en",
      appStoreUrl: "https://apps.apple.com/ae/app/icd-happiness-club/id1250013777"
    },
    {
      title: "Racing Eye",
      description: "Advanced horse racing application with live tracking capabilities and real-time updates. Enhanced user engagement by 35% and onboarded 2,000+ users within the first 3 months.",
      icon: "fas fa-horse",
      iconColor: "text-4xl mb-2",
      bgGradient: "bg-gradient-to-br from-orange-500 to-red-600",
      titleColor: "text-orange-400",
      tags: [
        { name: "Flutter", color: "bg-blue-500/20 text-blue-300" },
        { name: "Live Tracking", color: "bg-orange-500/20 text-orange-300" },
        { name: "Real-time", color: "bg-red-500/20 text-red-300" }
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.racingeyenew.re&hl=en",
      appStoreUrl: "https://apps.apple.com/pk/app/racing-eye/id1493939462"
    },
    {
      title: "Clinic On App",
      description: "Comprehensive healthcare platform for doctor booking and appointment management. Streamlined the appointment flow, reducing booking time by 40% and increasing downloads by 5,000+.",
      icon: "fas fa-stethoscope",
      iconColor: "text-4xl mb-2",
      bgGradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
      titleColor: "text-teal-400",
      tags: [
        { name: "Flutter", color: "bg-blue-500/20 text-blue-300" },
        { name: "Healthcare", color: "bg-teal-500/20 text-teal-300" },
        { name: "Booking System", color: "bg-cyan-500/20 text-cyan-300" }
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.clinicOnApp&hl=en",
      appStoreUrl: "https://apps.apple.com/pk/app/cliniconapp/id6475239790"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Here are some of the mobile applications I've built that are live on app stores and serving thousands of users.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-effect p-6 rounded-xl transition-all duration-300">
              <div className={`mb-6 h-48 ${project.bgGradient} rounded-lg flex items-center justify-center`}>
                <div className="text-center text-white">
                  <i className={`${project.icon} ${project.iconColor}`}></i>
                  <div className="text-sm">{project.title.includes("Social") ? "Social + E-commerce" : 
                    project.title.includes("Racing") ? "Live Racing Tracker" : "Healthcare Platform"}</div>
                </div>
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${project.titleColor}`}>{project.title}</h3>
              <p className="text-slate-300 mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`px-3 py-1 ${tag.color} rounded-full text-xs`}>
                    {tag.name}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <i className="fab fa-google-play mr-2"></i>Play Store
                </a>
                <a 
                  href={project.appStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-900 transition-colors"
                >
                  <i className="fab fa-apple mr-2"></i>App Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
