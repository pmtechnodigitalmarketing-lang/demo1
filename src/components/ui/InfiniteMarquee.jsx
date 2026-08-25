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
    <div className="fixed top-0 left-0 w-full h-[48px] bg-[var(--color-space-gray)] text-white py-3 overflow-hidden border-b border-[var(--color-space-purple)]/10 z-[60]">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50
          }}
        >
          {/* Duplicate the list to ensure seamless infinite scroll */}
          {[...texts, ...texts, ...texts, ...texts].map((text, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-8">
              <span className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-md">{text}</span>
              <span className="text-[var(--color-space-cyan)] text-white drop-shadow-md">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
