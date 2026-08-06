import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Share2, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-[var(--color-mystic-accent)]/20 mt-20 pt-16 pb-8 bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center mb-6">
            <img src="/images/Pandit Rudradev - Logo.webp" alt="Pandit Rudradev Logo" className="h-16 w-auto" />
          </Link>
          <p className="text-[var(--foreground)] text-sm leading-relaxed mb-6 opacity-90">
            Guiding you through life's cosmic journey with authentic astrology and psychic readings in Canada.
          </p>
          <div className="flex gap-4">
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-mystic-accent)] hover:text-[var(--background)] hover:border-[var(--color-mystic-accent)] transition-colors">
              <Globe size={18} />
            </a>
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-mystic-accent)] hover:text-[var(--background)] hover:border-[var(--color-mystic-accent)] transition-colors">
              <MessageCircle size={18} />
            </a>
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-mystic-accent)] hover:text-[var(--background)] hover:border-[var(--color-mystic-accent)] transition-colors">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[var(--color-mystic-accent)] font-heading">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/about" className="text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-mystic-accent)] transition-colors">About Pandit Rudradev</Link></li>
            <li><Link to="/services" className="text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-mystic-accent)] transition-colors">All Services</Link></li>
            <li><Link to="/blogs" className="text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-mystic-accent)] transition-colors">Blogs & Insights</Link></li>
            <li><Link to="/contact" className="text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-mystic-accent)] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[var(--color-mystic-accent)] font-heading">Top Services</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/services" className="text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-mystic-accent)] transition-colors">Psychic Reading</Link></li>
            <li><Link to="/services" className="text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-mystic-accent)] transition-colors">Love & Relationship</Link></li>
            <li><Link to="/services" className="text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-mystic-accent)] transition-colors">Palm Reading</Link></li>
            <li><Link to="/services" className="text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-[var(--color-mystic-accent)] transition-colors">Spiritual Healing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[var(--color-mystic-accent)] font-heading">Connect</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-[var(--foreground)] opacity-90">
              <MapPin className="text-[var(--color-mystic-accent)] shrink-0 mt-1" size={18} />
              <span>Toronto, ON<br />Canada</span>
            </li>
            <li className="flex items-center gap-3 text-[var(--foreground)] opacity-90">
              <Phone className="text-[var(--color-mystic-accent)] shrink-0" size={18} />
              <span>+1 (416) 555-0198</span>
            </li>
            <li className="flex items-center gap-3 text-[var(--foreground)] opacity-90">
              <Mail className="text-[var(--color-mystic-accent)] shrink-0" size={18} />
              <span>panditrudradev01@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-8 md:mt-12 pt-8 border-t border-[var(--color-mystic-accent)]/20 text-center text-sm text-[var(--foreground)] opacity-70">
        <p>&copy; 2017 Pandit Rudradev Astrology Canada. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
