
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import Dynamic3DBackground from "@/components/3d/Dynamic3DBackground";
import SectionTransition3D from "@/components/3d/SectionTransition3D";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Dynamic3DBackground />
      <ThemeToggle />
      <ChatBot />
      <HeroSection />
      <SectionTransition3D />
      <AboutSection />
      <SectionTransition3D />
      <SkillsSection />
      <SectionTransition3D />
      <ProjectsSection />
      <SectionTransition3D />
      <ExperienceSection />
      <SectionTransition3D />
      <CertificatesSection />
      <SectionTransition3D />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
