
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  type Project = {
    id: number;
    title: string;
    category: "Web Platform" | "Digital Product" | "Blockchain Tool" | "Education";
    image: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Blockchain Finance Platform",
      category: "Web Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive finance platform that leverages blockchain technology for secure transactions.",
      challenge: "The client needed a secure, transparent platform for financial operations with real-time tracking capabilities.",
      solution: "We developed a custom blockchain-based platform with end-to-end encryption and real-time dashboards.",
      results: [
        "Increased transaction security by 98%",
        "Reduced processing time by 65%",
        "Improved user trust and engagement"
      ]
    },
    {
      id: 2,
      title: "Educational Course Hub",
      category: "Digital Product",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "An interactive online platform for delivering educational courses with integrated assessment tools.",
      challenge: "The client wanted to transform their traditional learning materials into an engaging digital format accessible to a global audience.",
      solution: "We created a multimedia-rich course platform with interactive assessments and progress tracking.",
      results: [
        "Expanded reach to 20+ countries",
        "Increased course completion rates by 40%",
        "Generated 300% ROI within first year"
      ]
    },
    {
      id: 3,
      title: "Investment Analytics Tool",
      category: "Blockchain Tool",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A sophisticated analytics tool that provides real-time investment insights using blockchain data.",
      challenge: "The client needed to analyze large volumes of blockchain transaction data to identify investment opportunities.",
      solution: "We built a custom analytics platform with AI-powered insights and predictive modeling capabilities.",
      results: [
        "Identified 28% more investment opportunities",
        "Reduced analysis time by 75%",
        "Improved decision accuracy by 45%"
      ]
    },
    {
      id: 4,
      title: "Digital Business Academy",
      category: "Education",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive online academy for entrepreneurs to learn digital business strategies.",
      challenge: "The client wanted to create a structured learning path for entrepreneurs at different stages of their business journey.",
      solution: "We designed a multi-level educational platform with personalized learning paths and mentorship features.",
      results: [
        "95% student satisfaction rate",
        "Over 10,000 entrepreneurs trained",
        "Created 1,200+ successful digital businesses"
      ]
    },
    {
      id: 5,
      title: "Supply Chain Transparency System",
      category: "Blockchain Tool",
      image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A blockchain-based system for tracking and verifying supply chain operations with complete transparency.",
      challenge: "The client needed to ensure authenticity and ethical sourcing across their global supply chain.",
      solution: "We implemented a blockchain solution that tracks products from source to consumer with immutable verification.",
      results: [
        "100% product traceability achieved",
        "Consumer trust improved by 60%",
        "Reduced fraud incidents to near-zero"
      ]
    },
    {
      id: 6,
      title: "Enterprise Collaboration Platform",
      category: "Web Platform",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A secure enterprise platform that facilitates team collaboration and project management.",
      challenge: "The client needed to connect remote teams across multiple countries with secure data sharing capabilities.",
      solution: "We developed a customized collaboration platform with end-to-end encryption and integrated project management tools.",
      results: [
        "Improved team productivity by 35%",
        "Reduced communication overhead by 50%",
        "Enabled seamless collaboration across 8 countries"
      ]
    }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(filter.toLowerCase()));
    
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Platforms" },
    { id: "digital", label: "Digital Products" },
    { id: "blockchain", label: "Blockchain Tools" },
    { id: "education", label: "Education" }
  ];
  
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Projects"
        subtitle="Explore our portfolio of successful client projects and case studies."
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Filters */}
      <Section className="bg-navy py-8" noPadding>
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-5 py-2 rounded-full transition-all ${
                filter === item.id
                  ? "bg-primary-royal text-white"
                  : "bg-navy-light/70 text-white/80 hover:text-white hover:bg-navy-light"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </Section>
      
      {/* Projects Grid */}
      <Section className="bg-navy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card overflow-hidden cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-gold text-sm font-medium mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                  
                  <div className="mt-4 text-gold font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>
      
      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-navy-light border border-white/10 text-white max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gold">{selectedProject.category}</DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">About the Project</h3>
                    <p className="text-white/80">{selectedProject.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
                    <p className="text-white/80">{selectedProject.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                    <p className="text-white/80">{selectedProject.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <ul className="list-disc list-inside text-white/80 space-y-1">
                      {selectedProject.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;
