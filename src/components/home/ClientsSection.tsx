
import { motion } from "framer-motion";
import Section from "@/components/Section";

const ClientsSection = () => {
  // Placeholder company logos
  const clients = [
    { name: "Company 1", logo: "https://via.placeholder.com/150x50/ffffff/666666?text=Company+1" },
    { name: "Company 2", logo: "https://via.placeholder.com/150x50/ffffff/666666?text=Company+2" },
    { name: "Company 3", logo: "https://via.placeholder.com/150x50/ffffff/666666?text=Company+3" },
    { name: "Company 4", logo: "https://via.placeholder.com/150x50/ffffff/666666?text=Company+4" },
    { name: "Company 5", logo: "https://via.placeholder.com/150x50/ffffff/666666?text=Company+5" },
    { name: "Company 6", logo: "https://via.placeholder.com/150x50/ffffff/666666?text=Company+6" },
  ];

  return (
    <Section className="bg-navy py-16" noPadding>
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium"
        >
          Trusted by Industry Leaders
        </motion.h3>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
      >
        {clients.map((client, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          >
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-10 md:h-12 w-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ClientsSection;
