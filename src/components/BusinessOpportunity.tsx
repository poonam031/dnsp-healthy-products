import React from 'react';
import { 
  Users, BookOpen, Award, HeartHandshake, Network, 
  Compass, ArrowRight, ShieldCheck, 
  Sparkles, MessageSquare 
} from 'lucide-react';

interface BusinessOpportunityProps {
  onPartnerClick: () => void;
  onContactClick: () => void;
}

export const BusinessOpportunity: React.FC<BusinessOpportunityProps> = ({
  onPartnerClick,
  onContactClick,
}) => {
  const opportunityFeatures = [
    {
      icon: BookOpen,
      title: 'In-Depth Product Knowledge',
      description: 'Comprehensive orientation on herbal botanicals, nutrition science, personal care formulations, and agricultural soil enrichment.',
    },
    {
      icon: Award,
      title: 'Personal & Public Skills Development',
      description: 'Interactive workshops on interpersonal communication, confidence building, presentation skills, and professional etiquette.',
    },
    {
      icon: Users,
      title: 'Leadership Learning & Mentorship',
      description: 'Learn from experienced mentors who guide you in team leadership, active listening, and sustainable team coaching.',
    },
    {
      icon: HeartHandshake,
      title: 'Team Collaboration & Community',
      description: 'Join a positive, supportive peer culture across Maharashtra and nationwide that celebrates mutual milestones and camaraderie.',
    },
    {
      icon: Network,
      title: 'Direct Network Building',
      description: 'Connect quality wellness, hygiene and agricultural solutions directly to households and farming communities in your locality.',
    },
    {
      icon: Compass,
      title: 'Professional Business Guidance',
      description: 'Transparent operational practices, clear inventory channels, digital tracking systems, and dedicated distributor service desks.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Learn & Understand',
      desc: 'Attend orientation modules to understand our compliant product line and ethical direct distribution practices.',
    },
    {
      num: '02',
      title: 'Experience & Share',
      desc: 'Use authentic DNSP formulations in your own household or farm and share honest experiences with your community.',
    },
    {
      num: '03',
      title: 'Build Connections',
      desc: 'Connect with prospective consumers and like-minded individuals interested in wellness advocacy and entrepreneurship.',
    },
    {
      num: '04',
      title: 'Lead & Mentor',
      desc: 'Conduct training workshops, support your associates, and cultivate future leaders within your regional network.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-cream-50 to-white relative overflow-hidden" id="opportunity">
      
      {/* Decorative background flourishes */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-forest-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-900 border border-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            <span>Empowerment & Entrepreneurship</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight">
            Grow With Us.{' '}
            <span className="text-forest-700">Build Connections.</span>{' '}
            <span className="gradient-text-gold block sm:inline">Create Opportunities.</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-charcoal-800/90 mt-4 leading-relaxed">
            Discover opportunities to become part of the DNSP network. Learn about our products, develop your skills, connect with people and explore the possibilities of building a business through our marketing and distribution platform.
          </p>
        </div>

        {/* Hero Split: Image & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-cream-200">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="DNSP Team collaboration, training and business networking seminar"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-1">
                  Skill Development & Team Spirit
                </span>
                <p className="text-sm sm:text-base font-medium text-cream-100">
                  "Empowering individuals with communication tools, product education, and a collaborative network."
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/20 text-xs text-forest-200">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Ethical Direct Distribution • Established 2017</span>
                </div>
              </div>
            </div>

            {/* Floating Overlapping Quote Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-card border border-forest-100 text-xs">
              <div className="flex items-center gap-2 text-gold-500 font-bold mb-1">
                <Sparkles className="w-4 h-4 fill-current" />
                <span>Transparent Business Ethos</span>
              </div>
              <p className="text-charcoal-800 leading-snug">
                Zero get-rich-quick claims. Real business built through real products and genuine customer satisfaction.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Features Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {opportunityFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-cream-200/90 shadow-soft hover:shadow-card hover:border-forest-300 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-3 group-hover:bg-forest-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-forest-950 group-hover:text-forest-800 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-charcoal-800/80 mt-1.5 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4-Step Growth Journey */}
        <div className="bg-forest-900 text-white rounded-3xl p-6 sm:p-10 shadow-elevated border border-forest-800 relative overflow-hidden mb-16">
          <div className="absolute inset-0 leaf-pattern opacity-10 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">
                Your Roadmap With DNSP
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-cream-50 mt-1">
                Four Stages of Growth & Leadership
              </h3>
              <p className="text-xs sm:text-sm text-forest-200 mt-2">
                A structured, step-by-step path designed to guide you from foundational product awareness to community mentorship.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, i) => (
                <div 
                  key={i}
                  className="bg-forest-950/60 border border-forest-800/90 rounded-2xl p-5 relative hover:border-gold-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-heading font-black text-3xl text-gold-400/80 block mb-2">
                      {st.num}
                    </span>
                    <h4 className="font-heading font-bold text-base text-white mb-1.5">
                      {st.title}
                    </h4>
                    <p className="text-xs text-forest-200 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ethics & Compliance Statement */}
        <div className="bg-cream-100 rounded-2xl p-6 border border-cream-300/80 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-6 h-6 text-forest-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-forest-950">
                  Ethical & Transparent Direct Selling Commitment
                </h4>
                <p className="text-xs text-charcoal-800/80 mt-0.5">
                  DNSP operates in strict compliance with the Consumer Protection (Direct Selling) Rules, 2021. Earnings and growth depend solely on retail product sales, customer satisfaction, and distributor effort. We make no guaranteed income or get-rich-quick claims.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-forest-800 border border-forest-200 flex-shrink-0">
              Direct Selling Compliant
            </span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onPartnerClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-forest-800 text-white font-bold text-sm sm:text-base shadow-card hover:bg-forest-700 hover:shadow-elevated transition-all flex items-center justify-center gap-2 touch-target"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-forest-900 border-2 border-forest-800/20 font-bold text-sm sm:text-base shadow-sm hover:border-forest-700 hover:bg-forest-50 transition-all flex items-center justify-center gap-2 touch-target"
            >
              <Users className="w-4 h-4 text-forest-700" />
              <span>Contact Our Training Team</span>
            </button>

            <a
              href="https://wa.me/919822012345?text=Hello%20DNSP,%20I%20am%20interested%20in%20learning%20about%20the%20DNSP%20Business%20Opportunity%20and%20becoming%20a%20partner."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 touch-target"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Coordinator</span>
            </a>
          </div>

          <p className="text-xs text-gray-500">
            For distributor support and onboarding inquiries, call our toll-free / Maharashtra helpline: +91 98220 12345
          </p>
        </div>

      </div>
    </section>
  );
};
