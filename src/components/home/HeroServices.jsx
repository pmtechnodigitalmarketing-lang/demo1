import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: "Love Solutions",
    subtitle: "Immediate Cosmic Intervention",
    desc: "When matters of the heart cannot wait, our powerful Vedic remedies align planetary energies to resolve severe relationship crises within 24 hours. Pandit Rudradev uses ancient astrological charting to pinpoint the exact energetic blockages causing your separation. Experience profound peace, emotional healing, and a guaranteed path forward with absolute confidentiality.",
    color: "from-[var(--color-brand-red)] to-[var(--color-brand-red)]",
    image: "/images/Pandit Rudradev - Bn4.webp"
  },
  {
    id: '02',
    title: "Powerful Love Spells",
    subtitle: "Bind True Love Forever",
    desc: "Authentic, safe, and highly potent spiritual love spells designed to attract your soulmate, reignite lost passion, and secure unconditional love. Unlike temporary fixes, our rituals work on a deep spiritual level to create a permanent, unbreakable bond without any negative karmic consequences. Let the universe bring your true love directly to you.",
    color: "from-[var(--color-brand-yellow)] to-[var(--color-brand-orange)]",
    image: "/images/Pandit Rudradev - Bn1.webp"
  },
  {
    id: '03',
    title: "Bring Ex Back",
    subtitle: "Restore Broken Bonds",
    desc: "Using ancient astrology and energy binding, we safely remove the misunderstandings, jealousy, and external influences that drove you apart. Heartbreak is not the final chapter. We rebuild the foundation of your relationship from the ground up, ensuring that when your partner returns, the connection is stronger and more passionate than ever before.",
    color: "from-[var(--color-brand-orange)] to-[var(--color-brand-red)]",
    image: "/images/Pandit Rudradev - Bn2.webp"
  },
  {
    id: '04',
    title: "Black Magic Removal",
    subtitle: "Ultimate Spiritual Protection",
    desc: "Identify and completely destroy dark energies, generational curses, and black magic that have been silently causing failures in your health, career, and love life. Pandit Rudradev performs intensive cleansing rituals to eradicate these negative forces, restoring a highly protective and impenetrable aura around you and your loved ones.",
    color: "from-white to-[#18181b]",
    image: "/images/Pandit Rudradev - Bn3.webp"
  }
];

const HeroServices = () => {
  const [active, setActive] = useState(0);

  // Auto-play the tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 7000); // 7 seconds per slide for a slower, calmer pace
    return () => clearInterval(interval);
  }, []);

  const activeService = services[active];

  return (
    <section className="min-h-screen flex flex-col justify-start lg:justify-center relative pt-8 lg:pt-0 pb-32 lg:pb-0 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-full max-w-7xl mx-auto w-full relative z-10 gap-8 md:gap-16 lg:gap-24 items-center mb-12 lg:mb-24 lg:mb-0 mt-0 lg:mt-0">
        
        {/* Left Side: Typography */}
        <div className="w-full lg:flex-1 lg:pr-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-[var(--color-aurora-green)] font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[var(--color-aurora-green)]"></span>
                Pandit Rudradev
              </div>
              
              <h1 className="text-3xl md:text-5xl md:text-7xl font-light mb-6 tracking-tight leading-[1.1]">
                <span className={`block font-bold text-transparent bg-clip-text bg-gradient-to-r ${activeService.color}`}>
                  {activeService.title}
                </span>
              </h1>
              
              <h3 className="text-xl md:text-2xl text-[var(--foreground)] font-medium mb-8">
                {activeService.subtitle}
              </h3>
              
              <p className="text-[var(--foreground)] text-lg leading-relaxed mb-8 max-w-lg font-light">
                {activeService.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-brand-yellow)] text-[#fafafa] font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300 shadow-xl"
                  style={{ boxShadow: `0 0 20px ${activeService.color.split(' ')[1].replace('to-[', '').replace(']', '')}40` }} 
                >
                  Book Consultation 
                  <ArrowRight size={16} />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-brand-yellow)]/10 text-[var(--foreground)] font-bold uppercase tracking-wider text-sm hover:bg-[var(--color-brand-yellow)]/10 transition-colors duration-300"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Massive Image Space */}
        <div className="w-full lg:flex-1 h-[50vh] lg:h-[70vh] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <div className="w-full h-full bg-[#09090b] rounded-t-[4rem] rounded-b-md lg:rounded-[4rem] overflow-hidden border border-[var(--color-brand-yellow)]/10 relative group">
                
                {/* Image Effect Space */}
                <motion.div 
                  className="w-full h-full bg-[#18181b] flex items-center justify-center relative overflow-hidden"
                >
                  <motion.img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                  />
                  {/* Subtle thematic glow based on service */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-20 mix-blend-overlay z-10 pointer-events-none`}></div>
                </motion.div>
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Tabs Navigation */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[var(--color-brand-yellow)]/10 bg-[#6366f1]/50 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto w-full flex overflow-x-auto no-scrollbar">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <button aria-label="Interactive Button"
                key={service.id}
                onClick={() => setActive(index)}
                className={`flex-1 min-w-[200px] py-6 px-8 text-left border-l first:border-l-0 border-[var(--color-brand-yellow)]/10 transition-all duration-500 relative group ${
                  isActive ? 'bg-[var(--color-brand-yellow)]/10' : 'hover:bg-[var(--color-brand-yellow)]/10'
                }`}
              >
                {/* Active Indicator Line */}
                <div 
                  className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r ${service.color} transition-all duration-700 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-1/4'
                  }`}
                />
                
                <span className={`block text-xs font-semibold tracking-widest mb-2 transition-colors duration-300 ${
                  isActive ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]'
                }`}>
                  {service.id}
                </span>
                <span className={`block text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]'
                }`}>
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default HeroServices;
