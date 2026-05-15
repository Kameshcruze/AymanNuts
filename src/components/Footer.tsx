import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold-500/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <img 
                src="/aymannuts_logo.jpg"
                alt="Logo"
                className="w-12 h-12 rounded-full border border-gold-500 object-cover"
              />
              <div>
                <h2 className="text-xl font-serif font-bold tracking-wider">AYMAN <span className="text-gold-500">NUTS</span></h2>
                <p className="text-[10px] text-gold-500 tracking-[0.2em] uppercase">Luxury Dry Fruits</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Premium nuts and dry fruits delivered across India. Experience the luxury of health and taste in every bite.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(184, 134, 11, 0.2)' }}
                  href="#"
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gold-400 group transition-colors hover:border-gold-500/50"
                >
                  <Icon className="w-5 h-5 shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 tracking-wide text-gold-200">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Shop Collection', 'Featured Categories', 'Track Order', 'FAQ', 'Contact Us'].map((link) => (
                <li key={link}>
                  {link === 'Contact Us' ? (
                    <Link to="/contact" className="text-sm text-white/50 hover:text-gold-400 transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-gold-600" />
                      {link}
                    </Link>
                  ) : link === 'Shop Collection' ? (
                    <Link to="/shop" className="text-sm text-white/50 hover:text-gold-400 transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-gold-600" />
                      {link}
                    </Link>
                  ) : (
                    <a href="#" className="text-sm text-white/50 hover:text-gold-400 transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-gold-600" />
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 tracking-wide text-gold-200">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm text-white/60">
                  No:18, Popular Site, Poonga Nagar Road,<br />
                  Near Hotel T&T, Coimbatore,<br />
                  Tamil Nadu – 641008
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="tel:+918438037303" className="text-sm text-white/60 hover:text-white transition-colors">+91 8438037303</a>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquare className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="https://wa.me/919585262522" className="text-sm text-white/60 hover:text-white transition-colors">+91 9585262522</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 tracking-wide text-gold-200">Newsletter</h3>
            <p className="text-sm text-white/60 mb-6">Subscribe to receive updates, recipes, and exclusive offers.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-gold-500/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 gold-gradient text-premium-dark px-6 rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40">© 2026 Ayman Nuts & Dry Fruits. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-gold-500 transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-gold-500 transition-colors font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
