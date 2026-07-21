import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

const locations = [
  { city: 'Toronto', province: 'Ontario', delay: 0.1, color: 'var(--color-aurora-green)' },
  { city: 'Vancouver', province: 'British Columbia', delay: 0.2, color: 'var(--color-aurora-purple)' },
  { city: 'Montreal', province: 'Quebec', delay: 0.3, color: 'var(--color-brand-orange)' },
  { city: 'Calgary', province: 'Alberta', delay: 0.4, color: 'var(--color-brand-yellow)' },
  { city: 'Edmonton', province: 'Alberta', delay: 0.5, color: 'var(--color-brand-red)' },
  { city: 'Ottawa', province: 'Ontario', delay: 0.6, color: 'var(--color-brand-green)' },
];

const CanadianLocations = () => {
  return (
    <section className="pt-8 pb-12 lg:pb-32 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, var(--color-aurora-purple) 0%, transparent 40%)' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-full opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, var(--color-aurora-green) 0%, transparent 40%)' }}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col xl:flex-row gap-8 md:gap-16 xl:items-center">
          
          {/* Left Column - Content */}
          <div className="flex-1 xl:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-brand-green)]">
                <Compass size={16} />
                <span>Nationwide Presence</span>
              </div>
              <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                Guidance That <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-aurora-green)] to-[var(--color-aurora-purple)]">Reaches You,</span><br/>
                Anywhere.
              </h2>
              <p className="text-[var(--foreground)] text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Distance is no barrier to cosmic healing. Pandit Rudradev offers profound astrological insights and immediate solutions to clients across all major Canadian provinces.
              </p>
              
              <div className="flex items-center gap-6 glass p-4 rounded-2xl inline-flex border border-[var(--color-brand-yellow)]/10">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
                    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100"
                  ].map((src, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-[var(--background)] border-2 border-[#09090b] shadow-lg overflow-hidden relative z-0">
                      <img loading="lazy" src={src} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-[var(--color-aurora-green)]/10 border-2 border-[#09090b] flex items-center justify-center shadow-lg text-[var(--color-aurora-green)] text-xs font-bold z-10 backdrop-blur-md">
                    +10k
                  </div>
                </div>
                <div>
                  <p className="text-[var(--foreground)] font-bold text-lg">Trusted Clients</p>
                  <p className="text-[var(--foreground)] text-sm">Across Canada & USA</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Locations Grid */}
          <div className="flex-1 xl:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {locations.map((loc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: loc.delay, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative glass rounded-[2rem] p-6 md:p-8 overflow-hidden border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-yellow)]/10 transition-all duration-500 cursor-default shadow-2xl"
                >
                  {/* Subtle highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glow effect based on location color */}
                  <div 
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] opacity-10 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: loc.color }}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full justify-between gap-6 md:gap-12">
                    <div className="flex justify-between items-start">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[var(--color-brand-yellow)]/10 border border-[var(--color-brand-yellow)]/10 backdrop-blur-md shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ color: loc.color }}
                      >
                        <MapPin size={28} />
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-brand-yellow)]/10 bg-[var(--color-brand-yellow)]/10 group-hover:bg-[var(--color-brand-yellow)]/10 transition-colors duration-300">
                        <ArrowRight className="text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 -rotate-45" size={18} />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[var(--foreground)] text-xs md:text-sm font-semibold mb-2 tracking-[0.2em] uppercase">{loc.province}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#18181b] transition-all">
                        {loc.city}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CanadianLocations;
