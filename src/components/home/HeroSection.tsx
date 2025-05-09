
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/AnimatedText";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy bg-opacity-80 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-dark to-navy opacity-90"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80')] bg-cover bg-center"
        ></motion.div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-gold font-medium"
          >
            DIGITAL INNOVATION & EDUCATION
          </motion.div>
          
          <AnimatedText
            text="Building Digital Wealth Through Innovation & Education"
            className="mb-6"
            tag="h1"
            staggerChildren={0.08}
            delayChildren={0.3}
            once={true}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
          >
            We specialize in creating digital assets, platforms, and educational resources 
            to help businesses and entrepreneurs thrive in the digital economy.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild className="bg-primary-royal hover:bg-primary-royal/90 text-white px-8 py-6 rounded-md">
              <Link to="/services" className="flex items-center gap-2">
                Explore Services <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent hover:bg-navy-light border border-gold/30 hover:border-gold text-white px-8 py-6 rounded-md">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-white/60 text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"  
              }}
              className="w-1 h-8 rounded-full bg-gold/50"
            >
              <motion.div
                animate={{ 
                  height: ["0%", "100%", "0%"],
                  y: [0, 16, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"  
                }}
                className="w-full bg-gold rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
