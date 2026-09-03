import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageCircle, PhoneCall, ShieldCheck, Heart, Zap, Eye, Compass, Flame, Users, Briefcase } from 'lucide-react';

const topTenServices = [
  {
    id: "bring-ex-back",
    num: "01",
    title: "Get Ex Love Back",
    tag: "Reunite Lovers",
    desc: "Ancient Vedic binding rituals to clear misunderstandings, neutralize external interference, and bring your partner back into your life permanently.",
    image: "/images/3-months-rule-breakup.webp",
    icon: <Heart size={20} className="text-pink-400" />,
    badgeColor: "border-pink-500/30 text-pink-300 bg-pink-500/10"
  },
  {
    id: "black-magic-removal",
    num: "02",
    title: "Black Magic Removal",
    tag: "Ultimate Protection",
    desc: "Identify and annihilate destructive curses, evil spirits, and generational hexes. Surround yourself with an impenetrable shield of spiritual protection.",
    image: "/images/black_magic.webp",
    icon: <ShieldCheck size={20} className="text-cyan-400" />,
    badgeColor: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10"
  },
  {
    id: "vashikaran-specialist",
    num: "03",
    title: "Vashikaran Specialist",
    tag: "Ethical Vedic Power",
    desc: "Harness positive, ethical Vedic attraction mantras to dissolve stubborn estrangement, heal strained relationships, and inspire heartfelt devotion.",
    image: "/images/vashikaran.webp",
    icon: <Flame size={20} className="text-amber-400" />,
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10"
  },
  {
    id: "love-solutions",
    num: "04",
    title: "Love & Marriage Solutions",
    tag: "Harmony & Passion",
    desc: "Resolve severe relationship crises, marital disputes, inter-caste hurdles, and infidelity concerns with profound Vedic planetary alignments.",
    image: "/images/Reconnect & Co-Regulate_ Science-Based Tools for NYC Families.webp",
    icon: <Sparkles size={20} className="text-purple-400" />,
    badgeColor: "border-purple-500/30 text-purple-300 bg-purple-500/10"
  },
  {
    id: "psychic-reading",
    num: "05",
    title: "Psychic & Clairvoyant Reading",
    tag: "Unveil Destiny",
    desc: "Deep intuitive psychic revelations into your past, present, and future timelines. Gain absolute clarity on life choices, love, and life purpose.",
    image: "/images/_Affordable Psychic Card Readings_.webp",
    icon: <Eye size={20} className="text-indigo-400" />,
    badgeColor: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10"
  },
  {
    id: "palmistry",
    num: "06",
    title: "Palmistry & Hand Reading",
    tag: "Cosmic Blueprint",
    desc: "Meticulous analysis of life, heart, and destiny lines on your hands to forecast health milestones, wealth accumulation, and karmic opportunities.",
    image: "/images/palmistry.webp",
    icon: <Compass size={20} className="text-emerald-400" />,
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10"
  },
  {
    id: "business-astrology",
    num: "07",
    title: "Business & Financial Growth",
    tag: "Wealth & Prosperity",
    desc: "Break chronic financial stagnation and overcome business losses through tailored astrological remedies that attract abundant wealth and luck.",
    image: "/images/career-astrology-reading.webp",
    icon: <Briefcase size={20} className="text-amber-400" />,
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10"
  },
  {
    id: "spiritual-healing",
    num: "08",
    title: "Spiritual Healing & Chakras",
    tag: "Inner Peace",
    desc: "Cleanse toxic energetic debris from your aura, align your 7 vital chakras, and release emotional heaviness for restored vitality and calmness.",
    image: "/images/serene-village-landscape.webp",
    icon: <Zap size={20} className="text-teal-400" />,
    badgeColor: "border-teal-500/30 text-teal-300 bg-teal-500/10"
  },
  {
    id: "jealousy-envy",
    num: "09",
    title: "Evil Eye & Jealousy Shield",
    tag: "Banish Ill-Will",
    desc: "Neutralize negative vibrations from jealous competitors and envious acquaintances (Buri Nazar) that are silently sabotaging your prosperity.",
    image: "/images/demon_forces.webp",
    icon: <ShieldCheck size={20} className="text-rose-400" />,
    badgeColor: "border-rose-500/30 text-rose-300 bg-rose-500/10"
  },
  {
    id: "family-disputes",
    num: "10",
    title: "Family & Property Disputes",
    tag: "Peaceful Resolution",
    desc: "Heal toxic domestic arguments, property conflicts, and family discord through ancient appeasements that bring lasting peace and mutual respect.",
    image: "/images/family.webp",
    icon: <Users size={20} className="text-sky-400" />,
    badgeColor: "border-sky-500/30 text-sky-300 bg-sky-500/10"
  }
];

