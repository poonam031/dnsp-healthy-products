import React, { useState, useEffect } from 'react';
import { 
  X, Star, CheckCircle2, ShieldCheck, 
  Leaf, Info, ShoppingBag, MessageSquare, Share2, Check, 
  Award, HelpCircle
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
  onSelectRelated: (product: Product) => void;
  allProducts: Product[];
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart,
  onSelectRelated,
  allProducts
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'usage' | 'specs'>('benefits');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setActiveTab('benefits');
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} from DNSP Healthy Products Pvt. Ltd.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello DNSP Healthy Products,\nI am interested in learning more / ordering: *${product.name}* (Ref MRP: ${product.priceEst}, ${product.netQuantity}).\nPlease provide product availability and distributor details.`
  );
  const whatsappUrl = `https://wa.me/919822012345?text=${whatsappMessage}`;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-forest-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-cream-300 my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 backdrop-blur-md text-charcoal-800 hover:text-forest-900 hover:bg-forest-100 transition-colors shadow-md touch-target"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-5 bg-cream-100 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-cream-200">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-forest-100 text-forest-800 border border-forest-200 flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5" />
                  {product.categoryLabel}
                </span>
                {product.badge && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-gold-500 text-forest-950 uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Main Image */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-card border-2 border-white bg-white">
                <img
                  src={product.gallery[activeImageIndex] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                        activeImageIndex === idx 
                          ? 'border-forest-600 ring-2 ring-forest-400/50 scale-105' 
                          : 'border-white opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quality Seals */}
            <div className="mt-6 pt-4 border-t border-cream-300/70 grid grid-cols-2 gap-2 text-xs text-charcoal-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest-700 flex-shrink-0" />
                <span className="text-[11px] font-medium">GMP Certified Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span className="text-[11px] font-medium">Maharashtra Registered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              
              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-gold-500 text-sm font-bold">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span>{product.rating.toFixed(1)}</span>
                    <span className="text-gray-400 font-normal">({product.reviewsCount} customer reviews)</span>
                  </div>

                  <button
                    onClick={handleShare}
                    className="text-xs text-gray-500 hover:text-forest-700 flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-cream-100 transition-colors"
                    title="Share product"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-forest-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied' : 'Share'}</span>
                  </button>
                </div>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
                  {product.name}
                </h2>
                <p className="text-sm font-medium text-forest-700 mt-0.5">
                  {product.tagline}
                </p>
              </div>

              {/* Price & Quantity Banner */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-cream-50 border border-cream-200">
                <div>
                  <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider block">
                    Reference Price / MRP
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-black text-2xl text-forest-900">
                      {product.priceEst}
                    </span>
                    <span className="text-xs text-gray-500 font-normal">
                      (Inclusive of all taxes)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider block">
                    Packaging Size
                  </span>
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-white border border-cream-300 text-xs font-bold text-forest-950">
                    {product.netQuantity}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Tabs Selection */}
              <div className="border-b border-cream-200 pt-2">
                <nav className="flex space-x-4 overflow-x-auto" aria-label="Product info tabs">
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'benefits'
                        ? 'border-forest-700 text-forest-800'
                        : 'border-transparent text-gray-500 hover:text-forest-700'
                    }`}
                  >
                    Key Benefits ({product.benefits.length})
                  </button>

                  {product.ingredients && product.ingredients.length > 0 && (
                    <button
                      onClick={() => setActiveTab('ingredients')}
                      className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                        activeTab === 'ingredients'
                          ? 'border-forest-700 text-forest-800'
                          : 'border-transparent text-gray-500 hover:text-forest-700'
                      }`}
                    >
                      Key Ingredients
                    </button>
                  )}

                  <button
                    onClick={() => setActiveTab('usage')}
                    className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'usage'
                        ? 'border-forest-700 text-forest-800'
                        : 'border-transparent text-gray-500 hover:text-forest-700'
                    }`}
                  >
                    Directions & Usage
                  </button>

                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'specs'
                        ? 'border-forest-700 text-forest-800'
                        : 'border-transparent text-gray-500 hover:text-forest-700'
                    }`}
                  >
                    Specifications
                  </button>
                </nav>
              </div>

              {/* Tab Content Panels */}
              <div className="min-h-[140px] py-2">
                {activeTab === 'benefits' && (
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800">
                        <CheckCircle2 className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'ingredients' && product.ingredients && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {product.ingredients.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-forest-50 border border-forest-200 text-forest-900 text-xs font-medium flex items-center gap-1.5"
                      >
                        <Leaf className="w-3.5 h-3.5 text-forest-600" />
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {activeTab === 'usage' && (
                  <div className="bg-cream-50 p-3.5 rounded-xl border border-cream-200 text-xs sm:text-sm text-charcoal-800 flex items-start gap-3">
                    <Info className="w-5 h-5 text-forest-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-forest-950 block mb-1">Recommended Usage:</span>
                      <p className="leading-relaxed">{product.usageInstructions}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-cream-50 border border-cream-200">
                        <div className="text-[11px] text-gray-500 font-semibold">{spec.label}</div>
                        <div className="font-bold text-forest-950 mt-0.5">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <div className="p-2.5 rounded-xl bg-forest-50/70 border border-forest-100 text-[11px] text-forest-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Wellness Note:</strong> Product statements reflect traditional herbal knowledge & dietary support. Not formulated to cure medical illnesses.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className={`w-full sm:w-1/2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all touch-target ${
                    isInCart
                      ? 'bg-forest-100 text-forest-800 border-2 border-forest-300'
                      : 'bg-forest-800 hover:bg-forest-700 text-white shadow-card hover:shadow-elevated'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 text-gold-400" />
                  <span>{isInCart ? 'Added to Enquiry Basket' : 'Add to Enquiry Basket'}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all touch-target"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>

              {/* Related Products Mini Shelf */}
              {relatedProducts.length > 0 && (
                <div className="pt-4 border-t border-cream-200">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Other Products in {product.categoryLabel}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {relatedProducts.map(rel => (
                      <button
                        key={rel.id}
                        onClick={() => onSelectRelated(rel)}
                        className="text-left p-2 rounded-xl bg-cream-50 hover:bg-forest-50 border border-cream-200 transition-colors group flex flex-col"
                      >
                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white mb-1.5">
                          <img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="text-[11px] font-bold text-forest-950 group-hover:text-forest-700 line-clamp-1">
                          {rel.name}
                        </div>
                        <div className="text-[10px] text-gray-500">{rel.priceEst}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
