import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import { servicesData } from '../data/servicesData';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-8 pb-12 lg:pb-24 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl md:text-7xl font-bold mb-6 tracking-tight font-heading"
          >
            Our <span className="text-[var(--color-mystic-accent)]">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--foreground)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-80"
          >
            Explore our comprehensive range of over 20 specialized astrological and spiritual services, each tailored to solve your unique life challenges.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              className="glass-card rounded-[2rem] overflow-hidden border border-[var(--color-mystic-accent)]/20 hover:border-[var(--color-mystic-accent)]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 group flex flex-col h-full shadow-[0_5px_20px_rgba(0,0,0,0.5)] bg-[var(--color-mystic-primary)]"
            >
              {/* Image Section */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-[var(--color-mystic-primary)]">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-color z-10`}></div>
                
                <img loading="lazy" 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--color-mystic-accent)] mb-3 font-heading tracking-wide">{service.title}</h3>
                <p className="text-[var(--foreground)] text-sm leading-relaxed mb-6 flex-grow opacity-90">{service.desc}</p>
                
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--color-mystic-accent)] transition-colors mt-auto"
                >
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
