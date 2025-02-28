
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    "Expert guidance from experienced consultants",
    "Personalized university and course selection",
    "Comprehensive visa and immigration support",
    "Dedicated assistance throughout your application process",
    "Financial guidance and scholarship opportunities",
    "Pre-departure and post-arrival support",
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 mb-4 text-sm font-medium text-brand-blue">
              <span>About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Your Trusted Partner for <span className="text-gradient">International Education</span>
            </h2>
            <p className="text-gray-600">
              At Career-Guide Overseas Consultant, we are dedicated to helping students achieve their dreams of studying abroad. Our team of experienced education consultants provides personalized guidance to ensure a smooth transition to international education.
            </p>
            <p className="text-gray-600">
              With years of experience and a track record of successful placements, we have helped hundreds of students secure admissions in top universities across the USA, UK, Canada, Australia, and European countries.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="gradient" className="rounded-full">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Career-Guide Overseas Consultant team" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 z-0">
              <div className="w-20 h-20 bg-brand-blue rounded-lg opacity-10"></div>
            </div>
            <div className="absolute -top-6 -right-6 z-0">
              <div className="w-20 h-20 bg-brand-orange rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
