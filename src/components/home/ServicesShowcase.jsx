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
    <section className="relative min-h-screen pt-8 pb-4 md:pb-8 lg:pt-12 lg:pb-8 px-6 md:px-12 lg:px-24 flex items-center bg-transparent overflow-hidden">
      
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Sticky Header */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <div className="text-[var(--color-space-cyan)] font-semibold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[var(--color-space-cyan)] text-white drop-shadow-md"></span>
            Specialized Focus
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight font-heading leading-tight text-white drop-shadow-md">
            Curated <br/> <span className="text-[var(--color-space-cyan)] text-glow text-white drop-shadow-md">Excellence</span>
          </h2>
          <p className="text-white text-lg font-light mb-10">
            A meticulously selected suite of our most powerful and transformative spiritual services, designed for those who demand immediate results without compromise.
          </p>
          
          {/* Added 'Much More' Content - Premium Stats/Badges */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="bg-[var(--color-space-cyan)]/5 border border-[var(--color-space-cyan)]/20 rounded-xl p-4 transition-transform hover:-translate-y-1 duration-300">
              <span className="block text-3xl font-heading font-bold text-[var(--color-space-cyan)] mb-1 text-white drop-shadow-md">99%</span>
              <span className="block text-xs uppercase tracking-wider text-white drop-shadow-md">Success Rate</span>
            </div>
            <div className="bg-[var(--color-space-cyan)]/5 border border-[var(--color-space-cyan)]/20 rounded-xl p-4 transition-transform hover:-translate-y-1 duration-300">
              <span className="block text-3xl font-heading font-bold text-[var(--color-space-cyan)] mb-1 text-white drop-shadow-md">24/7</span>
              <span className="block text-xs uppercase tracking-wider text-white drop-shadow-md">Spiritual Support</span>
            </div>
            <div className="bg-[var(--color-space-cyan)]/5 border border-[var(--color-space-cyan)]/20 rounded-xl p-4 transition-transform hover:-translate-y-1 duration-300">
              <span className="block text-3xl font-heading font-bold text-[var(--color-space-cyan)] mb-1 text-white drop-shadow-md">10k+</span>
              <span className="block text-xs uppercase tracking-wider text-white drop-shadow-md">Lives Changed</span>
            </div>
            <div className="bg-[var(--color-space-cyan)]/5 border border-[var(--color-space-cyan)]/20 rounded-xl p-4 transition-transform hover:-translate-y-1 duration-300">
              <span className="block text-3xl font-heading font-bold text-[var(--color-space-cyan)] mb-1 text-white drop-shadow-md">100%</span>
              <span className="block text-xs uppercase tracking-wider text-white drop-shadow-md">Confidential</span>
            </div>
          </div>

          <Link 
            to="/services"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-[var(--color-space-cyan)]/50 hover:border-[var(--color-space-cyan)] hover:bg-[var(--color-space-cyan)] hover:text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 group rounded-lg"
          >
            View All Services
            <ArrowRight size={16} className="text-[var(--color-space-cyan)] group-hover:text-white group-hover:translate-x-1 transition-all" />
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
                className={`group border-b border-[var(--color-space-cyan)]/20 py-10 cursor-pointer transition-all duration-500 ${
                  isActive ? 'pl-8 border-[var(--color-space-cyan)]' : 'hover:pl-4'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-8">
                    <span className={`text-xl font-heading transition-colors duration-500 ${
                      isActive ? 'text-[var(--color-space-cyan)]' : 'text-white/30 group-hover:text-[var(--color-space-cyan)]/50'
                    }`}>
                      {service.id}
                    </span>
                    <div>
                      <h3 className={`text-3xl md:text-5xl font-heading font-bold mb-4 transition-colors duration-500 ${
                        isActive ? 'text-white text-glow' : 'text-white/60 group-hover:text-white'
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
                            className="text-white drop-shadow-md font-light max-w-md"
                          >
                            {service.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className={`hidden md:flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-500 ${
                    isActive ? 'border-[var(--color-space-cyan)] bg-[var(--color-space-cyan)] text-[var(--background)]' : 'border-transparent text-white/30 group-hover:border-[var(--color-space-cyan)]/50'
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
