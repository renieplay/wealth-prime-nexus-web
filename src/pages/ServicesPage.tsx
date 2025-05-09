
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Code, Lightbulb, BookOpen, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("web-platforms");
  
  const services = [
    {
      id: "web-platforms",
      icon: <Layout className="w-12 h-12 text-gold" />,
      title: "Web Platforms",
      description: "Custom web applications and platforms tailored to your business needs with modern technologies.",
      benefits: [
        "Responsive design for all devices",
        "Custom functionality and integrations",
        "Performance optimization",
        "Scalable architecture",
        "User experience focused design"
      ],
      process: [
        "Discovery and requirements analysis",
        "UI/UX design and prototyping",
        "Development and testing",
        "Deployment and training",
        "Ongoing support and maintenance"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "digital-products",
      icon: <Code className="w-12 h-12 text-gold" />,
      title: "Digital Products",
      description: "Innovative digital products that solve problems and create value for your customers.",
      benefits: [
        "User-centered design approach",
        "Cross-platform compatibility",
        "Innovative features and functionality",
        "Data-driven development",
        "Iterative improvement"
      ],
      process: [
        "Market research and concept validation",
        "Product design and feature planning",
        "Agile development methodology",
        "Beta testing and refinement",
        "Launch and marketing support"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "blockchain-tools",
      icon: <Lightbulb className="w-12 h-12 text-gold" />,
      title: "Blockchain Tools",
      description: "Secure blockchain solutions that provide transparency and trust in your business operations.",
      benefits: [
        "Enhanced security and transparency",
        "Decentralized data management",
        "Smart contract implementation",
        "Reduced operational costs",
        "Immutable record-keeping"
      ],
      process: [
        "Blockchain strategy consultation",
        "Solution architecture design",
        "Smart contract development",
        "Integration with existing systems",
        "Comprehensive testing and deployment"
      ],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "business-education",
      icon: <BookOpen className="w-12 h-12 text-gold" />,
      title: "Business Education",
      description: "Comprehensive educational resources and courses for digital business success.",
      benefits: [
        "Practical, actionable knowledge",
        "Expert-led training sessions",
        "Customized learning paths",
        "Ongoing access to resources",
        "Implementation support"
      ],
      process: [
        "Needs assessment and goal setting",
        "Customized curriculum development",
        "Interactive learning sessions",
        "Practical exercises and projects",
        "Progress evaluation and feedback"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ];
  
  const activeService = services.find(service => service.id === activeTab);
  
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive digital solutions to help your business thrive in the modern economy."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Service Categories */}
      <Section className="bg-navy">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`p-6 rounded-lg text-center transition-all ${
                activeTab === service.id
                  ? "bg-navy-light border border-gold/30"
                  : "bg-navy-dark/60 border border-white/10 hover:border-white/30"
              }`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium">{service.title}</h3>
            </motion.button>
          ))}
        </div>
        
        {/* Service Details */}
        {activeService && (
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{activeService.title}</h2>
                <p className="text-white/80 mb-6">{activeService.description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {activeService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                      <span className="text-white/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                <ol className="space-y-3">
                  {activeService.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-navy flex items-center justify-center border border-gold/30">
                        <span className="text-gold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-white/80">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="hidden lg:block">
                <div className="h-full rounded-lg overflow-hidden">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Section>
    </div>
  );
};

export default ServicesPage;
