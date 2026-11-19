import React from 'react';
import { HeartHandshake, Sparkles, Leaf, ArrowRight } from 'lucide-react';
import { ProductCategory } from '../types';

interface CategoryShowcaseProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'health-nutrition' as ProductCategory,
      title: 'Health & Nutrition',
      tagline: 'Vitality, Balance & Daily Nourishment',
      description: 'Explore our range of wellness and nutrition products designed to complement everyday lifestyle and nutrition needs.',
      cta: 'Explore Health Products',
      icon: HeartHandshake,
      color: 'forest',
      bgGlow: 'group-hover:bg-forest-600',
      badgeBg: 'bg-forest-100 text-forest-800 border-forest-200',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      popularProducts: [
        'Vedic Herbal Green Tea',
        'Cold-Pressed Triphala & Aloe Juice',
        'SlimFit Protein & Fiber Shakes',
        'Pro-Nutri Herbal Protein Powder',
        'Spirulina & Moringa Superfood'
      ]
    },
    {
      id: 'personal-care' as ProductCategory,
      title: 'Personal Care',
      tagline: 'Everyday Cleanliness, Comfort & Radiance',
      description: 'Everyday personal care essentials designed to support cleanliness, comfort and self-care.',
      cta: 'Explore Personal Care',
      icon: Sparkles,
      color: 'gold',
      bgGlow: 'group-hover:bg-gold-500',
      badgeBg: 'bg-gold-100 text-gold-900 border-gold-200',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      popularProducts: [
        'Neem & Aloe Bath Soaps (Grade 1)',
        'Bhringraj Kshirpak Hair Nourishing Oil',
        'Kumkumadi Radiance Face Cream',
        'Gentle Turmeric Face Wash & Toothpaste',
        'Bamboo Anion Sanitary Napkins'
      ]
    },
    {
      id: 'agriculture' as ProductCategory,
      title: 'Agriculture',
      tagline: 'Root Growth, Crop Defense & Soil Fertility',
      description: 'Supporting farmers with agricultural products focused on crop care, plant growth and farming needs.',
      cta: 'Explore Agriculture',
      icon: Leaf,
      color: 'leaf',
      bgGlow: 'group-hover:bg-leaf-600',
      badgeBg: 'bg-leaf-100 text-leaf-900 border-leaf-200',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80',
      popularProducts: [
        'Organic Crop Protection Bio-Shield',
        'Bhoomi-Vardhak Humic Growth Granules',
        'Phasal-Amrit Bio-Fertilizer Consortium',
        'Blossom-Max Flowering Booster',
        'EDTA Chelated Micronutrients Spray'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-50/70 relative overflow-hidden" id="categories">
      
      {/* Decorative leaf motifs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-forest-700" />
            <span>Our 3 Flagship Divisions</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight">
            Tailored for Health, Home & Harvest
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-800 leading-relaxed">
            From holistic botanical nutrition to everyday personal hygiene and modern bio-solutions for Indian farmers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="group bg-white rounded-3xl overflow-hidden border border-forest-100/80 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Header Overlay */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-forest-950">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                  
                  {/* Category Badge & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-sm ${cat.badgeBg}`}>
                      Division
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-forest-900 flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-forest-800" />
                    </div>
                  </div>

                  {/* Title on Image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading font-bold text-2xl text-cream-50 group-hover:text-gold-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-forest-200 mt-0.5 font-medium">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-charcoal-800 text-xs sm:text-sm leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    {/* Products Bullet List */}
                    <div className="border-t border-cream-200 pt-4 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Key Formulations:
                      </div>
                      <ul className="space-y-1.5">
                        {cat.popularProducts.map((prod, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-charcoal-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                            <span>{prod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Explore Button */}
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="w-full py-3 px-4 rounded-xl bg-forest-50 text-forest-900 font-semibold text-xs sm:text-sm border border-forest-200 hover:bg-forest-800 hover:text-white transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
