import React from 'react';
import { Calendar, PackageCheck, Users, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      number: '2017',
      label: 'Year Established',
      detail: 'Incorporated in Maharashtra',
      color: 'text-forest-700',
      bg: 'bg-forest-100'
    },
    {
      icon: PackageCheck,
      number: '50+',
      label: 'Quality Formulations',
      detail: 'Health, Care & Agriculture',
      color: 'text-gold-600',
      bg: 'bg-gold-100'
    },
    {
      icon: Users,
      number: '100,000+',
      label: 'Happy Consumers',
      detail: 'Trusted daily in Indian homes',
      color: 'text-forest-700',
      bg: 'bg-forest-100'
    },
    {
      icon: Sparkles,
      number: '25,000+',
      label: 'Network Distributors',
      detail: 'Trained & empowered leaders',
      color: 'text-gold-600',
      bg: 'bg-gold-100'
    },
    {
      icon: MapPin,
      number: '15+',
      label: 'States Reached',
      detail: 'Pan-India distribution hubs',
      color: 'text-leaf-700',
      bg: 'bg-leaf-100'
    },
    {
      icon: ShieldCheck,
      number: '100%',
      label: 'Quality Compliant',
      detail: 'FSSAI & GMP benchmarks',
      color: 'text-forest-700',
      bg: 'bg-forest-100'
    }
  ];

  return (
    <section className="bg-forest-950 text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 leaf-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-forest-800/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gold-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">
            Demonstrated Growth & Reach
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-cream-50 mt-1">
            Empowering Lives Through Natural Quality
          </h2>
          <p className="text-xs sm:text-sm text-forest-200 mt-2">
            From our founding in Maharashtra in 2017 to reaching households and farms across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-forest-900/70 border border-forest-800/80 rounded-2xl p-4 sm:p-5 text-center hover:border-gold-500/50 hover:bg-forest-900 transition-all group"
              >
                <div className={`w-10 h-10 mx-auto rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-gold-400 tracking-tight">
                  {stat.number}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-cream-100 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-forest-300/80 mt-0.5 line-clamp-1">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
