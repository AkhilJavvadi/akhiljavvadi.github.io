
// import { Button } from "@/components/ui/button";
// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-swiss-gray via-white to-robotics-blue/5"></div>
      
//       <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
//         <div className="animate-fade-in">
//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance">
//             Engineering the
//             <span className="block text-robotics-blue">Future of Robotics</span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
//             Solving real-world problems through intelligent automation and deep learning.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Button
//               size="lg"
//               className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover-lift"
//             >
//               Download Resume
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               onClick={() => scrollToSection("contact")}
//               className="border-2 border-robotics-blue text-robotics-blue hover:bg-robotics-blue hover:text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover-glow"
//             >
//               Let's Talk
//             </Button>
//           </div>
//         </div>
//       </div>
      
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <button
//           onClick={() => scrollToSection("about")}
//           className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
//         >
//           <ArrowDown className="w-6 h-6 text-robotics-blue" />
//         </button>
//       </div>
//     </section>
//   );
// };

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-black">
            Akhil Javvadi
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Robotics Engineer & Machine Learning Practitioner
          </p>
        </div>
        
        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Building intelligent systems that solve real-world problems through the intersection of robotics, AI, and creative engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-light transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon"
              className="border-gray-300 hover:border-black transition-colors duration-300"
              onClick={() => window.open('https://github.com/AkhilJavvadi', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="border-gray-300 hover:border-black transition-colors duration-300"
              onClick={() => window.open('https://linkedin.com/in/akhil-javvadi-820ba5219/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default HeroSection;