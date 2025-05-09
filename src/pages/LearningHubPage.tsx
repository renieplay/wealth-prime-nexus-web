
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Book, Video, File, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LearningHubPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  type ResourceType = "Article" | "Video" | "Webinar" | "Course" | "Guide";
  
  interface Resource {
    id: number;
    title: string;
    description: string;
    type: ResourceType;
    image: string;
    date: string;
    category: string;
    link: string;
  }
  
  const resources: Resource[] = [
    {
      id: 1,
      title: "Introduction to Blockchain Technology",
      description: "Learn the fundamentals of blockchain technology and its applications in modern business.",
      type: "Article",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "May 15, 2023",
      category: "blockchain",
      link: "/learning-hub/intro-to-blockchain"
    },
    {
      id: 2,
      title: "Building Effective Digital Marketing Strategies",
      description: "A comprehensive guide to creating digital marketing strategies that convert.",
      type: "Guide",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "June 22, 2023",
      category: "marketing",
      link: "/learning-hub/digital-marketing-strategies"
    },
    {
      id: 3,
      title: "Web Development Best Practices 2023",
      description: "Stay updated with the latest web development trends and best practices.",
      type: "Webinar",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "July 10, 2023",
      category: "development",
      link: "/learning-hub/web-development-practices"
    },
    {
      id: 4,
      title: "Digital Transformation Masterclass",
      description: "A comprehensive course on leading digital transformation in your organization.",
      type: "Course",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "August 5, 2023",
      category: "strategy",
      link: "/learning-hub/digital-transformation-course"
    },
    {
      id: 5,
      title: "Smart Contract Development",
      description: "Learn how to develop secure and efficient smart contracts for blockchain applications.",
      type: "Video",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "September 12, 2023",
      category: "blockchain",
      link: "/learning-hub/smart-contract-dev"
    },
    {
      id: 6,
      title: "User Experience Design Principles",
      description: "Explore the key principles of creating exceptional user experiences for digital products.",
      type: "Article",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "October 8, 2023",
      category: "design",
      link: "/learning-hub/ux-design-principles"
    }
  ];
  
  const categories = [
    { id: "all", label: "All Resources" },
    { id: "blockchain", label: "Blockchain" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "marketing", label: "Marketing" },
    { id: "strategy", label: "Strategy" },
  ];
  
  const typeIcons = {
    "Article": <Book size={18} />,
    "Video": <Video size={18} />,
    "Webinar": <Calendar size={18} />,
    "Course": <File size={18} />,
    "Guide": <Book size={18} />
  };
  
  // Filter resources based on search query and active category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-20">
      <PageHeader
        title="Learning Hub"
        subtitle="Explore our collection of articles, videos, webinars, and courses to enhance your digital knowledge."
        backgroundImage="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Search and Filter Section */}
      <Section className="bg-navy py-12">
        <div className="max-w-lg mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-navy-light border-white/10 focus:border-gold/50 text-white pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id 
                  ? "bg-primary-royal hover:bg-primary-royal/90 text-white" 
                  : "bg-transparent hover:bg-navy-light border border-white/10 hover:border-white/30 text-white/80"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-navy-dark/90 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                    {typeIcons[resource.type]}
                    {resource.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gold text-sm">{resource.date}</span>
                    <span className="text-white/60 text-xs bg-navy-dark px-2 py-1 rounded">
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-3 mb-4">{resource.description}</p>
                  
                  <a 
                    href={resource.link}
                    className="inline-flex items-center text-gold font-medium text-sm group-hover:underline"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transform transition-transform group-hover:translate-x-1">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p className="text-white/70">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </Section>
    </div>
  );
};

export default LearningHubPage;
