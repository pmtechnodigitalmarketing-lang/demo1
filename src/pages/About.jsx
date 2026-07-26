import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Clock, Shield, Phone, MessageCircle, Star, ArrowRight, ChevronDown } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Clock />, value: "25+", label: "Years Experience" },
    { icon: <Users />, value: "10k+", label: "Happy Clients" },
    { icon: <Award />, value: "15+", label: "Global Awards" },
    { icon: <Shield />, value: "100%", label: "Confidentiality" }
  ];

  const testimonials = [
    {
      name: "Isabella Martinez",
      location: "Brampton, ON",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      text: "I was struggling with severe anxiety and career stagnation. Pandit Rudradev's aura cleansing completely shifted my energy. I got a promotion within two months!",
      rating: 5
    },
    {
      name: "Rajesh K.",
      location: "Surrey, BC",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      text: "The Voodoo removal rituals saved my family from continuous misfortune. We can finally sleep peacefully knowing we are spiritually protected.",
      rating: 5
    },
    {
      name: "Emily Thompson",
      location: "Victoria, BC",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      text: "His deep understanding of Vedic astrology is unmatched. The gemstone he recommended changed the trajectory of my business entirely.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What should I expect during my first consultation?",
      answer: "During your first session, Pandit Rudradev will analyze your birth chart (Kundli) and discuss your current life situations. He will provide insights into your past, present, and future, along with actionable remedies."
    },
    {
      question: "Are my sessions and details kept confidential?",
      answer: "Absolutely. We maintain 100% strict confidentiality. Your personal information, readings, and discussions are kept completely private and secure."
    },
    {
      question: "Can I do a consultation over phone or video call?",
      answer: "Yes! We offer both in-person consultations in Canada and virtual consultations (Phone/WhatsApp Video/Zoom) for clients globally."
    },
    {
      question: "How soon can I see results from the remedies?",
      answer: "Results vary depending on the complexity of your situation and how diligently you follow the remedies. Many clients report positive shifts within a few weeks."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full pt-20 pb-12 lg:pb-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center mb-12 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[4/5] rounded-3xl glass p-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-aurora-green)]/20 to-transparent mix-blend-overlay z-10"></div>
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img loading="lazy" src="/images/632474341480103293.webp" alt="Pandit Rudradev" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Journey of <span className="text-[var(--color-aurora-purple)]">Pandit Rudradev</span>
            </h1>
            <h3 className="text-xl text-[var(--color-aurora-green)] mb-6 font-semibold tracking-wide">
              Vedic Astrologer & Spiritual Healer in Canada
            </h3>
            
            <div className="space-y-6 text-[var(--foreground)] text-lg leading-relaxed font-light mb-8">
              <p>
                Hailing from a long lineage of traditional Vedic astrologers, Pandit Rudradev has dedicated his life to deciphering the cosmic code. His deep understanding of planetary movements and their impact on human lives has made him a trusted advisor to thousands.
              </p>
              <p>
                Based in Canada, he combines ancient Eastern wisdom with a modern understanding of the challenges faced in today's fast-paced world. Whether it's complex relationship dynamics, career stagnation, or unexplained spiritual blockages, Pandit Rudradev's remedies are highly effective and personalized.
              </p>
              <p>
                His compassionate approach ensures that every client leaves with clarity, hope, and a practical roadmap to overcome their obstacles.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a aria-label="Navigation Link" href="tel:+1234567890" className="flex items-center gap-2 bg-[var(--color-aurora-purple)] hover:bg-[var(--color-aurora-purple)]/80 text-[var(--foreground)] px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(99, 102, 241, 0.4)]">
                <Phone size={20} />
                Call Now
              </a>
              <a aria-label="Navigation Link" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] text-[var(--foreground)] px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(99, 102, 241, 0.4)]">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-flex p-4 rounded-full bg-[var(--color-brand-yellow)]/10 text-[var(--color-aurora-green)] mb-4">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-bold mb-2 text-[var(--foreground)]">{stat.value}</h4>
              <p className="text-[var(--foreground)] font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <div className="mt-16 lg:mt-32">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of <span className="text-[var(--color-aurora-purple)]">Transformation</span></h2>
            <p className="text-[var(--foreground)] max-w-2xl mx-auto">Real experiences from people who have found guidance, peace, and clarity through our sessions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-[var(--foreground)]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[var(--foreground)] mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                </div>
                <div className="border-t border-[var(--color-brand-yellow)]/10 pt-6 mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-aurora-purple)] shrink-0">
                    <img loading="lazy" src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--color-aurora-green)]">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 lg:mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-[var(--color-aurora-purple)]">Questions</span></h2>
            <p className="text-[var(--foreground)]">Everything you need to know about consulting with Pandit Rudradev.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`glass rounded-2xl transition-all duration-300 overflow-hidden ${openFaq === index ? 'border border-[var(--color-aurora-purple)]/50' : 'border border-transparent'}`}
              >
                <button aria-label="Interactive Button" 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-[var(--foreground)] pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`text-[var(--color-aurora-green)] transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-[var(--foreground)] font-light"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-32 relative rounded-3xl overflow-hidden glass p-6 md:p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-aurora-purple)]/20 to-[var(--color-aurora-green)]/20 mix-blend-overlay z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">Ready to Find Your Path?</h2>
            <p className="text-lg md:text-xl text-[var(--foreground)] mb-10 font-light">
              Don't let uncertainty hold you back. Book a private consultation with Pandit Rudradev and step into the light of clarity and purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a aria-label="Navigation Link" href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 bg-[var(--color-aurora-purple)] hover:bg-[var(--color-aurora-purple)]/80 text-[var(--foreground)] px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(99, 102, 241, 0.4)] hover:shadow-[0_0_30px_rgba(99, 102, 241, 0.6)]">
                Book Appointment <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
