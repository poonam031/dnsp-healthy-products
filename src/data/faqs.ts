export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    category: 'About DNSP',
    question: 'When was DNSP Healthy Products Pvt. Ltd. established?',
    answer: 'DNSP Healthy Products Pvt. Ltd. was incorporated in August 2017 in Maharashtra, India. Over the past several years, the company has expanded its portfolio from foundational wellness into everyday personal care and organic-certified agricultural solutions.'
  },
  {
    category: 'Products & Quality',
    question: 'Are DNSP wellness and personal care products certified?',
    answer: 'Yes. All our Health & Nutrition products are manufactured in compliance with FSSAI standards, and our personal care range adheres to FDA (Ayush/Cosmetics) and GMP (Good Manufacturing Practice) specifications. We strictly prioritize natural extracts and avoid harsh toxic adulterants.'
  },
  {
    category: 'Agriculture',
    question: 'How do DNSP Agricultural products help farmers?',
    answer: 'DNSP agricultural solutions focus on bio-stimulants, botanical pest repellents, humic soil conditioners, and multi-micronutrients. They are formulated to restore soil microflora, stimulate root branching, prevent blossom drop, and reduce excessive expenditure on synthetic chemical inputs.'
  },
  {
    category: 'Business Opportunity',
    question: 'What is the DNSP Business Opportunity platform?',
    answer: 'The DNSP platform provides individuals with an opportunity to distribute authentic health, personal care, and agriculture products. We provide extensive product education, leadership training, public speaking development, and business mentoring. We emphasize realistic growth through customer relationships and product value rather than unrealistic income guarantees.'
  },
  {
    category: 'Orders & Distribution',
    question: 'How can I purchase DNSP products or become an authorized distributor?',
    answer: 'You can explore our product showcase and submit an instant online enquiry or WhatsApp request. Our regional distribution team in Maharashtra and partner coordinators will assist you with doorstep delivery or guide you through distributor onboarding.'
  },
  {
    category: 'Company Ethos',
    question: 'Does DNSP make medical cure claims on its products?',
    answer: 'No. In adherence to legal and medical guidelines, DNSP products are nutritional dietary supplements and everyday personal care essentials. They are formulated to complement healthy lifestyle choices, not to diagnose, treat, cure, or prevent any medical condition.'
  }
];
