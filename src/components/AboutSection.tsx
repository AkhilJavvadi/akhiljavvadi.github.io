
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  // return (
  //   <section id="about" className="swiss-section">
  //     <div className="swiss-grid">
  //       <div className="col-span-12 lg:col-span-6 animate-slide-up">
  //         <div className="aspect-[4/5] bg-swiss-gray rounded-2xl overflow-hidden">
  //           <img
  //             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face"
  //             alt="Akhil Javvadi"
  //             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
  //           />
  //         </div>
  //       </div>
        
  //       <div className="col-span-12 lg:col-span-6 flex flex-col justify-center animate-slide-up">
  //         <h2 className="text-5xl font-bold mb-8">
  //           Hi, I'm Akhil Javvadi 👋
  //         </h2>
          
  //         <div className="space-y-6 text-lg leading-relaxed text-gray-600">
  //           <p>
  //             I'm a Robotics Engineer passionate about building real-world automation with intelligence. 
  //             From ROS2 to deep learning, I bridge research and implementation to develop autonomous 
  //             systems that think and act.
  //           </p>
            
  //           <p>
  //             I'm driven by challenge, precision, and purpose—and I love turning theory into working robots.
  //           </p>
  //         </div>
          
  //         <div className="flex flex-wrap gap-3 mt-8">
  //           {["Creative", "Analytical", "Leader", "Self-Motivated"].map((skill) => (
  //             <span
  //               key={skill}
  //               className="px-4 py-2 bg-robotics-blue/10 text-robotics-blue rounded-full text-sm font-medium"
  //             >
  //               {skill}
  //             </span>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section id="about" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-black">
                Hi, I'm Akhil Javvadi👋
              </h2>
              <div className="w-16 h-0.5 bg-blue-600"></div>
            </div>

            {/* <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a Robotics Engineer and Machine Learning enthusiast passionate about building intelligent systems that solve real-world problems.
              </p>
              <p>
                With a Master's in Robotics from the University of Maryland and hands-on experience in AI-based automation, my work combines research, code, and systems thinking. Whether it's autonomous robots navigating unfamiliar environments or deep learning models optimizing industrial workflows, I bring both rigor and creativity to every project.
              </p>
            </div> */}
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a Robotics Engineer and Machine Learning enthusiast passionate about building intelligent systems that solve real-world problems.
              </p>
              <p>
                With a Master's in Robotics from the University of Maryland and hands-on experience in AI-based automation, my work combines research, code, and systems thinking. I thrive in collaborative environments where interdisciplinary challenges require both systems-level thinking and hands-on prototyping.
              </p>
              <p>
                My technical strengths lie in developing and deploying robotic perception pipelines, motion planning algorithms, and adaptive control strategies using tools like ROS2, Gazebo, OpenCV, and PyTorch. I’ve implemented full-stack ML pipelines for tasks ranging from natural language instruction following to real-time defect detection in manufacturing.
              </p>
              <p>
                If you're looking for a motivated engineer who bridges robotics, machine learning, and real-world deployment — let’s connect and create something impactful.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Creative Thinker', 'Strong Communicator', 'Research-Oriented'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-400 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-gray-100 rounded-lg flex items-center justify-center">
                <img 
                  // src="src/components/profile_photo.jpg"
                  src="/profile_photo.jpg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
