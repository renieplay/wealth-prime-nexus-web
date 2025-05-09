
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import { User, Briefcase, Star } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Star className="w-10 h-10 text-gold" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from project execution to client service."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: "Innovation",
      description: "We embrace innovation and stay at the forefront of digital technologies."
    },
    {
      icon: <User className="w-10 h-10 text-gold" />,
      title: "Education",
      description: "We believe in empowering our clients through education and knowledge sharing."
    }
  ];

  const team = [
    {
      name: "Jane Doe",
      role: "Chief Executive Officer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "With over 15 years of experience in digital transformation, Jane leads our company vision."
    },
    {
      name: "John Smith",
      role: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "John brings extensive expertise in blockchain and web development to our technical strategies."
    },
    {
      name: "Emily Johnson",
      role: "Head of Education",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Emily designs our educational programs with a focus on practical, results-driven learning."
    },
    {
      name: "Michael Wong",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Michael ensures our digital products meet the highest standards of design and usability."
    }
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="About Wealth PrîMer"
        subtitle="We're on a mission to empower businesses through digital innovation and education."
        backgroundImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Company Story */}
      <Section className="bg-navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gold font-medium mb-2 block"
            >
              OUR STORY
            </motion.span>
            
            <AnimatedText
              text="Building Digital Success Stories Since 2010"
              className="mb-6"
              tag="h2"
              once={true}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white/80 space-y-4"
            >
              <p>
                Wealth PrîMer was founded with a vision to bridge the gap between technical innovation and practical education in the digital space. We recognized that many businesses were struggling to adapt to the rapidly evolving digital landscape.
              </p>
              <p>
                Our journey began with a small team of passionate experts who believed in the power of combining cutting-edge technology with comprehensive education. Today, we've grown into a full-service digital innovation company serving clients worldwide.
              </p>
              <p>
                What sets us apart is our holistic approach. We don't just build digital products; we ensure our clients understand how to leverage them effectively for sustainable growth. This philosophy has guided our growth and continues to drive our mission.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Company Values */}
      <Section className="bg-navy-light" title="Our Values" centered={true}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center border border-gold/30">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-navy" title="Our Team" subtitle="Meet the experts behind Wealth PrîMer" centered={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gold text-sm mb-4">{member.role}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
