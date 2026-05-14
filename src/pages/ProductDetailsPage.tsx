import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  ChevronRight, 
  Minus, 
  Plus, 
  Check, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Maximize2,
  X
} from 'lucide-react';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(product?.weightOptions?.[0] || '');
  const [activeTab, setActiveTab] = useState('description');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-premium-dark">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-white mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-gold-500 underline uppercase tracking-widest text-xs font-black">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product); // Add to cart first
    navigate('/checkout'); // Direct to checkout
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-premium-dark pt-20 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 group shadow-2xl shadow-black/50">
              <motion.img 
                key={selectedImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                src={product.images[selectedImage]} 
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <button 
                onClick={() => setIsFullscreen(true)}
                className="absolute top-6 right-6 p-3 bg-black/60 rounded-full text-white/80 hover:text-gold-500 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-5 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-gold-500 scale-95 shadow-lg shadow-gold-500/20' : 'border-white/5 opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${idx}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <div className="space-y-2 mb-6">
               <span className="text-gold-500 text-[10px] uppercase font-black tracking-[0.4em]">{product.category}</span>
               <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{product.name}</h1>
               <div className="flex items-center gap-4 pt-2">
                 <div className="flex items-center gap-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-white/20'}`} />
                   ))}
                 </div>
                 <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">{product.reviewsCount} Authentic Reviews</span>
               </div>
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-200 to-gold-600">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-white/20 line-through">₹{product.originalPrice}</span>
              )}
              {product.badge && (
                <span className="bg-gold-500/10 text-gold-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-gold-500/20">{product.badge}</span>
              )}
            </div>

            <p className="text-white/60 leading-relaxed max-w-xl mb-8">
              {product.shortDescription || product.description}
            </p>

            {product.weightOptions && (
               <div className="mb-8">
                 <h4 className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-4">Pack Size</h4>
                 <div className="flex flex-wrap gap-3">
                    {product.weightOptions.map(opt => (
                      <button 
                        key={opt}
                        onClick={() => setSelectedWeight(opt)}
                        className={`px-6 py-2 rounded-full text-xs transition-all border ${selectedWeight === opt ? 'bg-gold-500 text-black border-gold-500 font-bold' : 'bg-white/5 text-white/60 border-white/10 hover:border-gold-500/50'}`}
                      >
                        {opt}
                      </button>
                    ))}
                 </div>
               </div>
            )}

            <div className="mb-10">
               <h4 className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-4">Quantity</h4>
               <div className="flex items-center gap-6">
                 <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                   <button 
                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
                     className="w-10 h-10 flex items-center justify-center text-white hover:text-gold-500"
                    >
                     <Minus className="w-4 h-4" />
                   </button>
                   <span className="w-12 text-center text-sm font-bold text-white">{quantity}</span>
                   <button 
                     onClick={() => setQuantity(quantity + 1)}
                     className="w-10 h-10 flex items-center justify-center text-white hover:text-gold-500"
                    >
                     <Plus className="w-4 h-4" />
                   </button>
                 </div>
                 <span className={`text-[10px] uppercase tracking-widest font-black ${product.stockStatus === 'In Stock' ? 'text-green-500/80' : 'text-red-500/80'}`}>
                   {product.stockStatus}
                 </span>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
               <button 
                onClick={() => addToCart({ ...product, price: product.price })}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white py-5 rounded-2xl text-[10px] uppercase tracking-widest font-black hover:bg-white hover:text-black transition-all group"
               >
                 <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                 Add to Bag
               </button>
               <button 
                onClick={handleBuyNow}
                className="gold-gradient text-premium-dark py-5 rounded-2xl text-[10px] uppercase font-black tracking-widest hover:brightness-110 transition-all shadow-xl shadow-gold-500/20"
               >
                 Buy Now
               </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/5">
               <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 bg-gold-500/5 rounded-full flex items-center justify-center border border-gold-500/10">
                    <ShieldCheck className="w-5 h-5 text-gold-500" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">100% Purity Guaranteed</span>
               </div>
               <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 bg-gold-500/5 rounded-full flex items-center justify-center border border-gold-500/10">
                    <Truck className="w-5 h-5 text-gold-500" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Pan India Express Delivery</span>
               </div>
               <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 bg-gold-500/5 rounded-full flex items-center justify-center border border-gold-500/10">
                    <RotateCcw className="w-5 h-5 text-gold-500" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Hassle-Free Returns</span>
               </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center border-b border-white/5 mb-12">
             {['description', 'specifications', 'benefits', 'shipping', 'reviews'].map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-8 py-6 text-[10px] uppercase tracking-[0.3em] font-black transition-all relative ${activeTab === tab ? 'text-gold-500' : 'text-white/30 hover:text-white'}`}
               >
                 {tab}
                 {activeTab === tab && (
                   <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500" />
                 )}
               </button>
             ))}
          </div>

          <div className="max-w-4xl mx-auto min-h-[300px]">
             <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                   {activeTab === 'description' && (
                     <div className="space-y-6 text-white/70 leading-relaxed">
                        <p>{product.description}</p>
                        {product.ingredients && (
                          <div>
                            <h5 className="text-white font-serif text-xl mb-4">Ingredients</h5>
                            <ul className="grid grid-cols-2 gap-4">
                               {product.ingredients.map(ing => (
                                 <li key={ing} className="flex items-center gap-2 text-sm">
                                   <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                                   {ing}
                                 </li>
                               ))}
                            </ul>
                          </div>
                        )}
                     </div>
                   )}

                   {activeTab === 'specifications' && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {product.specifications && Object.entries(product.specifications).map(([key, val]) => (
                          <div key={key} className="flex justify-between py-4 border-b border-white/5">
                            <span className="text-xs uppercase tracking-widest text-white/40 font-black">{key}</span>
                            <span className="text-sm text-white font-medium">{val}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {activeTab === 'benefits' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {product.benefits?.map((benefit, idx) => (
                           <div key={idx} className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                             <div className="w-6 h-6 bg-gold-500/20 rounded-full flex flex-shrink-0 items-center justify-center">
                               <Check className="w-3 h-3 text-gold-500" />
                             </div>
                             <p className="text-sm text-white/70">{benefit}</p>
                           </div>
                        ))}
                      </div>
                   )}

                   {activeTab === 'shipping' && (
                     <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 text-center">
                        <Truck className="w-12 h-12 text-gold-500 mx-auto mb-6" />
                        <h4 className="text-2xl font-serif text-white mb-4">Shipping Information</h4>
                        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                          {product.shippingInfo || "We offer express shipping across India. All orders are packed with extra care to ensure premium freshness. Free shipping on orders above ₹1500."}
                        </p>
                     </div>
                   )}

                   {activeTab === 'reviews' && (
                      <div className="space-y-12">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="text-center p-8 bg-white/[0.02] rounded-3xl border border-white/5">
                               <div className="text-6xl font-serif font-black text-white mb-2">{product.rating}</div>
                               <div className="flex items-center justify-center gap-1 mb-4">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-white/20'}`} />
                                  ))}
                               </div>
                               <span className="text-[10px] uppercase tracking-widest text-white/40 font-black">Based on {product.reviewsCount} reviews</span>
                            </div>
                            <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                               {[5,4,3,2,1].map(star => (
                                 <div key={star} className="flex items-center gap-4">
                                    <span className="text-xs text-white/40 w-4">{star}</span>
                                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                       <div className="h-full bg-gold-500" style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : '2%' }} />
                                    </div>
                                    <span className="text-xs text-white/40 w-8">{star === 5 ? '85%' : star === 4 ? '10%' : '2%'}</span>
                                 </div>
                               ))}
                            </div>
                         </div>

                         <div className="space-y-8">
                            {product.reviews?.map(review => (
                              <div key={review.id} className="bg-white/[0.02] p-8 rounded-3xl border border-white/5">
                                 <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 font-bold text-gold-500 font-serif">
                                        {review.user[0]}
                                      </div>
                                      <div>
                                        <h5 className="text-white font-bold">{review.user}</h5>
                                        <div className="flex items-center gap-1">
                                          {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-2.5 h-2.5 ${i < review.rating ? 'text-gold-400 fill-gold-400' : 'text-white/20'}`} />
                                          ))}
                                          <span className="text-[10px] text-white/20 ml-2">{review.date}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-green-500/60 uppercase text-[9px] font-black tracking-widest">
                                       <ShieldCheck className="w-3 h-3" /> Verified Purchase
                                    </div>
                                 </div>
                                 <p className="text-white/60 text-sm leading-relaxed">{review.comment}</p>
                              </div>
                            ))}
                         </div>
                      </div>
                   )}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="text-center mb-16">
              <span className="text-gold-500 text-[10px] uppercase font-black tracking-[0.4em] mb-4 block">You may also like</span>
              <h2 className="text-4xl font-serif font-bold text-white">Related Collections</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center p-4 md:p-12"
          >
             <button 
              onClick={() => setIsFullscreen(false)}
              className="absolute top-12 right-12 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all"
             >
               <X className="w-6 h-6" />
             </button>
             <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={product.images[selectedImage]} 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain rounded-3xl"
             />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
