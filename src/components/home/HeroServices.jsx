import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: "Love Solutions",
    subtitle: "Immediate Cosmic Intervention",
    color: "from-[var(--color-mystic-accent)] to-[#b08d24]",
    image: "/images/Pandit Rudradev - Bn4.webp",
    heroHeading: "Heal Your",
    heroHighlight: "Broken Heart",
    heroDesc: "Experience profound emotional healing and powerful Vedic remedies designed to resolve severe relationship crises and reignite true love. Our deeply intuitive approach helps clear negativity and restore the romantic spark you thought was lost forever."
  },
  {
    id: '02',
    title: "Powerful Spells",
    subtitle: "Bind True Love Forever",
    color: "from-[var(--color-mystic-emerald)] to-[#083D2A]",
    image: "/images/Pandit Rudradev - Bn1.webp",
    heroHeading: "Awaken The",
    heroHighlight: "Cosmic Bond",
    heroDesc: "Utilize authentic, highly potent spiritual spells to attract your soulmate and secure a permanent, unbreakable connection. Our ancient Vedic practices work on a deep energetic level to align your aura with your desired partner, ensuring a harmonious and passionate bond that stands the test of time."
  },
  {
    id: '03',
    title: "Bring Ex Back",
    subtitle: "Restore Broken Bonds",
    color: "from-[var(--color-mystic-secondary)] to-[#150D23]",
    image: "/images/Pandit Rudradev - Bn2.webp",
    heroHeading: "Reunite With",
    heroHighlight: "Your Lost Love",
    heroDesc: "Remove misunderstandings and external interferences to rebuild the foundation of your relationship. Through targeted astrological analysis and specialized rituals, we clear the spiritual blockages preventing your reunion, bringing your lost love back into your arms stronger than ever."
  },
  {
    id: '04',
    title: "Black Magic",
    subtitle: "Ultimate Protection",
    color: "from-[#4B5563] to-[var(--color-mystic-primary)]",
    image: "/images/Pandit Rudradev - Bn3.webp",
    heroHeading: "Destroy Dark",
    heroHighlight: "Energy Forces",
    heroDesc: "Identify and eradicate generational curses and black magic to restore an impenetrable aura of spiritual protection. If you are experiencing unexplained failures or a streak of bad luck, our powerful cleansing rituals will banish dark forces and surround you with pure, positive energy."
  }
];

const HeroServices = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeService = services[active];

  return (
    <section className="relative w-full overflow-hidden bg-[var(--background)] pt-6 pb-16 lg:pt-8 lg:pb-24">
      {/* Immersive Background (Image-less) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[var(--background)]"></div>
          {/* Sweeping atmospheric gradient based on active service color */}
          <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-30`}></div>
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--background)]/50 to-[var(--background)]"></div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Orbs (Parallax effect) */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--color-mystic-accent)]/10 blur-[100px] pointer-events-none z-10"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-[var(--color-mystic-emerald)]/10 blur-[120px] pointer-events-none z-10"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Massive Typography */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-[var(--color-mystic-accent)] uppercase tracking-[0.3em] text-sm font-semibold mb-6"
          >
            <Sparkles size={16} />
            <span>Master Astrologer & Psychic</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] tracking-tight mb-8">
                {activeService.heroHeading} <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeService.color}`}>
                  {activeService.heroHighlight}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--foreground)] opacity-80 max-w-xl font-light leading-relaxed mb-10">
                {activeService.heroDesc}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 md:gap-6 mt-4"
          >
            <a aria-label="WhatsApp" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-mystic-emerald)]/10 text-[var(--color-mystic-emerald)] border border-[var(--color-mystic-emerald)]/30 hover:bg-[var(--color-mystic-emerald)] hover:text-white transition-all duration-300">
              <MessageCircle size={24} />
            </a>
            
            <a aria-label="Call" href="tel:+1234567890" className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-mystic-accent)]/10 text-[var(--color-mystic-accent)] border border-[var(--color-mystic-accent)]/30 hover:bg-[var(--color-mystic-accent)] hover:text-[#0a0f1d] transition-all duration-300">
              <PhoneCall size={24} />
            </a>

            <Link 
              to="/contact" 
              className="group relative px-8 py-4 bg-[var(--color-mystic-accent)] text-[var(--background)] font-bold uppercase tracking-widest text-sm overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                Consult Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Asymmetrical Floating Services List */}
        <div className="w-full lg:w-2/5 mt-16 lg:mt-0 flex flex-col gap-4 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-[-40px] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[var(--color-mystic-accent)]/30 to-transparent"></div>

          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                onClick={() => setActive(index)}
                style={{
                  backgroundImage: isActive 
                    ? (service.id === '01' ? `url('/images/ChatGPT%20Image%20Aug%205,%202026,%2008_38_59%20PM.png')` 
                      : service.id === '02' ? `url('/images/591027151143919607.jpg')`
                      : service.id === '03' ? `url('/images/Arquivos%20sofrimento%20-%20Blog%20Consult%C3%B3rio%20Sentimental.jpg')`
                      : `url('/images/Astrological%20card%20sun%20and%20moon%20discord%20banner%20aesthetic%20witch.jpg')`)
                    : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                className={`relative text-left p-6 flex items-center gap-6 transition-all duration-500 overflow-hidden group rounded-2xl ${
                  isActive 
                    ? 'scale-105 ml-[-20px] shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-[var(--color-mystic-accent)]/50' 
                    : 'hover:ml-[-10px] opacity-60 hover:opacity-100 border border-transparent'
                }`}
              >
                {/* Background Highlight */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-[var(--color-mystic-accent)]/20 to-transparent mix-blend-overlay opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                }`}></div>

                {/* Number */}
                <div className={`font-heading text-3xl md:text-4xl transition-colors duration-500 z-10 ${
                  isActive ? 'text-[var(--color-mystic-accent)]' : 'text-[var(--foreground)]/30'
                }`}>
                  {service.id}
                </div>

                {/* Content */}
                <div className="z-10">
                  <h3 className={`text-lg md:text-xl font-bold uppercase tracking-widest mb-1 transition-colors duration-500 ${
                    isActive ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--color-mystic-accent)] opacity-80 tracking-wide">
                    {service.subtitle}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
