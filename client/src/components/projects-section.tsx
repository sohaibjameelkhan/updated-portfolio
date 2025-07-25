import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Download, Search, Filter } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  bgGradient: string;
  titleColor: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  images: string[];
  tags: { name: string; color: string }[];
  playStoreUrl: string;
  appStoreUrl: string;
  category?: string;
  year?: number;
  downloads?: string;
  rating?: number;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects: Project[] = [
    {
      title: "ICD Happiness Club",
      description: "A comprehensive social and e-commerce platform featuring real-time chat, offers management, and seamless shopping experience. Successfully onboarded 10,000+ active users in the first year.",
      icon: "fas fa-shopping-cart",
      iconColor: "text-4xl mb-2",
      bgGradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      titleColor: "text-blue-400",
      fullDescription: "ICD Happiness Club is a revolutionary social and e-commerce platform that combines the best of both worlds. Built with Flutter and Firebase, this app features real-time chat functionality, advanced offer management, and a seamless shopping experience. The platform successfully onboarded over 10,000 active users in its first year, demonstrating exceptional user engagement and retention rates.",
      features: [
        "Real-time chat with push notifications",
        "Advanced offer management system",
        "Seamless e-commerce integration",
        "Social media features",
        "Payment gateway integration",
        "Analytics and reporting dashboard"
      ],
      techStack: ["Flutter", "Firebase", "Dart", "REST APIs", "Push Notifications"],
      images: ["/project-icd-1.png", "/project-icd-2.png", "/project-icd-3.png"],
      tags: [
        { name: "Flutter", color: "bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700" },
        { name: "Firebase", color: "bg-orange-500/20 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-700" },
        { name: "Real-time Chat", color: "bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-700" }
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.icd.hc&hl=en",
      appStoreUrl: "https://apps.apple.com/ae/app/icd-happiness-club/id1250013777",
      category: "Social",
      year: 2023,
      downloads: "50K+",
      rating: 4.8
    },
    {
      title: "Racing Eye",
      description: "Advanced horse racing application with live tracking capabilities and real-time updates. Enhanced user engagement by 35% and onboarded 2,000+ users within the first 3 months.",
      icon: "fas fa-horse",
      iconColor: "text-4xl mb-2",
      bgGradient: "bg-gradient-to-br from-orange-500 to-red-600",
      titleColor: "text-orange-400",
      fullDescription: "Racing Eye is an advanced horse racing application that provides live tracking capabilities and real-time updates. The app features sophisticated algorithms for race prediction, live streaming of races, and comprehensive statistics. It enhanced user engagement by 35% and successfully onboarded over 2,000 users within the first 3 months of launch.",
      features: [
        "Live race tracking and streaming",
        "Real-time odds and statistics",
        "Advanced prediction algorithms",
        "User betting interface",
        "Race history and analytics",
        "Push notifications for race updates"
      ],
      techStack: ["Flutter", "WebSocket", "Real-time APIs", "Analytics", "Live Streaming"],
      images: ["/project-racing-1.png", "/project-racing-2.png", "/project-racing-3.png"],
      tags: [
        { name: "Flutter", color: "bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700" },
        { name: "Live Tracking", color: "bg-orange-500/20 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-700" },
        { name: "Real-time", color: "bg-red-500/20 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-700" }
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.racingeyenew.re&hl=en",
      appStoreUrl: "https://apps.apple.com/pk/app/racing-eye/id1493939462",
      category: "Sports",
      year: 2023,
      downloads: "25K+",
      rating: 4.6
    },
    {
      title: "Clinic On App",
      description: "Comprehensive healthcare platform for doctor booking and appointment management. Streamlined the appointment flow, reducing booking time by 40% and increasing downloads by 5,000+.",
      icon: "fas fa-stethoscope",
      iconColor: "text-4xl mb-2",
      bgGradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
      titleColor: "text-teal-400",
      fullDescription: "Clinic On App is a comprehensive healthcare platform that revolutionizes doctor booking and appointment management. The app streamlines the entire appointment flow, reducing booking time by 40% and significantly increasing downloads by over 5,000. It features advanced scheduling algorithms, secure patient data management, and seamless communication between patients and healthcare providers.",
      features: [
        "Advanced appointment scheduling",
        "Secure patient data management",
        "Doctor-patient communication",
        "Payment processing",
        "Medical records management",
        "Telemedicine integration"
      ],
      techStack: ["Flutter", "Healthcare APIs", "Security", "Payment Gateway", "Telemedicine"],
      images: ["/project-clinic-1.png", "/project-clinic-2.png", "/project-clinic-3.png"],
      tags: [
        { name: "Flutter", color: "bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700" },
        { name: "Healthcare", color: "bg-teal-500/20 text-teal-600 dark:text-teal-300 border border-teal-200 dark:border-teal-700" },
        { name: "Booking System", color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700" }
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.clinicOnApp&hl=en",
      appStoreUrl: "https://apps.apple.com/pk/app/cliniconapp/id6475239790",
      category: "Healthcare",
      year: 2023,
      downloads: "15K+",
      rating: 4.7
    }
  ];

  const allProjects: Project[] = [
    ...projects,
  ];

  const categories = ["all", "Social", "Sports", "Healthcare"];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Here are some of the mobile applications I've built that are live on app stores and serving thousands of users.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card glass-effect p-6 rounded-xl transition-all duration-300 bg-white/90 dark:bg-background/80 backdrop-blur-sm shadow-lg dark:shadow-none border border-white/50 dark:border-transparent cursor-pointer hover:scale-105 hover:shadow-xl"
              onClick={() => handleProjectClick(project)}
            >
              <div className={`mb-6 h-48 ${project.bgGradient} rounded-lg flex items-center justify-center`}>
                <div className="text-center text-white">
                  <i className={`${project.icon} ${project.iconColor}`}></i>
                  <div className="text-sm">{project.title.includes("Social") ? "Social + E-commerce" : 
                    project.title.includes("Racing") ? "Live Racing Tracker" : "Healthcare Platform"}</div>
                </div>
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${project.titleColor}`}>{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`px-3 py-1 ${tag.color} rounded-full text-xs`}>
                    {tag.name}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
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

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setIsAllProjectsOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <i className="fas fa-eye mr-2"></i>
            View All Projects
          </Button>
        </div>

        {/* Beautiful Project Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-0 shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center mb-4">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-6">
                {/* Hero Image Section */}
                <div className={`relative h-64 rounded-xl overflow-hidden ${selectedProject.bgGradient}`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <i className={`${selectedProject.icon} text-6xl mb-4`}></i>
                      <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                      <p className="text-lg opacity-90">Mobile Application</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">About the Project</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">Project Gallery</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProject.images.map((image, index) => (
                          <div key={index} className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
                            <div className="text-center text-gray-500 dark:text-gray-400">
                              <i className="fas fa-mobile-alt text-2xl mb-2"></i>
                              <p className="text-xs">Screenshot {index + 1}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => window.open(selectedProject.playStoreUrl, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Download on Play Store
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(selectedProject.appStoreUrl, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download on App Store
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* All Projects Dialog */}
        <Dialog open={isAllProjectsOpen} onOpenChange={setIsAllProjectsOpen}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-0 shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center mb-6">
                All Projects
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search projects, technologies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                        className="capitalize whitespace-nowrap"
                      >
                        <Filter className="w-4 h-4 mr-2" />
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group project-card glass-effect p-4 rounded-xl transition-all duration-300 bg-white/90 dark:bg-background/80 backdrop-blur-sm shadow-lg dark:shadow-none border border-white/50 dark:border-transparent cursor-pointer hover:scale-105 hover:shadow-xl"
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Project Header */}
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-muted-foreground">{project.rating}</span>
                      </div>
                    </div>

                    {/* Project Icon */}
                    <div className={`mb-4 h-32 ${project.bgGradient} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-center text-white">
                        <i className={`${project.icon} text-2xl mb-1`}></i>
                        <div className="text-xs opacity-90">{project.downloads} Downloads</div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <h3 className={`text-lg font-semibold mb-2 ${project.titleColor}`}>{project.title}</h3>
                    <p className="text-muted-foreground mb-3 text-xs line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className={`px-2 py-1 ${tag.color} rounded-full text-xs`}>
                          {tag.name}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                          +{project.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-center text-xs font-medium hover:bg-green-700 transition-colors"
                      >
                        <i className="fab fa-google-play mr-1"></i>Play Store
                      </a>
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg text-center text-xs font-medium hover:bg-gray-900 transition-colors"
                      >
                        <i className="fab fa-apple mr-1"></i>App Store
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
