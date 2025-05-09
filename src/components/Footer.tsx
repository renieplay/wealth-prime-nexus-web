
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo className="mb-6" />
            <p className="text-white/70 mb-6 max-w-xs">
              Specializing in building and educating around digital world projects for innovative businesses and entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-gold transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/learning-hub" className="text-white/70 hover:text-gold transition-colors">Learning Hub</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold mt-1" />
                <span className="text-white/70">123 Financial District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold" />
                <a href="tel:+12345678900" className="text-white/70 hover:text-gold transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold" />
                <a href="mailto:info@wealthprimer.com" className="text-white/70 hover:text-gold transition-colors">
                  info@wealthprimer.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to receive updates on our latest projects and educational resources.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-navy-light border-white/10 focus:border-gold/50 text-white"
              />
              <Button type="submit" className="w-full bg-primary-royal hover:bg-primary-royal/80">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Wealth PrîMer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
