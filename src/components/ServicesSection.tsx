
import { BookOpen, FileText, GraduationCap, Briefcase, PenTool, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "University Selection",
    description: "We help you select the best universities based on your academic profile, career goals, and budget.",
    iconBg: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Application Processing",
    description: "Complete assistance with application forms, statement of purpose, and recommendation letters.",
    iconBg: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Visa Guidance",
    description: "Expert guidance on visa requirements, documentation, and interview preparation.",
    iconBg: "bg-brand-red/10",
    iconColor: "text-brand-red",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Scholarship Assistance",
    description: "Information and guidance on available scholarships and financial aid options.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Test Preparation",
    description: "Guidance for IELTS, TOEFL, GRE, GMAT, and other standardized tests.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Pre-Departure Briefing",
    description: "Comprehensive information about accommodation, travel, and life in your destination country.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

const ServicesSection = () => {
  const handleLearnMore = (serviceName) => {
    window.open(`https://api.whatsapp.com/send/?phone=919392206641&text=I'm interested in learning more about your ${serviceName} service&type=phone_number&app_absent=0`, '_blank');
  };
  
  const handleViewAllServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 mb-4 text-sm font-medium text-brand-blue">
            <span>Our Services</span>
          </div>
          <h2 className="section-title">Comprehensive Study Abroad Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            From university selection to pre-departure briefing, we provide end-to-end support for your international education journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${service.iconBg} ${service.iconColor} rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button 
                onClick={() => handleLearnMore(service.title)}
                className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 font-medium text-sm"
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="gradient" 
            className="rounded-full"
            onClick={handleViewAllServices}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
