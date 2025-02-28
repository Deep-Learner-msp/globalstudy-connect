
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/">
              <img
                src="/lovable-uploads/77987804-27ce-4be4-b332-ad4348b36a7b.png"
                alt="Career-Guide Overseas Consultant"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Your trusted partner for overseas education consultancy, helping students achieve their dreams of studying abroad.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#countries" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Countries
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Countries
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  USA
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  UK
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Canada
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Australia
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Germany
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  France
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <p className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-brand-blue" />
                <span>HIG 35 KPHB Road No. 1, Jamma Majid near Manas PG Hostel</span>
              </p>
              <p className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 flex-shrink-0 text-brand-blue" />
                <a href="tel:+919392206641" className="hover:text-brand-blue transition-colors">+91 9392206641</a>
              </p>
              <p className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 flex-shrink-0 text-brand-blue" />
                <a href="mailto:info@career-guide.com" className="hover:text-brand-blue transition-colors">info@career-guide.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Career-Guide Overseas Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
