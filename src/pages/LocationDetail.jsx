import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles, Star } from 'lucide-react';
import TestimonialCarousel from '../components/home/TestimonialCarousel';

import { servicesData } from '../data/servicesData';

const cityImages = {
  "hamilton": "https://upload.wikimedia.org/wikipedia/commons/1/1c/View_to_Hamilton_from_the_Mountain_%286577549603%29.jpg",
  "london": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/London_Ontario_Skyline_2017_%28cropped%29.jpg/1280px-London_Ontario_Skyline_2017_%28cropped%29.jpg",
  "markham": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Markham_Village_Heritage_Conservation_District-_Markham-Ontario-HPC15250-20201017_%282%29.jpg/1280px-Markham_Village_Heritage_Conservation_District-_Markham-Ontario-HPC15250-20201017_%282%29.jpg",
  "kitchener": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kitchener_Skyline_December_2021.jpg/1280px-Kitchener_Skyline_December_2021.jpg",
  "windsor": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Windsor%2C_Ontario_%28aerial_view%29.jpg/1280px-Windsor%2C_Ontario_%28aerial_view%29.jpg",
  "surrey": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cresbeach-groyne.jpg/1280px-Cresbeach-groyne.jpg",
  "richmond": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Richmond%2C_British_Columbia_%28cropped%29.jpg/1280px-Richmond%2C_British_Columbia_%28cropped%29.jpg",
  "abbotsford": "https://upload.wikimedia.org/wikipedia/commons/6/68/Mill_Lake_3.jpg",
  "victoria": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Victoria_BC%2C_Canada_%28Johnson_Street%29_-_panoramio.jpg/1280px-Victoria_BC%2C_Canada_%28Johnson_Street%29_-_panoramio.jpg",
  "laval": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Laval_Quebec_Montage.jpg/1280px-Laval_Quebec_Montage.jpg",
  "red-deer": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Red_Deer_-_Aerial_-_downtown_bridges.jpg/1280px-Red_Deer_-_Aerial_-_downtown_bridges.jpg",
  "st.-albert": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Downtown_clocktower_St._Albert_Alberta.jpg",
  "brandon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dominion_Exhibition_Display_Building_II_flags.jpg/1280px-Dominion_Exhibition_Display_Building_II_flags.jpg",
  "steinbach": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Steinbach_montage_2.jpg/1280px-Steinbach_montage_2.jpg",
  "thompson": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Spirit_Way_Wolf_Mural.jpg/1280px-Spirit_Way_Wolf_Mural.jpg",
  "regina": "https://upload.wikimedia.org/wikipedia/commons/4/48/Reginadowntown_%28cropped%29.png",
  "prince-albert": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Prince_Albert_Saskatchewan_in_fall_01.JPG/1280px-Prince_Albert_Saskatchewan_in_fall_01.JPG",
  "halifax": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Halifax_Harbour_Sunset_Skyline%2C_Nova_Scotia_%2824237034620%29.jpg/1280px-Halifax_Harbour_Sunset_Skyline%2C_Nova_Scotia_%2824237034620%29.jpg",
  "sydney": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sydney%2C_Nova_Scotia_waterfront_in_September_2017.jpg/1280px-Sydney%2C_Nova_Scotia_waterfront_in_September_2017.jpg",
  "truro": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Truro%2C_Nova_Scotia%2C_Canada.jpg/1280px-Truro%2C_Nova_Scotia%2C_Canada.jpg",
  "new-glasgow": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/New_Glasgow%2C_Nova_Scotia%2C_Canada.jpg/1280px-New_Glasgow%2C_Nova_Scotia%2C_Canada.jpg",
  "saint-john": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Saint_John%2C_New_Brunswick%2C_Canada.jpg/1280px-Saint_John%2C_New_Brunswick%2C_Canada.jpg",
  "dieppe": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dieppe_Christmas_Over_The_Petit_%2823574054129%29.jpg/1280px-Dieppe_Christmas_Over_The_Petit_%2823574054129%29.jpg",
  "summerside": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Summerside%2C_Prince_Edward_Island.jpg/1280px-Summerside%2C_Prince_Edward_Island.jpg",
  "stratford": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Stratford%2C_Prince_Edward_Island%2C_Canada.jpg/1280px-Stratford%2C_Prince_Edward_Island%2C_Canada.jpg",
  "toronto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Toronto_Skyline_from_Olympic_Island%2C_June_20_2026_%285-3_cropped%29.jpg/1280px-Toronto_Skyline_from_Olympic_Island%2C_June_20_2026_%285-3_cropped%29.jpg",
  "ottawa": "https://upload.wikimedia.org/wikipedia/commons/2/22/Parliament-Ottawa.jpg",
  "mississauga": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mississauga_Civic_Centre%2C_May_16_2026_%2802%29.jpg/1280px-Mississauga_Civic_Centre%2C_May_16_2026_%2802%29.jpg",
  "brampton": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Peel_Art_Gallery%2C_Museum_and_Archives_Building_%28PAMA%29.jpg/1280px-Peel_Art_Gallery%2C_Museum_and_Archives_Building_%28PAMA%29.jpg",
  "vaughan": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Vaughan_Metropolitan_Centre_Skyline%2C_August_7_2025.jpg/1280px-Vaughan_Metropolitan_Centre_Skyline%2C_August_7_2025.jpg",
  "vancouver": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Skyline_of_Vancouver%2C_Canada.jpg/1280px-Skyline_of_Vancouver%2C_Canada.jpg",
  "burnaby": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Metrotown_aerial_view_2025.jpg/1280px-Metrotown_aerial_view_2025.jpg",
  "coquitlam": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Coquitlam_Town_Centre_2025.png/1280px-Coquitlam_Town_Centre_2025.png",
  "kelowna": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Kelowna_city_view_from_Knox_Mountain.jpg/1280px-Kelowna_city_view_from_Knox_Mountain.jpg",
  "montreal": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Montreal%2C_Quebec_skyline.jpg/1280px-Montreal%2C_Quebec_skyline.jpg",
  "quebec-city": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Quebec_City_skyline_from_L%C3%A9vis.jpg/1280px-Quebec_City_skyline_from_L%C3%A9vis.jpg",
  "gatineau": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Gatineau_-_QC_-_Museum_of_Civilisation3.jpg/1280px-Gatineau_-_QC_-_Museum_of_Civilisation3.jpg",
  "longueuil": "https://upload.wikimedia.org/wikipedia/commons/1/18/Longueuil_City_Hall_2011.jpg",
  "sherbrooke": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sherb.jpg",
  "calgary": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Downtown_Calgary_2020-4.jpg",
  "edmonton": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alberta_Legislature_Building_at_night.jpg/1280px-Alberta_Legislature_Building_at_night.jpg",
  "lethbridge": "https://upload.wikimedia.org/wikipedia/commons/4/47/Lethbridge_downtown.jpg",
  "winnipeg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Esplanade_Riel_Bridge_at_dusk%2C_Winnipeg%2C_Canada.jpg/1280px-Esplanade_Riel_Bridge_at_dusk%2C_Winnipeg%2C_Canada.jpg",
  "saskatoon": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Saskatoon%2C_Saskatchewan.jpg/1280px-Saskatoon%2C_Saskatchewan.jpg",
  "moose-jaw": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/City_Hall_Moose_Jaw.jpg/1280px-City_Hall_Moose_Jaw.jpg",
  "moncton": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/View_of_the_Moncton%2C_New_Brunswick_skyline_%28cropped%29.jpg/1280px-View_of_the_Moncton%2C_New_Brunswick_skyline_%28cropped%29.jpg",
  "fredericton": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Fredericton%2C_NB_%28cropped%29.jpg/1280px-Fredericton%2C_NB_%28cropped%29.jpg",
  "conception-bay-south": "https://upload.wikimedia.org/wikipedia/commons/f/f7/NLA_Topsail_tango7174.jpg",
  "mount-pearl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mount_Pearl%2C_NL.jpg/1280px-Mount_Pearl%2C_NL.jpg",
  "charlottetown": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Charlottetown%2C_PEI_skyline.jpg/1280px-Charlottetown%2C_PEI_skyline.jpg",
  "default": "/images/serene-village-landscape.webp"
};

