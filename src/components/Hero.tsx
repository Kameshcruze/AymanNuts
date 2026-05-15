import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen min-h-[600px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {/* Static high quality image */}
        <div className="absolute inset-0">
          <img 
            src="/Product Images/Product Images/dryfruits/dryfruits_2.jpg" 
            alt="Premium Dry Fruits Collection" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-end pb-20 md:pb-0 md:justify-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-4 md:mb-6 border-b border-gold-500/30 pb-1">
                PREMIUM QUALITY GUARANTEED
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 md:mb-8 leading-[1.1]">
                Exotic Nuts &<br className="hidden md:block" /> Premium Dry Fruits
              </h1>
              <p className="text-sm md:text-xl text-white/70 mb-8 md:mb-12 max-w-xl leading-relaxed font-light">
                Elevate your snacking experience with hand-picked quality nut selections delivered straight to your doorstep across India.
              </p>
              
              <div className="flex flex-wrap gap-4 md:gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gold-gradient text-premium-dark px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest shadow-2xl shadow-gold-500/30 flex items-center gap-3 transition-opacity hover:opacity-90"
                >
                  Shop Now <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, borderColor: 'rgba(184, 134, 11, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Explore Collection
                </motion.button>
              </div>
            </motion.div>
          </div>
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
