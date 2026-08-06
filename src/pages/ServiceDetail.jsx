import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Star, Clock, CheckCircle, ChevronDown, ChevronUp, ArrowRight, User, Calendar, MessageSquare, Send, Phone, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const serviceIndex = servicesData.findIndex(s => s.id === serviceId);
  const service = serviceIndex !== -1 ? servicesData[serviceIndex] : null;

  const recommendedServices = [];
  if (serviceIndex !== -1 && servicesData.length > 3) {
    for (let i = 1; i <= 3; i++) {
      recommendedServices.push(servicesData[(serviceIndex + i) % servicesData.length]);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <button aria-label="Interactive Button" onClick={() => navigate('/services')} className="text-[var(--color-aurora-green)] hover:underline">
            Return to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pb-12 lg:pb-24 relative z-10 min-h-screen">

      {/* Hero Section */}
      <div className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden mb-10 md:mb-16 rounded-b-[3rem] shadow-2xl">
        <img loading="lazy"
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex items-end pb-12 md:pb-24">
          <div className="container mx-auto px-6 max-w-7xl flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl bg-[var(--background)]/95 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[var(--color-mystic-accent)]/20 shadow-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading mb-4 text-[var(--foreground)]">{service.title}</h1>
              <p className="text-base md:text-lg text-[var(--foreground)] leading-relaxed opacity-90">{service.longDesc}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">

        {/* Main Content & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 mb-12 lg:mb-24">

          {/* Left Column (Description & Details) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl mb-8 md:mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 border-b border-[var(--color-brand-yellow)]/10 pb-4">About This Service</h2>
              <p className="text-[var(--foreground)] leading-relaxed text-lg whitespace-pre-line mb-8">
                {service.aboutDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a aria-label="Navigation Link" href="tel:+1234567890" className="flex items-center gap-2 bg-[var(--color-brand-yellow)] hover:bg-[var(--color-brand-yellow)] text-[#fafafa] font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg">
                  <Phone size={20} />
                  Call Now
                </a>
                <a aria-label="Navigation Link" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] text-[var(--foreground)] font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.testimonials.map((testi, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl relative border border-[var(--color-brand-green)]">
                    <div>
                      <Star className="text-[var(--color-aurora-green)] mb-4" size={24} />
                      <p className="text-[var(--foreground)] mb-6 italic">"{testi.text}"</p>
                    </div>
                    <div className="flex items-center gap-3 border-t border-[var(--color-brand-yellow)]/10 pt-4 mt-auto">
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[var(--color-aurora-purple)]">
                        <img loading="lazy" src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-bold text-[var(--foreground)] text-sm">{testi.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1 space-y-8">

            {/* Trusted Badges & Booking */}
            <div className="glass p-8 rounded-3xl border border-[var(--color-brand-green)]">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />

              <h3 className="text-2xl font-bold mb-6 relative z-10">Book Your Session</h3>

              <ul className="space-y-4 mb-8 relative z-10">
                {service.badges.map((badge, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[var(--foreground)]">
                    <CheckCircle size={20} className="text-[var(--color-aurora-green)]" />
                    <span>{badge}</span>
                  </li>
                ))}
              </ul>

              <button aria-label="Interactive Button" className="w-full py-4 rounded-full bg-[var(--color-aurora-green)] text-[#fafafa] font-bold text-lg hover:shadow-[0_0_20px_rgba(99, 102, 241, 0.5)] transition-all duration-300 relative z-10">
                Consult Now
              </button>
            </div>

            {/* Functionality: Quick Inquiry Form */}
            <div className="glass p-8 rounded-3xl border border-[var(--color-brand-yellow)]/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-[var(--color-aurora-green)]" />
                Quick Inquiry
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <div className="flex items-center gap-2 bg-[#6366f1]/40 rounded-xl px-4 py-3 border border-[var(--color-brand-yellow)]/10 focus-within:border-[var(--color-brand-green)]">
                    <User size={18} className="text-[var(--foreground)]" />
                    <input type="text" placeholder="Your Name" className="bg-transparent border-none outline-none text-[var(--foreground)] w-full text-sm" />
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-2 bg-[#6366f1]/40 rounded-xl px-4 py-3 border border-[var(--color-brand-yellow)]/10 focus-within:border-[var(--color-brand-green)]">
                    <MessageSquare size={18} className="text-[var(--foreground)] mt-1" />
                    <textarea rows="3" placeholder="How can we help you?" className="bg-transparent border-none outline-none text-[var(--foreground)] w-full text-sm resize-none"></textarea>
                  </div>
                </div>
                <button aria-label="Interactive Button" className="w-full py-3 rounded-xl border border-[var(--color-brand-green)]">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-[var(--foreground)]">Everything you need to know about our {service.title} service.</p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`glass border rounded-2xl overflow-hidden transition-colors duration-300 ${activeFaq === idx ? 'border-[var(--color-brand-green)]' : 'border-[var(--color-brand-yellow)]/10'}`}
              >
                <button aria-label="Interactive Button"
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="text-[var(--color-aurora-green)]" />
                  ) : (
                    <ChevronDown className="text-[var(--foreground)]" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-[var(--foreground)]"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommended Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-end mb-8 border-b border-[var(--color-brand-yellow)]/10 pb-4">
            <h2 className="text-3xl font-bold">You May Also Like</h2>
            <Link to="/services" className="text-[var(--color-aurora-green)] hover:underline flex items-center gap-1 text-sm font-semibold uppercase tracking-wider">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {recommendedServices.map((rec) => (
              <Link
                key={rec.id}
                to={`/services/${rec.id}`}
                className="group block relative glass-card rounded-2xl overflow-hidden border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-green)]">
                <div className="aspect-[4/3] relative overflow-hidden bg-[#6366f1]/40">
                  <div className={`absolute inset-0 bg-gradient-to-br ${rec.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10`}></div>
                  <img loading="lazy" src={rec.image} alt={rec.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-aurora-green)] transition-colors">{rec.title}</h3>
                  <p className="text-[var(--foreground)] text-sm line-clamp-2">{rec.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ServiceDetail;
