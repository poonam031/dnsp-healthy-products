import React from 'react';
import { 
  ShieldCheck, Layers, Network, Award, 
  HeartHandshake, TrendingUp, Sparkles, CheckCircle2 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Quality-Focused Products',
      subtitle: 'GMP & FSSAI Aligned',
      description: 'Strict adherence to botanical purity, lab tested batches, and standardized extracts across all health, personal care, and agricultural formulations.',
      accent: 'forest',
      badge: 'Certified Purity',
    },
    {
      icon: Layers,
      title: 'Diverse Product Range',
      subtitle: 'Home, Health & Harvest',
      description: 'From everyday herbal personal hygiene to nutritional supplements and bio-organic farming inputs, satisfying holistic household and agricultural requirements.',
      accent: 'gold',
      badge: '50+ Formulations',
    },
    {
      icon: Network,
      title: 'Growing Nationwide Network',
      subtitle: 'Maharashtra & Beyond',
      description: 'An expanding, transparent marketing and distribution network designed to connect authentic Indian wellness directly with consumers and farmers.',
      accent: 'forest',
      badge: 'Pan-India Reach',
    },
    {
      icon: Award,
      title: 'Leadership Development',
      subtitle: 'Skills & Public Speaking',
      description: 'Structured educational modules, product training seminars, and leadership workshops that foster confidence, communication, and professional growth.',
      accent: 'gold',
      badge: 'Skill Building',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-Centric Approach',
      subtitle: 'Long-term Relationships',
      description: 'Focus on transparent product awareness, customer grievance handling, dependable doorstep availability, and genuine consumer education.',
      accent: 'forest',
      badge: 'Direct Service',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth Opportunities',
      subtitle: 'Transparent & Ethical',
      description: 'A genuine micro-entrepreneurship platform operating strictly under direct selling regulations, emphasizing product value without false guarantees.',
      accent: 'gold',
      badge: 'Ethical Platform',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-forest-50/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>The DNSP Advantage</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950">
            Why Thousands Choose DNSP
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 mt-3 max-w-2xl mx-auto leading-relaxed">
            Building trust since August 2017 through verified product efficacy, ethical direct distribution, and an empowering environment for all partners.
          </p>
        </div>

        {/* 6 Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isForest = item.accent === 'forest';

            return (
              <div
                key={idx}
                className="group relative bg-cream-50/60 rounded-3xl p-6 sm:p-8 border border-cream-200/90 shadow-soft hover:shadow-card hover:bg-white hover:border-forest-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-13 h-13 rounded-2xl p-3.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isForest
                          ? 'bg-forest-100 text-forest-800 group-hover:bg-forest-700 group-hover:text-white'
                          : 'bg-gold-100 text-gold-800 group-hover:bg-gold-500 group-hover:text-forest-950'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                        isForest
                          ? 'bg-forest-50 text-forest-700 border-forest-200'
                          : 'bg-gold-50 text-gold-800 border-gold-200'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-forest-950 group-hover:text-forest-800 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-charcoal-800/80 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="pt-6 mt-6 border-t border-cream-200 flex items-center gap-2 text-xs font-semibold text-forest-800 opacity-90 group-hover:opacity-100">
                  <CheckCircle2 className="w-4 h-4 text-forest-600" />
                  <span>Backed by Verified Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
