import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, Grid, List as ListIcon, X, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data';
import { SortOption, ViewMode } from '../types';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const currentCategoryObj = categories.find(c => c.id === selectedCategory);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'newest':
        result = result.filter(p => p.isNew);
        break;
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen pt-20 pb-24 bg-premium-dark">
      {/* Category Banner (Dynamic) */}
      {selectedCategory && currentCategoryObj && (
        <div className="relative h-[300px] mb-12 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            src={currentCategoryObj.image} 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-dark to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-gold-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4"
             >
               Collection
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
             >
               {currentCategoryObj.name}
             </motion.h1>
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 max-w-xl text-sm"
              >
                {currentCategoryObj.description}
             </motion.p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-8">
        {!selectedCategory && (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 pt-4 md:pt-8 pb-6 md:pb-12 border-b border-white/5 mb-6 md:mb-12">
            <div>
              <h1 className="text-2xl md:text-5xl font-serif font-bold mb-2 md:mb-4 tracking-wide text-white">The Collection</h1>
              <p className="text-white/40 text-xs md:text-sm">Showing {filteredProducts.length} premium products</p>
            </div>
            
            <div className="relative group max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gold-500/50 group-focus-within:text-gold-500 transition-colors" />
              <input 
                type="text"
                placeholder="Search our selection..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 md:py-4 pl-10 md:pl-12 pr-6 text-xs md:text-sm focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-white/20 text-white"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-12 sticky top-28 h-fit max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar pr-4">
            <div>
              <h3 className="font-serif text-lg font-bold mb-6 tracking-wide text-gold-200 uppercase text-[10px]">Categories</h3>
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => {setSelectedCategory(null); setSearchParams({});}}
                  className={`text-sm text-left transition-colors font-black uppercase tracking-wider ${!selectedCategory ? 'text-gold-500' : 'text-white/40 hover:text-gold-300'}`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => {setSelectedCategory(cat.id); setSearchParams({ category: cat.id });}}
                    className={`text-sm text-left transition-colors capitalize tracking-wide ${selectedCategory === cat.id ? 'text-gold-500 font-bold' : 'text-white/40 hover:text-gold-300'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold mb-6 tracking-wide text-gold-200 uppercase text-[10px]">Sort By</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white/60 focus:outline-none focus:border-gold-500 cursor-pointer appearance-none"
              >
                <option value="featured" className="bg-premium-dark">Featured</option>
                <option value="newest" className="bg-premium-dark">Newest First</option>
                <option value="price-low-high" className="bg-premium-dark">Price: Low to High</option>
                <option value="price-high-low" className="bg-premium-dark">Price: High to Low</option>
                <option value="rating" className="bg-premium-dark">Top Rated</option>
              </select>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4 md:mb-8">
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-gold-500 font-bold text-xs uppercase tracking-widest"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              
              <div className="flex items-center gap-4 ml-auto">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-gold-500 bg-gold-500/10' : 'text-white/20 hover:text-white'} rounded-lg`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${viewMode === 'list' ? 'text-gold-500 bg-gold-500/10' : 'text-white/20 hover:text-white'} rounded-lg`}
                >
                  <ListIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={`grid gap-3 md:gap-8 ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
                <p className="text-white/40 mb-6 font-serif text-xl italic">"No matching delights found."</p>
                <button 
                  onClick={() => {setSearch(''); setSelectedCategory(null); setSearchParams({});}}
                  className="text-gold-500 font-bold uppercase tracking-widest text-[10px] border border-gold-500/30 px-6 py-3 rounded-full hover:bg-gold-500 hover:text-black transition-all"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-xs bg-premium-dark z-[110] p-8 lg:hidden flex flex-col shadow-2xl border-r border-gold-500/20"
            >
              <div className="flex items-center justify-between mb-12">
                 <h2 className="text-xl font-serif font-bold tracking-wider">Filters</h2>
                 <button onClick={() => setIsFilterOpen(false)}>
                   <X className="w-6 h-6 text-gold-500" />
                 </button>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-12">
                <div>
                  <h3 className="font-serif text-lg font-bold mb-6 text-gold-200 uppercase text-[10px] tracking-widest">Categories</h3>
                  <div className="flex flex-col gap-6">
                    <button 
                      onClick={() => {setSelectedCategory(null); setSearchParams({}); setIsFilterOpen(false);}}
                      className={`text-lg text-left tracking-wide ${!selectedCategory ? 'text-gold-500 font-bold' : 'text-white/60'}`}
                    >
                      All Collections
                    </button>
                    {categories.map(cat => (
                      <button 
                        key={cat.id}
                        onClick={() => {setSelectedCategory(cat.id); setSearchParams({ category: cat.id }); setIsFilterOpen(false);}}
                        className={`text-lg text-left tracking-wide ${selectedCategory === cat.id ? 'text-gold-500 font-bold' : 'text-white/60'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsFilterOpen(false)}
                className="mt-auto w-full gold-gradient text-premium-dark py-5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-gold-500/20"
              >
                Apply Filters
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
