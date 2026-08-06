import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen, Star, Heart, Moon } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Posts', icon: BookOpen },
  { id: 'astrology', label: 'Astrology Insights', icon: Star },
  { id: 'horoscopes', label: 'Horoscopes', icon: Moon },
  { id: 'healing', label: 'Spiritual Healing', icon: Heart },
  { id: 'relationships', label: 'Love & Relationships', icon: Heart },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Understanding the 12 Zodiac Elements',
    excerpt: 'Dive deep into Fire, Earth, Air, and Water signs and discover how these elements shape your personality and destiny.',
    category: 'astrology',
    author: 'Pandit Rudradev',
    date: 'Oct 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'The Impact of Retrograde Planets',
    excerpt: 'Mercury retrograde isn\'t the only one! Learn how retrograde movements of different planets affect our daily lives.',
    category: 'astrology',
    author: 'Pandit Rudradev',
    date: 'Nov 02, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Birth Charts: A Beginner\'s Guide',
    excerpt: 'Your natal chart is the blueprint of your soul. Here is how to start reading the positions of the stars at your birth.',
    category: 'astrology',
    author: 'Pandit Rudradev',
    date: 'Jan 22, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1515942661900-94b3d1972591?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Aries Season: Embracing New Beginnings',
    excerpt: 'As the first sign of the zodiac, Aries brings a fresh wave of energy. Here is how to harness this fiery power.',
    category: 'horoscopes',
    author: 'Pandit Rudradev',
    date: 'Mar 20, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Navigating Eclipse Season 2024',
    excerpt: 'Eclipses bring sudden changes and fated events. Find out what the upcoming eclipses mean for your zodiac sign.',
    category: 'horoscopes',
    author: 'Pandit Rudradev',
    date: 'Apr 05, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Weekly Horoscope: Finding Your Balance',
    excerpt: 'This week focuses on finding harmony and balance as the moon moves through Libra. Read your weekly forecast.',
    category: 'horoscopes',
    author: 'Pandit Rudradev',
    date: 'May 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    title: 'The Power of Crystal Healing',
    excerpt: 'Crystals have been used for centuries to balance energy. Discover which crystals align best with your spiritual needs.',
    category: 'healing',
    author: 'Pandit Rudradev',
    date: 'Feb 14, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    title: 'Meditation Techniques for Inner Peace',
    excerpt: 'Simple yet powerful meditation practices to help you connect with your higher self and find tranquility.',
    category: 'healing',
    author: 'Pandit Rudradev',
    date: 'Jun 12, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80',
  },
  {
    id: 9,
    title: 'Chakra Balancing and Alignment',
    excerpt: 'Learn how to identify blocked chakras and techniques to restore the natural flow of energy in your body.',
    category: 'healing',
    author: 'Pandit Rudradev',
    date: 'Aug 03, 2024',
    readTime: '7 min read',
    image: '/images/Como Alinhar os Chakras_ Um Guia Completo para Equilibrar Sua Energia Interior.webp',
  },
  {
    id: 10,
    title: 'Astrology Compatibility Explained',
    excerpt: 'Are you meant to be? Understand the complexities of astrological compatibility and synastry charts.',
    category: 'relationships',
    author: 'Pandit Rudradev',
    date: 'Sep 09, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80',
  },
  {
    id: 11,
    title: 'Twin Flames and Soulmates',
    excerpt: 'What is the difference between a twin flame and a soulmate? Explore the spiritual connections between souls.',
    category: 'relationships',
    author: 'Pandit Rudradev',
    date: 'Oct 21, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80',
  },
  {
    id: 12,
    title: 'Healing After a Breakup: A Spiritual Approach',
    excerpt: 'How to use spiritual practices and astrological insights to heal a broken heart and move forward.',
    category: 'relationships',
    author: 'Pandit Rudradev',
    date: 'Nov 11, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80',
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen pt-8 pb-12 lg:pb-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-green)]"
          >
            <BookOpen size={18} />
            <span className="text-sm font-semibold tracking-wider uppercase">Our Blog</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow"
          >
            Spiritual Insights & <span className="text-[var(--color-aurora-green)]">Wisdom</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--foreground)] text-lg"
          >
            Explore our collection of articles, horoscopes, and spiritual teachings to guide you on your journey.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10 md:mb-16"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button aria-label="Interactive Button"
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[var(--color-aurora-green)] text-[#fafafa] font-semibold shadow-[0_0_20px_rgba(99, 102, 241, 0.4)]'
                    : 'glass text-[var(--foreground)] hover:text-[var(--foreground)] hover:border-[var(--color-brand-green)]'
                }`}
              >
                <Icon size={18} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Blog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl overflow-hidden group hover:border-[var(--color-brand-green)]"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[#6366f1]/20 group-hover:bg-transparent transition-colors z-10" />
                  <img loading="lazy" 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#6366f1]/60 backdrop-blur-md rounded-full text-[var(--color-aurora-green)] border border-[var(--color-brand-green)]">
                      {CATEGORIES.find(c => c.id === post.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--color-aurora-green)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[var(--foreground)] text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-[var(--foreground)]">
                        <User size={14} className="text-[var(--color-aurora-green)]" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[var(--foreground)]">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <button aria-label="Interactive Button" className="w-10 h-10 rounded-full flex items-center justify-center glass group-hover:bg-[var(--color-aurora-green)] group-hover:text-[#fafafa] transition-all duration-300">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Blogs;
