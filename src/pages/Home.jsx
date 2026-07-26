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
      <section className="py-12 lg:py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-aurora-purple)] rounded-full filter blur-[100px] opacity-20"></div>
            
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Pandit Rudradev?</h2>
              <p className="text-[var(--foreground)] mb-6 text-lg leading-relaxed">
                With over 25 years of experience in Vedic Astrology and spiritual healing, Pandit Rudradev has helped thousands across Canada find peace, love, and success. His unique approach combines ancient wisdom with modern empathy.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3"><Star className="text-[var(--color-aurora-green)]" size={20} /> <span>100% Confidential Readings</span></li>
                <li className="flex items-center gap-3"><Star className="text-[var(--color-aurora-green)]" size={20} /> <span>Immediate & Effective Solutions</span></li>
                <li className="flex items-center gap-3"><Star className="text-[var(--color-aurora-green)]" size={20} /> <span>Serving Toronto, Vancouver & all of Canada</span></li>
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-brand-green)]">
                  Learn More About Pandit Rudradev
                </Link>
                
                <a aria-label="Navigation Link" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-brand-green)] text-[var(--foreground)] font-semibold hover:bg-[var(--color-brand-green)] transition-colors shadow-[0_0_15px_rgba(99, 102, 241, 0.3)]">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

                <div className="flex items-center gap-3 md:ml-2">
                  <a aria-label="Navigation Link" href="#" className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-[var(--color-brand-yellow)]/10 transition-colors text-[var(--foreground)] hover:text-[var(--foreground)]">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a aria-label="Navigation Link" href="#" className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-[var(--color-brand-yellow)]/10 transition-colors text-[var(--foreground)] hover:text-[var(--foreground)]">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a aria-label="Navigation Link" href="#" className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-[var(--color-brand-yellow)]/10 transition-colors text-[var(--foreground)] hover:text-[var(--foreground)]">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:flex-1 relative">
              <div className="aspect-square rounded-3xl glass overflow-hidden flex items-center justify-center relative group">
                <img fetchpriority="high" src="/images/Shiva parvathi I hd Shiva parvathi wallpaper.webp" alt="Pandit Rudradev" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-aurora-purple)]/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              </div>
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
