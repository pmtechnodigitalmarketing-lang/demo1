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
      className={`fixed top-[32px] w-full z-50 transition-all duration-300 ${scrolled ? 'py-2.5 md:py-3 glass shadow-lg' : 'py-3 md:py-4 bg-[#070312]/92 backdrop-blur-md border-b border-[var(--color-space-cyan)]/20 shadow-md'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group relative z-10">
          <img 
            src="/images/logo.png" 
            alt="Pandit Rudradev Logo" 
            className="h-20 md:h-24 w-auto -my-1.5 md:-my-2.5 transition-all duration-300 group-hover:scale-105" 
            style={{ 
              filter: 'brightness(1.65) contrast(1.12) drop-shadow(0 0 18px rgba(255, 215, 0, 0.65)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))' 
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 md:gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs md:text-sm uppercase tracking-wider hover:text-[var(--color-space-cyan)] transition-colors relative group font-semibold ${location.pathname === link.path ? 'text-[var(--color-space-cyan)]' : 'text-white'
                }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[var(--color-space-cyan)]"
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 md:px-6 py-2 rounded-full border border-[var(--color-space-cyan)] text-[var(--color-space-cyan)] hover:bg-[var(--color-space-cyan)] hover:text-[var(--background)] transition-all font-semibold uppercase tracking-wider text-xs"
          >
            Book Reading
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
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
            className="absolute top-full left-0 w-full bg-[var(--color-space-dark)]/95 backdrop-blur-xl grid grid-cols-2 p-6 gap-4 md:hidden border-t border-[var(--color-space-cyan)]/20 rounded-b-3xl shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${location.pathname === link.path
                    ? 'bg-[var(--color-space-cyan)]/10 border-[var(--color-space-cyan)]/30 text-[var(--color-space-cyan)] shadow-[0_0_15px_rgba(157, 78, 221, 0.1)]'
                    : 'bg-black/5 border-[var(--color-space-cyan)]/10 text-white hover:bg-black/10'
                  }`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest mt-1 text-white drop-shadow-md">{link.name}</span>
              </Link>
            ))}

            {/* Quick Contact Action Icons with Superb Animations */}
            <div className="col-span-2 flex justify-center gap-6 mt-4 mb-2">
              <motion.a
                href="tel:+14169980146"
                className="w-14 h-14 rounded-full bg-black/5 border border-[var(--color-space-cyan)]/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(157, 78, 221, 0.15)] relative"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-full border border-[var(--color-space-cyan)] opacity-0 animate-ping" style={{ animationDuration: '3s' }}></div>
                <Phone size={24} />
              </motion.a>

              <motion.a
                href="https://wa.me/14169980146"
                target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black/5 border border-[var(--color-space-light)]/40 flex items-center justify-center text-white shadow-[0_0_15px_rgba(69, 243, 255, 0.15)] relative"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="absolute inset-0 rounded-full border border-[var(--color-space-light)] opacity-0 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                <MessageCircle size={24} />
              </motion.a>

              <motion.a
                href="/locations"
                onClick={() => setIsOpen(false)}
                className="w-14 h-14 rounded-full bg-black/5 border border-[var(--color-space-cyan)]/30 flex items-center justify-center text-[var(--color-space-cyan)] shadow-[0_0_15px_rgba(157, 78, 221, 0.15)] relative"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.6 }}
              >
                <div className="absolute inset-0 rounded-full border border-[var(--color-space-cyan)] opacity-0 animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }}></div>
                <MapPin size={24} />
              </motion.a>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="col-span-2 flex items-center justify-center p-4 mt-2 rounded-2xl bg-[var(--color-space-purple)] text-white font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(69, 243, 255, 0.3)]"
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
