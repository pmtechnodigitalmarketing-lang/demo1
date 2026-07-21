import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Confidential Consultation",
    desc: "Book a private session. We provide a 100% judgment-free, secure space for you to share your deepest struggles and heartbreak.",
    icon: <PhoneCall size={28} className="text-[var(--color-aurora-purple)]" />
  },
  {
    num: "02",
    title: "Cosmic Analysis",
    desc: "Pandit Rudradev analyzes your exact birth chart and current planetary transits to pinpoint the root cause of the energetic blockages.",
    icon: <Sparkles size={28} className="text-[var(--foreground)]" />
  },
  {
    num: "03",
    title: "Powerful Remedies",
    desc: "Receive customized, highly potent Vedic remedies and spiritual interventions designed to deliver immediate, undeniable results.",
    icon: <ShieldCheck size={28} className="text-[var(--color-aurora-green)]" />
  }
];

const Process = () => {
  return (
    <section className="py-12 lg:py-24 px-6 md:px-12 lg:px-24 relative z-10 bg-[#6366f1]/20 border-y border-[var(--color-brand-yellow)]/10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Our Path to <br className="hidden lg:block"/>
              <span className="text-[var(--color-aurora-green)]">Your Peace</span>
            </h2>
            <p className="text-[var(--foreground)] max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed">
              We understand that reaching out can be intimidating. Our process is designed to be completely transparent, highly secure, and focused entirely on getting you the results you need.
            </p>
          </div>

          {/* Right Steps */}
          <div className="flex-[1.5] w-full">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  {/* Icon Node */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[var(--color-brand-yellow)]/10 bg-[var(--background)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                    <div className="absolute inset-0 bg-[var(--color-brand-yellow)]/10 rounded-full animate-ping opacity-20"></div>
                    {step.icon}
                  </div>
                  
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] glass-card p-6 rounded-2xl border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-yellow)]/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-black text-[var(--foreground)]/10">{step.num}</span>
                      <h3 className="text-xl font-bold text-[var(--foreground)]">{step.title}</h3>
                    </div>
                    <p className="text-[var(--foreground)] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
