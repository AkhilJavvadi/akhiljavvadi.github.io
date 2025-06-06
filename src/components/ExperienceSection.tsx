
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: "titan",
      company: "Titan Research & Development",
      role: "Machine Learning Intern",
      period: "2022–2023",
      description: "Built ML-based defect detection system for analog watches, achieving 92.46% accuracy and 95% reduction in detection time.",
      achievements: [
        "Developed computer vision pipeline using OpenCV and TensorFlow",
        "Implemented real-time defect detection with 92.46% accuracy",
        "Reduced manual inspection time by 95%",
        "Deployed production-ready ML models for quality control"
      ],
      technologies: ["OpenCV", "TensorFlow", "Python", "Computer Vision", "ML Ops"]
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
