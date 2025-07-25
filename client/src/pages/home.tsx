import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 Muhammad Sohaib Jameel. Crafted with passion for mobile development.
          </p>
        </div>
      </footer>
    </div>
  );
}
