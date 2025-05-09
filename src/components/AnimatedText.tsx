
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  staggerChildren?: number;
  delayChildren?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const AnimatedText = ({
  text,
  className,
  once = true,
  staggerChildren = 0.1,
  delayChildren = 0.1,
  tag = "p",
}: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { 
        staggerChildren, 
        delayChildren: delayChildren * i 
      },
    }),
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  const Tag = tag;
  
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <Tag className="inline-flex flex-wrap">
        {words.map((word, i) => (
          <motion.span 
            key={i} 
            className="mr-1 inline-block"
            variants={child}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default AnimatedText;
