import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lock, Users } from 'lucide-react';

const Authority = () => {
  return (
    <section className="py-12 lg:py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="glass p-6 md:p-10 md:p-16 rounded-[3rem] relative overflow-hidden border border-[var(--color-aurora-purple)]/30">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-full max-w-sm md:w-96 h-96 bg-[var(--color-aurora-purple)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-sm md:w-96 h-96 bg-[var(--color-aurora-green)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-10 md:mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-aurora-green)] to-[var(--color-aurora-purple)]">Pandit Rudradev?</span></h2>
            <p className="text-[var(--foreground)] max-w-2xl mx-auto text-lg">
              Choosing a spiritual guide is a critical decision. We combine decades of authentic lineage with a modern, secure approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative z-10">
            
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[var(--color-brand-yellow)]/10 rounded-full flex items-center justify-center mb-6 border border-[var(--color-brand-yellow)]/10 text-[var(--color-aurora-green)]">
                <Award size={36} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">25+ Years Experience</h3>
              <p className="text-[var(--foreground)] text-sm leading-relaxed">
                A master of ancient Vedic astrology with a proven track record of solving the most impossible cases across Canada and globally.
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[var(--color-brand-yellow)]/10 rounded-full flex items-center justify-center mb-6 border border-[var(--color-brand-yellow)]/10 text-[var(--foreground)]">
                <Lock size={36} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">100% Confidential</h3>
              <p className="text-[var(--foreground)] text-sm leading-relaxed">
                Your privacy is our highest priority. All readings, discussions, and personal details are kept strictly secure and confidential.
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[var(--color-brand-yellow)]/10 rounded-full flex items-center justify-center mb-6 border border-[var(--color-brand-yellow)]/10 text-[var(--color-aurora-purple)]">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">10k+ Lives Changed</h3>
              <p className="text-[var(--foreground)] text-sm leading-relaxed">
                Trusted by over 10,000 clients who have successfully reunited with loved ones, broken curses, and found financial success.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