const allServices = servicesData;

const LocationDetail = () => {
  const { cityId } = useParams();
  
  // Parallax ref for hero section
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Format city name from URL slug (e.g. "st-john-s" to "St John S")
  // A simple formatter for display
  const formattedCity = cityId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityId]);

  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="w-full pt-20 pb-4 lg:pb-8 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Hero Section */}
        <div ref={heroRef} className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-10 md:mb-16 glass border border-[var(--color-brand-yellow)]/10 flex items-center justify-center group [perspective:1000px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-aurora-purple)]/40 to-[var(--color-aurora-green)]/20 mix-blend-overlay z-10"></div>
          
          {/* Parallax Background Image */}
          <motion.div 
            className="absolute -inset-[20%] z-0 opacity-60 group-hover:scale-105 transition-transform duration-1000"
            style={{ y: yBg }}
          >
            <img loading="lazy" 
              src={cityImages[cityId?.toLowerCase()] || cityImages.default} 
              alt={`${formattedCity} Landscape`}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating animated orbs */}
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-32 h-32 bg-[var(--color-aurora-purple)] rounded-full blur-[60px] opacity-30 z-0"
          />
          <motion.div 
            animate={{ 
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-10 w-48 h-48 bg-[var(--color-aurora-green)] rounded-full blur-[80px] opacity-20 z-0"
          />

          <motion.div style={{ opacity: opacityText }} className="relative z-20 text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-brand-green)]">
                <MapPin size={16} />
                <span>Service Location</span>
              </div>
              <h1 className="text-3xl md:text-5xl md:text-7xl font-bold text-[var(--foreground)] mb-6 tracking-tight drop-shadow-2xl">
                Astrology in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-aurora-green)] to-[var(--color-aurora-purple)]">{formattedCity}</span>
              </h1>
            </motion.div>
          </motion.div>
        </div>

        {/* 4 Line Description */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto text-center mb-12 lg:mb-24 glass p-6 md:p-10 rounded-3xl border border-[var(--color-brand-yellow)]/10 shadow-2xl relative"
        >
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[var(--color-aurora-purple)] opacity-10 rounded-full blur-[40px]"></div>
          <p className="text-xl md:text-2xl text-[var(--foreground)] leading-relaxed font-light relative z-10">
            Pandit Rudradev proudly offers his world-renowned astrological and spiritual healing services to the residents of {formattedCity}. 
            Whether you are facing severe relationship struggles, unprecedented financial losses, or unexplainable health issues, his profound Vedic insights can guide you toward lasting peace. 
            All consultations in {formattedCity} are strictly confidential, highly accurate, and designed to provide immediate, powerful remedies. 
            Don't let distance or despair hold you back; experience transformative spiritual clarity in {formattedCity} today.
          </p>
        </motion.div>

        {/* Services in this location */}
        <div className="mb-10 md:mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 tracking-tight"
           >
             All Services Provided in <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-aurora-green)] to-[var(--color-aurora-purple)]">{formattedCity}</span>
           </motion.h2>
           
           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, margin: "-100px" }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 [perspective:1000px]"
           >
              {allServices.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    rotateX: 5, 
                    rotateY: -5,
                    boxShadow: "0 20px 40px -20px rgba(99, 102, 241, 0.5)" 
                  }}
                  className="rounded-3xl shadow-lg relative h-full"
                >
                  <Link 
                    to={`/services/${service.id}`}
                    className="group block relative overflow-hidden p-6 md:p-8 rounded-3xl border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-green)]"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url("${service.image}")` }}
                    ></div>
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-0"></div>
                    
                    {/* Dynamic Color Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 mix-blend-overlay`}></div>

                    {/* Subtle shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none z-0"></div>

                    <div className="relative z-10 flex flex-col h-full justify-end">
                      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--color-aurora-green)] transition-colors drop-shadow-md">{service.title}</h3>
                      <p className="text-[var(--foreground)] text-sm leading-relaxed mb-4 drop-shadow-md">{service.desc}</p>
                      <div className="mt-auto pt-4 border-t border-[var(--color-brand-yellow)]/10 group-hover:border-[var(--color-brand-green)]">
                        <span className="inline-flex items-center gap-2 text-sm text-[var(--color-aurora-green)] font-semibold group-hover:text-[var(--foreground)] transition-colors">
                          View Details <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
           </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mt-10 md:mt-16">
          <TestimonialCarousel />
        </div>

      </div>
    </div>
  );
};

export default LocationDetail;
