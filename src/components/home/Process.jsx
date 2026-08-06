import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "The Awakening",
    subtitle: "Confidential Consultation",
    desc: "A secure, judgment-free space to bare your soul. We listen to the echoes of your deepest struggles and heartbreak without reservation.",
    icon: <PhoneCall size={24} />
  },
  {
    num: "02",
    title: "Cosmic Alignment",
    subtitle: "Astrological Analysis",
    desc: "Pandit Rudradev deciphers your exact birth chart and current planetary transits, piercing through the veil to reveal the energetic root causes of your blockages.",
    icon: <Sparkles size={24} />
  },
  {
    num: "03",
    title: "The Intervention",
    subtitle: "Powerful Remedies",
    desc: "Receive customized, potent Vedic remedies. We deploy ancient rituals designed to forcefully shift your reality and deliver undeniable results.",
    icon: <ShieldCheck size={24} />
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 lg:py-40 px-6 md:px-12 relative bg-[var(--background)] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--color-mystic-emerald)] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--color-mystic-secondary)] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 text-[var(--color-mystic-accent)] uppercase tracking-[0.3em] text-sm font-semibold mb-6"
          >
            <span className="w-12 h-[1px] bg-[var(--color-mystic-accent)]"></span>
            The Journey
            <span className="w-12 h-[1px] bg-[var(--color-mystic-accent)]"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading leading-tight"
          >
            Path To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mystic-accent)] to-[#fcd34d] font-style-italic">Transformation</span>
          </motion.h2>
        </div>

        {/* Winding Timeline */}
        <div className="relative">
          
          {/* Animated Line Desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-mystic-accent)]/20 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-[var(--color-mystic-accent)] shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            ></motion.div>
          </div>
          {/* Animated Line Mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--color-mystic-accent)]/20 -translate-x-1/2 md:hidden">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-[var(--color-mystic-accent)] shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            ></motion.div>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                  
                  {/* Left/Right spacer for alternating layout on desktop */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'order-1' : 'order-3'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className={`text-${isEven ? 'right' : 'left'}`}
                    >
                      <h3 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--color-mystic-accent)] transition-colors duration-500">
                        {step.title}
                      </h3>
                      <h4 className="text-[var(--color-mystic-accent)] uppercase tracking-widest text-sm mb-4">
                        {step.subtitle}
                      </h4>
                      <p className="text-[var(--foreground)] opacity-70 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="order-1 md:order-2 w-16 md:w-2/12 flex justify-center relative z-10 shrink-0 self-start md:self-auto">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-mystic-accent)] to-[#8a7220] p-[2px] shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500"
                    >
                      <div className="w-full h-full bg-[var(--background)] rounded-full flex items-center justify-center">
                        <div className="text-[var(--color-mystic-accent)]">
                          {step.icon}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Glowing pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[var(--color-mystic-accent)] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 hidden md:block"></div>
                  </div>

                  {/* Mobile Content */}
                  <div className="order-2 md:hidden w-[calc(100%-4rem)] pl-6 mt-[-3rem]">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-1">
                        {step.title}
                      </h3>
                      <h4 className="text-[var(--color-mystic-accent)] uppercase tracking-widest text-xs mb-3">
                        {step.subtitle}
                      </h4>
                      <p className="text-[var(--foreground)] opacity-70 font-light text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
