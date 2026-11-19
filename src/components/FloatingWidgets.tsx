import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, MessageSquare, PhoneCall, ShoppingBag, 
  X, Send 
} from 'lucide-react';

interface FloatingWidgetsProps {
  cartCount: number;
  openCart: () => void;
  openContact: (topic?: string) => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  cartCount,
  openCart,
  openContact,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show WhatsApp chat hint after 4 seconds once
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/919822012345?text=${encodeURIComponent(
    'Hello DNSP Healthy Products, I would like to inquire about your product range and business opportunity.'
  )}`;

  return (
    <>
      {/* Floating Action Buttons Container (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* WhatsApp Chat Popup Tooltip */}
        {showChatPopup && (
          <div className="pointer-events-auto bg-white rounded-2xl p-3.5 shadow-elevated border border-forest-100 max-w-xs animate-in slide-in-from-bottom-2 fade-in duration-300 relative mb-1 hidden sm:block">
            <button
              onClick={() => setShowChatPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
              aria-label="Dismiss chat tip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="pr-4">
                <div className="font-heading font-bold text-xs text-forest-950">
                  DNSP Official Helpline
                </div>
                <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                  Need quick product advice or distributor details? Chat directly on WhatsApp!
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#128C7E] hover:underline mt-1.5"
                >
                  <span>Start WhatsApp Chat</span>
                  <Send className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2.5 pointer-events-auto">
          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-12 h-12 rounded-2xl bg-white/95 text-forest-900 shadow-card hover:bg-forest-900 hover:text-white transition-all duration-300 flex items-center justify-center border border-forest-100 group touch-target"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}

          {/* Floating WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-elevated hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center relative touch-target border-2 border-white"
          >
            <MessageSquare className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white" />
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Screen < 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-cream-200 px-3 py-2 shadow-2xl flex items-center justify-around gap-2">
        {/* Call Helpline */}
        <a
          href="tel:+919822012345"
          className="flex-1 py-2.5 px-2 rounded-xl bg-cream-100 text-forest-950 hover:bg-cream-200 text-xs font-bold flex items-center justify-center gap-1.5 touch-target"
        >
          <PhoneCall className="w-4 h-4 text-forest-700" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm touch-target"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Enquiry Basket / Contact Trigger */}
        <button
          onClick={() => (cartCount > 0 ? openCart() : openContact('General Enquiry'))}
          className="flex-1 py-2.5 px-2 rounded-xl bg-forest-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm relative touch-target"
        >
          <ShoppingBag className="w-4 h-4 text-gold-400" />
          <span>Enquiry</span>
          {cartCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-gold-500 text-forest-950 text-[10px] font-black flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
};
