
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountriesSection from "@/components/CountriesSection";
import ServicesSection from "@/components/ServicesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AssociatedUniversitiesSection from "@/components/AssociatedUniversitiesSection";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const hash = target.hash;
        const element = document.querySelector(hash);
        
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL
          history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Ensure proper mobile rendering order
  useEffect(() => {
    // Check if we need to reorder countries based on screen size
    const handleResize = () => {
      // This triggers a re-render when window size changes between mobile/desktop
      // The actual logic happens in CountriesSection component
      window.dispatchEvent(new Event('resize'));
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CountriesSection />
        <ServicesSection />
        <AssociatedUniversitiesSection />
        <AboutSection />
        <SuccessStoriesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
