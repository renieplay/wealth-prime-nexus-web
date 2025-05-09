
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Image, Star, Book } from "lucide-react";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";

// Home page components
import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import AboutCompany from "@/components/home/AboutCompany";
import ClientsSection from "@/components/home/ClientsSection";
import LatestProjects from "@/components/home/LatestProjects";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Company Brief */}
      <AboutCompany />
      
      {/* Featured Services */}
      <FeaturedServices />
      
      {/* Clients Section */}
      <ClientsSection />
      
      {/* Latest Projects */}
      <LatestProjects />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default HomePage;
