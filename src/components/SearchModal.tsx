import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product, ProductCategory } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<ProductCategory>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchTerm('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = products.filter((p) => {
    const matchesCat = selectedCat === 'all' || p.category === selectedCat;
    const term = searchTerm.toLowerCase().trim();
    const matchesTerm =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.tagline.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.highlights.some((h) => h.toLowerCase().includes(term));
    return matchesCat && matchesTerm;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-950/70 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20">
      <div
        onClick={onClose}
        className="fixed inset-0"
      />

      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-cream-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Box */}
        <div className="p-4 sm:p-5 border-b border-cream-200 flex items-center gap-3 bg-cream-50">
          <Search className="w-5 h-5 text-forest-700 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search herbal tea, soap, bio-fertilizer, cream..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-forest-950 placeholder:text-gray-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 text-xs font-semibold"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-500 hover:bg-cream-200 touch-target"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="px-4 py-2.5 bg-white border-b border-cream-200 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-gray-400 font-semibold uppercase text-[10px] tracking-wider whitespace-nowrap">
            Category:
          </span>
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap ${
              selectedCat === 'all'
                ? 'bg-forest-800 text-white'
                : 'bg-cream-100 text-charcoal-800 hover:bg-forest-50'
            }`}
          >
            All ({products.length})
          </button>
          <button
            onClick={() => setSelectedCat('health-nutrition')}
            className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap ${
              selectedCat === 'health-nutrition'
                ? 'bg-forest-800 text-white'
                : 'bg-cream-100 text-charcoal-800 hover:bg-forest-50'
            }`}
          >
            Health & Nutrition
          </button>
          <button
            onClick={() => setSelectedCat('personal-care')}
            className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap ${
              selectedCat === 'personal-care'
                ? 'bg-forest-800 text-white'
                : 'bg-cream-100 text-charcoal-800 hover:bg-forest-50'
            }`}
          >
            Personal Care
          </button>
          <button
            onClick={() => setSelectedCat('agriculture')}
            className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap ${
              selectedCat === 'agriculture'
                ? 'bg-forest-800 text-white'
                : 'bg-cream-100 text-charcoal-800 hover:bg-forest-50'
            }`}
          >
            Agriculture
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="p-3 rounded-2xl hover:bg-forest-50/70 border border-transparent hover:border-forest-200 transition-all flex items-center justify-between gap-3 cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-xl object-cover bg-cream-100 border border-cream-200 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-forest-700 uppercase tracking-wider block">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-forest-950 group-hover:text-forest-700 truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 truncate">{item.tagline}</p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0 flex items-center gap-3">
                  <div>
                    <div className="font-heading font-bold text-xs sm:text-sm text-forest-900">
                      {item.priceEst}
                    </div>
                    <div className="text-[10px] text-gray-400">{item.netQuantity}</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-cream-100 group-hover:bg-forest-800 group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500 text-xs">
              No matching products found. Try typing another formulation name.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-cream-50 border-t border-cream-200 text-center text-[11px] text-gray-500">
          Showing {filtered.length} formulations • Press ESC to close
        </div>
      </div>
    </div>
  );
};
