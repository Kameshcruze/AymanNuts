import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1547496613-2e22c076579b?q=80&w=2000&auto=format&fit=crop',
    subtitle: 'PREMIUM QUALITY GUARANTEED',
    title: 'Exotic Nuts &\nPremium Dry Fruits',
    description: 'Elevate your snacking experience with hand-picked quality nut selections delivered straight to your doorstep across India.'
  },
  {
    image: 'https://images.unsplash.com/photo-1549117621-39659392e213?q=80&w=2000&auto=format&fit=crop',
    subtitle: 'NATURE\'S FINEST GIFTS',
    title: 'Luxury Gift Hampers &\nReturn Gifts',
    description: 'Celebrate special moments with our thoughtfully curated gift collections, perfect for weddings, festivals, and corporate events.'
  },
  {
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2000&auto=format&fit=crop',
    subtitle: 'FESTIVE SPECIAL',
    title: 'Imported Chocolates &\nExotic Dates',
    description: 'Indulge in the world\'s finest chocolate collections and premium dates imported from across the globe.'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => index === current && (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Image Wrap with subtle zoom */}
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10 }}
              className="absolute inset-0"
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-block text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 border-b border-gold-500/30 pb-1">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl leading-relaxed font-light">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="gold-gradient text-premium-dark px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-2xl shadow-gold-500/30 flex items-center gap-3 transition-opacity hover:opacity-90"
                    >
                      Shop Now <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05, borderColor: 'rgba(184, 134, 11, 0.6)' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                      Explore Collection
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Nav Controls */}
      <div className="absolute bottom-12 right-4 md:right-12 z-20 flex items-center gap-6">
        <div className="flex items-center gap-4 mr-8">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-gold-500' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button 
            onClick={prev}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-premium-dark hover:border-gold-500 transition-all transition-duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-premium-dark hover:border-gold-500 transition-all transition-duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500/60 to-transparent" />
      </motion.div>
    </section>
  );
}
