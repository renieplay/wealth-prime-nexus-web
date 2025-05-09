
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-dark opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/90 to-navy-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your <span className="gold-gradient">Digital Future</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg mb-8"
          >
            Let's discuss how our solutions can help your business thrive in the digital economy. 
            Schedule a consultation with our team today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild className="bg-primary-royal hover:bg-primary-royal/90 text-white px-8 py-6">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent hover:bg-navy-light border border-gold/30 hover:border-gold text-white px-8 py-6">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
