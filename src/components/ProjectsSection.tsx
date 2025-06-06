
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProjectsSection = () => {
  // const projects = [
  //   {
  //     title: "T5 Text-to-Command Navigation",
  //     description: "Natural language robot navigation using LoRA fine-tuning and ROS2 integration.",
  //     tags: ["LoRA", "ROS2", "NLP", "PyTorch"],
  //     github: "https://github.com/AkhilJavvadi",
  //   },
  //   {
  //     title: "Dynamic A*/Dijkstra Navigation",
  //     description: "Optimized pathfinding algorithms for differential drive robots in dynamic environments.",
  //     tags: ["C++", "ROS2", "Algorithms", "Gazebo"],
  //     github: "https://github.com/AkhilJavvadi",
  //   },
  //   {
  //     title: "YOLO + Optical Flow Pipeline",
  //     description: "Real-time object detection and tracking for autonomous navigation systems.",
  //     tags: ["YOLO", "OpenCV", "Computer Vision", "Python"],
  //     github: "https://github.com/AkhilJavvadi",
  //   },
  //   {
  //     title: "ARIAC: Industrial Automation",
  //     description: "Pick-and-place automation system for manufacturing environments.",
  //     tags: ["ROS2", "MoveIt", "Industrial Robotics", "Simulation"],
  //     github: "https://github.com/AkhilJavvadi",
  //   },
  //   {
  //     title: "Med Nurse: Hospital Assistant",
  //     description: "Autonomous robot for hospital delivery and patient assistance tasks.",
  //     tags: ["ROS2", "Navigation", "Healthcare", "Sensors"],
  //     github: "https://github.com/AkhilJavvadi",
  //   },
  //   {
  //     title: "Django Quiz Platform",
  //     description: "Full-stack web application for educational quiz management and analytics.",
  //     tags: ["Django", "Python", "PostgreSQL", "Bootstrap"],
  //     github: "https://github.com/AkhilJavvadi",
  //   },
  // ];

  const projects = [
    {
      title: "Text-to-Command Robot Navigation",
      description: "Fine-tuned T5-small + LoRA for translating natural commands into plans; 98.5% accuracy, validated with ROS2 & Gazebo.",
      image: "/project1.png",
      // image: "src/components/project1.png",
      tags: ["Python", "ROS2", "T5", "LoRA", "Gazebo","NLP","Pytorch"],
      github: "https://github.com/AkhilJavvadi/Adaptive-Text-to-Command-Translation-for-Robot-Navigation"
    },
    {
      title: "Dynamic A* + Dijkstra with Kinematic Constraints",
      description: "Enhanced pathfinding with real-world constraints for differential drive robots; tested in Gazebo simulation environment.",
      // image: "src/components/project2.jpg",
      image: "/project2.jpg",
      tags: ["C++", "ROS2", "Algorithm Design", "Gazebo"],
      github: "https://github.com/AkhilJavvadi/A_Star_for_Differential_Drive_Robot"
    },
    {
      title: "TurtleBot Navigation with YOLO Perception",
      description: "Integrated YOLO + optical flow for obstacle-aware navigation in dynamic scenes (85% success rate in unseen terrains).",
      image: "/project3.jpg",
      // image: "src/components/project3.jpg",
      tags: ["YOLO", "OpenCV", "ROS2", "Python"],
      github: "https://github.com/AkhilJavvadi/Perception-Based-Turtlebot-Navigation"
    },
    {
      title: "ARIAC Industrial Robot Simulation",
      description: "ROS-based automation system for pick-and-place and sensor-based fault handling in agile manufacturing environments.",
      // image: "src/components/project4.png",
      image: "/project4.png",
      tags: ["ROS", "Industrial Automation", "Python", "Gazebo"],
      github: "https://github.com/AkhilJavvadi/Manufacturing-Software-System-ARIAC"
    },
    {
      title: "Med Nurse Assistant Bot",
      description: "Autonomous Arduino+ROS2 robot for hospital supply delivery; validated in Gazebo simulation with real-world constraints.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Arduino", "ROS2", "Healthcare", "Autonomous Navigation"],
      github: "https://github.com/AkhilJavvadi"
    },
    {
      title: "Django Quiz App",
      description: "Real-time scoring, adaptive learning quiz platform with SQL analytics and responsive user interface.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Django", "Python", "SQL", "Web Development"],
      github: "https://github.com/AkhilJavvadi"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turning ideas into intelligent automation solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 hover-lift hover-glow group"
            >
              <h3 className="text-xl font-bold mb-4 group-hover:text-robotics-blue transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full border-robotics-blue text-robotics-blue hover:bg-robotics-blue hover:text-white transition-all duration-300"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          ))} */}

          {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};
