import React, { useState, useEffect } from 'react';
import { productsData } from './data/products';
import { Product, ProductCategory, CartItem } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { CategoryShowcase } from './components/CategoryShowcase';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BusinessOpportunity } from './components/BusinessOpportunity';
import { LeadershipSection } from './components/LeadershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReviewsTrustSection } from './components/ReviewsTrustSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { FloatingWidgets } from './components/FloatingWidgets';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Cart & Basket state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dnsp_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);
  const [contactTopic, setContactTopic] = useState<string>('Distributor Enquiry');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('dnsp_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        showToast(`Updated quantity for ${product.name}`);
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToast(`Added ${product.name} to Enquiry Basket`);
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Removed item from basket');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Enquiry basket cleared');
  };

  const handleOpenContactWithTopic = (topic?: string) => {
    if (topic) setContactTopic(topic);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelectFromBanner = (category: ProductCategory) => {
    setSelectedCategory(category);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 font-sans flex flex-col selection:bg-forest-700 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-6 z-50 bg-forest-900 text-cream-50 px-4 py-3 rounded-2xl shadow-elevated border border-gold-400/40 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        openSearch={() => setIsSearchOpen(true)}
        openContactModal={(topic) => handleOpenContactWithTopic(topic)}
      />

      {/* Main Content Area based on Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreProducts={(cat) => handleCategorySelectFromBanner(cat || 'all')}
              onJoinNetwork={() => handleOpenContactWithTopic('Distributor Enquiry')}
            />

            {/* 2. Key Stats & Credentials Bar */}
            <StatsSection />

            {/* 3. Three Core Flagship Divisions */}
            <CategoryShowcase
              onSelectCategory={handleCategorySelectFromBanner}
            />

            {/* 4. About DNSP Overview Section */}
            <AboutSection
              onExploreProducts={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreOpportunity={() => {
                setActiveTab('opportunity');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Why Choose DNSP Feature Cards */}
            <WhyChooseUs />

            {/* 6. Product Showcase Highlights */}
            <ProductShowcase
              products={productsData}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onOpenDetails={(p) => setSelectedProduct(p)}
              onAddToCart={handleAddToCart}
              cartProductIds={cartItems.map((ci) => ci.product.id)}
            />

            {/* 7. Business Opportunity Section */}
            <BusinessOpportunity
              onPartnerClick={() => handleOpenContactWithTopic('Distributor Enquiry')}
              onContactClick={() => handleOpenContactWithTopic('Business Opportunity')}
            />

            {/* 8. Trust, Certifications & Google Review Badge */}
            <ReviewsTrustSection />

            {/* 9. Leadership Section */}
            <LeadershipSection />

            {/* 10. Customer Testimonials */}
            <TestimonialsSection />

            {/* 11. Frequently Asked Questions */}
            <FAQSection />

            {/* 12. Contact Us Section */}
            <ContactSection initialTopic={contactTopic} />
          </>
        )}

        {/* Dedicated "Products" Tab */}
        {activeTab === 'products' && (
          <div className="pt-2">
            <ProductShowcase
              products={productsData}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onOpenDetails={(p) => setSelectedProduct(p)}
              onAddToCart={handleAddToCart}
              cartProductIds={cartItems.map((ci) => ci.product.id)}
            />
          </div>
        )}

        {/* Dedicated "About Us" Tab */}
        {activeTab === 'about' && (
          <div className="pt-2">
            <AboutSection
              onExploreProducts={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreOpportunity={() => {
                setActiveTab('opportunity');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <StatsSection />
            <LeadershipSection />
            <ReviewsTrustSection />
          </div>
        )}

        {/* Dedicated "Business Opportunity" Tab */}
        {activeTab === 'opportunity' && (
          <div className="pt-2">
            <BusinessOpportunity
              onPartnerClick={() => handleOpenContactWithTopic('Distributor Enquiry')}
              onContactClick={() => handleOpenContactWithTopic('Business Opportunity')}
            />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection initialTopic="Business Opportunity" />
          </div>
        )}

        {/* Dedicated "Gallery" Tab */}
        {activeTab === 'gallery' && (
          <div className="pt-2">
            <GallerySection />
            <LeadershipSection />
          </div>
        )}

        {/* Dedicated "Contact Us" Tab */}
        {activeTab === 'contact' && (
          <div className="pt-2">
            <ContactSection initialTopic={contactTopic} />
            <FAQSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(tab, category) => {
          setActiveTab(tab);
          if (category) setSelectedCategory(category);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating Action Elements (WhatsApp, Back-To-Top, Mobile Bottom Bar) */}
      <FloatingWidgets
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        openContact={(topic) => handleOpenContactWithTopic(topic)}
      />

      {/* Modals & Slide-out Drawers */}
      
      {/* 1. Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isInCart={selectedProduct ? cartItems.some((i) => i.product.id === selectedProduct.id) : false}
        onSelectRelated={(relProduct) => setSelectedProduct(relProduct)}
        allProducts={productsData}
      />

      {/* 2. Cart / Enquiry Basket Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onProceedToContact={() => handleOpenContactWithTopic('Distributor Enquiry')}
      />

      {/* 3. Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={productsData}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 4. Legal Compliance & Policies Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
};

export default App;
