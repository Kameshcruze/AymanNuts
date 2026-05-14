
export interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription?: string;
  images: string[];
  rating: number;
  reviewsCount: number;
  reviews?: Review[];
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  specifications?: Record<string, string>;
  ingredients?: string[];
  benefits?: string[];
  shippingInfo?: string;
  weightOptions?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export type ViewMode = 'grid' | 'list';
export type SortOption = 'featured' | 'newest' | 'price-low-high' | 'price-high-low' | 'rating';
