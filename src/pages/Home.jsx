import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Moon, Sun, Compass, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroServices from '../components/home/HeroServices';
import Symptoms from '../components/home/Symptoms';
import Process from '../components/home/Process';
import Authority from '../components/home/Authority';
import ServicesShowcase from '../components/home/ServicesShowcase';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import FAQAccordion from '../components/home/FAQAccordion';
import InfiniteMarquee from '../components/ui/InfiniteMarquee';
import CanadianLocations from '../components/home/CanadianLocations';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
  }, []);

  return (
    <div className="w-full">
      <HeroServices />

      <InfiniteMarquee />

      {/* Helpful Sections */}
      <Symptoms />
      <Process />
      <Authority />

      <ServicesShowcase />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Locations Showcase */}
      <CanadianLocations />

      {/* About CTA Section */}
      <section className="pt-12 pb-6 md:pb-24 lg:pt-16 lg:pb-32 px-6 relative z-10 overflow-hidden bg-[var(--background)]">
        {/* Background Massive Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
          <h2 className="text-[10rem] md:text-[20rem] font-black font-heading leading-none whitespace-nowrap">
            R U D R A D E V
          </h2>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-0">
            
            {/* Left: Masked Image & Floating Elements */}
            <div className="w-full lg:w-1/2 relative min-h-[350px] md:min-h-[500px] lg:min-h-[700px] flex justify-center items-center">
              {/* Decorative Arch Mask Container */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-md aspect-[3/4] overflow-hidden"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagon mask
                  WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              >
                <div className="absolute inset-0 bg-[var(--color-mystic-accent)]/20 z-10 pointer-events-none mix-blend-overlay"></div>
                <img 
                  fetchpriority="high" 
                  src="/images/Shiva parvathi I hd Shiva parvathi wallpaper.webp" 
                  alt="Pandit Rudradev" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000 opacity-90" 
                />
              </motion.div>

              {/* Floating Stars */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute top-10 left-10 text-[var(--color-mystic-accent)] opacity-50"
              >
                <Star size={40} />
              </motion.div>
              <motion.div 
                animate={{ rotate: -360, y: [0, 20, 0] }}
                transition={{ rotate: { repeat: Infinity, duration: 25, ease: "linear" }, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
                className="absolute bottom-20 right-10 text-[var(--color-mystic-emerald)] opacity-50"
              >
                <Moon size={60} />
              </motion.div>
            </div>
            
            {/* Right: Editorial Typography */}
            <div className="w-full lg:w-1/2 lg:-ml-20 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-[var(--color-mystic-secondary)]/80 backdrop-blur-2xl p-10 md:p-16 border-l-4 border-[var(--color-mystic-accent)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[var(--foreground)] tracking-tight font-heading leading-tight">
                  Guidance Beyond <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mystic-accent)] to-amber-200">The Physical Realm</span>
                </h2>
                
                <p className="text-[var(--foreground)] mb-8 text-lg leading-relaxed opacity-80 font-light">
                  With over 25 years of profound experience in Vedic Astrology and spiritual healing, Pandit Rudradev acts as a conduit between you and the cosmic energies. His approach doesn't just treat symptoms; it annihilates the root cause of your life's blockages.
                </p>
                
                <ul className="flex flex-col gap-6 mb-12">
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--color-mystic-accent)] mt-1"><Compass size={24} /></span>
                    <div>
                      <h4 className="text-xl font-bold font-heading mb-1 text-[var(--foreground)]">Absolute Confidentiality</h4>
                      <p className="text-sm opacity-70">A judgment-free sanctuary for your deepest concerns.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--color-mystic-emerald)] mt-1"><Sun size={24} /></span>
                    <div>
                      <h4 className="text-xl font-bold font-heading mb-1 text-[var(--foreground)]">Immediate Interventions</h4>
                      <p className="text-sm opacity-70">Powerful rituals that demand rapid cosmic shifts.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="flex flex-wrap items-center gap-6">
                  <Link to="/about" className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent text-[var(--color-mystic-accent)] border border-[var(--color-mystic-accent)]/50 font-bold uppercase tracking-widest text-sm overflow-hidden hover:border-[var(--color-mystic-accent)] transition-colors">
                    <span className="relative z-10">Discover The Journey</span>
                    <div className="absolute inset-0 bg-[var(--color-mystic-accent)]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                  </Link>
                  
                  <a aria-label="Navigation Link" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--color-mystic-emerald)] transition-colors tracking-wide font-semibold">
                    <MessageCircle size={20} />
                    Direct WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion />
    </div>
  );
};

export default Home;
