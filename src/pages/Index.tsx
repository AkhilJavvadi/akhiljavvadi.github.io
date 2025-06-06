
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-inter">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
