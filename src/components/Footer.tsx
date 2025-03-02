
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <Logo className="w-32 mb-4" />
          <p className="text-gray-600 mb-4">
            Your gateway to global education. Expert guidance for studying abroad.
          </p>
          <div className="flex items-start mb-2">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <a href="https://maps.app.goo.gl/wqY6m4aRd7DVa42P8" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
              HIG 35 KPHB Road No. 1, Jamma Majid near Manas PG Hostel
            </a>
          </div>
          <div className="flex items-start mb-2">
            <Phone className="h-4 w-4 mr-2 text-gray-500" />
            <a href="tel:+919392206641" className="hover:text-brand-blue transition-colors">
              +91 9392206641
            </a>
          </div>
          <div className="flex items-start">
            <Mail className="h-4 w-4 mr-2 text-gray-500" />
            <a href="mailto:info@career-guide.com" className="hover:text-brand-blue transition-colors">
              info@career-guide.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">Quick Links</h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <a href="#" className="hover:text-brand-blue transition-colors">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-brand-blue transition-colors">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-brand-blue transition-colors">
                Countries
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-brand-blue transition-colors">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-blue transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Stay up to date with the latest news, courses, and resources.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button className="bg-brand-blue text-white rounded-r-md px-6 py-2 hover:bg-brand-blue-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Career-Guide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
