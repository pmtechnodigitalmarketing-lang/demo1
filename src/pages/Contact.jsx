import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, ShieldCheck, Camera, Video, Users, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full pt-8 pb-12 lg:pb-24 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="text-[var(--color-aurora-green)]">Touch</span></h1>
          <p className="text-[var(--foreground)] text-lg max-w-2xl mx-auto">
            Take the first step towards a better life. Reach out for a confidential consultation today.
          </p>
        </div>

        {/* Emergency Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-10 md:mb-16 bg-gradient-to-r from-[var(--color-brand-red)]/10 to-[var(--color-brand-orange)]/10 border border-[var(--color-brand-red)]/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[var(--color-brand-red)]/10 mix-blend-overlay animate-pulse pointer-events-none"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 bg-[var(--color-brand-red)]/10 rounded-full text-[var(--foreground)] shrink-0">
              <AlertCircle size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[var(--foreground)] mb-1">Facing an Urgent Crisis?</h4>
              <p className="text-[var(--foreground)] text-sm">Don't wait. Reach out immediately for priority support and spiritual guidance.</p>
            </div>
          </div>
          <a aria-label="Navigation Link" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0 bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red)] text-[var(--foreground)] px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(99, 102, 241, 0.4)] hover:shadow-[0_0_25px_rgba(99, 102, 241, 0.6)]">
            <MessageCircle size={20} />
            Emergency WhatsApp
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 border-b border-[var(--color-brand-yellow)]/10 pb-4">Contact Info</h3>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--color-aurora-purple)]/20 text-[var(--color-aurora-purple)] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[var(--foreground)] text-sm font-semibold uppercase tracking-wider mb-1">Call Us Now</p>
                    <p className="text-xl font-medium text-[var(--foreground)]">+1 (416) 555-0198</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--color-aurora-green)]/20 text-[var(--color-aurora-green)] shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[var(--foreground)] text-sm font-semibold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-lg font-medium text-[var(--foreground)]">panditrudradev01@gmail.com</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--color-brand-orange)]/20 text-[var(--foreground)] shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[var(--foreground)] text-sm font-semibold uppercase tracking-wider mb-1">Visit Center</p>
                    <p className="text-lg font-medium text-[var(--foreground)] leading-relaxed">
                      Scarborough, ON<br />Canada
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--color-brand-yellow)]/10 text-[var(--foreground)] shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[var(--foreground)] text-sm font-semibold uppercase tracking-wider mb-1">Working Hours</p>
                    <p className="text-lg font-medium text-[var(--foreground)]">Mon-Sun: 9:00 AM - 9:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-aurora-green)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[var(--color-brand-yellow)]/10 border border-[var(--color-brand-yellow)]/10 rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--color-brand-green)]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-[var(--color-brand-yellow)]/10 border border-[var(--color-brand-yellow)]/10 rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--color-brand-green)]"
                      placeholder="+1 (416) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-[var(--color-brand-yellow)]/10 border border-[var(--color-brand-yellow)]/10 rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--color-brand-green)]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Service Needed</label>
                    <select className="w-full bg-[#6366f1]/50 border border-[var(--color-brand-yellow)]/10 rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--color-brand-green)]">
                      <option value="">Select a service</option>
                      <option value="psychic">Psychic Reading</option>
                      <option value="love">Love Solutions</option>
                      <option value="career">Career Guidance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Your Message</label>
                  <textarea 
                    rows="5"
                    className="w-full bg-[var(--color-brand-yellow)]/10 border border-[var(--color-brand-yellow)]/10 rounded-xl px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--color-brand-green)]"
                    placeholder="Briefly describe what you need help with..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-aurora-purple)]/10 border border-[var(--color-aurora-purple)]/20">
                  <ShieldCheck className="text-[var(--color-aurora-purple)] shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="text-[var(--foreground)] font-semibold text-sm mb-1">100% Privacy Guarantee</h5>
                    <p className="text-[var(--foreground)] text-xs leading-relaxed">Your identity, contact details, and the nature of your problem are kept strictly confidential. We never share your information with third parties.</p>
                  </div>
                </div>

                <button aria-label="Interactive Button" 
                  type="submit"
                  className="px-8 py-4 bg-[var(--color-aurora-green)] text-[#fafafa] font-bold rounded-xl hover:bg-[var(--color-brand-yellow)] transition-colors duration-300 flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  Send Request
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-24 w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass border border-[var(--color-brand-yellow)]/10 p-2"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <iframe 
              src="https://maps.google.com/maps?q=Scarborough,%20ON,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
            {/* Overlay to block interaction if needed or just styling overlay */}
            <div className="absolute inset-0 pointer-events-none border border-[var(--color-brand-yellow)]/10 rounded-2xl mix-blend-overlay"></div>
          </div>
        </motion.div>

        {/* Spiritual Community Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-24 text-center max-w-3xl mx-auto glass p-6 md:p-12 rounded-3xl relative overflow-hidden border border-[var(--color-brand-yellow)]/10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-aurora-purple)]/10 to-transparent pointer-events-none z-0"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Join Our Spiritual Community</h3>
            <p className="text-[var(--foreground)] mb-8 font-light text-lg">Get daily horoscopes, spiritual tips, and exclusive insights directly from Pandit Rudradev.</p>
            
            <div className="flex justify-center gap-6">
              <a aria-label="Navigation Link" href="#" className="p-4 bg-[var(--color-brand-yellow)]/10 hover:bg-[var(--color-aurora-purple)]/20 border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-aurora-purple)]/50 rounded-full text-[var(--foreground)] transition-all duration-300 hover:scale-110">
                <Camera size={24} />
              </a>
              <a aria-label="Navigation Link" href="#" className="p-4 bg-[var(--color-brand-yellow)]/10 hover:bg-[var(--color-brand-red)]/10 border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-red)]/30 rounded-full text-[var(--foreground)] transition-all duration-300 hover:scale-110">
                <Video size={24} />
              </a>
              <a aria-label="Navigation Link" href="#" className="p-4 bg-[var(--color-brand-yellow)]/10 hover:bg-[var(--color-brand-green)]/10 border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-green)]/50 rounded-full text-[var(--foreground)] transition-all duration-300 hover:scale-110">
                <Users size={24} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
