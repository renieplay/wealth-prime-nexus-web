
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  className?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  children,
  backgroundImage = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  className 
}: PageHeaderProps) => {
  return (
    <section className={cn("relative py-24 md:py-32 overflow-hidden", className)}>
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-dark opacity-90"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className={`absolute inset-0 bg-cover bg-center`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80"
            >
              {subtitle}
            </motion.p>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
