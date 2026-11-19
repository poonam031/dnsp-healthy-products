import React, { useState, useEffect } from 'react';
import { 
  Send, PhoneCall, Mail, MapPin, MessageSquare, 
  CheckCircle2, AlertCircle, Building, ExternalLink 
} from 'lucide-react';
import { EnquiryFormData } from '../types';

interface ContactSectionProps {
  initialTopic?: string;
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialTopic }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    interestCategory: initialTopic || 'Distributor Enquiry',
    state: 'Maharashtra',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({ ...prev, interestCategory: initialTopic }));
    }
  }, [initialTopic]);

  const interestOptions = [
    'Health Products',
    'Personal Care Products',
    'Agriculture Products',
    'Business Opportunity',
    'Distributor Enquiry',
    'General Enquiry',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    const cleanPhone = formData.mobileNumber.replace(/[^0-9]/g, '');
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (cleanPhone.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or question';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate backend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const whatsappInquiryUrl = `https://wa.me/919822012345?text=${encodeURIComponent(
    `Hello DNSP Healthy Products,\nMy name is ${formData.fullName || 'Customer'}.\nI am reaching out regarding: ${formData.interestCategory}.\nEmail: ${formData.email || 'N/A'}\nPhone: ${formData.mobileNumber || 'N/A'}\nMessage: ${formData.message || 'Looking for distributor details.'}`
  )}`;

  return (
    <section className="py-16 md:py-24 bg-cream-50 relative overflow-hidden" id="contact">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-forest-700" />
            <span>Connect With Our Team</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950">
            Get in Touch With DNSP
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 mt-3 max-w-2xl mx-auto leading-relaxed">
            Whether you are looking to place an order, partner as an authorized distributor, or learn more about our leadership platform, we are here to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Badges */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-cream-200 space-y-6">
              <h3 className="font-heading font-bold text-xl text-forest-950">
                Direct Channels
              </h3>

              {/* WhatsApp Quick Chat */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-green-50/70 border border-green-200">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-sm text-forest-950">WhatsApp Official Desk</h4>
                  <p className="text-xs text-charcoal-800/80 mt-0.5">
                    Instant inquiries, catalog requests & partner queries.
                  </p>
                  <a
                    href="https://wa.me/919822012345?text=Hello%20DNSP%20Healthy%20Products,%20I%20would%20like%20to%20connect%20regarding%20products%20and%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 hover:text-forest-900 mt-2 font-sans"
                  >
                    <span>Chat on WhatsApp: +91 98220 12345</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Helpline */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream-50 border border-cream-200">
                <div className="w-12 h-12 rounded-xl bg-forest-800 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <PhoneCall className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-forest-950">Customer Care & Helpline</h4>
                  <p className="text-xs text-charcoal-800/80 mt-0.5">
                    Mon - Sat from 9:30 AM to 6:30 PM IST
                  </p>
                  <a
                    href="tel:+919822012345"
                    className="inline-block text-xs font-bold text-forest-800 hover:text-forest-900 mt-2"
                  >
                    +91 98220 12345 / 020-25678900
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream-50 border border-cream-200">
                <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-forest-950">Corporate Email Support</h4>
                  <p className="text-xs text-charcoal-800/80 mt-0.5">
                    General, distributor and compliance desk.
                  </p>
                  <a
                    href="mailto:contact@dnsphealthy.com"
                    className="inline-block text-xs font-bold text-forest-800 hover:text-forest-900 mt-2"
                  >
                    contact@dnsphealthy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Registered Address & Map Info */}
            <div className="bg-forest-950 text-white rounded-3xl p-6 sm:p-8 shadow-card border border-forest-800">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Building className="w-4 h-4" />
                <span>Head Office & Registered Jurisdiction</span>
              </div>

              <h4 className="font-heading font-extrabold text-xl text-cream-50">
                DNSP Healthy Products Pvt. Ltd.
              </h4>

              <div className="flex items-start gap-3 mt-4 text-xs sm:text-sm text-forest-200">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Corporate Tower, High-Tech Commercial Zone, Pune - 411038, Maharashtra, India.
                  <br />
                  <span className="text-[11px] text-forest-300 mt-1 block">
                    Incorporated under ROC Maharashtra • CIN: U74999MH2017PTC298765
                  </span>
                </p>
              </div>

              {/* Interactive map button */}
              <div className="mt-6 pt-4 border-t border-forest-800 flex items-center justify-between">
                <span className="text-xs text-forest-300">Google Maps Location</span>
                <a
                  href="https://maps.google.com/?q=Pune+Maharashtra+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 underline underline-offset-4"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-cream-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-forest-600" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-forest-950">
                  Thank You for Connecting!
                </h3>
                <p className="text-sm text-charcoal-800/80 max-w-md mx-auto leading-relaxed">
                  Your enquiry regarding <strong>{formData.interestCategory}</strong> has been received. Our Maharashtra coordinator will get in touch with you at <strong>{formData.mobileNumber}</strong> shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        mobileNumber: '',
                        email: '',
                        interestCategory: 'Distributor Enquiry',
                        state: 'Maharashtra',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cream-100 hover:bg-cream-200 text-charcoal-800 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-forest-950">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Fill in your contact information and our regional manager will assist you promptly.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-forest-950 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kulkarni"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-cream-300 focus:ring-forest-600'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Mobile & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-forest-950 mb-1.5">
                      Mobile Number (10 Digits) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="9822012345"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl bg-cream-50 border text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.mobileNumber
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-cream-300 focus:ring-forest-600'
                        }`}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.mobileNumber}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-forest-950 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-cream-300 focus:ring-forest-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Interested In Dropdown & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-forest-950 mb-1.5">
                      Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.interestCategory}
                      onChange={(e) => setFormData({ ...formData, interestCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 transition-all cursor-pointer"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-950 mb-1.5">
                      State / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maharashtra, Gujarat, etc."
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold text-forest-950 mb-1.5">
                    Your Message / Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the products you wish to order or your interest in distributor partnership..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-cream-300 focus:ring-forest-600'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-bold text-sm sm:text-base shadow-card hover:shadow-elevated transition-all flex items-center justify-center gap-2 touch-target disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin mr-2">⏳</span>
                    ) : (
                      <Send className="w-4 h-4 text-gold-400" />
                    )}
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}</span>
                  </button>
                  <p className="text-[11px] text-gray-500 text-center mt-2">
                    🔒 Your information is confidential and will only be used by DNSP Healthy Products Pvt. Ltd. to contact you.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
