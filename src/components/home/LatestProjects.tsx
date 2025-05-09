
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

const LatestProjects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Blockchain Finance Platform",
      category: "Web Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      url: "/projects/blockchain-finance-platform"
    },
    {
      id: 2,
      title: "Educational Course Hub",
      category: "Digital Product",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      url: "/projects/educational-course-hub"
    },
    {
      id: 3,
      title: "Investment Analytics Tool",
      category: "Blockchain Tool",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      url: "/projects/investment-analytics-tool"
    }
  ];

  return (
    <Section
      id="latest-projects"
      title="Latest Projects"
      subtitle="Explore our recent work and success stories."
      className="bg-navy-dark"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative overflow-hidden rounded-lg group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-gold text-sm font-medium mb-2 block">{project.category}</span>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0, y: hoveredId === project.id ? 0 : 10 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to={project.url} 
                  className="inline-flex items-center gap-2 text-gold font-medium text-sm mt-3 group"
                >
                  View Project 
                  <ExternalLink size={14} className="transform transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button asChild variant="outline" className="bg-transparent hover:bg-navy-light border border-gold/30 hover:border-gold">
          <Link to="/projects">View All Projects</Link>
        </Button>
      </motion.div>
    </Section>
  );
};

export default LatestProjects;
