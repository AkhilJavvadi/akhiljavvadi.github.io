
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: "bizfirst",
      company: "BizFirst LLC",
      role: "AI/ML Engineer Intern",
      period: "Jun 2025 - Present",
      description: "At BizFirst, I’m building an AI-powered agent that automates website generation using state-of-the-art LLMs and API integrations:",
      achievements: [
        "Developing an intelligent agent using the Gemini API to dynamically generate content, layout, and structure for websites.",
        "Designed and deployed FastAPI-based backend services to support real-time interaction and user-specific customization.",
        "Integrated LangChain and retrieval-augmented generation (RAG) pipelines for injecting semantically matched images and content into web sections.",
        "Built robust fallback systems to ensure graceful degradation if image search or generation fails.",
        "Focused on creating a seamless user experience by combining LLM reasoning, semantic search, and multi-modal content handling."
      ],
      technologies: ["Python", "FastAPI", "ML", "Gemini", "LangChain", "RAG"]
    },
    {
      id: "titan",
      company: "Titan ",
      role: "Research Intern",
      period: "Aug 2022– May 2023",
      description: "During my internship at Titan, I contributed to a defect detection system for analog watches using computer vision and deep learning:",
      achievements: [
        "Designed and trained a CNN-based model for identifying defects in analog watch images with 92.46% accuracy.",
        "Enhanced model robustness by optimizing preprocessing pipelines to handle low-light, noisy images using OpenCV and TensorFlow.",
        "Processed and annotated over 500 real-world samples, improving the model’s generalization and reliability in production.",
        "Deployed the final solution in a live manufacturing environment, achieving a 95% reduction in defect identification time."
      ],
      technologies: ["OpenCV", "TensorFlow", "Python", "Computer Vision", "ML"]
    }
  ];

  return (
    <section id="experience" className="swiss-section bg-swiss-gray">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Experience</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Applying robotics and AI in real-world industrial settings
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {experiences.map((exp) => (
            <AccordionItem
              key={exp.id}
              value={exp.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-robotics-blue font-medium">{exp.role}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-robotics-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-robotics-blue/10 text-robotics-blue rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
