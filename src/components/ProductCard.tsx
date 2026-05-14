import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye, Star, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-premium-card rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gold-500 text-premium-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-gold-500/20">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 shrink-0">
        <Link to={`/product/${product.id}`}>
          <motion.img 
            src={product.images[0]} 
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
          <button 
            onClick={() => addToCart(product)}
            className="w-12 h-12 bg-gold-500 text-premium-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-medium text-white group-hover:text-gold-200 transition-colors mb-2 line-clamp-1">{product.name}</h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-white/20'}`} />
          ))}
          <span className="text-[10px] text-white/40 ml-1">({product.reviewsCount})</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-white">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-white/30 line-through font-medium">₹{product.originalPrice}</span>
              )}
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-xl text-[10px] uppercase tracking-widest font-black hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all"
            >
              Add to Bag
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="px-4 bg-gold-500/10 border border-gold-500/20 text-gold-500 py-3 rounded-xl hover:bg-gold-500/20 transition-all flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
