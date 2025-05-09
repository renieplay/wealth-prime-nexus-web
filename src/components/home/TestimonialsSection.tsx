
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechInnovate",
      content: "Wealth PrîMer exceeded our expectations with their blockchain implementation. Their educational approach ensured our team understood every aspect of the technology.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, DigitalWave",
      content: "The web platform Wealth PrîMer built for us has transformed our business. Their attention to detail and focus on user experience is unmatched.",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Director, FutureFinance",
      content: "Their educational resources have been invaluable for our team. We've seen a significant improvement in our digital capabilities after working with them.",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5,
    },
  ];
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section className="bg-navy overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/30">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6 text-white/90">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                
                <div>
                  <div className="font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-white/70 text-sm">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 md:mt-12 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-gold" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </motion.div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={handlePrev}
              className="bg-navy-light p-3 rounded-full hover:bg-navy border border-gold/30 hover:border-gold transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="bg-navy-light p-3 rounded-full hover:bg-navy border border-gold/30 hover:border-gold transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
