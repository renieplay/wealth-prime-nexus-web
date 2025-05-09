
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AboutCompany = () => {
  const features = [
    { id: 1, title: "Digital Innovation", description: "Cutting-edge solutions for modern businesses" },
    { id: 2, title: "Quality Education", description: "Expert-led training and learning resources" },
    { id: 3, title: "Blockchain Integration", description: "Secure and transparent digital solutions" },
  ];
  
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <Section className="bg-navy-light py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Part */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Wealth PrîMer Team"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60"></div>
          </div>
          
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 bg-navy p-6 rounded-lg shadow-xl border border-gold/20 max-w-[280px]"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-gold text-3xl font-bold mb-1">100+</h3>
                <p className="text-white/70 text-sm">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-gold text-3xl font-bold mb-1">92%</h3>
                <p className="text-white/70 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-gold text-3xl font-bold mb-1">15+</h3>
                <p className="text-white/70 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-gold text-3xl font-bold mb-1">50+</h3>
                <p className="text-white/70 text-sm">Active Clients</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Text Part */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gold font-medium mb-2 block"
          >
            ABOUT US
          </motion.span>
          
          <AnimatedText
            text="Building Digital Excellence Through Education & Innovation"
            className="mb-6"
            tag="h2"
            once={true}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white/80 mb-6"
          >
            At Wealth PrîMer, we're dedicated to helping businesses and entrepreneurs 
            leverage digital technologies and education to create sustainable growth and success. 
            Our multidisciplinary team combines technical expertise with educational excellence 
            to deliver results that matter.
          </motion.p>
          
          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-full bg-navy flex items-center justify-center",
                  "border border-gold/30"
                )}>
                  <span className="text-gold font-medium">{feature.id}</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">{feature.title}</h4>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button asChild className="bg-primary-royal hover:bg-primary-royal/90 text-white">
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AboutCompany;
