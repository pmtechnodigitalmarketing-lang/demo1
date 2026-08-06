import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Phone, MessageCircle, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <header 
      className={`fixed top-[48px] w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/images/PR Logo2.png" alt="Pandit Rudradev Logo" className="h-14 md:h-20 w-auto mt-0 md:-mt-2 group-hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 md:gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-widest hover:text-[var(--color-mystic-accent)] transition-colors relative group font-semibold ${
                location.pathname === link.path ? 'text-[var(--color-mystic-accent)]' : 'text-[var(--foreground)]'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-mystic-accent)]"
                />
              )}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="ml-4 px-6 py-2 rounded-full border border-[var(--color-mystic-accent)] text-[var(--color-mystic-accent)] hover:bg-[var(--color-mystic-accent)] hover:text-[var(--background)] transition-all font-semibold uppercase tracking-widest text-sm"
          >
            Book Reading
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--foreground)]"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--background)] grid grid-cols-2 p-6 gap-4 md:hidden border-t border-[var(--color-mystic-accent)]/20 rounded-b-3xl shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'bg-[var(--color-mystic-accent)]/10 border-[var(--color-mystic-accent)]/30 text-[var(--color-mystic-accent)] shadow-[0_0_15px_rgba(212,175,55,0.1)]' 
                    : 'bg-black/5 border-[var(--color-mystic-accent)]/10 text-[var(--foreground)] hover:bg-black/10'
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest mt-1">{link.name}</span>
              </Link>
            ))}
            
            {/* Quick Contact Action Icons with Superb Animations */}
            <div className="col-span-2 flex justify-center gap-6 mt-4 mb-2">
              <motion.a 
                href="tel:+1234567890" 
                className="w-14 h-14 rounded-full bg-black/5 border border-[var(--color-mystic-accent)]/30 flex items-center justify-center text-[var(--foreground)] shadow-[0_0_15px_rgba(212,175,55,0.15)] relative"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-full border border-[var(--color-mystic-accent)] opacity-0 animate-ping" style={{ animationDuration: '3s' }}></div>
                <Phone size={24} />
              </motion.a>
              
              <motion.a 
                href="https://wa.me/1234567890" 
                target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black/5 border border-[var(--color-mystic-emerald)]/40 flex items-center justify-center text-[var(--foreground)] shadow-[0_0_15px_rgba(15,90,62,0.15)] relative"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="absolute inset-0 rounded-full border border-[var(--color-mystic-emerald)] opacity-0 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                <MessageCircle size={24} />
              </motion.a>
              
              <motion.a 
                href="/locations" 
                onClick={() => setIsOpen(false)}
                className="w-14 h-14 rounded-full bg-black/5 border border-[var(--color-mystic-accent)]/30 flex items-center justify-center text-[var(--color-mystic-accent)] shadow-[0_0_15px_rgba(212,175,55,0.15)] relative"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.6 }}
              >
                <div className="absolute inset-0 rounded-full border border-[var(--color-mystic-accent)] opacity-0 animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }}></div>
                <MapPin size={24} />
              </motion.a>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="col-span-2 flex items-center justify-center p-4 mt-2 rounded-2xl bg-[var(--color-mystic-emerald)] text-white font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(15,90,62,0.3)]"
            >
              Book Reading
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
