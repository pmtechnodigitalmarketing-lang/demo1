import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, Users, Clock, Shield, Phone, MessageCircle, Star,
  ArrowRight, ChevronDown, Sparkles, Activity, Lock, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { value: "25+", label: "Years of Mastery" },
    { value: "10k+", label: "Lives Transformed" },
    { value: "15+", label: "Global Accolades" },
    { value: "100%", label: "Absolute Privacy" }
  ];

  const processSteps = [
    {
      id: "01",
      icon: <Eye size={32} />,
      title: "Deep Energy Assessment",
      desc: "We don't just look at surface-level symptoms. Using advanced Vedic astrology and aura reading, we map the exact cosmic blockages causing your distress."
    },
    {
      id: "02",
      icon: <Activity size={32} />,
      title: "Targeted Interventions",
      desc: "No generic advice. You receive precise, powerful rituals and remedies designed specifically to alter your planetary alignments and shift your reality."
    },
    {
      id: "03",
      icon: <Lock size={32} />,
      title: "Continuous Protection",
      desc: "Healing is just the beginning. We implement permanent energetic shields to ensure that negative forces, black magic, or toxic influences never return."
    }
  ];

  const testimonials = [
    {
      name: "Isabella Martinez",
      location: "Toronto, ON",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      text: "I was struggling with severe anxiety and career stagnation. Pandit Rudradev's aura cleansing completely shifted my energy. I got a promotion within two months!",
      rating: 5
    },
    {
      name: "Rajesh K.",
      location: "Vancouver, BC",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      text: "The Voodoo removal rituals saved my family from continuous misfortune. We can finally sleep peacefully knowing we are spiritually protected.",
      rating: 5
    }
  ];

  return (
    <div className="w-full bg-[var(--background)] min-h-screen">

      {/* 1. Immersive Hero Section */}
      <section className="relative w-full h-auto pb-0 md:pb-12 lg:pb-16 flex flex-col justify-start pt-8 md:pt-12 overflow-hidden">
        {/* Background Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/632474341480103293.webp"
            alt="Pandit Rudradev"
            className="w-full h-full object-cover object-top opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-[var(--color-mystic-accent)] tracking-[0.3em] uppercase text-sm mb-6 font-semibold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[var(--color-mystic-accent)]"></span>
              The Master Healer
              <span className="w-12 h-[1px] bg-[var(--color-mystic-accent)]"></span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-tight mb-8">
              Pandit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mystic-accent)] to-amber-200">Rudradev</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--foreground)] opacity-80 font-light max-w-4xl mx-auto leading-relaxed">
              Deciphering the cosmic code for over 25 years. Guiding souls from darkness into profound clarity. Specializing in Vedic interventions that remove severe blockages, restoring permanent peace and prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Journey - Sticky Editorial Layout */}
      <section className="pt-4 pb-24 px-6 md:px-12 lg:px-24 lg:pt-8 relative z-10 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-18 lg:gap-24">

            {/* Left: Sticky Title */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
                The Path to <br />
                <span className="text-[var(--color-mystic-accent)]">Enlightenment</span>
              </h2>
              <p className="text-lg opacity-70 font-light leading-relaxed">
                A life dedicated to the ancient sciences of the Vedas, translating celestial alignments into tangible human success.
              </p>

              {/* Dynamic Rotating Golden Seal */}
              <div className="mt-16 hidden lg:flex items-center justify-start">
                <div className="relative w-56 h-56 flex items-center justify-center">
                  {/* Central Glow & Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 text-[var(--color-mystic-accent)]">
                    <div className="absolute w-20 h-20 bg-[var(--color-mystic-accent)]/10 rounded-full blur-xl"></div>
                    <Star size={48} className="opacity-90" />
                  </div>

                  {/* Rotating Text SVG */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute inset-0 w-full h-full text-[var(--color-mystic-accent)] opacity-70"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <path
                        id="circlePath"
                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="transparent"
                      />
                      <text className="text-[10px] font-bold tracking-[0.2em] uppercase fill-current font-heading">
                        <textPath href="#circlePath" startOffset="0%">
                          • PANDIT RUDRADEV • SPIRITUAL HEALER
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right: Scrolling Biography */}
            <div className="w-full lg:w-2/3 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-xl md:text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[var(--color-mystic-accent)] pl-8"
              >
                "Hailing from a long, unbroken lineage of traditional Vedic astrologers, Pandit Rudradev has spent decades mastering the subtle energies that dictate our reality."
              </motion.div>

              <div className="space-y-8 text-lg font-light opacity-80 leading-relaxed">
                <p>
                  Based in Canada, he serves as a bridge between ancient Eastern spiritual wisdom and the complex, fast-paced challenges of modern life. His approach is not about generic horoscopes; it is about surgical spiritual intervention.
                </p>
                <p>
                  Whether you are facing inexplicable business failures, toxic relationship cycles, or the heavy burden of generational curses and black magic, Pandit Rudradev approaches each case with profound compassion and unmatched expertise.
                </p>
              </div>

              {/* In-line Image / Visual Break */}
              <div className="w-full aspect-[4/5] md:aspect-[4/3] rounded-3xl overflow-hidden relative group mt-12 mb-0 md:my-12 border border-[var(--color-mystic-accent)]/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80 z-10 transition-opacity duration-700 group-hover:opacity-40"></div>
                <img
                  src="/images/load_shiva.jpg"
                  alt="Lord Shiva"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. The Cosmic Impact (Stats) */}
      <section className="pt-0 pb-24 lg:pt-0 relative overflow-hidden bg-[var(--color-mystic-secondary)]/30 border-y border-[var(--color-mystic-accent)]/10">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-[var(--color-mystic-accent)]/20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center px-4"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-black font-heading text-[var(--color-mystic-accent)] mb-4 text-glow">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base uppercase tracking-[0.2em] opacity-80 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Methodology (New Section) */}
      <section className="pt-8 pb-24 px-6 md:px-12 lg:px-24 lg:pt-12 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our <span className="text-[var(--color-mystic-accent)]">Methodology</span></h2>
            <p className="text-lg opacity-70 font-light max-w-2xl mx-auto">
              We do not rely on guesswork. Every intervention is backed by precise Vedic calculations and powerful energetic shielding.
            </p>
          </div>

          <div className="space-y-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-[3.5rem] top-10 bottom-10 w-[2px] bg-gradient-to-b from-[var(--color-mystic-accent)] via-[var(--color-mystic-accent)]/50 to-transparent"></div>

            {processSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative z-10"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 md:w-28 md:h-28 shrink-0 rounded-full bg-[var(--background)] border border-[var(--color-mystic-accent)] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.15)] text-[var(--color-mystic-accent)]">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-6">
                  <div className="text-[var(--color-mystic-accent)] font-heading font-bold text-xl mb-2">Phase {step.id}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg opacity-80 font-light leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Seamless Testimonials */}
      <section className="pt-0 pb-24 lg:pt-0 bg-gradient-to-b from-transparent to-[var(--color-mystic-secondary)]/50 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16">Words of <span className="text-[var(--color-mystic-accent)]">Transformation</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[var(--background)]/80 backdrop-blur-sm border border-white/5 p-0 rounded-[2rem] text-left hover:border-[var(--color-mystic-accent)]/30 transition-colors duration-500"
              >
                <div className="flex gap-1 mb-6 text-[var(--color-mystic-accent)]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg opacity-90 italic mb-8 font-light leading-relaxed">
                  "{test.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full border border-[var(--color-mystic-accent)]/50" />
                  <div>
                    <h4 className="font-bold">{test.name}</h4>
                    <span className="text-sm opacity-60 uppercase tracking-widest">{test.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dramatic Final CTA */}
      <section className="pt-12 pb-32 lg:pt-16 lg:pb-32 px-6 relative overflow-hidden flex items-center justify-center">
        {/* Deep Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-mystic-accent)]/20 via-[var(--background)] to-[var(--background)]"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-8">
            Your Future is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mystic-accent)] to-amber-200">Not Fixed.</span>
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-80 mb-12">
            Take control of your destiny today. Book a private, confidential consultation and step into the light of clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-mystic-accent)] text-[#0a0f1d] font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 rounded-full"
            >
              Book Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+14165550198"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border border-[var(--color-mystic-accent)] text-[var(--color-mystic-accent)] font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-mystic-accent)]/10 transition-colors duration-300 rounded-full"
            >
              <Phone size={18} /> Call Directly
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
