
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const { toast } = useToast();

  // EmailJS configuration with environment variables
  const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_l1mc13r",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xelbgmi", 
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xWYmuyN-pTl05Zx8F"
  };

  // Validate EmailJS configuration on mount
  useEffect(() => {
    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      console.warn("EmailJS configuration incomplete. Contact form may not work properly.");
    }
  }, []);

  // Rate limiting check
  const isRateLimited = () => {
    if (!lastSubmissionTime) return false;
    const timeSinceLastSubmission = Date.now() - lastSubmissionTime;
    return timeSinceLastSubmission < 30000; // 30 seconds
  };

  const validateForm = () => {
    if (formData.name.length < 2) {
      toast({
        title: "Error",
        description: "Name must be at least 2 characters long.",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (formData.message.length < 30) {
      toast({
        title: "Error",
        description: "Message must be at least 30 characters long.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Rate limiting check
    if (isRateLimited()) {
      toast({
        title: "Please wait",
        description: "You can only send one message every 30 seconds.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        emailConfig.publicKey
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll reply soon.",
      });

      setFormData({ name: "", email: "", message: "" });
      setLastSubmissionTime(Date.now());
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
    
    // // Simulate form submission
    // await new Promise(resolve => setTimeout(resolve, 1000));
    
    // toast({
    //   title: "Message Sent!",
    //   description: "Thanks for reaching out! I'll reply soon.",
    // });
    
    // setFormData({ name: "", email: "", message: "" });
    // setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="swiss-section">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Let's Build Something Amazing</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to discuss your next robotics project? Let's connect and make it happen.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Resume + Social Strip */}
        <div className="bg-robotics-blue rounded-2xl p-8 mb-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Want the full story?</h3>
          <p className="text-lg mb-6 opacity-90">
            Grab my resume or connect with me below.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button
              variant="secondary"
              size="lg"
              className="bg-white text-robotics-blue hover:bg-gray-100"
            >
              📄 Download Resume
            </Button> */}
            <Button asChild variant="secondary" size="lg" className="bg-white text-robotics-blue hover:bg-gray-100">
              {/* <a href="src/components/Resume.pdf" download> */}
              <a href="/Resume.pdf" download>
                📄 Download Resume
              </a>
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-robotics-blue hover:bg-white"
                onClick={() => window.open("https://github.com/AkhilJavvadi", "_blank", "noopener,noreferrer")}
              >
                🔗Github
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-robotics-blue hover:bg-white"
                onClick={() => window.open("https://linkedin.com/in/akhil-javvadi-820ba5219", "_blank", "noopener,noreferrer")}
              >
                🔗 LinkedIn
              </Button>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-robotics-blue focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-robotics-blue focus:border-transparent transition-all duration-300"
                  placeholder="your email@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                Message *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-robotics-blue focus:border-transparent transition-all duration-300 min-h-[120px]"
                placeholder="Tell me about your project or just say hello!"
                required
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-robotics-blue hover:bg-robotics-blue/90 text-white py-4 text-lg font-medium rounded-lg transition-all duration-300 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
