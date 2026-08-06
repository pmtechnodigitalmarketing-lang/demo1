import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Heart, Compass, Activity, ArrowUpRight, Phone, Eye, Hand, RotateCcw, Flame, TrendingUp, ShieldAlert, Smile, Users, Scale, Baby, HeartPulse, EyeOff, Briefcase, Link as LinkIcon, Home, Diamond, Sun, Key, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import { servicesData } from '../data/servicesData';

const categories = [
  { id: 'all', label: 'All Interventions', icon: <Compass size={16} /> },
  { id: 'relationships', label: 'Relationships', icon: <Heart size={16} /> },
  { id: 'protection', label: 'Protection', icon: <Shield size={16} /> },
  { id: 'healing', label: 'Healing', icon: <Activity size={16} /> },
  { id: 'destiny', label: 'Destiny & Wealth', icon: <Sparkles size={16} /> },
];

const categoryMap = {
  'psychic-reading': 'destiny',
  'love-solutions': 'relationships',
  'palmistry': 'destiny',
  'bring-ex-back': 'relationships',
  'black-magic-removal': 'protection',
  'business-astrology': 'destiny',
  'spiritual-healing': 'healing',
  'voodoo-removal': 'protection',
  'face-reading': 'destiny',
  'family-disputes': 'relationships',
  'court-cases': 'protection',
  'childless-couples': 'healing',
  'health-problems': 'healing',
  'jealousy-envy': 'protection',
  'career-guidance': 'destiny',
  'kundali-matching': 'relationships',
  'vaastu-shastra': 'destiny',
  'gemstone-consultation': 'destiny',
  'depression-anxiety': 'healing',
  'property-disputes': 'protection',
  'aura-cleansing': 'healing',
  'past-life-regression': 'destiny',
  'dream-interpretation': 'destiny',
  'financial-blockages': 'destiny',
  'chakra-balancing': 'healing',
  'karmic-healing': 'healing',
  'entity-attachment': 'protection'
};

const serviceIconMap = {
  'psychic-reading': <Eye size={20} />,
  'love-solutions': <Heart size={20} />,
  'palmistry': <Hand size={20} />,
  'bring-ex-back': <RotateCcw size={20} />,
  'black-magic-removal': <Flame size={20} />,
  'business-astrology': <TrendingUp size={20} />,
  'spiritual-healing': <Activity size={20} />,
  'voodoo-removal': <ShieldAlert size={20} />,
  'face-reading': <Smile size={20} />,
  'family-disputes': <Users size={20} />,
  'court-cases': <Scale size={20} />,
  'childless-couples': <Baby size={20} />,
  'health-problems': <HeartPulse size={20} />,
  'jealousy-envy': <EyeOff size={20} />,
  'career-guidance': <Briefcase size={20} />,
  'kundali-matching': <LinkIcon size={20} />,
  'vaastu-shastra': <Home size={20} />,
  'gemstone-consultation': <Diamond size={20} />,
  'depression-anxiety': <Sun size={20} />,
  'property-disputes': <Key size={20} />,
  'aura-cleansing': <Sun size={20} />,
  'past-life-regression': <Eye size={20} />,
  'dream-interpretation': <Compass size={20} />,
  'financial-blockages': <TrendingUp size={20} />,
  'chakra-balancing': <Activity size={20} />,
  'karmic-healing': <HeartPulse size={20} />,
  'entity-attachment': <ShieldAlert size={20} />
};

