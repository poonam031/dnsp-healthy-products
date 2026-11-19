import React from 'react';
import { Star, Eye, Plus, Check, Sparkles, HeartHandshake, Leaf } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onAddToCart,
  isInCart = false,
}) => {
  const getCategoryTheme = (cat: Product['category']) => {
    switch (cat) {
      case 'health-nutrition':
        return {
          bg: 'bg-forest-50 text-forest-800 border-forest-200',
          icon: HeartHandshake,
          accent: 'text-forest-700',
        };
      case 'personal-care':
        return {
          bg: 'bg-gold-50 text-gold-900 border-gold-200',
          icon: Sparkles,
          accent: 'text-gold-700',
        };
      case 'agriculture':
        return {
          bg: 'bg-leaf-50 text-leaf-900 border-leaf-200',
          icon: Leaf,
          accent: 'text-leaf-700',
        };
      default:
        return {
          bg: 'bg-gray-50 text-gray-800 border-gray-200',
          icon: Sparkles,
          accent: 'text-forest-700',
        };
    }
  };

  const theme = getCategoryTheme(product.category);
  const CategoryIcon = theme.icon;

  return (
    <div className="group bg-white rounded-2xl border border-cream-200/80 shadow-soft hover:shadow-card hover:border-forest-200 transition-all duration-300 flex flex-col h-full overflow-hidden relative">
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Top Shadow for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide border shadow-sm backdrop-blur-sm ${theme.bg}`}
          >
            <CategoryIcon className="w-3 h-3" />
            {product.categoryLabel}
          </span>

          {product.badge && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gold-500 text-forest-950 shadow-sm uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Floating Button on Desktop */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-forest-950/20 backdrop-blur-[2px]">
          <button
            onClick={() => onOpenDetails(product)}
            className="px-4 py-2 rounded-xl bg-white/95 text-forest-900 text-xs font-bold shadow-card hover:bg-forest-900 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 flex items-center gap-1.5 touch-target"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Net Quantity Pill */}
        <div className="absolute bottom-2 left-2.5 z-10 pointer-events-none">
          <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium">
            {product.netQuantity}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Rating & Reviews */}
          <div className="flex items-center justify-between text-xs mb-2">
            <div className="flex items-center gap-1 text-gold-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
            </div>
            <span className="text-[11px] font-medium text-forest-700 bg-forest-50 px-2 py-0.5 rounded-full">
              Verified Stock
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenDetails(product)}
            className="font-heading font-bold text-base sm:text-lg text-forest-950 group-hover:text-forest-700 transition-colors line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-gray-500 font-medium line-clamp-1 mt-0.5">
            {product.tagline}
          </p>

          {/* Short Description */}
          <p className="text-xs text-charcoal-800/80 line-clamp-2 mt-2 leading-relaxed">
            {product.description}
          </p>

          {/* Highlights Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.highlights.slice(0, 2).map((hl, i) => (
              <span
                key={i}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-cream-100 text-charcoal-800 border border-cream-200"
              >
                {hl}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-4 mt-4 border-t border-cream-200/80 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
              Ref. MRP
            </div>
            <div className="font-heading font-extrabold text-base sm:text-lg text-forest-900">
              {product.priceEst}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onOpenDetails(product)}
              className="p-2 sm:px-3 sm:py-2 rounded-xl border border-cream-300 text-charcoal-800 hover:border-forest-600 hover:text-forest-700 hover:bg-forest-50 text-xs font-semibold transition-all touch-target flex items-center gap-1"
              title="Details"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Details</span>
            </button>

            <button
              onClick={() => onAddToCart(product)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all flex items-center gap-1 touch-target ${
                isInCart
                  ? 'bg-forest-100 text-forest-800 border border-forest-300'
                  : 'bg-forest-800 hover:bg-forest-700 text-white shadow hover:shadow-md'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4 text-forest-600" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 text-gold-400" />
                  <span>Enquire</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
