import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-3"
          >
            <a aria-label="Navigation Link" 
              href="https://wa.me/14165550198" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 bg-[var(--color-mystic-emerald)] text-[var(--foreground)] px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <span className="font-semibold text-sm">WhatsApp</span>
              <MessageCircle size={20} />
            </a>
            
            <a aria-label="Navigation Link" 
              href="tel:+14165550198" 
              className="flex items-center gap-3 bg-[var(--color-mystic-secondary)] text-[var(--foreground)] px-4 py-3 border border-[var(--color-mystic-accent)]/30 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <span className="font-semibold text-sm">Call Now</span>
              <Phone size={20} />
            </a>
            
            <a aria-label="Navigation Link" 
              href="mailto:panditrudradev01@gmail.com" 
              className="flex items-center gap-3 bg-[var(--color-mystic-accent)] text-[var(--background)] px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <span className="font-semibold text-sm">Email Us</span>
              <Mail size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        aria-label="Open Contact Options"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-colors duration-300 ${
          isOpen ? 'bg-[var(--color-mystic-secondary)] text-[var(--foreground)] border border-[var(--color-mystic-accent)]' : 'bg-[var(--color-mystic-accent)] text-[var(--background)]'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
};

export default FloatingContact;
