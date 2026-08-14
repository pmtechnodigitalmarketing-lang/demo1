import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <a aria-label="Email Us" 
        href="mailto:panditrudradev01@gmail.com" 
        className="fixed bottom-6 left-6 md:static w-14 h-14 flex items-center justify-center bg-[var(--color-terracotta)] text-[var(--background)] rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <Mail size={24} />
      </a>

      <a aria-label="Call Now" 
        href="tel:+14165550198" 
        className="w-14 h-14 flex items-center justify-center bg-[var(--color-sand)] text-[var(--foreground)] border border-[var(--color-terracotta)]/30 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <Phone size={24} />
      </a>
      
      <a aria-label="WhatsApp" 
        href="https://wa.me/14165550198" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 flex items-center justify-center bg-[var(--color-deep-brown)] text-[#FFFFFF] rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
