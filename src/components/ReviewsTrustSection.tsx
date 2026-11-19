import React from 'react';
import { 
  Star, ShieldCheck, Award, ExternalLink, 
  MapPin, Clock, Building, HeartHandshake, Sparkles 
} from 'lucide-react';

export const ReviewsTrustSection: React.FC = () => {
  const certifications = [
    {
      title: 'FSSAI Compliant',
      desc: 'Food Safety and Standards Authority of India food hygiene compliance for health & nutrition.',
      icon: ShieldCheck,
      color: 'text-forest-700 bg-forest-100',
    },
    {
      title: 'Ayush & GMP Standards',
      desc: 'Formulations prepared under Good Manufacturing Practices with authentic botanical ratios.',
      icon: Award,
      color: 'text-gold-700 bg-gold-100',
    },
    {
      title: 'ROC Maharashtra Registered',
      desc: 'Incorporated under the Ministry of Corporate Affairs, Government of India, in August 2017.',
      icon: Building,
      color: 'text-forest-700 bg-forest-100',
    },
    {
      title: 'Bio-Organic Agri Quality',
      desc: 'Formulated to enrich soil microbial biology without damaging long-term farmland fertility.',
      icon: Sparkles,
      color: 'text-leaf-700 bg-leaf-100',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="trust-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split: Google Rating Card & Verified Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Google Reviews / Rating Badge */}
          <div className="lg:col-span-5 bg-gradient-to-br from-cream-100 via-white to-cream-50 p-6 sm:p-8 rounded-3xl border border-cream-300 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              {/* Google G Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-cream-200 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Customer & Partner Rating
                </span>
                <span className="font-heading font-extrabold text-xl text-forest-950">
                  Google Business Profile
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-3 my-4">
              <span className="font-heading font-black text-5xl text-forest-950 tracking-tight">
                4.5
              </span>
              <div>
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-current ${i === 4 ? 'opacity-60' : ''}`}
                    />
                  ))}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Overall rating from verified regional customers & distributors
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed pt-2 border-t border-cream-200">
              Recognized for dependable product availability, authentic botanical compositions, and prompt logistics support across Maharashtra.
            </p>

            <div className="mt-5 pt-4 border-t border-cream-200 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">
                Verified Business Entity
              </span>
              <a
                href="https://www.google.com/search?q=DNSP+Healthy+Products+Pvt+Ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 hover:text-forest-900 underline underline-offset-4"
              >
                <span>View Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Trust Pillars Grid */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-forest-700 font-bold uppercase tracking-widest text-xs">
                Quality & Compliance
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-950 mt-1">
                Built on Verified Standards Since 2017
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-800/80 mt-2">
                Every formulation and business process is rooted in national standards, transparent grievance mechanisms, and continuous field research.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-cream-50 border border-cream-200 hover:bg-white hover:border-forest-200 hover:shadow-soft transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-forest-950">
                      {item.title}
                    </h4>
                    <p className="text-xs text-charcoal-800/80 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Network & Presence Highlights */}
        <div className="p-6 sm:p-8 rounded-3xl bg-forest-950 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-forest-900 text-gold-400 border border-forest-800">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-cream-50">Headquartered in Maharashtra</h4>
                <p className="text-xs text-forest-200 mt-1">
                  Active fulfillment nodes across Western, Northern, and Marathwada regions.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-forest-900 text-gold-400 border border-forest-800">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-cream-50">Customer Grievance Cell</h4>
                <p className="text-xs text-forest-200 mt-1">
                  Dedicated support desk for product inquiries, returns, and distributor queries.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-forest-900 text-gold-400 border border-forest-800">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-cream-50">7-Year Track Record</h4>
                <p className="text-xs text-forest-200 mt-1">
                  Continuous operation and channel growth since incorporation in August 2017.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
