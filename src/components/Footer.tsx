import React, { useState } from 'react';
import { 
  Leaf, HeartHandshake, Sparkles, MapPin, PhoneCall, 
  Mail, ArrowRight, ShieldCheck, CheckCircle2, 
  Instagram, Facebook, Youtube, MessageSquare 
} from 'lucide-react';
import { ProductCategory } from '../types';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onNavClick: (tab: string, category?: ProductCategory) => void;
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenLegal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-forest-950 text-cream-100 pt-16 pb-24 md:pb-12 border-t border-forest-900 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-forest-900/80 border border-forest-800 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-card">
          <div className="text-center lg:text-left">
            <span className="text-gold-400 font-bold uppercase tracking-wider text-xs">
              Stay Informed With DNSP
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-cream-50 mt-1">
              Subscribe for Wellness & Farm Insights
            </h3>
            <p className="text-xs sm:text-sm text-forest-200 mt-1 max-w-xl">
              Receive seasonal crop protection advice, Ayurvedic lifestyle routines, and regional distributor convention updates.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="p-3 rounded-xl bg-forest-800 border border-forest-600 text-xs sm:text-sm text-gold-300 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Thank you! You are subscribed to DNSP updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:w-72 px-4 py-3 rounded-xl bg-forest-950/80 border border-forest-700 text-xs sm:text-sm text-white placeholder:text-forest-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-forest-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-md touch-target flex-shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-900">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => onNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 p-2.5 shadow-md flex items-center justify-center border border-gold-500/40 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="46" fill="#0d3823" stroke="#f59e0b" strokeWidth="3" />
                  <path d="M50 16 C34 32 28 50 34 68 C40 82 60 82 66 68 C72 50 66 32 50 16 Z" fill="#22c55e" />
                  <path d="M50 24 C44 40 48 60 50 74" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="50" cy="48" r="9" fill="#f59e0b" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-cream-50 block">
                  DNSP HEALTHY PRODUCTS
                </span>
                <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-widest block -mt-0.5">
                  Pvt. Ltd. • Incorporated Aug 2017
                </span>
              </div>
            </div>

            <p className="text-xs text-forest-200/90 leading-relaxed max-w-sm">
              DNSP Healthy Products Pvt. Ltd. is an Indian wellness, personal care and agriculture enterprise committed to healthier households and stronger farming communities through quality botanical formulations and ethical leadership.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-forest-900 hover:bg-forest-800 text-cream-100 hover:text-gold-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-forest-900 hover:bg-forest-800 text-cream-100 hover:text-gold-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-forest-900 hover:bg-forest-800 text-cream-100 hover:text-gold-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919822012345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-forest-900 hover:bg-forest-800 text-cream-100 hover:text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-cream-50 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-forest-200">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-gold-400 transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-gold-400 transition-colors"
                >
                  About DNSP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('opportunity')}
                  className="hover:text-gold-400 transition-colors"
                >
                  Business Opportunity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('gallery')}
                  className="hover:text-gold-400 transition-colors"
                >
                  Gallery & Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-gold-400 transition-colors"
                >
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Product Divisions Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-cream-50 uppercase tracking-wider">
              Product Divisions
            </h4>
            <ul className="space-y-2 text-xs text-forest-200">
              <li>
                <button
                  onClick={() => onNavClick('products', 'all')}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>All Formulations (20 Items)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('products', 'health-nutrition')}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-forest-400" />
                  <span>Health & Nutrition (Teas & Juices)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('products', 'personal-care')}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>Personal Care & Skin Radiance</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('products', 'agriculture')}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <Leaf className="w-3.5 h-3.5 text-leaf-400" />
                  <span>Agriculture (Crop Bio-Protection)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contacts Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-cream-50 uppercase tracking-wider">
              Registered Office
            </h4>
            <div className="space-y-2.5 text-xs text-forest-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>
                  Pune, Maharashtra, India.
                  <br />
                  <span className="text-[11px] text-forest-300">
                    ROC Pune • CIN: U74999MH2017PTC298765
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>+91 98220 12345 (Helpline)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>contact@dnsphealthy.com</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-forest-300">
                <ShieldCheck className="w-4 h-4 text-forest-400 flex-shrink-0" />
                <span>Consumer Grievance Desk Available</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Compliance Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-forest-300 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} DNSP Healthy Products Pvt. Ltd. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('direct-selling')}
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Direct Selling Guidelines
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Medical & Quality Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
