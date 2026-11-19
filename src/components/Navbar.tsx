import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, ShoppingBag, PhoneCall, ChevronDown, 
  Leaf, HeartHandshake, ShieldCheck, Sparkles, MapPin 
} from 'lucide-react';
import { ProductCategory } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory: ProductCategory;
  setSelectedCategory: (cat: ProductCategory) => void;
  cartCount: number;
  openCart: () => void;
  openSearch: () => void;
  openContactModal: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  setSelectedCategory,
  cartCount,
  openCart,
  openSearch,
  openContactModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: string, category?: ProductCategory) => {
    setActiveTab(tab);
    if (category) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-forest-900 text-cream-100 text-xs py-2 px-4 border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-gold-500 text-forest-950">
              Est. Aug 2017
            </span>
            <span className="hidden sm:inline text-forest-200">|</span>
            <span className="flex items-center gap-1 text-forest-100">
              <MapPin className="w-3.5 h-3.5 text-gold-400" /> Maharashtra, India • Expanding Nationwide Network
            </span>
          </div>
          <div className="flex items-center gap-4 text-forest-200">
            <a 
              href="tel:+918000000000" 
              className="hover:text-gold-400 transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-gold-400" /> Helpline: +91 98220 12345
            </a>
            <span className="hidden sm:inline">|</span>
            <button 
              onClick={() => handleNavClick('opportunity')}
              className="text-gold-400 hover:text-gold-300 font-semibold underline underline-offset-2 transition-colors"
            >
              Distributor Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-soft border-b border-forest-100 py-3' 
            : 'bg-white/95 backdrop-blur-md border-b border-cream-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 p-2.5 shadow-md flex items-center justify-center border border-gold-500/30 group-hover:shadow-glow transition-all">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="46" fill="#0d3823" stroke="#f59e0b" strokeWidth="3" />
                  <path d="M50 16 C34 32 28 50 34 68 C40 82 60 82 66 68 C72 50 66 32 50 16 Z" fill="#22c55e" />
                  <path d="M50 24 C44 40 48 60 50 74" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="50" cy="48" r="9" fill="#f59e0b" />
                  <path d="M42 58 C46 64 54 64 58 58" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-forest-950 flex items-center gap-1.5">
                  DNSP <span className="text-forest-700 font-bold">HEALTHY PRODUCTS</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-gold-600 tracking-wider uppercase -mt-0.5">
                  Pvt. Ltd. • Quality & Wellness
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'home' 
                    ? 'text-forest-800 bg-forest-50 font-semibold' 
                    : 'text-charcoal-800 hover:text-forest-700 hover:bg-cream-100'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'about' 
                    ? 'text-forest-800 bg-forest-50 font-semibold' 
                    : 'text-charcoal-800 hover:text-forest-700 hover:bg-cream-100'
                }`}
              >
                About Us
              </button>

              {/* Products Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => handleNavClick('products', 'all')}
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                    activeTab === 'products' 
                      ? 'text-forest-800 bg-forest-50 font-semibold' 
                      : 'text-charcoal-800 hover:text-forest-700 hover:bg-cream-100'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4 text-forest-600 group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <div 
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className={`absolute left-0 top-full mt-1 w-72 rounded-2xl bg-white shadow-elevated border border-forest-100 p-2 transition-all duration-200 z-50 ${
                    productsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="p-2 border-b border-cream-200 mb-1">
                    <p className="text-xs font-semibold text-forest-900">Explore Our 3 Core Divisions</p>
                    <p className="text-[11px] text-gray-500">Formulated for health, home and harvest</p>
                  </div>

                  <button
                    onClick={() => handleNavClick('products', 'all')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold hover:bg-forest-50 text-forest-900 flex items-center justify-between"
                  >
                    <span>View All Products (18)</span>
                    <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  </button>

                  <button
                    onClick={() => handleNavClick('products', 'health-nutrition')}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs hover:bg-forest-50 transition-colors flex items-start gap-2.5 group/item"
                  >
                    <div className="p-1.5 rounded-lg bg-forest-100 text-forest-700 group-hover/item:bg-forest-600 group-hover/item:text-white transition-colors">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-900 group-hover/item:text-forest-800">Health & Nutrition</div>
                      <div className="text-[11px] text-gray-500">Herbal teas, wellness juices, shakes & supplements</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('products', 'personal-care')}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs hover:bg-forest-50 transition-colors flex items-start gap-2.5 group/item"
                  >
                    <div className="p-1.5 rounded-lg bg-gold-100 text-gold-700 group-hover/item:bg-gold-500 group-hover/item:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-900 group-hover/item:text-forest-800">Personal Care</div>
                      <div className="text-[11px] text-gray-500">Ayurvedic soaps, hair oils, creams & hygiene</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('products', 'agriculture')}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs hover:bg-forest-50 transition-colors flex items-start gap-2.5 group/item"
                  >
                    <div className="p-1.5 rounded-lg bg-leaf-100 text-leaf-700 group-hover/item:bg-leaf-600 group-hover/item:text-white transition-colors">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-900 group-hover/item:text-forest-800">Agriculture</div>
                      <div className="text-[11px] text-gray-500">Organic crop protection, growth & bio-boosters</div>
                    </div>
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('opportunity')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'opportunity' 
                    ? 'text-forest-800 bg-forest-50 font-semibold' 
                    : 'text-charcoal-800 hover:text-forest-700 hover:bg-cream-100'
                }`}
              >
                Business Opportunity
              </button>

              <button
                onClick={() => handleNavClick('gallery')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'gallery' 
                    ? 'text-forest-800 bg-forest-50 font-semibold' 
                    : 'text-charcoal-800 hover:text-forest-700 hover:bg-cream-100'
                }`}
              >
                Gallery & Team
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'contact' 
                    ? 'text-forest-800 bg-forest-50 font-semibold' 
                    : 'text-charcoal-800 hover:text-forest-700 hover:bg-cream-100'
                }`}
              >
                Contact Us
              </button>
            </nav>

            {/* Action Buttons: Search, Cart, CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button 
                onClick={openSearch}
                aria-label="Search Products"
                className="p-2 sm:p-2.5 rounded-xl text-charcoal-800 hover:text-forest-800 hover:bg-forest-50 transition-colors relative"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart / Enquiry Basket Trigger */}
              <button 
                onClick={openCart}
                aria-label="View Enquiry Cart"
                className="p-2 sm:p-2.5 rounded-xl text-charcoal-800 hover:text-forest-800 hover:bg-forest-50 transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-forest-600 text-white text-[11px] font-bold flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Join Us / Partner CTA */}
              <button
                onClick={() => openContactModal('Distributor Enquiry')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-forest-800 to-forest-900 text-white text-sm font-semibold shadow-md hover:from-forest-700 hover:to-forest-800 hover:shadow-card transition-all active:scale-95 border border-gold-500/30"
              >
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Join Network</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Navigation"
                className="lg:hidden p-2 rounded-xl text-forest-950 hover:bg-forest-50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm"
        />

        {/* Drawer Content */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-5 border-b border-cream-200 flex items-center justify-between bg-cream-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-forest-900 p-2 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <div className="font-heading font-bold text-forest-950 text-base">DNSP Healthy</div>
                <div className="text-[10px] text-gray-500 font-semibold uppercase">Pvt. Ltd. • Est. 2017</div>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="p-4 space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'home' ? 'bg-forest-50 text-forest-800' : 'text-charcoal-800 hover:bg-cream-100'
              }`}
            >
              <span>Home</span>
              <span className="text-xs text-gray-400">Overview</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'about' ? 'bg-forest-50 text-forest-800' : 'text-charcoal-800 hover:bg-cream-100'
              }`}
            >
              <span>About Us</span>
              <span className="text-xs text-gray-400">Since 2017</span>
            </button>

            {/* Products Group Accordion */}
            <div className="py-2 px-1">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-1">
                Product Categories
              </div>
              <button
                onClick={() => handleNavClick('products', 'all')}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-forest-900 hover:bg-forest-50 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-500" /> All Products (18 Items)
              </button>
              <button
                onClick={() => handleNavClick('products', 'health-nutrition')}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-forest-900 hover:bg-forest-50 flex items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-forest-600" /> Health & Nutrition
              </button>
              <button
                onClick={() => handleNavClick('products', 'personal-care')}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-forest-900 hover:bg-forest-50 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-600" /> Personal Care Essentials
              </button>
              <button
                onClick={() => handleNavClick('products', 'agriculture')}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-forest-900 hover:bg-forest-50 flex items-center gap-2"
              >
                <Leaf className="w-4 h-4 text-leaf-600" /> Agriculture & Crop Solutions
              </button>
            </div>

            <button
              onClick={() => handleNavClick('opportunity')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'opportunity' ? 'bg-forest-50 text-forest-800' : 'text-charcoal-800 hover:bg-cream-100'
              }`}
            >
              <span>Business Opportunity</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-gold-100 text-gold-800 font-bold">Grow</span>
            </button>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'gallery' ? 'bg-forest-50 text-forest-800' : 'text-charcoal-800 hover:bg-cream-100'
              }`}
            >
              <span>Gallery & Leadership</span>
              <span className="text-xs text-gray-400">Events</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                activeTab === 'contact' ? 'bg-forest-50 text-forest-800' : 'text-charcoal-800 hover:bg-cream-100'
              }`}
            >
              <span>Contact Us</span>
              <span className="text-xs text-gray-400">Support</span>
            </button>
          </div>

          {/* Footer CTAs */}
          <div className="p-4 border-t border-cream-200 bg-cream-50 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal('Distributor Enquiry');
              }}
              className="w-full py-3 rounded-xl bg-forest-800 text-white font-semibold text-sm shadow-md hover:bg-forest-700 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-gold-400" /> Become a Partner / Distributor
            </button>
            <div className="text-center text-[11px] text-gray-500 pt-1">
              Registered in Maharashtra • Since 2017
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
