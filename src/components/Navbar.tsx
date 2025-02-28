
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Countries", href: "#countries" },
    { name: "Services", href: "#services" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleConsultation = () => {
    window.open(`https://api.whatsapp.com/send/?phone=919392206641&text=I'm interested in a consultation for studying abroad&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="relative h-10 w-10">
                <img
                  src="/lovable-uploads/77987804-27ce-4be4-b332-ad4348b36a7b.png"
                  alt="Career-Guide Logo"
                  className="h-10 w-10 object-contain rounded-full bg-gradient-to-r from-brand-blue to-[#0A4DA3] p-0.5"
                />
              </div>
              <span className="text-lg font-semibold text-brand-blue">Career-Guide Overseas</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+919392206641" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span>+91 9392206641</span>
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
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col space-y-3">
              <a 
                href="tel:+919392206641" 
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-muted-foreground"
              >
                <Phone size={16} />
                <span>+91 9392206641</span>
              </a>
              <Button 
                variant="gradient" 
                className="w-full rounded-full"
                onClick={handleConsultation}
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
