import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const allLocations = [
  {
    province: 'Ontario',
    color: 'var(--color-aurora-green)',
    cities: ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London', 'Markham', 'Vaughan', 'Kitchener', 'Windsor']
  },
  {
    province: 'British Columbia',
    color: 'var(--color-aurora-purple)',
    cities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Abbotsford', 'Coquitlam', 'Kelowna', 'Victoria']
  },
  {
    province: 'Quebec',
    color: 'var(--color-brand-orange)',
    cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke']
  },
  {
    province: 'Alberta',
    color: 'var(--color-brand-yellow)',
    cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert']
  },
  {
    province: 'Manitoba',
    color: 'var(--color-brand-red)',
    cities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson']
  },
  {
    province: 'Saskatchewan',
    color: 'var(--color-brand-green)',
    cities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw']
  },
  {
    province: 'Nova Scotia',
    color: 'var(--color-brand-red)',
    cities: ['Halifax', 'Sydney', 'Truro', 'New Glasgow']
  },
  {
    province: 'New Brunswick',
    color: 'var(--color-brand-orange)',
    cities: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe']
  },
  {
    province: 'Newfoundland & Labrador',
    color: 'var(--color-brand-orange)',
    cities: ["St. John's", 'Conception Bay South', 'Mount Pearl']
  },
  {
    province: 'Prince Edward Island',
    color: 'var(--color-brand-green)',
    cities: ['Charlottetown', 'Summerside', 'Stratford']
  }
];

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = allLocations.map(region => {
    return {
      ...region,
      cities: region.cities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()))
    };
  }).filter(region => region.cities.length > 0 || region.province.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="w-full pt-8 pb-12 lg:pb-24 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-aurora-purple)]/30 text-[var(--color-aurora-purple)] mb-6 text-sm font-semibold tracking-wide uppercase">
              <MapPin size={16} />
              <span>Service Areas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Serving All of <span className="text-[var(--color-aurora-green)]">Canada</span></h1>
            <p className="text-[var(--foreground)] text-lg max-w-2xl mx-auto mb-10">
              Find Pandit Rudradev's trusted astrological and spiritual healing services in your city. We cover all major provinces and municipalities across Canada.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--foreground)] group-focus-within:text-[var(--color-aurora-green)] transition-colors">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for your city or province..."
                className="w-full bg-[var(--color-brand-yellow)]/10 border border-[var(--color-brand-yellow)]/10 rounded-full py-4 pl-12 pr-6 text-[var(--foreground)] focus:outline-none focus:border-[var(--color-brand-green)]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>

        {/* Locations Grid */}
        <div className="space-y-12">
          <AnimatePresence>
            {filteredLocations.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="text-center py-10 md:py-20 text-[var(--foreground)]"
              >
                No locations found matching "{searchTerm}". Please try a different search or contact us directly.
              </motion.div>
            ) : (
              filteredLocations.map((region, idx) => (
                <motion.div
                  key={region.province}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass rounded-3xl p-8 relative overflow-hidden border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-yellow)]/10 transition-colors"
                >
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none"
                    style={{ backgroundColor: region.color }}
                  ></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-8 md:items-start">
                    <div className="md:w-1/3">
                      <h2 className="text-3xl font-bold text-[var(--foreground)] mb-2" style={{ textShadow: `0 0 20px ${region.color}40` }}>
                        {region.province}
                      </h2>
                      <div className="h-1 w-12 rounded-full mb-6" style={{ backgroundColor: region.color }}></div>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors"
                      >
                        Book a reading here <ArrowRight size={16} />
                      </Link>
                    </div>
                    
                    <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {region.cities.map((city, cityIdx) => {
                        const citySlug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                        return (
                          <Link 
                            key={cityIdx}
                            to={`/locations/${citySlug}`}
                            className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors group"
                          >
                            <div 
                              className="w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all shrink-0"
                              style={{ backgroundColor: region.color }}
                            ></div>
                            <span>{city}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Global CTA */}
        <div className="mt-12 lg:mt-24 text-center">
          <div className="glass inline-block relative overflow-hidden rounded-[3rem] p-6 md:p-12 border border-[var(--color-brand-green)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-aurora-green)]/10 to-transparent pointer-events-none"></div>
            <h3 className="text-3xl font-bold mb-4 relative z-10">Don't see your city?</h3>
            <p className="text-[var(--foreground)] mb-8 max-w-lg mx-auto relative z-10">
              Pandit Rudradev provides online, phone, and video consultations worldwide. Distance does not limit the power of authentic spiritual healing.
            </p>
            <Link 
              to="/contact"
              className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-aurora-green)] text-[#fafafa] font-bold rounded-full hover:bg-[var(--color-brand-yellow)] hover:shadow-[0_0_20px_var(--color-aurora-green)] transition-all"
            >
              Contact Us Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Locations;
