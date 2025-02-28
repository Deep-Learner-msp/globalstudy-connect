
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleConsultation = () => {
    window.open(`https://wa.me/919392206641`, '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-brand-blue to-[#0A4DA3] text-white">
      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Begin Your International Education Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Take the first step towards your dream of studying abroad. Contact us today for a free consultation with our expert education advisors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="default" 
              size="xl" 
              className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue rounded-full group"
              onClick={handleConsultation}
            >
              Get Free Consultation
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="xl"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
