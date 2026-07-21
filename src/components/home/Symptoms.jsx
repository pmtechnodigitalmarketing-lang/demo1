import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, HeartCrack, TrendingDown, EyeOff } from 'lucide-react';

const symptoms = [
  {
    icon: <HeartCrack size={32} className="text-[var(--foreground)]" />,
    question: "A sudden, heartbreaking disconnect with your partner?",
    desc: "Everything was perfect, and then suddenly, they pulled away for no logical reason.",
    color: "from-[var(--color-brand-red)] to-[var(--color-brand-red)]"
  },
  {
    icon: <TrendingDown size={32} className="text-[var(--foreground)]" />,
    question: "Constant, unexplainable bad luck in finance?",
    desc: "No matter how hard you work, money slips through your fingers and opportunities vanish at the last second.",
    color: "from-[var(--color-brand-yellow)] to-[var(--color-brand-orange)]"
  },
  {
    icon: <EyeOff size={32} className="text-[var(--foreground)]" />,
    question: "Feeling a heavy, dark energy surrounding you?",
    desc: "Waking up exhausted, feeling watched, or experiencing a constant state of unexplainable anxiety.",
    color: "from-white to-[#18181b]"
  },
  {
    icon: <AlertCircle size={32} className="text-[var(--foreground)]" />,
    question: "Generational cycles of failure?",
    desc: "Noticing that the same struggles that plagued your parents are now destroying your own life.",
    color: "from-[var(--color-brand-orange)] to-[var(--color-brand-red)]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Symptoms = () => {
  return (
    <section className="py-12 lg:py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Are You Experiencing <span className="text-[var(--color-aurora-purple)]">This?</span>
          </h2>
          <p className="text-[var(--foreground)] max-w-2xl mx-auto text-lg">
            You are not alone. These are the most common signs of severe astrological blockages and dark energy interference.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {symptoms.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-card p-8 rounded-[2rem] border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-yellow)]/10 transition-colors duration-300 relative group overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-50`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 bg-[#6366f1]/40 w-16 h-16 rounded-2xl flex items-center justify-center border border-[var(--color-brand-yellow)]/10 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 leading-tight">{item.question}</h3>
              <p className="text-[var(--foreground)] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Symptoms;
