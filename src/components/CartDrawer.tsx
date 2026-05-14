import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-premium-dark z-[110] flex flex-col shadow-2xl border-l border-gold-500/20"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black">
              <div className="flex items-center gap-4">
                <ShoppingBag className="w-6 h-6 text-gold-500" />
                <h2 className="text-xl font-serif font-bold tracking-wider">Your Shopping Bag</h2>
                <span className="bg-gold-500/20 text-gold-400 text-xs font-bold px-2 py-1 rounded-full">{totalItems}</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group relative"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/5">
                      <img src={item.images[0]} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-sm font-bold mb-1 truncate pr-8 text-white">{item.name}</h4>
                      <p className="text-xs text-gold-500 font-black mb-3">₹{item.price}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden p-0.5">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gold-500/10 text-white/40 hover:text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-black text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gold-500/10 text-white/40 hover:text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-black ml-auto text-white">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 text-white/20 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <ShoppingBag className="w-10 h-10 text-white/10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Your bag is empty</h3>
                  <p className="text-sm text-white/40 max-w-[240px]">Explore our collections and add some premium delights to your bag.</p>
                  <button 
                    onClick={onClose}
                    className="text-gold-500 font-black text-[10px] uppercase tracking-widest mt-6 border border-gold-500/30 px-8 py-4 rounded-full hover:bg-gold-500 hover:text-black transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-black border-t border-white/5 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/40 font-black uppercase tracking-widest text-[10px]">Subtotal</span>
                  <span className="text-3xl font-serif font-black text-white">₹{totalPrice}</span>
                </div>
                <button 
                  onClick={handleCheckoutClick}
                  className="w-full gold-gradient text-premium-dark py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-gold-500/20 active:scale-95 transition-all"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[9px] text-white/20 uppercase tracking-[0.2em] font-black">
                  Secure WhatsApp Checkout Protected
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
