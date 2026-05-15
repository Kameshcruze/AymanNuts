import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Mail, 
  ChevronRight, 
  Send, 
  Clock, 
  Truck, 
  Plus, 
  Minus,
  Instagram,
  ArrowRight
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-serif font-bold transition-colors ${isOpen ? 'text-gold-500' : 'text-white group-hover:text-gold-400'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-gold-500 border-gold-500 rotate-180' : 'group-hover:border-gold-500/50'}`}>
          {isOpen ? <Minus className="w-4 h-4 text-premium-dark" /> : <Plus className="w-4 h-4 text-gold-500" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-white/60 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    const message = `Hello Ayman Nuts & Dry Fruits,\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919585262522?text=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8438037303',
      href: 'tel:+918438037303',
      label: 'Call Us'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+91 9585262522',
      href: 'https://wa.me/919585262522',
      label: 'Chat Now'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'No:18, Popular Site, Poonga Nagar Road, Coimbatore',
      href: 'https://goo.gl/maps/XYZ', // Placeholder, will update with real link
      label: 'Visit Us'
    },
    {
      icon: Truck,
      title: 'Shipping',
      value: 'All India Shipping Available 🚚',
      href: '#',
      label: 'Delivery Info'
    }
  ];

  const faqs = [
    {
      question: 'Do you provide shipping across India?',
      answer: 'Yes, we provide all India shipping. We use premium courier partners to ensure your products reach you fresh and on time.'
    },
    {
      question: 'Do you accept bulk orders?',
      answer: 'Yes, bulk and customized orders are available. Whether it is for corporate gifting or wedding events, we can accommodate your needs.'
    },
    {
      question: 'Are gift hampers customizable?',
      answer: 'Yes, gift hampers can be fully customized according to your preferences and budget. You can choose from our wide range of products.'
    }
  ];

  return (
    <div className="min-h-screen bg-premium-dark text-white selection:bg-gold-500/30 selection:text-gold-200">
      {/* Breadcrumbs */}
      <div className="pt-20 lg:pt-32 pb-4">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-white/30">
            <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold-500">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Items */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[60%] aspect-square rounded-full bg-gold-500/10 blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, -45, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[50%] aspect-square rounded-full bg-gold-500/5 blur-[100px]"
          />
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [-20, -100],
                x: [0, (i % 2 === 0 ? 30 : -30)],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 5 + i * 2, 
                repeat: Infinity, 
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-gold-500 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${80 - i * 10}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-8 tracking-tight">
              Get In <span className="gold-text-gradient italic">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
              We're here to help you with premium nuts, dry fruits, gift hampers, imported products and more.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="gold-gradient text-premium-dark px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-black/40 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all duration-500">
                    <info.icon className="w-6 h-6 text-gold-500 group-hover:text-premium-dark transition-colors" />
                  </div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mb-2">{info.title}</h3>
                  <p className="text-lg font-serif font-bold text-white mb-4 group-hover:text-gold-200 transition-colors line-clamp-2 md:line-clamp-none">
                    {info.value}
                  </p>
                  <div className="flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest">
                    <span>{info.label}</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-20 p-10 rounded-[40px] bg-white/[0.01] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-serif font-bold mb-4">Ayman Nuts & Dry Fruits</h2>
              <p className="text-white/40 leading-relaxed">
                Nuts | Dry Fruits | Dates | Seeds | Perfumes | Gift Hampers | Return Gifts | Imported Chocolates
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['Premium Quality', 'Eco-Friendly Pack', 'Bulk Orders', 'Custom Gifts'].map((tag) => (
                <span key={tag} className="px-6 py-3 rounded-full border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white/60">
                   {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section id="contact-form" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Drop us a line</h2>
                  <p className="text-white/40 max-w-lg mb-8">
                    Interested in bulk orders or just have a question? Our team is available to assist you.
                  </p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20 text-white font-medium"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gold-500 w-0 group-focus-within:w-full transition-all duration-500" />
                  </div>
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20 text-white font-medium"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gold-500 w-0 group-focus-within:w-full transition-all duration-500" />
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20 text-white font-medium"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gold-500 w-0 group-focus-within:w-full transition-all duration-500" />
                  </div>
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20 text-white font-medium"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gold-500 w-0 group-focus-within:w-full transition-all duration-500" />
                  </div>
                  <div className="md:col-span-2 relative group mt-4">
                    <textarea 
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/20 text-white font-medium resize-none"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gold-500 w-0 group-focus-within:w-full transition-all duration-500" />
                  </div>
                  
                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 pt-8">
                    <button className="flex-1 gold-gradient text-premium-dark px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 group hover:shadow-2xl hover:shadow-gold-500/20 transition-all">
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <button 
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-gold-500" />
                      <span>WhatsApp Us</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Sidebar Details & Hours */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Store Location */}
                <div className="p-6 md:p-10 rounded-[40px] bg-white/[0.02] border border-white/5 space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MapPin className="w-32 h-32 text-gold-500" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide">Visit Our Store</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <MapPin className="w-6 h-6 text-gold-500 shrink-0" />
                        <div>
                          <p className="font-serif font-bold text-white mb-2">Ayman Nuts & Dry Fruits</p>
                          <p className="text-white/50 text-sm leading-relaxed">
                            No:18, Popular Site, Poonga Nagar Road,<br />
                            Near Hotel T&T, Coimbatore,<br />
                            Tamil Nadu – 641008
                          </p>
                        </div>
                      </div>
                      <button 
                        onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Ayman+Nuts+Dry+Fruits+Coimbatore', '_blank')}
                        className="text-gold-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group/btn"
                      >
                        <span>Get Directions</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mb-6 flex items-center gap-3">
                      <Clock className="w-4 h-4" />
                      Business Hours
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-white/40">Mon – Sat</span>
                        <span className="text-gold-200">9:00 AM – 9:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-white/40">Sunday</span>
                        <span className="text-gold-200">10:00 AM – 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Socials Placeholder */}
                <div className="flex gap-4">
                   <div className="flex-1 p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center gap-4 group cursor-pointer">
                      <Instagram className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] uppercase tracking-widest font-black">Instagram</span>
                   </div>
                   <div className="flex-1 p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center gap-4 group cursor-pointer">
                      <Phone className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] uppercase tracking-widest font-black">Inquire</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-12 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-full h-[500px] rounded-[40px] overflow-hidden border border-white/5 grayscale invert brightness-90 contrast-125 transition-all duration-700 hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:contrast-100"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890!2d76.9999999!3d11.0000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f974011%3A0x73702a4addec5893!2sAyman%20Nuts%20%26%20Dry%20Fruits!5e0!3m2!1sen!2sin!4v1715690000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
           </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-black/40 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
                Clear answers to common questions about our products, delivery, and services.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] aspect-square bg-gold-500/5 blur-[100px] rounded-full" />
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="p-16 lg:p-24 rounded-[60px] bg-white/[0.02] border border-white/5 relative group bg-noise shadow-2xl shadow-black/40"
          >
            <div className="w-20 h-20 gold-gradient rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-gold-500/20 group-hover:scale-110 transition-transform duration-500">
               <Mail className="w-8 h-8 text-premium-dark" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 tracking-tight">Stay <span className="gold-text-gradient italic">Updated</span></h2>
            <p className="text-lg text-white/50 mb-12 font-sans">Get updates on new arrivals and offers delivered straight to your inbox.</p>
            
            <div className="max-w-md mx-auto relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 pr-16 focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-white/20 text-sm font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 w-12 h-12 gold-gradient text-premium-dark rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
