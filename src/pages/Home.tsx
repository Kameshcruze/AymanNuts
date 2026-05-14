import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Truck, ShieldCheck, Zap, Star, Award, Instagram } from 'lucide-react';
import Hero from '../components/Hero';
import CategoriesSection from '../components/CategoriesSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter(p => !p.isBestSeller).slice(0, 4);

  return (
    <div className="relative min-h-screen pt-20 lg:pt-0">
      <Hero />

      {/* Featured Products */}
      <section id="shop" className="py-24 bg-premium-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold-500 font-bold tracking-[0.4em] uppercase text-xs mb-4"
            >
              Curated Selection
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Best Sellers</h2>
            <p className="text-white/40 max-w-lg font-light leading-relaxed">
              Discover the products that our customers love the most. Hand-picked for quality and taste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CategoriesSection />

      {/* Why Choose Us */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'Sourced from the finest farms around the world.' },
              { icon: ShieldCheck, title: 'Fresh Products', desc: 'Packed carefully to maintain natural freshness.' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Speedy pan-India shipping to your doorstep.' },
              { icon: Zap, title: 'Secure Ordering', desc: 'Simple and reliable ordering via WhatsApp.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 mb-6 group-hover:gold-gradient group-hover:text-premium-dark transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-gold-500/20">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596502591512-9c3fdf92c90c?q=80&w=2000&auto=format&fit=crop" 
            alt="Promo" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-premium-dark via-premium-dark/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 inline-block">Flash Offer</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">Healthy Snacks Delivered To Your Doorstep</h2>
              <p className="text-lg text-white/60 mb-10 font-light italic">
                "Savor the rich taste of hand-picked nuts and premium dry fruits curated just for you."
              </p>
              <button className="gold-gradient text-premium-dark px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-gold-500/20">
                Claim Discount Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs">Recently Added</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wide">New Arrivals</h2>
            </div>
            <button className="hidden sm:block text-gold-500 font-bold uppercase tracking-widest text-xs border-b border-gold-500/20 pb-1 hover:text-gold-300 transition-colors">
              View All Arrivals
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-premium-dark overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col items-center text-center mb-20">
             <span className="text-gold-500 font-bold tracking-[0.4em] uppercase text-xs mb-4">Voices of Trust</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wide">What Our Customers Say</h2>
           </div>

           <div className="flex flex-nowrap gap-8 overflow-x-auto pb-12 snap-x scrollbar-hide no-scrollbar">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i}
                  className="min-w-[320px] md:min-w-[400px] snap-center bg-white/5 border border-white/10 rounded-3xl p-10 relative group"
                >
                  <div className="absolute top-10 right-10 text-gold-500/10 scale-[4] group-hover:text-gold-500/20 transition-all font-serif">"</div>
                  <div className="flex items-center gap-1 mb-6">
                    {/* Stars would go here */}
                  </div>
                  <p className="text-white/70 italic text-lg mb-8 leading-relaxed relative z-10">
                    "The quality of almonds and cashews I received was outstanding. Perfectly roasted and extremely fresh."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center font-bold text-gold-500">
                      {['RK', 'SM', 'AP', 'JN', 'DV'][i-1]}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white tracking-wide">{['Rahul Kumar', 'Sneha M.', 'Anita P.', 'John N.', 'David V.'][i-1]}</h4>
                      <p className="text-xs text-gold-500 uppercase font-bold tracking-widest">Verified Buyer</p>
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-black border-t border-white/5 text-center">
        <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-serif font-bold mb-8">Follow us on Instagram</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                   <div className="w-full h-full bg-neutral-800 animate-pulse" />
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
