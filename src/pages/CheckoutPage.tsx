import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  MapPin, 
  Phone, 
  User, 
  ShoppingBag, 
  CreditCard,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  if (cart.length === 0 && !isOrdered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-premium-dark pt-20">
        <div className="text-center animate-in fade-in zoom-in duration-500">
           <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
             <ShoppingBag className="w-10 h-10 text-white/20" />
           </div>
           <h1 className="text-3xl font-serif text-white mb-4">Your bag is empty</h1>
           <p className="text-white/40 mb-12">Add some premium delights to proceed with your order.</p>
           <Link to="/shop" className="gold-gradient text-premium-dark px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-gold-500/20 active:scale-95 transition-all">
             Start Shopping
           </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const phoneNumber = "919585262522";
    const productsList = cart.map(item => `- ${item.name} (${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity})`).join('\n');
    
    const message = `Hello Ayman Nuts & Dry Fruits,

I would like to place a new order:

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city} - ${formData.pincode}

*Products:*
${productsList}

*Grand Total:* ₹${total}

Please confirm my order. Thank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Mark as ordered, clear cart and redirect
    setIsOrdered(true);
    window.open(whatsappUrl, '_blank');
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-premium-dark pt-20 p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-premium-card border border-gold-500/20 rounded-[40px] p-12 text-center shadow-2xl"
        >
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-500/20">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-serif font-black text-white mb-6">Order Placed!</h1>
          <p className="text-white/60 mb-12 leading-relaxed">
            Your order has been sent via WhatsApp. We will contact you shortly to confirm the details and proceed with the payment.
          </p>
          <Link to="/" className="block w-full bg-white/5 border border-white/10 text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24 bg-premium-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-12 py-8 border-b border-white/5">
           <Link to="/shop" className="flex items-center gap-3 text-gold-500 font-black uppercase tracking-[0.2em] text-[10px] group">
             <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/10 transition-all">
               <ChevronLeft className="w-4 h-4" />
             </div>
             Continue Shopping
           </Link>
           <h1 className="text-3xl md:text-4xl font-serif font-black text-white">Checkout</h1>
           <div className="hidden md:flex items-center gap-3 text-white/30 text-[10px] uppercase font-black tracking-widest">
             <ShieldCheck className="w-5 h-5 text-gold-500" />
             Secure Checkout
           </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Left */}
          <div className="lg:col-span-7 space-y-12">
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center border border-gold-500/20">
                    <User className="w-5 h-5 text-gold-500" />
                 </div>
                 <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Personal Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-2">Full Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-2">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-8">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center border border-gold-500/20">
                    <MapPin className="w-5 h-5 text-gold-500" />
                 </div>
                 <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Delivery Address</h2>
              </div>
              <div className="space-y-6">
                 <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-2">Full Address</label>
                  <textarea 
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="House No, Street Name, Area..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20 resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-2">City</label>
                    <input 
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-2">Pincode</label>
                    <input 
                      required
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="6-digit ZIP code" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gold-500/5 p-8 rounded-[32px] border border-gold-500/20">
               <div className="flex items-center gap-4 mb-4">
                  <CreditCard className="w-5 h-5 text-gold-500" />
                  <h3 className="font-serif font-bold text-white">Payment Method</h3>
               </div>
               <p className="text-xs text-white/60 leading-relaxed">
                 We currently only support <b>WhatsApp Order Confirmation</b>. After placing the order, we will share a secure payment link (UPI/Card) or banking details on WhatsApp.
               </p>
            </section>
          </div>

          {/* Form Right - Item Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-40 bg-white/[0.02] border border-white/10 rounded-[40px] p-10 overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-1 gold-gradient opacity-30" />
               <h2 className="text-2xl font-serif font-black text-white mb-8 tracking-wider">Order Summary</h2>
               
               <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 group">
                       <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/5 group-hover:border-gold-500/30 transition-all duration-500">
                         <img src={item.images[0]} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-1">
                          <h4 className="text-white font-serif font-bold text-sm mb-1 line-clamp-1">{item.name}</h4>
                          <span className="text-[10px] uppercase font-black tracking-widest text-white/40 block mb-2">{item.quantity} × ₹{item.price}</span>
                          <span className="text-gold-500 font-bold text-sm">₹{item.price * item.quantity}</span>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="space-y-4 pt-10 border-t border-white/5">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-bold tracking-widest text-[10px] uppercase">Subtotal</span>
                    <span className="text-white font-medium">₹{total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-bold tracking-widest text-[10px] uppercase">Shipping</span>
                    <span className="text-green-500 font-bold tracking-wider">FREE</span>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-6">
                    <span className="text-xl font-serif font-black text-white tracking-wider">Total Amount</span>
                    <span className="text-3xl font-serif font-black text-gold-500">₹{total}</span>
                  </div>
               </div>

               <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full gold-gradient text-premium-dark font-black uppercase tracking-[0.3em] py-6 rounded-2xl mt-12 text-[10px] flex items-center justify-center gap-3 shadow-xl shadow-gold-500/20 hover:brightness-110 transition-all"
               >
                 Place Order via WhatsApp
                 <ChevronRight className="w-4 h-4" />
               </motion.button>

               <div className="mt-8 text-center text-[9px] uppercase tracking-[0.2em] font-black text-white/20">
                 Secure Checkout Powered by Ayman Premium
               </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
