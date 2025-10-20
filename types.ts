
export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
