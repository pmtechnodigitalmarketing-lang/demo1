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
            className="text-3xl md:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-[var(--color-aurora-green)]">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--foreground)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
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
              className="glass-card rounded-[2rem] overflow-hidden border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-yellow)]/10 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#6366f1]/40">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay z-10`}></div>
                
                <img loading="lazy" 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{service.title}</h3>
                <p className="text-[var(--foreground)] text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-aurora-green)] hover:text-[var(--foreground)] transition-colors mt-auto"
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
