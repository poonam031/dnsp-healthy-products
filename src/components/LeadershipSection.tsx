import React from 'react';
import { Award } from 'lucide-react';
import { leadershipData } from '../data/leadership';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="leadership">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-forest-50/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-forest-700" />
            <span>Governance & Scientific Guidance</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950">
            Guided by Vision & Science
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 mt-3 max-w-2xl mx-auto leading-relaxed">
            Our corporate and advisory leadership combines direct marketing vision, botanical formulation expertise, and agronomic science to steer DNSP with integrity.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {leadershipData.map((member) => (
            <div
              key={member.id}
              className="group bg-cream-50/60 rounded-3xl overflow-hidden border border-cream-200/90 shadow-soft hover:shadow-card hover:bg-white hover:border-forest-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo with Frame */}
                <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-cream-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-forest-900/90 backdrop-blur-md border border-white/20">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Profile Information */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading font-bold text-lg text-forest-950 group-hover:text-forest-700 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-gold-600 mt-0.5">
                    {member.role}
                  </div>

                  <p className="text-xs text-charcoal-800/80 mt-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialization tag */}
                  <div className="mt-4 pt-3 border-t border-cream-200">
                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">
                      Focus Area
                    </div>
                    <div className="text-xs font-medium text-forest-900 line-clamp-1">
                      {member.specialization}
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges footer */}
              <div className="px-5 pb-5 pt-0 flex flex-wrap gap-1.5">
                {member.badges.map((b, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-cream-300 text-charcoal-800"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Footnote */}
        <div className="mt-12 text-center text-xs text-gray-500">
          DNSP Healthy Products Pvt. Ltd. operates in full accordance with Ministry of Corporate Affairs (MCA) regulatory guidelines and direct selling norms.
        </div>

      </div>
    </section>
  );
};