const faqsData = [
  { q: "How long does it take to see results?", a: "The timeline for results varies based on the complexity of your planetary alignments. Many clients experience immediate energetic shifts, while permanent material results typically manifest within a few weeks." },
  { q: "Are my details and consultations kept confidential?", a: "Absolutely. We adhere to a strict code of confidentiality. Your personal information, struggles, and the spiritual remedies provided are never shared with any third party." },
  { q: "Do I need to be physically present for the remedies to work?", a: "No. Spiritual energy transcends physical distance. Pandit Rudradev successfully performs remote rituals for clients globally with the exact same potency as in-person sessions." },
  { q: "How do I know which service is right for me?", a: "If you are unsure, we recommend booking a General Consultation. Pandit Rudradev will read your birth chart and identify exactly which specialized intervention is required." }
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[var(--foreground)]/10 bg-[var(--background)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-mystic-accent)]/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <h4 className={`text-lg font-bold font-heading transition-colors ${isOpen ? 'text-[var(--color-mystic-accent)]' : 'text-[var(--foreground)]'}`}>
          {faq.q}
        </h4>
        <div className={`text-[var(--color-mystic-accent)] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-[var(--foreground)] opacity-80 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QuickContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'General Inquiry' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full p-8 text-center">
        <Sparkles className="text-[var(--color-mystic-accent)] mx-auto mb-4" size={32} />
        <h3 className="text-2xl font-bold font-heading mb-2 text-[var(--foreground)]">Request Sent</h3>
        <p className="text-[var(--foreground)] opacity-80">Pandit Rudradev's team will contact you shortly to confirm your consultation.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[var(--color-mystic-accent)] font-heading mb-2">Instant Booking</h3>
        <p className="text-sm opacity-70">Secure your private consultation now.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Your Full Name" 
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full bg-[var(--background)] border border-[var(--foreground)]/10 rounded-lg px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:border-[var(--color-mystic-accent)] transition-colors"
        />
        <input 
          type="tel" 
          placeholder="Your Phone Number" 
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full bg-[var(--background)] border border-[var(--foreground)]/10 rounded-lg px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:border-[var(--color-mystic-accent)] transition-colors"
        />
        <select 
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
          className="w-full bg-[var(--background)] border border-[var(--foreground)]/10 rounded-lg px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--color-mystic-accent)] transition-colors"
        >
          <option value="General Inquiry">General Consultation</option>
          <option value="Love & Relationships">Love & Relationships</option>
          <option value="Career & Wealth">Career & Wealth</option>
          <option value="Spiritual Protection">Spiritual Protection</option>
        </select>
        <button 
          type="submit" 
          className="w-full bg-[var(--color-mystic-accent)] text-white font-bold uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-amber-400 transition-colors mt-2"
        >
          Request Appointment
        </button>
      </form>
      <p className="text-xs text-center opacity-50 mt-4 uppercase tracking-widest">100% Confidential</p>
    </div>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => categoryMap[s.id] === activeCategory);

  // For the 'All' view, we take the top 3 as "Signature Services"
  const signatureServices = activeCategory === 'all' ? servicesData.slice(0, 3) : [];
  const displayServices = activeCategory === 'all' ? servicesData.slice(3) : filteredServices;

  return (
    <div className="w-full bg-[var(--background)] min-h-screen">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full h-auto pb-24 lg:pb-32 flex flex-col justify-start pt-8 md:pt-12 overflow-hidden">
        {/* Background Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/astrologer-in-west-bengal.webp" 
            alt="Mystic Background" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-[var(--color-mystic-accent)] tracking-[0.3em] uppercase text-sm mb-6 font-semibold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[var(--color-mystic-accent)]"></span>
              Surgical Spiritual Interventions
              <span className="w-12 h-[1px] bg-[var(--color-mystic-accent)]"></span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-tight mb-8">
              The Architecture <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mystic-accent)] to-amber-200">Of Destiny</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--foreground)] opacity-80 font-light max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of over 20 specialized astrological and spiritual services, each tailored to surgically resolve your unique life challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Category Filters & Layout */}
      <section className="relative w-full pb-12 px-6 z-10 -mt-12">
        <div className="container mx-auto max-w-7xl">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                      activeCategory === cat.id 
                        ? 'bg-[var(--color-mystic-accent)] text-white border-[var(--color-mystic-accent)] shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                        : 'bg-transparent text-[var(--foreground)] border-[var(--foreground)]/10 hover:border-[var(--color-mystic-accent)]/50 hover:bg-[var(--foreground)]/5'
                    }`}
                  >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Signature Services (Only on 'All' tab) */}
          <AnimatePresence mode="wait">
            {activeCategory === 'all' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-24"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold font-heading">Signature <span className="text-[var(--color-mystic-accent)]">Interventions</span></h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Featured Large Card */}
                  <Link to={`/services/${signatureServices[0].id}`} className="group lg:col-span-2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-[var(--color-mystic-accent)]/20 shadow-2xl block">
                    <img src={signatureServices[0].image} alt={signatureServices[0].title} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-1000" />
                    
                    <div className="absolute bottom-4 left-4 right-4 p-6 md:p-8 z-20 bg-[var(--background)]/90 backdrop-blur-md rounded-2xl">
                      <div className="text-[var(--color-mystic-accent)] uppercase tracking-widest text-xs font-bold mb-2">Most Requested</div>
                      <h3 className="text-3xl md:text-4xl font-black font-heading mb-2 text-[var(--foreground)] group-hover:text-[var(--color-mystic-accent)] transition-colors">{signatureServices[0].title}</h3>
                      <p className="text-base opacity-80 max-w-2xl text-[var(--foreground)] line-clamp-2 mb-4">{signatureServices[0].desc}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-mystic-accent)]">
                        View Details <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </Link>

                  {/* Two Stacked Cards */}
                  <div className="flex flex-col gap-6">
                    {signatureServices.slice(1).map((service, idx) => (
                      <Link key={idx} to={`/services/${service.id}`} className="group relative flex-1 min-h-[200px] lg:min-h-0 rounded-3xl overflow-hidden border border-[var(--color-mystic-accent)]/20 shadow-xl block">
                        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-1000" />
                        
                        <div className="absolute bottom-3 left-3 right-3 p-4 z-20 bg-[var(--background)]/90 backdrop-blur-md rounded-xl">
                          <h3 className="text-xl font-bold font-heading mb-1 text-[var(--foreground)] group-hover:text-[var(--color-mystic-accent)] transition-colors">{service.title}</h3>
                          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-mystic-accent)]">
                            Explore <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Standard Grid of Services */}
          <div>
             {activeCategory === 'all' && (
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-[1px] flex-grow bg-[var(--foreground)]/10"></div>
                  <h2 className="text-2xl font-bold font-heading text-gray-400">Specialized Directory</h2>
                  <div className="h-[1px] flex-grow bg-[var(--foreground)]/10"></div>
                </div>
             )}
             
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {displayServices.map((service, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={service.id}
                  >
                    <Link
                      to={`/services/${service.id}`} 
                      className="block group relative h-full rounded-[2rem] overflow-hidden border border-[var(--color-mystic-accent)]/20 shadow-[0_5px_20px_rgba(0,0,0,0.5)] bg-[var(--color-mystic-primary)] hover:border-[var(--color-mystic-accent)]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500"
                    >
                      {/* Image header */}
                      <div className="h-48 relative overflow-hidden">
                        <img loading="lazy" src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col relative z-20 -mt-12">
                        <div className="w-12 h-12 rounded-full bg-[var(--background)] border border-[var(--color-mystic-accent)]/30 flex items-center justify-center mb-6 text-[var(--color-mystic-accent)] group-hover:bg-[var(--color-mystic-accent)] group-hover:text-white transition-colors duration-300">
                          {serviceIconMap[service.id] || <Sparkles size={20} />}
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-3 text-[var(--foreground)] group-hover:text-[var(--color-mystic-accent)] transition-colors">{service.title}</h3>
                        <p className="text-sm opacity-60 leading-relaxed mb-6 line-clamp-3">{service.desc}</p>
                        
                        <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-mystic-accent)] opacity-80 group-hover:opacity-100">
                          View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="pt-8 pb-8 md:pb-24 lg:pt-12 relative overflow-hidden flex items-center justify-center border-y border-[var(--foreground)]/5 bg-[var(--background)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-mystic-accent)]/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[var(--color-mystic-accent)] tracking-[0.3em] uppercase text-sm mb-4 font-semibold">Answers</div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Frequently Asked <span className="text-[var(--color-mystic-accent)]">Questions</span></h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {faqsData.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dramatic Final CTA */}
      <section className="pt-0 md:pt-8 pb-4 md:pb-32 lg:pt-12 lg:pb-32 px-6 relative overflow-hidden flex items-center justify-center">
        {/* Deep Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-mystic-accent)]/20 via-[var(--background)] to-[var(--background)]"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-8">
              Your Future is <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mystic-accent)] to-amber-200">Not Fixed.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-80 mb-12">
              Take control of your destiny today. Book a private, confidential consultation and step into the light of clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-mystic-accent)] text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 rounded-full"
              >
                Book Consultation <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+14165550198"
                className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border border-[var(--color-mystic-accent)] text-[var(--color-mystic-accent)] font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-mystic-accent)]/10 transition-colors duration-300 rounded-full"
              >
                <Phone size={18} /> Call Directly
              </a>
            </div>
          </div>
          
          <div className="bg-[var(--background)]/50 p-8 rounded-3xl border border-[var(--foreground)]/5 backdrop-blur-sm shadow-2xl">
             <QuickContactForm />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
