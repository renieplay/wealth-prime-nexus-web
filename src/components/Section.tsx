
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  fullHeight?: boolean;
  noPadding?: boolean;
}

const Section = ({
  id,
  className,
  children,
  title,
  subtitle,
  centered = false,
  fullHeight = false,
  noPadding = false,
}: SectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id={id}
      className={cn(
        "relative",
        fullHeight && "min-h-screen",
        !noPadding && "py-16 md:py-24",
        className
      )}
    >
      <motion.div
        className={cn("container mx-auto px-4", centered && "text-center")}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {(title || subtitle) && (
          <div className="mb-12">
            {title && (
              <motion.h2
                className={cn(
                  "text-3xl md:text-4xl font-bold mb-4",
                  centered ? "mx-auto" : ""
                )}
                variants={itemVariants}
              >
                {title}
                <span className="block w-20 h-1 bg-gold mt-4 mb-4"></span>
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="text-white/70 text-lg max-w-3xl"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
