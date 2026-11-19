import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';
import { faqsData } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-forest-700" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-950">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-800/80 mt-2">
            Clear, transparent answers about DNSP formulations, business opportunities, distributor operations, and quality certifications.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-cream-50/80 border-forest-300 shadow-soft'
                    : 'bg-white border-cream-200 hover:border-forest-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 touch-target"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-forest-100 text-forest-800 flex-shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-heading font-bold text-sm sm:text-base text-forest-950">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-forest-700 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-800/90 leading-relaxed border-t border-cream-200/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpdesk banner */}
        <div className="mt-12 p-6 rounded-3xl bg-forest-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-base text-cream-50">
              Have specific questions about product usage or distribution?
            </h4>
            <p className="text-xs text-forest-200 mt-1">
              Our regional Maharashtra support desk is available Monday through Saturday (9:30 AM – 6:30 PM).
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/919822012345?text=Hello%20DNSP%20Support,%20I%20have%20an%20inquiry%20regarding%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href="tel:+919822012345"
              className="px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold flex items-center gap-2 border border-forest-700 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>+91 98220 12345</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
