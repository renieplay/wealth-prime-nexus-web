
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-gold" />,
      title: "Email Us",
      details: "info@wealthprimer.com",
      action: "mailto:info@wealthprimer.com",
      actionText: "Send Email"
    },
    {
      icon: <Phone size={24} className="text-gold" />,
      title: "Call Us",
      details: "+1 (234) 567-8900",
      action: "tel:+12345678900",
      actionText: "Call Now"
    },
    {
      icon: <MapPin size={24} className="text-gold" />,
      title: "Visit Us",
      details: "123 Financial District, New York, NY 10001",
      action: "https://maps.google.com",
      actionText: "Get Directions"
    }
  ];
  
  return (
    <div className="pt-20">
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />
      
      <Section className="bg-navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-navy-dark border-white/10 focus:border-gold/50 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-navy-dark border-white/10 focus:border-gold/50 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-navy-dark border-white/10 focus:border-gold/50 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-navy-dark border-white/10 focus:border-gold/50 text-white"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-royal hover:bg-primary-royal/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-white/80 mb-8">
                Have questions or need assistance? Reach out to us through any of the following channels 
                or fill out the contact form. Our team is ready to help you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 bg-navy-dark rounded-full flex items-center justify-center border border-gold/30">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-white/80 mb-2">{item.details}</p>
                      <a 
                        href={item.action} 
                        className="text-gold text-sm hover:underline inline-flex items-center gap-1"
                      >
                        {item.actionText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Map (Placeholder) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 rounded-lg overflow-hidden h-[300px] glass-card"
            >
              <div className="w-full h-full bg-navy-dark flex items-center justify-center">
                <p className="text-white/50">
                  Google Maps Embed Would Go Here
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
