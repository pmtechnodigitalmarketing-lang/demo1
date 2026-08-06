import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { 
    name: "Sarah Jenkins", 
    location: "Toronto, ON", 
    image: "https://randomuser.me/api/portraits/women/44.jpg", 
    text: "Pandit Rudradev gave me clarity when I was completely lost. His psychic reading was eerily accurate. He saw things no one else could possibly know.",
    color: "from-[#d4af37]/20 to-transparent"
  },
  { 
    name: "David Chen", 
    location: "Vancouver, BC", 
    image: "https://randomuser.me/api/portraits/men/32.jpg", 
    text: "I was skeptical at first, but the energy healing session completely removed the heavy burden I'd been carrying for years. A truly gifted spiritual healer.",
    color: "from-[var(--color-mystic-emerald)]/20 to-transparent"
  },
  { 
    name: "Amelia Bouchard", 
    location: "Montreal, QC", 
    image: "https://randomuser.me/api/portraits/women/68.jpg", 
    text: "The love astrology insights helped my partner and me understand our core conflicts. We are now happier than ever, thanks to his guidance.",
    color: "from-[var(--color-mystic-secondary)]/40 to-transparent"
  },
  { 
    name: "Michael T.", 
    location: "Calgary, AB", 
    image: "https://randomuser.me/api/portraits/men/46.jpg", 
    text: "Professional, confidential, and incredibly insightful. The horoscope reading predicted major life events that allowed me to prepare accordingly.",
    color: "from-[#d4af37]/20 to-transparent"
  }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-[#0a0f1d] overflow-hidden py-8 md:py-24">
      
      {/* Dynamic Ambient Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className={`absolute inset-0 bg-gradient-to-br ${testimonials[current].color} pointer-events-none`}
        />
      </AnimatePresence>
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* Navigation Top */}
        <div className="flex justify-between items-center mb-16">
          <div className="text-[var(--color-mystic-accent)] font-semibold tracking-[0.2em] uppercase text-sm flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[var(--color-mystic-accent)]"></span>
            Voices of Transformation
          </div>
          
          <div className="flex gap-4">
            <button aria-label="Previous Testimonial" onClick={prev} className="w-12 h-12 rounded-full border border-[var(--color-mystic-accent)]/30 flex items-center justify-center text-[var(--color-mystic-accent)] hover:bg-[var(--color-mystic-accent)] hover:text-[#0a0f1d] transition-all duration-300">
              <ChevronLeft size={20} />
            </button>
            <button aria-label="Next Testimonial" onClick={next} className="w-12 h-12 rounded-full border border-[var(--color-mystic-accent)]/30 flex items-center justify-center text-[var(--color-mystic-accent)] hover:bg-[var(--color-mystic-accent)] hover:text-[#0a0f1d] transition-all duration-300">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full"
            >
              <Quote className="text-[var(--color-mystic-accent)]/20 w-32 h-32 absolute -top-16 -left-8 md:-left-16 z-0" />
              
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light leading-snug md:leading-tight text-[var(--foreground)] mb-12 relative z-10">
                "{testimonials[current].text}"
              </h3>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-[var(--color-mystic-accent)]/50 p-1">
                  <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[var(--color-mystic-accent)] tracking-wide font-heading">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-[var(--foreground)]/60 text-sm md:text-base uppercase tracking-widest mt-1">
                    {testimonials[current].location}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Progress indicators */}
        <div className="mt-16 flex gap-3">
          {testimonials.map((_, idx) => (
            <button
              aria-label="Select Testimonial"
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[2px] transition-all duration-500 ${current === idx ? 'w-16 bg-[var(--color-mystic-accent)]' : 'w-8 bg-[var(--color-mystic-accent)]/20 hover:bg-[var(--color-mystic-accent)]/50'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;
