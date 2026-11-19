import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Health & Nutrition', 'Personal Care', 'Agriculture', 'Business Opportunity'];

  const filteredTestimonials = filterCategory === 'All'
    ? testimonialsData
    : testimonialsData.filter(t => t.category === filterCategory);

  return (
    <section className="py-16 md:py-24 bg-cream-50/70 relative overflow-hidden" id="testimonials">
      {/* Background circles */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5 text-forest-700" />
            <span>Real Stories & Feedback</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950">
            Experiences That Inspire Trust
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 mt-3 max-w-2xl mx-auto leading-relaxed">
            Discover firsthand accounts from farmers, consumers, and distributors across Maharashtra and India who use DNSP products and participate in our learning network.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all touch-target ${
                  filterCategory === cat
                    ? 'bg-forest-800 text-white shadow-sm'
                    : 'bg-white text-charcoal-800 hover:bg-forest-50 hover:text-forest-800 border border-cream-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-200 shadow-soft hover:shadow-card hover:border-forest-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top: Category Pill & Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-forest-50 text-forest-800 border border-forest-200">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < item.rating ? 'fill-gold-400 text-gold-400' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Feedback Comment */}
                <p className="text-xs sm:text-sm text-charcoal-800/90 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Bottom: Reviewer Profile */}
              <div className="mt-6 pt-4 border-t border-cream-200/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-forest-200"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-heading font-bold text-sm text-forest-950 truncate">
                      {item.name}
                    </h4>
                    {item.verified && (
                      <span title="Verified Customer" className="inline-flex">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 flex-shrink-0" />
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-gray-500 truncate">
                    {item.role}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-gold-500" />
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Disclosure Note */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-gray-500 max-w-xl mx-auto">
            *Representative feedback from real product users and independent distributors across Maharashtra. Individual results from wellness and agricultural products may vary based on soil conditions, personal diet, and lifestyle.
          </p>
        </div>

      </div>
    </section>
  );
};
