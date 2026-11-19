import React, { useEffect } from 'react';
import { X, ShieldCheck, Scale, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'direct-selling' | 'disclaimer';

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const contentMap: Record<
    LegalDocType,
    { title: string; subtitle: string; icon: any; body: React.ReactNode }
  > = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Data protection and confidentiality commitment at DNSP Healthy Products Pvt. Ltd.',
      icon: ShieldCheck,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
          <p>
            <strong>1. Commitment to Privacy:</strong> DNSP Healthy Products Pvt. Ltd. (incorporated in August 2017 in Maharashtra, India) respects the privacy of our customers, distributors, and website visitors. We are committed to safeguarding personal information collected through our digital interfaces and distribution channels.
          </p>
          <p>
            <strong>2. Information We Collect:</strong> When you submit an enquiry, register for product updates, or communicate with our regional coordinators, we may collect your name, mobile number, email address, shipping state, and product preferences.
          </p>
          <p>
            <strong>3. Use of Information:</strong> Collected details are utilized exclusively to fulfill orders, respond to product enquiries, provide distributor support, share regulatory product alerts, and process legitimate business requests.
          </p>
          <p>
            <strong>4. Non-Disclosure & Security:</strong> DNSP does not sell, rent, or trade your personal data to third-party commercial marketing brokers. All data is stored in secured database environments adhering to applicable Indian Information Technology regulations.
          </p>
          <p>
            <strong>5. Contacting the Grievance Officer:</strong> For any questions or data removal requests, contact us at <code>privacy@dnsphealthy.com</code> or reach our Corporate Headquarters in Pune, Maharashtra.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Guidelines governing the use of this website, product catalog, and distribution network.',
      icon: Scale,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
          <p>
            <strong>1. Acceptance of Terms:</strong> By accessing this website and utilizing our enquiry services, you acknowledge and agree to comply with the terms and conditions outlined herein by DNSP Healthy Products Pvt. Ltd.
          </p>
          <p>
            <strong>2. Product Representation & Pricing:</strong> While we endeavor to ensure accurate representation of package sizes, botanical ingredients, and recommended retail prices (MRP), prices and formulations may be periodically updated according to batch regulations and state taxes.
          </p>
          <p>
            <strong>3. Order Placement & Verification:</strong> All website requests constitute product enquiries and requests for quotation. Actual supply agreements and dispatches are handled through verified regional distributors and official company warehouses.
          </p>
          <p>
            <strong>4. Intellectual Property:</strong> Trademarks, logos, product names, packaging designs, and text content belong exclusively to DNSP Healthy Products Pvt. Ltd. Unauthorized replication or counterfeiting is strictly prohibited under Indian trademark law.
          </p>
          <p>
            <strong>5. Governing Law:</strong> These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Maharashtra.
          </p>
        </div>
      ),
    },
    'direct-selling': {
      title: 'Direct Selling Code of Ethics & Guidelines',
      subtitle: 'Adherence to the Consumer Protection (Direct Selling) Rules, 2021.',
      icon: FileText,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
          <p>
            <strong>1. Regulatory Compliance:</strong> DNSP Healthy Products Pvt. Ltd. strictly adheres to the Consumer Protection (Direct Selling) Rules, 2021 enacted under the Consumer Protection Act, 2019 by the Ministry of Consumer Affairs, Food & Public Distribution, Government of India.
          </p>
          <p>
            <strong>2. Prohibition of Pyramid / Ponzi Schemes:</strong> DNSP does not promote or participate in pyramid schemes or money circulation programs. Compensation and distributor incentives are strictly based on the sale of legitimate consumer products at reasonable prices, never on mere recruitment of individuals.
          </p>
          <p>
            <strong>3. Zero Compulsory Registration Fees:</strong> Becoming an authorized independent distributor does not require purchasing non-returnable materials or paying exorbitant entry fees. Joining is accessible, ethical, and focused on voluntary product training.
          </p>
          <p>
            <strong>4. Cooling-Off Period & Buy-Back Guarantee:</strong> Distributors and consumers are entitled to a reasonable cooling-off period and an official buy-back / inventory return policy for marketable, unused goods in line with statutory requirements.
          </p>
          <p>
            <strong>5. No Exaggerated Earnings Claims:</strong> The company prohibits making false promises of guaranteed riches, passive windfalls, or effortless income. Independent distributor success is directly proportional to individual product knowledge, active customer service, and dedication.
          </p>
        </div>
      ),
    },
    disclaimer: {
      title: 'Medical & Product Disclaimer',
      subtitle: 'Important disclosures regarding dietary supplements, personal care and agriculture.',
      icon: AlertCircle,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
          <p>
            <strong>1. Dietary & Wellness Supplements:</strong> Statements regarding our health, herbal, and nutritional formulations (including teas, wellness juices, protein powders, and herbal extracts) are based on traditional Ayurvedic literature and recognized nutritional science. They are intended as dietary lifestyle supplements.
          </p>
          <p>
            <strong>2. Not Medical Cures:</strong> DNSP products are <strong>not intended to diagnose, treat, cure, or prevent any disease</strong> or medical illness. Pregnant or lactating women, individuals taking prescription medications, or those with known chronic health conditions must consult a licensed physician prior to introducing any new supplement.
          </p>
          <p>
            <strong>3. Personal Care Results:</strong> Skin and hair responses may vary based on individual skin type, water quality, and climate. We advise conducting a standard 24-hour patch test before full cosmetic application.
          </p>
          <p>
            <strong>4. Agricultural Bio-Inputs:</strong> Soil enhancers, bio-stimulants, and crop protection sprays are formulated to assist balanced farming practices. Crop yield outcomes depend on local weather, rainfall, pest cycles, irrigation methods, and soil chemistry.
          </p>
        </div>
      ),
    },
  };

  const doc = contentMap[type];
  const Icon = doc.icon;

  return (
    <div
      className="fixed inset-0 z-50 bg-forest-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-cream-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-cream-200 bg-cream-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
              <Icon className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-forest-950">
                {doc.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500">{doc.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-500 hover:bg-cream-200 touch-target"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {doc.body}
        </div>

        {/* Footer */}
        <div className="p-4 bg-cream-50 border-t border-cream-200 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5 text-forest-800 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-forest-600" />
            <span>DNSP Healthy Products Pvt. Ltd. • Registered in Maharashtra</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-forest-800 text-white font-bold text-xs hover:bg-forest-700 transition-colors"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};
