import React from 'react';
import { 
  Building2, HeartHandshake, Award, 
  Sparkles, CheckCircle2, ChevronRight, Leaf, Users 
} from 'lucide-react';

interface AboutSectionProps {
  onExploreProducts: () => void;
  onExploreOpportunity: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onExploreProducts, 
  onExploreOpportunity 
}) => {

  const timelineMilestones = [
    {
      year: 'August 2017',
      title: 'Foundation in Maharashtra',
      description: 'DNSP Healthy Products Pvt. Ltd. was incorporated with a clear vision: bringing authentic health and wellness formulations to Indian families through transparent community distribution.'
    },
    {
      year: '2019',
      title: 'Personal Care Range Launch',
      description: 'Introduced everyday Ayurvedic personal care essentials including grade 1 herbal soaps, kshirpak hair oils, and skin-friendly dental and hygiene care products.'
    },
    {
      year: '2021',
      title: 'Agriculture Bio-Solutions Division',
      description: 'Expanded into bio-agriculture inputs, providing farmers with humic root boosters, organic pest deterrents, and liquid multi-micro biofertilizers.'
    },
    {
      year: '2023',
      title: 'Leadership Academy & Digital Hub',
      description: 'Established the DNSP Leadership Development platform, mentoring over 15,000 independent distributors with certified product knowledge and public communication workshops.'
    },
    {
      year: 'Present & Beyond',
      title: 'Nationwide Expansion',
      description: 'Strengthening regional fulfillment hubs across 15+ states with over 50+ compliant formulations and modern supply chain automation.'
    }
  ];

  const corePillars = [
    {
      title: 'Health & Wellness',
      desc: 'Formulations that complement everyday lifestyle, wholesome nutrition, and natural cellular energy without artificial stimulants.',
      icon: HeartHandshake,
      badge: 'Certified Botanicals'
    },
    {
      title: 'Personal Care',
      desc: 'Pure herbal extracts, grade-1 vegetable soaps, and cruelty-free body care designed for daily cleanliness and natural comfort.',
      icon: Sparkles,
      badge: 'Skin-Friendly'
    },
    {
      title: 'Sustainable Agriculture',
      desc: 'Bio-stimulants, root nourishments, and pest repellents that enrich farmer soil biology and protect harvest yields safely.',
      icon: Leaf,
      badge: 'Eco-Certified Inputs'
    },
    {
      title: 'Distribution Network',
      desc: 'A transparent, collaborative business platform focused on product education, relationship-building, and personal leadership.',
      icon: Users,
      badge: 'Pan-India Reach'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="about-us">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-forest-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-forest-700" />
            <span>Our Heritage & Corporate Identity</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight">
            Nurturing Wellness, Inspiring Livelihoods
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-800 leading-relaxed">
            Established in August 2017 in Maharashtra, India — committed to delivering holistic health, everyday personal care, and farmer-centric agriculture.
          </p>
        </div>

        {/* Narrative & Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Image Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-forest-100 bg-cream-100">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80" 
                alt="DNSP Team and Nature Wellness"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase text-gold-400 font-bold tracking-widest">
                  Maharashtra, India • Since 2017
                </span>
                <p className="text-lg font-bold text-cream-50 mt-1">
                  DNSP Healthy Products Pvt. Ltd.
                </p>
                <p className="text-xs text-forest-200 mt-1">
                  Bridging traditional botanical wisdom with certified scientific manufacturing.
                </p>
              </div>
            </div>

            {/* Overlapping Trust Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-elevated border border-gold-400/40 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold">Corporate Ethos</div>
                  <div className="text-sm font-bold text-forest-950">Ethical & Compliant</div>
                </div>
              </div>
              <p className="text-[11px] text-gray-600 mt-2 border-t border-cream-200 pt-2">
                Clear product disclosures, transparent channel operations, and zero exaggerated claims.
              </p>
            </div>
          </div>

          {/* Right: Core Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl bg-cream-100/70 border border-forest-100/80">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-950 mb-3">
                "Healthy living is not a luxury; it is a conscious everyday choice."
              </h3>
              <p className="text-charcoal-800 text-sm sm:text-base leading-relaxed">
                <strong className="text-forest-950">DNSP Healthy Products Pvt. Ltd.</strong> is an Indian company established in August 2017, committed to bringing health, wellness, personal care and agricultural products to people through an expanding marketing and distribution network.
              </p>
              <p className="text-charcoal-800 text-sm sm:text-base leading-relaxed mt-3">
                Our vision is to promote quality products, encourage healthier lifestyles and create opportunities for individuals to grow through product awareness, customer relationships and leadership development.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {corePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-white border border-forest-100 hover:border-forest-400/60 shadow-sm transition-all hover:shadow-card group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest-800 flex items-center justify-center group-hover:bg-forest-700 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cream-200 text-forest-900">
                        {pillar.badge}
                      </span>
                    </div>
                    <div className="font-bold text-sm text-forest-950">{pillar.title}</div>
                    <div className="text-xs text-gray-600 mt-1 leading-normal">{pillar.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="px-5 py-2.5 rounded-xl bg-forest-800 text-white text-xs sm:text-sm font-semibold hover:bg-forest-700 transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Browse Product Divisions</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreOpportunity}
                className="px-5 py-2.5 rounded-xl bg-cream-200 text-forest-900 text-xs sm:text-sm font-semibold hover:bg-cream-300 transition-colors flex items-center gap-1.5"
              >
                <span>Explore Leadership Network</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Company Journey Timeline */}
        <div className="mt-16 pt-12 border-t border-forest-100">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
              Milestones of Excellence
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
              Our Journey Since 2017
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Continuous innovation in product development and nationwide partner empowerment.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-forest-200 via-gold-300 to-forest-200 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {timelineMilestones.map((m, idx) => (
                <div 
                  key={idx}
                  className="bg-cream-50 rounded-2xl p-5 border border-forest-100/90 shadow-sm hover:shadow-card hover:border-forest-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-forest-800 text-white font-bold text-xs mb-3 shadow-sm">
                      {m.year}
                    </div>
                    <div className="font-heading font-bold text-sm sm:text-base text-forest-950 mb-2">
                      {m.title}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-cream-200/80 flex items-center gap-1 text-[11px] font-semibold text-forest-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest-600" />
                    <span>Milestone Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
