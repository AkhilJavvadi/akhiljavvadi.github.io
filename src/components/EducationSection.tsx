
export const EducationSection = () => {
  // const education = [
  //   {
  //     year: "2025",
  //     institution: "University of Maryland",
  //     degree: "M.Eng Robotics",
  //     gpa: "GPA 3.67",
  //     courses: ["NLP", "Planning & Perception", "Control Systems"],
  //   },
  //   {
  //     year: "2023",
  //     institution: "IIITDM Kancheepuram",
  //     degree: "B.Tech ECE",
  //     gpa: "GPA 8.29",
  //     courses: ["Signal Processing", "VLSI", "Embedded Design"],
  //   },
  // ];

  const education = [
    {
      school: "University of Maryland, College Park",
      degree: "Master of Engineering in Robotics",
      period: "May 2025",
      gpa: "3.68/4",
      coursework: "Robot Modeling, Control Systems, HRI, NLP, Planning and Perception for autonomous robots, Multimodal Models, Building Manufacturing Robotics Software Systems",
      highlight: "My foundation in robotics and AI began here."
    },
    {
      school: "IIITDM Kancheepuram",
      degree: "B.Tech in Electronics and Communication Engineering",
      period: "May 2023",
      gpa: "8.29/10",
      coursework: "ADSP, Machine Learning, Embedded Systems, VLSI, DSA, Analog and Digital Communication",
      highlight: "Where I discovered my passion for intelligent systems."
    }
  ];

  return (
    <section className="swiss-section bg-swiss-gray">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Education</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Building knowledge foundations in robotics and engineering
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-robotics-blue"></div>
          
          {/* {education.map((edu, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              <div className="absolute left-6 w-4 h-4 bg-robotics-blue rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-20 bg-white rounded-xl p-8 shadow-sm hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-robotics-blue bg-robotics-blue/10 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                  <span className="text-sm font-medium text-gray-500">{edu.gpa}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-lg text-gray-600 mb-4">{edu.degree}</p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))} */}

          {education.map((edu, index) => (
            <div key={index} className="relative mb-16 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-20 bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-medium text-black">{edu.school}</h3>
                  <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">{edu.period}</span>
                </div>
                
                <p className="text-lg text-gray-700 mb-2">{edu.degree}</p>
                <p className="text-blue-600 font-medium mb-3">GPA: {edu.gpa}</p>
                
                <p className="text-gray-600 mb-3">
                  <span className="font-medium">Coursework: </span>
                  {edu.coursework}
                </p>
                
                <p className="text-sm text-gray-500 italic">{edu.highlight}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
