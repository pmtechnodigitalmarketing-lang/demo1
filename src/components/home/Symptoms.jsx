import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeartCrack, TrendingDown, EyeOff, AlertCircle, Image as ImageIcon } from 'lucide-react';

const symptoms = [
  {
    icon: <HeartCrack size={48} className="text-[var(--color-mystic-accent)] mb-6 opacity-80" />,
    question: "A sudden, heartbreaking disconnect with your partner?",
    desc: "Everything was perfect, and then suddenly, they pulled away for no logical reason.",
    image: "/images/download.jpg"
  },
  {
    icon: <TrendingDown size={48} className="text-[var(--color-mystic-accent)] mb-6 opacity-80" />,
    question: "Constant, unexplainable bad luck in finance?",
    desc: "No matter how hard you work, money slips through your fingers and opportunities vanish at the last second.",
    image: "/images/finance_symptom.jpg"
  },
  {
    icon: <EyeOff size={48} className="text-[var(--color-mystic-accent)] mb-6 opacity-80" />,
    question: "Feeling a heavy, dark energy surrounding you?",
    desc: "Waking up exhausted, feeling watched, or experiencing a constant state of unexplainable anxiety.",
    image: "/images/dark_energy_symptom.jpg"
  },
  {
    icon: <AlertCircle size={48} className="text-[var(--color-mystic-accent)] mb-6 opacity-80" />,
    question: "Generational cycles of failure?",
    desc: "Noticing that the same struggles that plagued your parents are now destroying your own life.",
    image: "/images/generational_symptom.jpg"
  }
];

// Single Item Component for scroll-based opacity fading
const SymptomItem = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center", "end 10%"]
  });

  // Fade in at center, fade out at edges
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.1, 1, 1, 0.1]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);
  
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 py-6"
    >
      {/* Image Side */}
      <div className={`w-full lg:w-5/12 flex justify-center ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
        {item.image ? (
          <div className="relative h-64 lg:h-80 w-full max-w-[460px] rounded-2xl overflow-hidden shadow-xl group border border-[var(--color-mystic-accent)]/20">
            <img 
              src={item.image} 
              alt={item.question} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent pointer-events-none"></div>
          </div>
        ) : (
          <div className="relative aspect-square w-full max-w-[380px] lg:max-w-[460px] rounded-2xl border border-[var(--color-mystic-accent)]/20 border-dashed flex flex-col items-center justify-center text-[var(--color-mystic-accent)]/40 bg-[var(--color-mystic-accent)]/5">
            <ImageIcon size={48} className="mb-4 opacity-50" />
            <span className="text-sm uppercase tracking-widest opacity-80">Awaiting Image</span>
          </div>
        )}
      </div>

      {/* Text Side */}
      <div className={`w-full lg:w-7/12 flex flex-col justify-center text-left ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
        {item.icon}
        <h3 className="text-3xl md:text-5xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-6 leading-tight tracking-tight text-glow">
          {item.question}
        </h3>
        <p className="text-lg md:text-2xl text-[var(--foreground)] opacity-70 font-light leading-relaxed max-w-2xl">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

const Symptoms = () => {
  return (
    <section className="relative bg-[var(--background)] pt-8 pb-8 overflow-hidden">
      
      {/* Dark Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-mystic-secondary)]/20 via-[var(--background)] to-[var(--background)]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--color-mystic-accent)] font-semibold tracking-[0.2em] uppercase mb-4 opacity-80">
              Are You Experiencing This?
            </h2>
            <div className="h-[1px] w-24 bg-[var(--color-mystic-accent)]/50 mx-auto"></div>
          </motion.div>
        </div>

        {/* Symptoms scroll list */}
        <div className="flex flex-col gap-0">
          {symptoms.map((item, index) => (
            <SymptomItem key={index} index={index} item={item} />
          ))}
        </div>

        {/* Outro */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-3xl text-[var(--foreground)] font-light max-w-4xl mx-auto leading-relaxed">
              You are not alone. These are the echoes of severe astrological blockages and dark energy interference. <span className="text-[var(--color-mystic-accent)] font-semibold">But they can be broken.</span>
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Symptoms;
