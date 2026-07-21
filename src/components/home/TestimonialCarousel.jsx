import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const TestimonialCarousel = () => {
  const testimonials = [
    { 
      name: "Sarah Jenkins", 
      location: "Toronto, ON", 
      image: "https://randomuser.me/api/portraits/women/44.jpg", 
      text: "Pandit Rudradev gave me clarity when I was completely lost in my career. His psychic reading was eerily accurate. Highly recommended for anyone in Canada!" 
    },
    { 
      name: "David Chen", 
      location: "Vancouver, BC", 
      image: "https://randomuser.me/api/portraits/men/32.jpg", 
      text: "I was skeptical at first, but the energy healing session completely removed the heavy burden I'd been carrying for years. A truly gifted spiritual healer." 
    },
    { 
      name: "Amelia Bouchard", 
      location: "Montreal, QC", 
      image: "https://randomuser.me/api/portraits/women/68.jpg", 
      text: "The love astrology insights helped my partner and me understand our core conflicts. We are now happier than ever, thanks to his guidance." 
    },
    { 
      name: "Michael T.", 
      location: "Calgary, AB", 
      image: "https://randomuser.me/api/portraits/men/46.jpg", 
      text: "Professional, confidential, and incredibly insightful. The horoscope reading predicted major life events that allowed me to prepare accordingly." 
    },
    { 
      name: "Priya S.", 
      location: "Ottawa, ON", 
      image: "https://randomuser.me/api/portraits/women/22.jpg", 
      text: "Pandit Rudradev's remedies are simple yet powerful. My business was struggling, and after following his advice, we've seen a massive turnaround." 
    },
    { 
      name: "Robert & Elena", 
      location: "Edmonton, AB", 
      image: "https://randomuser.me/api/portraits/men/85.jpg", 
      text: "We were on the verge of divorce. Pandit Rudradev's spiritual intervention and guidance saved our marriage. We cannot thank him enough." 
    },
    { 
      name: "Jessica W.", 
      location: "Halifax, NS", 
      image: "https://randomuser.me/api/portraits/women/9.jpg", 
      text: "I suffered from unexplainable anxiety and bad luck for months. His black magic removal rituals brought immediate peace back into my life." 
    },
    { 
      name: "Omar K.", 
      location: "Winnipeg, MB", 
      image: "https://randomuser.me/api/portraits/men/22.jpg", 
      text: "His Vastu Shastra recommendations for my new office instantly changed the energetic flow. My team is more productive, and profits are up." 
    }
  ];

  return (
    <section className="pt-8 pb-12 lg:pb-24 px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="text-[var(--color-aurora-purple)]">Testimonials</span></h2>
          <p className="text-[var(--foreground)] max-w-2xl mx-auto">Hear from thousands of satisfied clients across Canada.</p>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-8 md:py-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="max-w-md w-full">
              <div className="glass-card p-8 rounded-3xl relative h-full flex flex-col justify-between border border-[var(--color-brand-yellow)]/10 hover:border-[var(--color-brand-yellow)]/10 transition-colors">
                <Quote className="absolute top-6 right-6 text-[var(--color-aurora-green)] opacity-10 w-16 h-16" />
                
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="text-[var(--foreground)]" />
                    ))}
                  </div>
                  <p className="text-[var(--foreground)] mb-8 italic leading-relaxed relative z-10 text-lg">"{testimonial.text}"</p>
                </div>
                
                <div className="border-t border-[var(--color-brand-yellow)]/10 pt-6 mt-auto flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-aurora-purple)] shadow-[0_0_15px_rgba(99, 102, 241, 0.3)] shrink-0">
                    <img loading="lazy" src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--foreground)] text-lg">{testimonial.name}</h4>
                    <p className="text-[var(--color-aurora-green)] text-xs font-semibold uppercase tracking-wider">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
