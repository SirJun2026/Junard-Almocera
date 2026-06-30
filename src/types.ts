export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  year: string;
  tags: string[];
  challenge: string;
  solution: string;
  scope: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorTheme: 'coral' | 'yellow' | 'teal' | 'lavender' | 'indigo';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface Tool {
  name: string;
  category: 'core' | 'design' | 'motion' | 'code';
  proficiency: number; // 1-5 or percentage
}
