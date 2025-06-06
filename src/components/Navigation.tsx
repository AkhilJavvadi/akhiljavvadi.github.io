
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">AJ</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-robotics-blue transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-robotics-blue transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium hover:text-robotics-blue transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-robotics-blue transition-colors"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-robotics-blue hover:bg-robotics-blue/90 text-white px-6 py-2 rounded-lg transition-all duration-300 hover-glow"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};
