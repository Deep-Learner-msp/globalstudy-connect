
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, GraduationCap, MapPin } from "lucide-react";

const HeroSection = () => {
  const handleConsultation = () => {
    window.open(`https://api.whatsapp.com/send/?phone=919392206641&text=I'm interested in a consultation for studying abroad&type=phone_number&app_absent=0`, '_blank');
  };
  
  const scrollToCountries = () => {
    const countriesSection = document.getElementById('countries');
    if (countriesSection) {
      countriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-[0.03] -z-20"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 mb-4 text-sm font-medium text-brand-blue">
                <span>Your Path to Global Education</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="text-gradient">Transform</span> Your Future with International Education
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Expert guidance for students aspiring to study in USA, UK, Canada, Australia, and European countries.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="gradient" 
                size="xl" 
                className="group rounded-full"
                onClick={handleConsultation}
              >
                Get Free Consultation
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="rounded-full"
                onClick={scrollToCountries}
              >
                Explore Countries
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="bg-brand-blue/10 rounded-full p-2">
                  <GraduationCap className="h-5 w-5 text-brand-blue" />
                </div>
                <span className="text-sm font-medium">Top Universities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-brand-orange/10 rounded-full p-2">
                  <Compass className="h-5 w-5 text-brand-orange" />
                </div>
                <span className="text-sm font-medium">Visa Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-brand-red/10 rounded-full p-2">
                  <MapPin className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-sm font-medium">Global Locations</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-fade-in-right">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students studying abroad" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute top-6 -left-10 glass-card py-3 px-5 animate-float z-20" style={{animationDelay: "0.2s"}}>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-blue/10 rounded-full p-2">
                    <GraduationCap className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">400+</p>
                    <p className="text-xs text-muted-foreground">Students Placed</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-8 glass-card py-3 px-5 animate-float z-20" style={{animationDelay: "0.4s"}}>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-orange/10 rounded-full p-2">
                    <MapPin className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">10+</p>
                    <p className="text-xs text-muted-foreground">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
