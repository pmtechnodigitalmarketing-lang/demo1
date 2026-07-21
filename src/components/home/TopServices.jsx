import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, ShieldAlert, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TopServices = () => {
  const containerRef = useRef(null);

  const services = [
    {
      id: '01',
      title: "Love Solutions in 24 Hours",
      subtitle: "Immediate Cosmic Intervention",
      desc: "When matters of the heart can't wait, our powerful Vedic remedies align planetary energies to resolve severe relationship crises within 24 hours. Experience profound peace and immediate results.",
      icon: <Heart size={32} className="text-[var(--foreground)]" />,
      color: "from-[var(--color-brand-red)] to-[var(--color-brand-red)]"
    },
    {
      id: '02',
      title: "Powerful Love Spells",
      subtitle: "Bind True Love Forever",
      desc: "Authentic, safe, and highly potent spiritual love spells designed to attract your soulmate, reignite lost passion, and secure unconditional love without negative karma.",
      icon: <Sparkles size={32} className="text-[var(--foreground)]" />,
      color: "from-[var(--color-brand-yellow)] to-[var(--color-brand-orange)]"
    },
    {
      id: '03',
      title: "Bring Your Ex Back",
      subtitle: "Restore Broken Bonds",
      desc: "Heartbreak is not the end. Using ancient astrology and energy binding, we can remove the misunderstandings and external influences that drove you apart, bringing your ex back into your arms.",
      icon: <RefreshCcw size={32} className="text-[var(--foreground)]" />,
      color: "from-[var(--color-brand-orange)] to-[var(--color-brand-red)]"
    },
    {
      id: '04',
      title: "Black Magic Removal",
      subtitle: "Ultimate Spiritual Protection",
      desc: "Are you facing unexplained failures, sudden illnesses, or chronic bad luck? We identify and completely destroy dark energies, curses, and black magic, restoring a protective aura around you.",
      icon: <ShieldAlert size={32} className="text-[var(--foreground)]" />,
      color: "from-white to-[#18181b]"
    }
  ];

  useEffect(() => {
    const sections = gsap.utils.toArray('.service-row');
    
    sections.forEach((sec) => {
      const imgBlock = sec.querySelector('.img-block');
      const textBlock = sec.querySelector('.text-block');
      
      gsap.fromTo(imgBlock, 
        { x: sec.classList.contains('reverse') ? 100 : -100, opacity: 0, scale: 0.9 },
        { 
          x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(textBlock, 
        { x: sec.classList.contains('reverse') ? -100 : 100, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 75%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-32 px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-12 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Our Most <span className="text-[var(--color-aurora-green)]">Powerful</span> Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--foreground)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Some problems require immediate, specialized attention. Discover our master-level services designed to conquer the most impossible challenges.
          </motion.p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div 
                key={service.id} 
                className={`service-row flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24 items-center ${isReverse ? 'reverse md:flex-row-reverse' : ''}`}
              >
                {/* Image Placeholder */}
                <div className="img-block flex-1 w-full relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-tr opacity-20 blur-3xl rounded-full transition-opacity duration-500 group-hover:opacity-40 z-0" style={{ backgroundImage: `linear-gradient(to top right, var(--tw-gradient-stops))` }}></div>
                  <div className="aspect-[4/3] w-full glass-card rounded-3xl p-4 relative z-10 overflow-hidden border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-yellow)]/10 transition-colors duration-500 shadow-2xl">
                    <div className="w-full h-full bg-[#6366f1]/40 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      {/* Replace with actual <img loading="lazy"> tag later */}
                      {React.cloneElement(service.icon, { size: 64, className: "opacity-30 mb-4" })}
                      <span className="text-[var(--foreground)] font-medium tracking-widest uppercase text-sm">Image Space</span>
                      
                      {/* Decorative gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 mix-blend-overlay`}></div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-block flex-1 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl md:text-5xl font-black text-[var(--foreground)]/5">{service.id}</span>
                    <div className="p-3 rounded-xl bg-[var(--color-brand-yellow)]/10 backdrop-blur-sm border border-[var(--color-brand-yellow)]/10">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                    {service.title}
                  </h3>
                  <h4 className="text-xl text-[var(--foreground)] font-semibold tracking-wide uppercase mb-6">
                    {service.subtitle}
                  </h4>
                  
                  <p className="text-[var(--foreground)] text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[var(--color-brand-yellow)]/10 text-[var(--foreground)] font-bold uppercase tracking-wider text-sm hover:bg-[var(--color-brand-yellow)] hover:text-[#fafafa] transition-all duration-300 group"
                  >
                    Consult Now 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TopServices;
