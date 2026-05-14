import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { categories } from '../data';

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs block"
            >
              Exquisite Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wide"
            >
              Explore our Collections
            </motion.h2>
          </div>
          <Link to="/shop" className="text-gold-500 font-bold uppercase tracking-widest text-xs border-b border-gold-500/20 pb-1 hover:text-gold-300 transition-colors">
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <Link to={`/shop?category=${category.id}`}>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">{category.name}</h3>
                  <p className="text-xs text-white/60 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-[200px]">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold-500 font-bold text-[10px] uppercase tracking-widest">
                    <span>Explore Now</span>
                    <div className="w-8 h-[1px] bg-gold-500 group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
