import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, HeartPulse, ShieldAlert, Briefcase, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { 
    title: "Love Solutions", 
    desc: "When matters of the heart cannot wait, our powerful Vedic remedies resolve severe relationship crises.", 
    color: "from-[var(--color-brand-red)] to-[var(--color-brand-red)]",
    image: "/images/Reconnect & Co-Regulate_ Science-Based Tools for NYC Families.webp",
    span: "md:col-span-2 md:row-span-2",
    icon: <HeartPulse size={48} className="text-[var(--foreground)]/30" />,
    isLarge: true
  },
  { 
    title: "Black Magic", 
    desc: "Identify and destroy dark energies and generational curses.", 
    color: "from-[#6366f1] to-black",
    image: "/images/black_magic.webp",
    span: "md:col-span-1 md:row-span-2",
    icon: <ShieldAlert size={36} className="text-[var(--foreground)]/30" />,
    isLarge: false
  },
  { 
    title: "Palm Reading", 
    desc: "Discover what the lines on your hands reveal.", 
    color: "from-[#6366f1] to-[#18181b]",
    image: "/images/palmistry.webp",
    span: "md:col-span-1 md:row-span-1",
    isLarge: false
  },
  { 
    title: "Face Reading", 
    desc: "Ancient facial analysis.", 
    color: "from-[#6366f1] to-[#18181b]",
    image: "/images/Why Many Trust Facial Reading Astrology Services For Daily Guidance.webp",
    span: "md:col-span-1 md:row-span-1",
    isLarge: false
  },
  { 
    title: "Bring Ex Back", 
    desc: "Remove external interferences and permanently reunite with your lost love.", 
    color: "from-[#6366f1] to-[#18181b]",
    image: "/images/3-months-rule-breakup.webp",
    span: "md:col-span-2 md:row-span-1",
    icon: <Sparkles size={32} className="text-[var(--foreground)]/30" />,
    isLarge: false
  },
  { 
    title: "Evil Eye", 
    desc: "Protect against jealousy.", 
    color: "from-[#6366f1] to-[#18181b]",
    image: "/images/demon_forces.webp",
    span: "md:col-span-1 md:row-span-1",
    isLarge: false
  },
  { 
    title: "Family Peace", 
    desc: "Resolve toxic misunderstandings.", 
    color: "from-[#6366f1] to-[#18181b]",
    image: "/images/family.webp",
    span: "md:col-span-1 md:row-span-1",
    isLarge: false
  },
  { 
    title: "Court Cases", 
    desc: "Gain spiritual favor in legal matters.", 
    color: "from-[#6366f1] to-[#18181b]",
    image: "/images/toxic-marriage-signs.webp",
    span: "md:col-span-1 md:row-span-1",
    isLarge: false
  },
  { 
    title: "Business Success", 
    desc: "Overcome financial hurdles and attract long-term prosperity.", 
    color: "from-[#6366f1] to-[#18181b]",
    image: "/images/career-astrology-reading.webp",
    span: "md:col-span-2 md:row-span-1",
    icon: <Briefcase size={32} className="text-[var(--foreground)]/30" />,
    isLarge: false
  },
  { 
    title: "Health Issues", 
    desc: "Remedies for chronic illnesses.", 
    color: "from-[#6366f1] to-[#18181b]",
    image: "/images/negative_energy.webp",
    span: "md:col-span-1 md:row-span-1",
    isLarge: false
  }
];

const ServicesShowcase = () => {
  return (
    <section className="pt-8 pb-12 lg:pb-32 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="container mx-auto max-w-[85rem]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Curated <span className="text-[var(--color-aurora-green)]">Excellence</span>
            </h2>
            <p className="text-[var(--foreground)] max-w-2xl text-lg font-light">
              A meticulously selected suite of our most powerful and transformative spiritual services, designed for those who demand immediate results.
            </p>
          </div>
          <Link 
            to="/services"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[var(--color-brand-yellow)]/10 text-[var(--foreground)] font-bold uppercase tracking-wider text-sm hover:bg-[var(--color-brand-yellow)]/10 transition-colors duration-300 whitespace-nowrap"
          >
            View All 20+ Services
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-6 auto-rows-[200px] md:auto-rows-[minmax(0,_1fr)] md:aspect-[16/10]">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-[2rem] p-8 flex flex-col justify-end cursor-pointer border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-yellow)]/10 transition-all duration-500 ${service.span} bg-[#09090b]`}
            >
              {/* Background Image & Effects */}
              <img loading="lazy" src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700" />
              
              {/* Subtle Dark overlay for text readability, removing heavy color effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700 z-10"></div>

              {/* Icon / Decor */}
              {service.icon && (
                <div className="absolute top-8 right-8 z-20 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:text-[var(--foreground)]">
                  {service.icon}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className={`${service.isLarge ? 'text-4xl md:text-5xl mb-4' : 'text-2xl mb-2'} font-bold text-[var(--foreground)] tracking-tight`}>
                  {service.title}
                </h3>
                <p className={`text-[var(--foreground)] font-light ${service.isLarge ? 'text-lg max-w-md' : 'text-sm max-w-[200px] md:max-w-xs line-clamp-2'} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}>
                  {service.desc}
                </p>
                
                {/* Hidden Consult Now link that reveals on hover */}
                <div className="overflow-hidden mt-4 h-0 group-hover:h-8 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--foreground)]">
                    Consult Now <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesShowcase;
