import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { 
    id: "01",
    title: "Love Solutions", 
    desc: "When matters of the heart cannot wait, our powerful Vedic remedies resolve severe relationship crises.", 
    image: "/images/Reconnect & Co-Regulate_ Science-Based Tools for NYC Families.webp",
  },
  { 
    id: "02",
    title: "Black Magic", 
    desc: "Identify and destroy dark energies and generational curses.", 
    image: "/images/black_magic.webp",
  },
  { 
    id: "03",
    title: "Palm Reading", 
    desc: "Discover what the lines on your hands reveal.", 
    image: "/images/palmistry.webp",
  },
  { 
    id: "04",
    title: "Bring Ex Back", 
    desc: "Remove external interferences and permanently reunite with your lost love.", 
    image: "/images/3-months-rule-breakup.webp",
  },
  { 
    id: "05",
    title: "Business Success", 
    desc: "Overcome financial hurdles and attract long-term prosperity.", 
    image: "/images/career-astrology-reading.webp",
  }
];

const ServicesShowcase = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 flex items-center bg-[var(--background)] overflow-hidden">
      
      {/* Immersive Background based on active service */}
      <AnimatePresence mode="wait">
        <motion.div
          key={services[active].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={services[active].image} 
            alt={services[active].title}
            className="w-full h-full object-cover opacity-20 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/90 to-[var(--background)]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Sticky Header */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <div className="text-[var(--color-mystic-accent)] font-semibold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[var(--color-mystic-accent)]"></span>
            Specialized Focus
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight font-heading leading-tight">
            Curated <br/> <span className="text-[var(--color-mystic-accent)] text-glow">Excellence</span>
          </h2>
          <p className="text-[var(--foreground)] text-lg font-light opacity-80 mb-10">
            A meticulously selected suite of our most powerful and transformative spiritual services, designed for those who demand immediate results without compromise.
          </p>
          <Link 
            to="/services"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[var(--foreground)] border border-[var(--color-mystic-accent)]/50 hover:border-[var(--color-mystic-accent)] font-bold uppercase tracking-wider text-sm transition-colors duration-300 group"
          >
            View All Services
            <ArrowRight size={16} className="text-[var(--color-mystic-accent)] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right: Interactive List */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <div 
                key={service.id}
                onMouseEnter={() => setActive(index)}
                className={`group border-b border-[var(--color-mystic-accent)]/20 py-10 cursor-pointer transition-all duration-500 ${
                  isActive ? 'pl-8 border-[var(--color-mystic-accent)]' : 'hover:pl-4'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-8">
                    <span className={`text-xl font-heading transition-colors duration-500 ${
                      isActive ? 'text-[var(--color-mystic-accent)]' : 'text-[var(--foreground)]/30 group-hover:text-[var(--color-mystic-accent)]/50'
                    }`}>
                      {service.id}
                    </span>
                    <div>
                      <h3 className={`text-3xl md:text-5xl font-heading font-bold mb-4 transition-colors duration-500 ${
                        isActive ? 'text-[var(--foreground)] text-glow' : 'text-[var(--foreground)]/60 group-hover:text-[var(--foreground)]'
                      }`}>
                        {service.title}
                      </h3>
                      
                      {/* Description expands if active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[var(--foreground)] opacity-80 font-light max-w-md"
                          >
                            {service.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className={`hidden md:flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-500 ${
                    isActive ? 'border-[var(--color-mystic-accent)] bg-[var(--color-mystic-accent)] text-[var(--background)]' : 'border-transparent text-[var(--foreground)]/30 group-hover:border-[var(--color-mystic-accent)]/50'
                  }`}>
                    <ArrowRight size={24} className={isActive ? '-rotate-45' : ''} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesShowcase;
