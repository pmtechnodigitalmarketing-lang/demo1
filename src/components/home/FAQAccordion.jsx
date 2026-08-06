import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is my consultation completely confidential?",
      answer: "Absolutely. We adhere to a strict 100% confidentiality policy. Your personal information, readings, and discussions are kept entirely private and secure."
    },
    {
      question: "How does an online psychic reading work?",
      answer: "Online readings are just as effective as in-person ones. Using your birth details and energy connection over a phone call or video chat, Pandit Rudradev can access the same cosmic insights."
    },
    {
      question: "How soon can I expect results from the remedies?",
      answer: "Results vary depending on the complexity of your situation. However, many of our clients in Canada report feeling a positive shift in energy within the first few days of applying the Vedic remedies."
    },
    {
      question: "Do I need to be in Toronto to get a reading?",
      answer: "Not at all. While our center is based in Toronto, Pandit Rudradev provides consultations to clients all over Canada (Vancouver, Calgary, Montreal) and internationally via phone or WhatsApp."
    },
    {
      question: "What information do you need for a horoscope analysis?",
      answer: "For an accurate Vedic horoscope reading, we require your exact date of birth, time of birth, and place of birth. This allows us to map your precise planetary alignments."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-4 md:pt-8 pb-8 lg:pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-[var(--color-aurora-green)]">Questions</span></h2>
          <p className="text-[var(--foreground)]">Everything you need to know before booking your consultation.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button aria-label="Interactive Button" 
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <div className={`p-2 rounded-full transition-colors duration-300 shrink-0 ${activeIndex === index ? 'bg-[var(--color-aurora-green)] text-[#fafafa]' : 'bg-[var(--color-brand-yellow)]/10 text-[var(--foreground)]'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-[var(--foreground)] leading-relaxed border-t border-[var(--color-brand-yellow)]/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
