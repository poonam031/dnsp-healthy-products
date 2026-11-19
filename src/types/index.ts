export type ProductCategory = 'all' | 'health-nutrition' | 'personal-care' | 'agriculture';

export interface Product {
  id: string;
  name: string;
  category: 'health-nutrition' | 'personal-care' | 'agriculture';
  categoryLabel: string;
  tagline: string;
  description: string;
  fullDescription: string;
  priceEst: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
  gallery: string[];
  highlights: string[];
  specifications: { label: string; value: string }[];
  ingredients?: string[];
  benefits: string[];
  usageInstructions: string;
  netQuantity: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  category: 'Health & Nutrition' | 'Personal Care' | 'Agriculture' | 'Business Opportunity';
  avatar: string;
  verified: boolean;
  date: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  specialization: string;
  badges: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Agriculture' | 'Training' | 'Products';
  image: string;
  description: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface EnquiryFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  interestCategory: string;
  state: string;
  message: string;
}
