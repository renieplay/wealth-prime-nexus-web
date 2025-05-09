
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Learning Hub", path: "/learning-hub" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy-dark/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-10">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => cn(
                "text-white/80 hover:text-gold relative pb-1 transition-all",
                isActive && "text-gold"
              )}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-gold"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a 
            href="/contact" 
            className="btn-primary bg-primary-royal hover:bg-primary-royal/90"
          >
            Get Started
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-navy-dark p-8 flex flex-col z-[45]"
            >
              <div className="mt-16 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => cn(
                      "text-xl text-white/80 hover:text-gold py-2 transition-all",
                      isActive && "text-gold"
                    )}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <a 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary mt-4 bg-primary-royal hover:bg-primary-royal/90 justify-center"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
