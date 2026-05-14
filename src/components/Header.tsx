import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Phone, Instagram, MapPin, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/' ? 'bg-premium-dark/95 backdrop-blur-lg py-3 shadow-2xl border-b border-gold-500/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-gold-300"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1623307567702-8610fe719463?q=80&w=200&auto=format&fit=crop"
            alt="Ayman Nuts Logo"
            referrerPolicy="no-referrer"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gold-500 shadow-lg shadow-gold-500/20"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-serif font-bold text-white tracking-wider leading-none uppercase">
              AYMAN <span className="text-gold-500">NUTS</span>
            </h1>
            <p className="text-[10px] text-gold-400 font-sans tracking-[0.2em] uppercase mt-1">Luxury Dry Fruits</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                location.pathname === link.href ? 'text-gold-500' : 'text-white/70 hover:text-gold-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden md:block p-2 text-white/70 hover:text-gold-400 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-white/70 hover:text-gold-400 transition-colors relative" onClick={onOpenCart}>
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-500 text-premium-dark text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-premium-dark animate-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-premium-dark z-[70] p-8 shadow-2xl border-r border-gold-500/20 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1623307567702-8610fe719463?q=80&w=200&auto=format&fit=crop"
                    alt="Logo"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full border-2 border-gold-500"
                  />
                  <div className="font-serif">
                    <p className="font-bold tracking-wider leading-none">AYMAN NUTS</p>
                    <p className="text-[8px] text-gold-500 tracking-[0.2em] font-sans mt-1">EST. 2018</p>
                  </div>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-8 h-8 text-gold-500" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                  >
                    <Link
                      to={link.href}
                      className="text-3xl font-serif font-medium text-white/90 hover:text-gold-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/5 space-y-8">
                 <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Connect With us</p>
                    <div className="flex gap-6">
                      <Instagram className="w-6 h-6 text-gold-400 hover:text-white transition-colors" />
                      <Phone className="w-6 h-6 text-gold-400 hover:text-white transition-colors" />
                      <MapPin className="w-6 h-6 text-gold-400 hover:text-white transition-colors" />
                    </div>
                 </div>
                 <div className="bg-gold-500/5 p-6 rounded-2xl border border-gold-500/10">
                    <p className="text-xs text-gold-200 leading-relaxed italic mb-4">"Premium Nuts & Dry Fruits Delivered Across India"</p>
                    <p className="text-[10px] text-gold-500 font-bold uppercase tracking-widest">Coimbatore, Tamil Nadu</p>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
