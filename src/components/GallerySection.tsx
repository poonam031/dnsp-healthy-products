import React, { useState } from 'react';
import { 
  Camera, X, ChevronLeft, ChevronRight, 
  ZoomIn 
} from 'lucide-react';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Events' | 'Agriculture' | 'Training' | 'Products'>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterOptions: ('All' | 'Events' | 'Agriculture' | 'Training' | 'Products')[] = [
    'All', 'Events', 'Agriculture', 'Training', 'Products'
  ];

  const filteredItems = selectedFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedFilter);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section className="py-16 md:py-24 bg-cream-50/50 relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-forest-700" />
            <span>Moments of Growth</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950">
            Life at DNSP: Events & Fieldwork
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 mt-3 max-w-2xl mx-auto leading-relaxed">
            From farmer training demos in Maharashtra to leadership academies and regional product expos, see our community in action.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedFilter(opt)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all touch-target ${
                  selectedFilter === opt
                    ? 'bg-forest-800 text-white shadow-md'
                    : 'bg-white text-charcoal-800 hover:bg-forest-50 hover:text-forest-800 border border-cream-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-card bg-white border border-cream-200 cursor-pointer aspect-[4/3] sm:aspect-square transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 sm:p-5 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-forest-900/80 backdrop-blur-md border border-white/20">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-gold-300 font-semibold mb-0.5">
                    {item.date}
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-forest-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-cream-300 my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-md touch-target"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-md touch-target"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-md touch-target"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Media */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Caption & Info */}
            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-forest-100 text-forest-800">
                    {activeItem.category}
                  </span>
                  <span className="text-xs text-gray-500">{activeItem.date}</span>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-forest-950">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-800/80 mt-1">
                  {activeItem.description}
                </p>
              </div>

              <div className="text-xs font-semibold text-forest-700 bg-cream-50 px-3 py-2 rounded-xl border border-cream-200 whitespace-nowrap self-stretch sm:self-auto text-center">
                DNSP Archives
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
