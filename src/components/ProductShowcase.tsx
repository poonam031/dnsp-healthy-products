import React, { useState, useMemo } from 'react';
import { 
  Search, Sparkles, HeartHandshake, Leaf, 
  RotateCcw, ArrowUpDown, PackageCheck 
} from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';

interface ProductShowcaseProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onOpenDetails,
  onAddToCart,
  cartProductIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const categoryDescriptions: Record<ProductCategory, { title: string; subtitle: string; icon: any }> = {
    all: {
      title: 'Our Complete Formulation Range',
      subtitle: 'Browse quality health supplements, everyday personal care, and certified agriculture bio-solutions.',
      icon: Sparkles,
    },
    'health-nutrition': {
      title: 'Health & Nutrition Division',
      subtitle: 'Artisanal herbal teas, cold-pressed botanical juices, slimming shakes & protein supplements to complement everyday vitality.',
      icon: HeartHandshake,
    },
    'personal-care': {
      title: 'Personal Care & Hygiene Division',
      subtitle: 'Ayurvedic grade-1 soaps, herbal hair oils, radiant face creams, organic dental care and comfort essentials.',
      icon: Sparkles,
    },
    'agriculture': {
      title: 'Sustainable Agriculture Division',
      subtitle: 'Bio-stimulants, root boosters, botanical pest defense and micronutrient fertilizers designed for Indian farmers.',
      icon: Leaf,
    },
  };

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.highlights.some((h) => h.toLowerCase().includes(q)) ||
        (item.ingredients && item.ingredients.some((ing) => ing.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    const parsePrice = (priceStr: string) => {
      const match = priceStr.replace(/[^0-9]/g, '');
      return match ? parseInt(match, 10) : 0;
    };

    switch (sortBy) {
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating);
      case 'price-asc':
        return list.sort((a, b) => parsePrice(a.priceEst) - parsePrice(b.priceEst));
      case 'price-desc':
        return list.sort((a, b) => parsePrice(b.priceEst) - parsePrice(a.priceEst));
      case 'name':
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case 'featured':
      default:
        return list;
    }
  }, [filteredProducts, sortBy]);

  const currentMeta = categoryDescriptions[selectedCategory];
  const CurrentIcon = currentMeta.icon;

  const categoryCounts = useMemo(() => {
    return {
      all: products.length,
      'health-nutrition': products.filter((p) => p.category === 'health-nutrition').length,
      'personal-care': products.filter((p) => p.category === 'personal-care').length,
      agriculture: products.filter((p) => p.category === 'agriculture').length,
    };
  }, [products]);

  return (
    <section className="py-16 md:py-24 bg-cream-50/50 min-h-screen" id="product-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <PackageCheck className="w-3.5 h-3.5 text-forest-700" />
            <span>Product Catalog</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950">
            Showcasing Nature & Quality
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 mt-3 max-w-2xl mx-auto leading-relaxed">
            Formulated in Maharashtra with authentic botanical extracts, rigorous FSSAI/GMP standards, and zero compromise on safety.
          </p>
        </div>

        {/* Dynamic Category Banner */}
        <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-forest-900 via-forest-800 to-forest-950 text-white shadow-elevated border border-gold-500/20 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 leaf-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md text-gold-400 border border-white/10 flex-shrink-0">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-cream-50">
                  {currentMeta.title}
                </h3>
                <p className="text-xs sm:text-sm text-forest-200 mt-0.5 max-w-2xl">
                  {currentMeta.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs self-stretch md:self-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-white/10">
              <span className="px-3 py-1.5 rounded-xl bg-white/10 font-medium">
                {sortedProducts.length} Products Displayed
              </span>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-soft border border-cream-200 mb-8 space-y-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 touch-target ${
                selectedCategory === 'all'
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-cream-100 text-charcoal-800 hover:bg-forest-50 hover:text-forest-800'
              }`}
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>All Products</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'all' ? 'bg-forest-900 text-white' : 'bg-cream-200 text-gray-700'
              }`}>
                {categoryCounts.all}
              </span>
            </button>

            <button
              onClick={() => onSelectCategory('health-nutrition')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 touch-target ${
                selectedCategory === 'health-nutrition'
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-cream-100 text-charcoal-800 hover:bg-forest-50 hover:text-forest-800'
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-forest-400" />
              <span>Health & Nutrition</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'health-nutrition' ? 'bg-forest-900 text-white' : 'bg-cream-200 text-gray-700'
              }`}>
                {categoryCounts['health-nutrition']}
              </span>
            </button>

            <button
              onClick={() => onSelectCategory('personal-care')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 touch-target ${
                selectedCategory === 'personal-care'
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-cream-100 text-charcoal-800 hover:bg-forest-50 hover:text-forest-800'
              }`}
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>Personal Care</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'personal-care' ? 'bg-forest-900 text-white' : 'bg-cream-200 text-gray-700'
              }`}>
                {categoryCounts['personal-care']}
              </span>
            </button>

            <button
              onClick={() => onSelectCategory('agriculture')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 touch-target ${
                selectedCategory === 'agriculture'
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-cream-100 text-charcoal-800 hover:bg-forest-50 hover:text-forest-800'
              }`}
            >
              <Leaf className="w-4 h-4 text-leaf-400" />
              <span>Agriculture</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === 'agriculture' ? 'bg-forest-900 text-white' : 'bg-cream-200 text-gray-700'
              }`}>
                {categoryCounts.agriculture}
              </span>
            </button>
          </div>

          {/* Search bar & Sort dropdown */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-cream-200">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search herbal tea, soap, bio-fertilizer, face cream..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-forest-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium whitespace-nowrap">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>Sort By:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="py-2 px-3 rounded-xl bg-cream-50 border border-cream-300 text-xs font-semibold text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-600 cursor-pointer"
              >
                <option value="featured">Featured / Recommended</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical (A - Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
                onAddToCart={onAddToCart}
                isInCart={cartProductIds.includes(product.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-cream-200 shadow-soft max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-forest-50 text-forest-700 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-forest-600" />
            </div>
            <h3 className="font-heading font-bold text-xl text-forest-950 mb-2">
              No matching products found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              We couldn't find any formulation matching "{searchQuery}". Try different keywords or clear your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-800 text-white text-xs sm:text-sm font-semibold hover:bg-forest-700 transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
