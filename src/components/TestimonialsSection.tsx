
export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Akhil combines deep technical skill with curiosity and drive. A fantastic problem solver who brings innovative solutions to complex robotics challenges.",
      author: "Dr. Sarah Johnson",
      role: "Professor, Robotics Engineering",
      institution: "University of Maryland"
    },
    {
      quote: "Working with Akhil on the ARIAC project was exceptional. His ability to bridge theory and practical implementation is remarkable.",
      author: "Michael Chen",
      role: "Senior Robotics Engineer",
      institution: "Tech Innovations Lab"
    },
    {
      quote: "Akhil's dedication to excellence and his collaborative spirit make him an invaluable team member. His work on ML-based defect detection exceeded all expectations.",
      author: "Priya Sharma",
      role: "Research Director",
      institution: "Titan Research & Development"
    }
  ];

  return (
    <section className="swiss-section bg-swiss-gray">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">What People Say</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Testimonials from colleagues and mentors
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 border border-gray-100 hover-lift relative"
          >
            <div className="absolute top-6 left-6 text-6xl text-robotics-blue/20 font-serif">"</div>
            
            <div className="relative z-10">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                {testimonial.quote}
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-robotics-blue font-medium">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.institution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
