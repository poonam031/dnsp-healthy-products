import React from 'react';
import { 
  ArrowRight, Sparkles, ShieldCheck, 
  Heart, Leaf, Users, Award, CheckCircle2 
} from 'lucide-react';
import { ProductCategory } from '../types';

interface HeroProps {
  onExploreProducts: (cat?: ProductCategory) => void;
  onJoinNetwork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onJoinNetwork }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white py-12 md:py-20 lg:py-24 border-b border-forest-100">
      
      {/* Subtle Leaf Decorative Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
      <div className="absolute inset-0 leaf-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100/80 border border-forest-300/60 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-forest-600 animate-ping" />
              <span className="text-xs font-bold text-forest-900 tracking-wide uppercase">
                DNSP Healthy Products Pvt. Ltd. • Est. Aug 2017
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.15] tracking-tight">
              Healthy Living.{' '}
              <span className="block mt-1 sm:mt-2 text-forest-700">
                Better Choices.
              </span>
              <span className="gradient-text-gold block mt-1 sm:mt-2">
                Growing Together.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal-800/90 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover quality health, personal care and agricultural solutions designed to support healthier lifestyles, stronger communities and sustainable growth.
            </p>

            {/* Value Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-forest-900 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-600" />
                <span>Ayurvedic & Pure Botanicals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-600" />
                <span>Bio-Agricultural Protection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-forest-600" />
                <span>Leadership Development Platform</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <button
                onClick={() => onExploreProducts('all')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-forest-800 text-white font-semibold text-base shadow-card hover:bg-forest-700 hover:shadow-elevated transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onJoinNetwork}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-forest-900 border-2 border-forest-800/20 font-semibold text-base shadow-sm hover:border-forest-700 hover:bg-forest-50 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Users className="w-4 h-4 text-forest-700" />
                <span>Join Our Network</span>
              </button>
            </div>

            {/* Small Trust Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 border-t border-forest-100/70 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Incorporated under ROC Maharashtra</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest-600" />
                <span>FSSAI & GMP Aligned Formulations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-cream-200 aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80" 
                  alt="Natural wellness and healthy lifestyle by DNSP"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-1">
                    Authentic Wellness & Nature
                  </span>
                  <p className="text-sm sm:text-base font-medium text-cream-100">
                    "Bridging pure herbal nourishment, modern personal care, and farmer-focused biotechnology."
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Health & Personal Care */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-card border border-forest-100 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center text-forest-700">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-forest-950">Pure Nutrition</div>
                  <div className="text-[11px] text-gray-500">Herbal & Cold Pressed</div>
                </div>
              </div>

              {/* Floating Badge 2: Agricultural Solutions */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-card border border-forest-100 flex items-center gap-3 animate-float-delay">
                <div className="w-10 h-10 rounded-xl bg-leaf-100 flex items-center justify-center text-leaf-700">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-forest-950">Bio-Agriculture</div>
                  <div className="text-[11px] text-gray-500">Supporting Indian Farmers</div>
                </div>
              </div>

              {/* Floating Badge 3: 2017 Milestone */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-forest-900/90 text-white backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-card border border-gold-400/40 items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <div className="text-left">
                  <div className="text-[10px] text-gold-300 font-bold uppercase tracking-wider">Heritage</div>
                  <div className="text-xs font-bold">Since August 2017</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
