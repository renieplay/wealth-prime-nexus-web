
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Layout, Lightbulb, BookOpen } from "lucide-react";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedServices = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-gold" />,
      title: "Web Platforms",
      description: "Custom web applications and platforms tailored to your business needs with modern technologies.",
      link: "/services#web-platforms"
    },
    {
      icon: <Code className="w-8 h-8 text-gold" />,
      title: "Digital Products",
      description: "Innovative digital products that solve problems and create value for your customers.",
      link: "/services#digital-products"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-gold" />,
      title: "Blockchain Tools",
      description: "Secure blockchain solutions that provide transparency and trust in your business operations.",
      link: "/services#blockchain-tools"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: "Business Education",
      description: "Comprehensive educational resources and courses for digital business success.",
      link: "/services#business-education"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };
  
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="We provide comprehensive solutions to help you succeed in the digital world."
      centered={true}
      className="bg-navy"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link to={service.link} className="block group">
              <Card className="bg-navy-light border border-white/10 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:border-gold/30 h-full">
                <CardHeader>
                  <div className="mb-4 p-3 bg-navy-dark rounded-lg inline-block border border-gold/20">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{service.description}</p>
                  <div className="mt-4 text-gold font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link 
          to="/services" 
          className="px-6 py-3 bg-navy-light text-white font-medium rounded-md hover:bg-navy border border-gold/30 hover:border-gold transition-all shadow-md inline-flex items-center gap-2"
        >
          View All Services
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </Link>
      </motion.div>
    </Section>
  );
};

export default FeaturedServices;
