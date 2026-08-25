import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Share2, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-[var(--color-space-cyan)]/20 mt-0 md:mt-8 pt-8 md:pt-10 pb-8 bg-transparent">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center mb-6">
            <img src="/images/PR - LOGO.png" alt="Pandit Rudradev Logo" className="h-20 w-auto" />
          </Link>
          <p className="text-white text-sm leading-relaxed mb-6">
            Guiding you through life's cosmic journey with authentic astrology and psychic readings in Canada.
          </p>
          <div className="flex gap-4">
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-space-cyan)] hover:text-[var(--background)] hover:border-[var(--color-space-cyan)] transition-colors">
              <Globe size={18} />
            </a>
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-space-cyan)] hover:text-[var(--background)] hover:border-[var(--color-space-cyan)] transition-colors">
              <MessageCircle size={18} />
            </a>
            <a aria-label="Navigation Link" href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[var(--color-space-cyan)] hover:text-[var(--background)] hover:border-[var(--color-space-cyan)] transition-colors">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[var(--color-space-cyan)] font-heading text-white drop-shadow-md">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/about" className="text-white drop-shadow-md hover:opacity-100 hover:text-[var(--color-space-cyan)] transition-colors">About Pandit Rudradev</Link></li>
            <li><Link to="/services" className="text-white drop-shadow-md hover:opacity-100 hover:text-[var(--color-space-cyan)] transition-colors">All Services</Link></li>
            <li><Link to="/blogs" className="text-white drop-shadow-md hover:opacity-100 hover:text-[var(--color-space-cyan)] transition-colors">Blogs & Insights</Link></li>
            <li><Link to="/contact" className="text-white drop-shadow-md hover:opacity-100 hover:text-[var(--color-space-cyan)] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[var(--color-space-cyan)] font-heading text-white drop-shadow-md">Top Services</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/services" className="text-white drop-shadow-md hover:opacity-100 hover:text-[var(--color-space-cyan)] transition-colors">Psychic Reading</Link></li>
            <li><Link to="/services" className="text-white drop-shadow-md hover:opacity-100 hover:text-[var(--color-space-cyan)] transition-colors">Love & Relationship</Link></li>
            <li><Link to="/services" className="text-white drop-shadow-md hover:opacity-100 hover:text-[var(--color-space-cyan)] transition-colors">Palm Reading</Link></li>
            <li><Link to="/services" className="text-white drop-shadow-md hover:opacity-100 hover:text-[var(--color-space-cyan)] transition-colors">Spiritual Healing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[var(--color-space-cyan)] font-heading text-white drop-shadow-md">Connect</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-white drop-shadow-md">
              <MapPin className="text-[var(--color-space-cyan)] shrink-0 mt-1" size={18} />
              <span>Toronto, ON<br />Canada</span>
            </li>
            <li className="flex items-center gap-3 text-white drop-shadow-md">
              <Phone className="text-[var(--color-space-cyan)] shrink-0" size={18} />
              <span>+1 (416) 998-0146</span>
            </li>
            <li className="flex items-center gap-3 text-white drop-shadow-md">
              <Mail className="text-[var(--color-space-cyan)] shrink-0" size={18} />
              <span>panditrudradev01@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-8 md:mt-12 pt-8 border-t border-[var(--color-space-cyan)]/20 text-center text-sm text-white drop-shadow-md">
        <p>&copy; 2017 Pandit Rudradev Astrology Canada. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
