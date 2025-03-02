
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleConsultation = () => {
    window.open(`https://api.whatsapp.com/send/?phone=919392206641&text=I'm interested in a consultation for studying abroad&type=phone_number&app_absent=0`, '_blank');
  };
  
  const handleExploreCountries = () => {
    const countriesSection = document.getElementById('countries');
    if (countriesSection) {
      countriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-10 md:py-16 overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-medium text-brand-blue">
                <span>Your Gateway to Global Education</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Study Abroad with <span className="text-gradient">Career-Guide</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Expert guidance for international education. From university selection to visa processing, we're with you at every step.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gradient" 
                size="xl" 
                className="rounded-full group"
                onClick={handleConsultation}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="rounded-full"
                onClick={handleExploreCountries}
              >
                Explore Countries
              </Button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">8+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">500+</div>
                <div className="text-sm text-gray-600">Universities</div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">5000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Students studying abroad" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 z-0 hidden md:block">
              <div className="w-32 h-32 bg-brand-orange rounded-lg opacity-40 blur-2xl"></div>
            </div>
            <div className="absolute -top-6 -left-6 z-0 hidden md:block">
              <div className="w-32 h-32 bg-brand-blue rounded-lg opacity-40 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
