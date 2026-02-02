export interface WaitlistEntry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  timestamp: string;
  source: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCase {
  title: string;
  image: string;
  icon: string;
}

export interface ComparisonItem {
  feature: string;
  scooping: string;
  scoopii: string;
}
