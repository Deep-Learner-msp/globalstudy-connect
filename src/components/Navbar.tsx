
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Countries", href: "#countries" },
  { name: "Services", href: "#services" },
  { name: "Universities", href: "#associated-universities" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleConsultation = () => {
    window.open(`https://api.whatsapp.com/send/?phone=919392206641&text=I'm interested in a consultation for studying abroad&type=phone_number&app_absent=0`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mr-2">
            <img 
              src="/lovable-uploads/12259509-f363-4d72-a027-1be46ed86375.png" 
              alt="Career-Guide Logo" 
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-xl text-gray-900">Career-Guide</span>
            <span className="text-xs text-gray-500 -mt-1">Overseas Consultants</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact & CTA */}
        <div className="hidden md:flex items-center">
          <a 
            href="tel:+919392206641" 
            className="mr-6 text-gray-700 hover:text-brand-blue flex items-center"
          >
            <span className="font-medium">+91 9392206641</span>
          </a>
          <Button 
            variant="gradient" 
            className="rounded-full"
            onClick={handleConsultation}
          >
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-brand-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a
                href="tel:+919392206641"
                className="block py-2 text-gray-700 hover:text-brand-blue"
              >
                +91 9392206641
              </a>
              <Button 
                variant="gradient" 
                className="w-full mt-4 rounded-full"
                onClick={() => {
                  handleConsultation();
                  setIsMenuOpen(false);
                }}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
