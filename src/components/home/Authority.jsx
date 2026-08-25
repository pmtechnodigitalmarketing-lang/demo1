import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lock, Users, Send } from 'lucide-react';

const Authority = () => {
  return (
    <section className="pt-2 md:pt-8 pb-8 lg:pt-12 lg:pb-8 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left: Why Trust Content */}
          <div className="w-full lg:w-7/12 glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden border border-[var(--color-space-gray)]/30">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-full max-w-sm md:w-96 h-96 bg-[var(--color-space-gray)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full max-w-sm md:w-96 h-96 bg-[var(--color-space-cyan)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="mb-12 relative z-10 text-left">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight text-white drop-shadow-md">
                Why Trust <span className="text-[var(--color-space-cyan)] drop-shadow-[0_0_8px_rgba(69,243,255,0.3)] text-white drop-shadow-md">Pandit Rudradev?</span>
              </h2>
              <p className="text-white drop-shadow-md max-w-xl text-lg font-light leading-relaxed">
                Choosing a spiritual guide is a critical decision. We combine decades of authentic lineage with a modern, secure approach.
              </p>
            </div>

            <div className="flex flex-col gap-10 relative z-10">
              
              <div className="flex items-start gap-6 group">
                <div className="shrink-0 w-16 h-16 bg-[var(--color-space-purple)]/5 rounded-2xl flex items-center justify-center border border-[var(--color-space-purple)]/10 text-[var(--color-space-cyan)] group-hover:scale-110 transition-transform duration-300">
                  <Award size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2">25+ Years Experience</h3>
                  <p className="text-white drop-shadow-md text-base leading-relaxed font-light">
                    A master of ancient Vedic astrology with a proven track record of solving the most impossible cases across Canada and globally.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="shrink-0 w-16 h-16 bg-[var(--color-space-purple)]/5 rounded-2xl flex items-center justify-center border border-[var(--color-space-purple)]/10 text-white group-hover:scale-110 transition-transform duration-300">
                  <Lock size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2">100% Confidential</h3>
                  <p className="text-white drop-shadow-md text-base leading-relaxed font-light">
                    Your privacy is our highest priority. All readings, discussions, and personal details are kept strictly secure and confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="shrink-0 w-16 h-16 bg-[var(--color-space-purple)]/5 rounded-2xl flex items-center justify-center border border-[var(--color-space-purple)]/10 text-[var(--color-space-light)] group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2">10k+ Lives Changed</h3>
                  <p className="text-white drop-shadow-md text-base leading-relaxed font-light">
                    Trusted by over 10,000 clients who have successfully reunited with loved ones, broken curses, and found financial success.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Quick Contact Form */}
          <div className="w-full lg:w-5/12 relative">
            <div className="sticky top-24 bg-gradient-to-b from-[var(--color-space-gray)]/40 to-[var(--background)]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-[var(--color-space-cyan)]/20 shadow-[0_0_50px_rgba(157, 78, 221, 0.05)]">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-space-cyan)]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="mb-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">
                  Request Immediate Help
                </h3>
                <p className="text-[var(--color-space-cyan)] text-sm uppercase tracking-widest font-semibold text-white drop-shadow-md">
                  100% Private & Confidential
                </p>
              </div>

              <form className="relative z-10 flex flex-col gap-5">
                <div>
                  <label htmlFor="auth-name" className="sr-only">Name</label>
                  <input 
                    type="text" 
                    id="auth-name"
                    placeholder="Your Name" 
                    className="w-full bg-transparent/50 border border-[var(--foreground)]/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-space-cyan)] transition-colors placeholder:text-white/30 font-light"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="auth-phone" className="sr-only">Phone Number</label>
                  <input 
                    type="tel" 
                    id="auth-phone"
                    placeholder="Phone Number (for WhatsApp/Call)" 
                    className="w-full bg-transparent/50 border border-[var(--foreground)]/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-space-cyan)] transition-colors placeholder:text-white/30 font-light"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="auth-problem" className="sr-only">Select your problem</label>
                  <select 
                    id="auth-problem"
                    className="w-full bg-transparent/50 border border-[var(--foreground)]/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-space-cyan)] transition-colors font-light appearance-none"
                    required
                  >
                    <option value="" disabled selected>Select Your Problem...</option>
                    <option value="love">Love & Relationship Issues</option>
                    <option value="ex">Bring Ex Back</option>
                    <option value="black-magic">Black Magic Removal</option>
                    <option value="finance">Career & Financial Struggles</option>
                    <option value="other">Other / Need General Guidance</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="mt-2 w-full group relative flex items-center justify-center gap-3 bg-[var(--color-space-cyan)] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(157, 78, 221, 0.4)]"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10 text-white drop-shadow-md">Send Request</span>
                  <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <p className="text-xs text-center text-white/40 mt-3">
                  Pandit Rudradev will review your request personally and contact you shortly.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Authority;
