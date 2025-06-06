
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "Embedded C", "MATLAB", "SQL", "C"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Frameworks",
      skills: ["ROS2", "TensorFlow", "PyTorch", "OpenCV","FastAPI", "Django", "MoveIt", "LoRA", "YOLO", "Langchain and LangGraph"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Tools",
      skills: ["Gazebo", "SolidWorks", "Git", "Jupyter", "Arduino","VS Code", "Linux (Ubuntu)", "Fusion 360", "Arduino Studio"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Problem Solving", "Creative Thinking", "Team Collaboration","Workload Management", "Interpersonal Communication", "Self-Motivation"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Robotics & Automation",
      skills: [
        "Robot Navigation", "Path Planning", "Kinematics & Dynamics", "Autonomous Systems", "Perception Pipelines",
        "Sensor Integration", "Simulation-based Testing", "Non-Holonomic Constraints"
      ],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Machine Learning & AI",
      skills: [
        "Deep Learning", "Transformers", "Natural Language Processing", "Model Fine-Tuning", "Data Preprocessing", "Classification",
        "Computer Vision", "Optical Flow", "Vanishing Point Detection","Hugging Face Models"
      ],
      color: "bg-red-100 text-red-800"
    }
  ];

  return (
    <section className="swiss-section">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive toolkit for building intelligent robotic systems
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-100 hover-lift"
          >
            <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
            
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className={`px-4 py-2 rounded-lg text-center font-medium transition-all duration-300 hover:scale-105 ${category.color}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* <div className="mt-16 bg-swiss-gray rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Fun Facts About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="text-lg">🤖 <strong>Favorite Robot:</strong> WALL-E</p>
            <p className="text-lg">♟️ <strong>Hobbies:</strong> Playing chess, reading sci-fi</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg">🔧 <strong>Fun Fact:</strong> I once debugged a robot with duct tape and a multimeter</p>
            <p className="text-lg italic">💭 "Robots don't complain—they just need better code."</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};