const TopServicesGrid = () => {
  return (
    <section className="relative w-full pt-2 sm:pt-4 pb-8 sm:pb-10 px-3 sm:px-6 lg:px-8 bg-transparent overflow-hidden">

      <div className="container mx-auto max-w-[1850px] relative z-10 px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-space-cyan)]/10 border border-[var(--color-space-cyan)]/30 text-[var(--color-space-cyan)] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(69,243,255,0.2)]"
          >
            <Sparkles size={16} /> Top 10 Sacred Vedic Solutions
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-tight mb-4"
          >
            Powerful Interventions For <br />
            <span className="text-[var(--color-space-cyan)] drop-shadow-[0_0_12px_rgba(69,243,255,0.4)]">
              Life's Deepest Challenges
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto"
          >
            With over 25+ years of mastery, Pandit Rudradev provides fast, confidential, and proven spiritual remedies crafted to dismantle root causes and restore total harmony.
          </motion.p>
        </div>

        {/* 10 Services Grid (Wide & short cards in 5 * 2 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {topTenServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#0c0817]/95 border border-white/12 hover:border-[var(--color-space-cyan)]/70 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(69,243,255,0.28),0_12px_35px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
            >
              {/* Top Image Section (Clear, luminous image frame with glow on hover) */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/20 border-b border-white/10 group-hover:border-[var(--color-space-cyan)]/40 transition-colors">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-108 brightness-[1.12] contrast-[1.08] saturate-[1.15] group-hover:brightness-[1.25] group-hover:contrast-[1.12]"
                  loading="lazy"
                />
                
                {/* Luminous Cosmic Glow Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-space-cyan)]/25 via-transparent to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen" />
                
                {/* Subtle minimal bottom edge fade only (does not obscure artwork) */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#0c0817] to-transparent pointer-events-none" />
                
                {/* Top Floating Category Tag */}
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md border ${service.badgeColor} shadow-[0_0_12px_rgba(0,0,0,0.7)]`}>
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Card Content (Refined padding to reduce card length) */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-2 mb-2 text-white">
                    <span className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[var(--color-space-cyan)]/40 transition-colors mt-0.5">
                      {service.icon}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-[var(--color-space-cyan)] transition-colors leading-snug line-clamp-1">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-4 line-clamp-2">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Action Buttons: WhatsApp & Call Only */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/14169980146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-green-500/15 hover:bg-green-500 text-green-400 hover:text-white border border-green-500/30 font-semibold text-xs transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                    title="WhatsApp Consultation"
                    aria-label="WhatsApp Consultation"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                  
                  <a
                    href="tel:+14169980146"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[var(--color-space-cyan)]/15 hover:bg-[var(--color-space-cyan)] text-[var(--color-space-cyan)] hover:text-black border border-[var(--color-space-cyan)]/30 font-semibold text-xs transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(69,243,255,0.4)]"
                    title="Call Astrologer"
                    aria-label="Call Astrologer"
                  >
                    <PhoneCall size={14} />
                    <span>Call Now</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA: Explore All Services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[var(--color-space-cyan)] text-black font-bold uppercase tracking-widest text-sm overflow-hidden shadow-[0_0_25px_rgba(69,243,255,0.4)] hover:shadow-[0_0_35px_rgba(69,243,255,0.7)] transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore All 28+ Spiritual Services 
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-white border border-white/20 hover:border-[var(--color-space-cyan)] hover:text-[var(--color-space-cyan)] font-semibold uppercase tracking-widest text-sm transition-all duration-300"
          >
            Book 1-on-1 Consultation
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default TopServicesGrid;
