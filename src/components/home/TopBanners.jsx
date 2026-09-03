import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 'ex-love-back',
    title: 'Get Your Ex Love Back',
    subtitle: 'Powerful Vedic Love Remedies & Safe Astrological Binding',
    image: '/images/banners/banner_get_ex_love_back.png',
    link: '/services/bring-ex-back'
  },
  {
    id: 'black-magic-removal',
    title: 'Black Magic Removal Expert',
    subtitle: 'Eradicate Dark Energies, Evil Eye & Generational Curses',
    image: '/images/banners/banner_black_magic_removal.png',
    link: '/services/black-magic-removal'
  },
  {
    id: 'vashikaran-specialist',
    title: 'Vashikaran Specialist',
    subtitle: 'Safe, Authentic & Ethical Vedic Rituals For Relationship Harmony',
    image: '/images/banners/banner_vashikaran_specialist.png',
    link: '/services/vashikaran-specialist'
  }
];

const TopBanners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const active = banners[currentIndex];

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#06030c] border-b border-[var(--color-space-cyan)]/25 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured Astrology Banners"
    >
      {/* 
        Exact aspect ratio (1717 / 916) container matching all 3 banner images pixel-for-pixel.
        No max-height clamping or overflow cropping so 100% of the banner graphic is fully visible.
      */}
      <div className="relative w-full aspect-[1717/916] overflow-hidden bg-black flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full select-none"
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-fill block select-none pointer-events-none"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Previous Navigation Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[var(--color-space-cyan)] hover:text-black text-white flex items-center justify-center backdrop-blur-md border border-[var(--color-space-cyan)]/40 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Next Navigation Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[var(--color-space-cyan)] hover:text-black text-white flex items-center justify-center backdrop-blur-md border border-[var(--color-space-cyan)]/40 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
};

export default TopBanners;
