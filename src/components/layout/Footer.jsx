import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Share2, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-[var(--color-brand-yellow)]/10 mt-20 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center mb-6">
            <img src="/images/Pandit Rudradev - Logo.webp" alt="Pandit Rudradev Logo" className="h-16 w-auto" />
          </Link>
          <p className="text-[var(--foreground)] text-sm leading-relaxed mb-6">
            Guiding you through life's cosmic journey with authentic astrology and psychic readings in Canada.
          </p>
          <div className="flex gap-4">
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-aurora-purple)] hover:border-[var(--color-aurora-purple)] transition-colors">
              <Globe size={18} />
            </a>
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-aurora-purple)] hover:border-[var(--color-aurora-purple)] transition-colors">
              <MessageCircle size={18} />
            </a>
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-aurora-purple)] hover:border-[var(--color-aurora-purple)] transition-colors">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-[var(--color-aurora-green)]">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/about" className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors">About Pandit Rudradev</Link></li>
            <li><Link to="/services" className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors">All Services</Link></li>
            <li><Link to="/horoscope" className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors">Daily Horoscope</Link></li>
            <li><Link to="/contact" className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-[var(--color-aurora-green)]">Top Services</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/services/psychic-reading" className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors">Psychic Reading</Link></li>
            <li><Link to="/services/love-solutions" className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors">Love & Relationship</Link></li>
            <li><Link to="/services/palmistry" className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors">Palm Reading</Link></li>
            <li><Link to="/services/spiritual-healing" className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors">Spiritual Healing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-[var(--color-aurora-green)]">Connect</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-[var(--foreground)]">
              <MapPin className="text-[var(--color-aurora-purple)] shrink-0 mt-1" size={18} />
              <span>Scarborough, ON<br />Canada</span>
            </li>
            <li className="flex items-center gap-3 text-[var(--foreground)]">
              <Phone className="text-[var(--color-aurora-purple)] shrink-0" size={18} />
              <span>+1 (416) 555-0198</span>
            </li>
            <li className="flex items-center gap-3 text-[var(--foreground)]">
              <Mail className="text-[var(--color-aurora-purple)] shrink-0" size={18} />
              <span>panditrudradev01@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-8 md:mt-12 pt-8 border-t border-[var(--color-brand-yellow)]/10 text-center text-sm text-[var(--foreground)]">
        <p>&copy; 2017 Pandit Rudradev Astrology Canada. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
