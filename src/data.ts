import { Project, Service, Testimonial, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'neon-archive',
    title: 'Neon Archive',
    category: 'Branding',
    description: 'Dynamic typographic branding and printed editorial lookbook for a premium arts publication.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
    client: 'Neon Press',
    year: '2024',
    tags: ['Editorial Design', 'Brand Identity', 'Typography System', 'Art Direction'],
    challenge: 'The publication needed to merge digital art sensibilities with tactile high-end physical paper volumes. They wanted a voice that felt bold and unapologetically modern.',
    solution: 'Designed a comprehensive print and digital system featuring custom high-contrast serif typography paired with modular grid-based layouts and deep black, cream, and vivid neon orange accents.',
    scope: ['Creative Direction', 'Logo System', 'Printed Lookbook', 'Design Guidelines']
  },
  {
    id: 'soma-labs',
    title: 'Soma Labs Packaging',
    category: 'Packaging',
    description: 'Structural minimalist box layouts and abstract label systems for a bio-energetic supplement range.',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop',
    client: 'Soma Labs Inc.',
    year: '2025',
    tags: ['Packaging Layouts', 'Dielines', 'Abstract Illustration', 'Minimalism'],
    challenge: 'How to make technical medical supplement packaging look artistic and beautiful enough to be displayed on top of high-end living room sideboards.',
    solution: 'Engineered clean matte-finish box sleeves utilizing abstract botanical forms in monochrome ink, highlighted by tactile orange foil stamping.',
    scope: ['Packaging Art Direction', 'Structural Layout', 'Foil Stamping Plates', 'Web 3D Assets']
  },
  {
    id: 'shibuya-bites',
    title: 'Shibuya Bites',
    category: 'Branding',
    description: 'Vibrant brand identity & mascot illustration for an artisanal Japanese street food brand.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop',
    client: 'Shibuya Bites Ltd.',
    year: '2025',
    tags: ['Brand Strategy', 'Character Design', 'Menu Systems', 'Packaging'],
    challenge: 'The client wanted to stand out in a crowded street food market. They needed an identity that was friendly, memorable, and highly photogenic for social media.',
    solution: "Created 'Mochi-kun', a chubby rice ball mascot styled in retro rubber-hose animation style. Paired with customized dual-language typography in high-visibility tangerine orange and black sesame charcoal.",
    scope: ['Visual Identity', 'Custom Character Design', 'Merchandise Design', 'Food Packaging']
  },
  {
    id: 'bloom-botanicals',
    title: 'Bloom Botanicals',
    category: 'Packaging',
    description: 'Minimalist, plastic-free organic skincare packaging using natural hand-drawn botanicals.',
    image: 'https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=800&auto=format&fit=crop',
    client: 'Bloom Organic LLC',
    year: '2025',
    tags: ['Eco-Packaging', 'Illustration', 'Dielines', 'Art Direction'],
    challenge: 'Bloom produces premium hand-pressed oils but had low shelf presence. Their plastic jars failed to communicate their expensive, organic, and toxin-free formulations.',
    solution: 'Designed custom biodegradable amber glass jars wrapped in delicate hand-sketched floral illustrations and textured compostable sugarcane paper sleeves.',
    scope: ['Art Direction', 'Logo Refinement', 'Tactile Packaging Design', 'Eco Material Sourcing']
  },
  {
    id: 'cosmic-explorer',
    title: 'Cosmic Explorer Print',
    category: 'Illustration',
    description: 'Retro-futuristic limited-edition risograph print series celebrating starry celestial curiosity.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    client: 'Self-Initiated',
    year: '2026',
    tags: ['Risograph Art', 'Retro Futurism', 'Vector Illustration', 'Print Poster'],
    challenge: 'An investigation of vintage 1970s sci-fi cover book art, aiming to combine modern crisp vector lines with nostalgic print overlays and ink imperfections.',
    solution: 'Engineered a 4-color printing simulation overlay in Illustrator utilizing vibrant space purples, radiant yellows, and hot magentas, setting the offset plates purposely misaligned by 1mm.',
    scope: ['Vector Illustration', 'Color Separation', 'Texture Mapping', 'Gallery Print Run']
  },
  {
    id: 'vibe-check-agency',
    title: 'Vibe Check Agency',
    category: 'Digital & UI',
    description: 'High-energy, bento-grid website UI/UX design for an unconventional digital marketing team.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    client: 'Vibe Check Agency',
    year: '2025',
    tags: ['Website UI/UX', 'Bento Grid', 'Design Systems', 'Micro-Interactions'],
    challenge: 'The client requested a portfolio design that proved they understood internet culture and digital memes, rejecting standard boilerplate corporate layouts.',
    solution: 'Crafted a colorful bento-grid layout utilizing thick borders, high-contrast typography, interactive floating tags, and animated sticker elements.',
    scope: ['Creative Direction', 'UI/UX Design Layouts', 'Motion Prototyping', 'Custom Web Icons']
  },
  {
    id: 'bold-type-soda',
    title: 'Bold Type Soda',
    category: 'Packaging',
    description: 'Typographic-first aluminum can layout for a cheeky zero-sugar sparkling fruit soda.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop',
    client: 'Bold Type Beverage Co.',
    year: '2024',
    tags: ['Can Design', 'Typography', 'Brand Voice', 'CGI Layouts'],
    challenge: 'How to market organic soda without showing fruit illustrations. The brand wanted a bold, editorial layout aesthetic that felt high-end and design-driven.',
    solution: 'Designed a layout focusing entirely on extreme oversized serif typography wrapping dynamically around the cans, accented by intense, high-energy flat colors.',
    scope: ['Visual System', 'Can Formatting', 'Cardboard Carton Layout', 'Slogan Development']
  },
  {
    id: 'oddly-satisfying-studio',
    title: 'Oddly Satisfying Studio',
    category: 'Branding',
    description: 'Fluid, pastel brand guidelines and dynamic logotype for a sensory 3D rendering house.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop',
    client: 'Oddly Satisfying Co.',
    year: '2025',
    tags: ['Brand Identity', 'Fluid Logotype', 'Guidelines Book', '3D Direction'],
    challenge: 'A collective of 3D animators needed an identity that reflected their liquid physics and squishy rendering textures, yet remained professional for corporate pitches.',
    solution: "Developed the 'Squish-and-Stretch' identity system, with a responsive logo that morphs dynamically and a buttery color scheme of lavender, yellow, and mint.",
    scope: ['Logotype Suite', 'Interaction Guidelines', 'Brand Standard Manual', 'Social Assets']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Creating memorable visual systems, custom logotypes, color theory maps, and interactive guidelines that give your business a distinctive voice and confident stride.',
    iconName: 'Sparkles',
    colorTheme: 'coral'
  },
  {
    id: 'packaging-design',
    title: 'Packaging Design',
    description: 'Designing high-impact, physical products and boxes that fly off the retail shelves. Committed to tactile materials, sustainable layouts, and beautiful structural dielines.',
    iconName: 'Package',
    colorTheme: 'yellow'
  },
  {
    id: 'custom-illustration',
    title: 'Custom Illustration',
    description: 'Bespoke hand-drawn vector art, quirky character designs, editorial prints, and stylized graphic patterns that add raw personality and creative flavor to any surface.',
    iconName: 'Paintbrush',
    colorTheme: 'teal'
  },
  {
    id: 'digital-ui-design',
    title: 'UI/UX & Digital Design',
    description: 'Crafting responsive, high-fidelity website interfaces, interactive design systems, and animated digital layouts that feel as wonderful to interact with as they look.',
    iconName: 'Laptop',
    colorTheme: 'lavender'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sora Tanaka',
    role: 'Founder & Head Chef',
    company: 'Shibuya Bites',
    quote: 'Junard completely understood our vision. He created a mascot that our customers absolutely adore—we have people asking for Mochi-kun shirts daily! The design process was fun, collaborative, and incredibly professional.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    name: 'Maya Henderson',
    role: 'Product Director',
    company: 'Bloom Botanicals',
    quote: "Our new packaging designed by Junard was a massive game changer. Within three months of our retail launch, we saw a 45% increase in shelf conversions. It feels organic, premium, and perfectly tactile.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    name: 'Leo Chen',
    role: 'Creative Director',
    company: 'Vibe Check Agency',
    quote: 'Junard didn’t just design a website; he built an interactive playground that perfectly captures our team’s chaotic, creative energy. Our inbound client inquiries have doubled since launching the new layout.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  }
];

export const TOOLS: Tool[] = [
  { name: 'Adobe Illustrator', category: 'design', proficiency: 5 },
  { name: 'Adobe Photoshop', category: 'design', proficiency: 5 },
  { name: 'Figma', category: 'design', proficiency: 5 },
  { name: 'After Effects', category: 'motion', proficiency: 4 },
  { name: 'Procreate', category: 'design', proficiency: 4 },
  { name: 'HTML5 & CSS3', category: 'code', proficiency: 4 },
  { name: 'React & Tailwind', category: 'code', proficiency: 4 },
  { name: 'Brand Strategy', category: 'core', proficiency: 5 }
];
