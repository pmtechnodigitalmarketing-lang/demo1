import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = () => {
  const texts = [
    "100% Confidential",
    "Serving All of Canada",
    "25+ Years Experience",
    "Immediate Solutions",
    "Trusted by 10k+ Clients",
    "Vedic Astrology Expert",
    "Spiritual Healing"
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-[32px] bg-[#0c071a]/95 backdrop-blur-md text-white overflow-hidden border-b border-[var(--color-space-cyan)]/25 z-[60] flex items-center select-none hover:border-[var(--color-space-cyan)]/60 hover:shadow-[0_0_15px_rgba(69,243,255,0.25)] transition-all duration-300">
      <div className="flex whitespace-nowrap overflow-hidden w-full">
        <motion.div
          className="flex gap-6 md:gap-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
        >
          {/* Duplicate the list to ensure seamless infinite scroll */}
          {[...texts, ...texts, ...texts, ...texts].map((text, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 md:gap-10 cursor-pointer py-1"
            >
              <span className="marquee-glow-item text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white/90">
                {text}
              </span>
              <span className="marquee-glow-star text-[var(--color-space-cyan)] text-xs inline-block">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
