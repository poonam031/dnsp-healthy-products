import React, { useEffect } from 'react';
import { 
  X, Trash2, Plus, Minus, ShoppingBag, 
  MessageSquare, ArrowRight 
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onProceedToContact: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const priceNum = parseInt(item.product.priceEst.replace(/[^0-9]/g, ''), 10) || 0;
      return acc + priceNum * item.quantity;
    }, 0);
  };

  const formattedSubtotal = `₹${calculateSubtotal().toLocaleString('en-IN')}`;

  const generateWhatsAppMessage = () => {
    let msg = `*DNSP Healthy Products - Product Inquiry Request*\n\n`;
    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.product.name}*\n   Qty: ${item.quantity} | Ref MRP: ${item.product.priceEst} | Unit: ${item.product.netQuantity}\n`;
    });
    msg += `\n*Total Estimated Value:* ${formattedSubtotal}\n*Total Items:* ${totalQuantity}\n\nPlease share availability, bulk dealer pricing, and dispatch schedule.`;
    return encodeURIComponent(msg);
  };

  const whatsappInquiryUrl = `https://wa.me/919822012345?text=${generateWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-cream-200 bg-cream-50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-forest-950">
                  Enquiry Basket
                </h3>
                <p className="text-[11px] text-gray-500">
                  {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded hover:bg-red-50"
                  title="Clear all items"
                >
                  Clear
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-gray-500 hover:bg-cream-200 text-charcoal-800"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-cream-100 text-forest-700 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-forest-600" />
                </div>
                <h4 className="font-heading font-bold text-lg text-forest-950 mb-1">
                  Your Basket is Empty
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto mb-6">
                  Explore our Health, Personal Care, and Agricultural formulations to build your custom enquiry list.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-forest-800 text-white text-xs font-bold hover:bg-forest-700 transition-colors shadow-sm"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-cream-50/80 border border-cream-200 flex items-center gap-3 relative group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-white border border-cream-200 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold text-forest-700 uppercase tracking-wider block">
                      {product.categoryLabel}
                    </span>
                    <h5 className="font-heading font-bold text-xs sm:text-sm text-forest-950 truncate">
                      {product.name}
                    </h5>
                    <div className="text-[11px] font-extrabold text-forest-900 mt-0.5">
                      {product.priceEst}
                      <span className="text-[10px] text-gray-500 font-normal ml-1">
                        ({product.netQuantity})
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-cream-300 rounded-lg bg-white overflow-hidden shadow-xs">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="p-1 hover:bg-cream-100 text-gray-600 touch-target"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-forest-950">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="p-1 hover:bg-cream-100 text-gray-600 touch-target"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-gray-400 hover:text-red-600 p-1 rounded transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Action CTAs */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-cream-200 bg-cream-50 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Estimated List Value:</span>
                <span className="font-heading font-black text-lg text-forest-950">
                  {formattedSubtotal}
                </span>
              </div>
              <p className="text-[10px] text-gray-500">
                *Final distributor pricing or bulk consignment discounts will be confirmed by DNSP coordinators.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all touch-target"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Basket via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onProceedToContact();
                  }}
                  className="w-full py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all touch-target"
                >
                  <span>Submit Inquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
