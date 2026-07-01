import { Project, Service, Testimonial, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nb-social-strategy',
    title: 'Social Content Strategy',
    category: 'Digital & UI',
    description: 'Designed a 12-month organic social media growth map, content pillar blueprint, and editorial planning system for Nano Banana\'s global launch.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    client: 'Nano Banana',
    year: '2026',
    tags: ['Content Strategy', 'Social Media Management', 'Calendar Planning'],
    challenge: 'Establishing a regular, engaging brand presence on social networks requires structure and strategic guidelines, which Nano Banana was lacking during their initial launch phase.',
    solution: 'Designed a robust content planning matrix consisting of five core pillars, visual calendar layouts, and a content scheduling hub using standard database planners to maintain consistency.',
    scope: ['Content Strategy', 'Social Media Management', 'Calendar Planning']
  },
  {
    id: 'nb-social-assets',
    title: 'Custom Social Assets',
    category: 'Digital & UI',
    description: 'Created a massive suite of high-engagement, eye-popping Instagram carousels, animated story frames, and custom Reels covers matching Nano Banana’s bold style.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    client: 'Nano Banana',
    year: '2026',
    tags: ['Social Graphics', 'Carousels', 'Reels Covers', 'Ad Design'],
    challenge: 'Standing out in competitive social media feeds requires unique and memorable graphics that instantly capture user attention under three seconds.',
    solution: 'Crafted a consistent custom template kit in Figma utilizing high-contrast, trendy street culture vector graphics, customized frame formats, and catchy cover overlays.',
    scope: ['Social Graphics', 'Carousels', 'Reels Covers', 'Ad Design']
  },
  {
    id: 'nb-brand-identity',
    title: 'Visual Identity & Brand Kit',
    category: 'Branding',
    description: 'Engineered the complete visual core for Nano Banana: a flexible dynamic logotype, vibrant color palette guidelines, brand guidelines manual, and complete brand asset kit.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
    client: 'Nano Banana',
    year: '2026',
    tags: ['Logo Design', 'Brand Kit', 'Identity System', 'Guidelines'],
    challenge: 'Nano Banana needed a robust visual framework that works across physical storefronts, website icons, merchandise printing, and social media stamps.',
    solution: 'Engineered a highly flexible typographic logo and custom visual accents built with simple geometric construction rules, packaged in an easy-to-navigate digital brand portal.',
    scope: ['Logo Design', 'Brand Kit', 'Identity System', 'Guidelines']
  },
  {
    id: 'nb-promo-collaterals',
    title: 'Promotional Collaterals',
    category: 'Illustration',
    description: 'Developed high-impact physical assets including event flyers, pop-up brochures, signage layouts, grand opening tarpaulins, and custom-illustrated t-shirt merchandise.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    client: 'Nano Banana',
    year: '2026',
    tags: ['Flyers & Posters', 'Signages', 'T-shirt Merchandise', 'Banners'],
    challenge: 'Bridging the digital brand guidelines with high-fidelity physical objects without losing raw illustration fidelity or color saturation in print.',
    solution: 'Designed and prepped vector assets for print-ready flyers, billboard-sized tarpaulins, signages, and custom screen-printed merchandise using exact color profiles.',
    scope: ['Flyers & Posters', 'Signages', 'T-shirt Merchandise', 'Banners']
  },
  {
    id: 'nb-video-campaigns',
    title: 'Dynamic Video Campaigns',
    category: 'Digital & UI',
    description: 'Produced, styled, and edited a series of high-energy micro-videos for TikTok, YouTube Shorts, and Instagram Reels to generate massive hype for Nano Banana.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    client: 'Nano Banana',
    year: '2026',
    tags: ['Video Editing', 'Shorts & Reels', 'Motion Graphics', 'Promo Videos'],
    challenge: 'Video platforms demand high-retention, snappy video editing with custom typography, sound accents, and fast visual pacing to capture audience interests.',
    solution: 'Edited raw video assets into professional short-form videos utilizing fast-paced transitions, retro-styled sound designs, kinetic caption animations, and glowing light effects.',
    scope: ['Video Editing', 'Shorts & Reels', 'Motion Graphics', 'Promo Videos']
  },
  {
    id: 'nb-print-layouts',
    title: 'Print-Ready Media Kit',
    category: 'Packaging',
    description: 'Created high-fidelity, print-ready marketing collaterals, booklets, corporate folders, and editorial brochures prepared for high-volume offset printing.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop',
    client: 'Nano Banana',
    year: '2026',
    tags: ['Print Layouts', 'Brochures', 'Media Kits', 'Pre-Press Formatting'],
    challenge: 'Aesthetic layout files must strictly adhere to physical bleed tolerances, folding margins, and ink limit tolerances before submission to high-end publishing presses.',
    solution: 'Designed beautiful editorial media kits and folders complete with detailed die-cut templates, precise layouts, CMYK alignments, and pre-flight print test validation.',
    scope: ['Print Layouts', 'Brochures', 'Media Kits', 'Pre-Press Formatting']
  },
  {
    id: 'nb-product-mockups',
    title: 'Product Retouching & Mockups',
    category: 'Packaging',
    description: 'Executed commercial product photo retouching, background removal, skin/texture editing, and designed photorealistic mockups of Nano Banana\'s product line.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
    client: 'Nano Banana',
    year: '2026',
    tags: ['Photo Retouching', 'Product Mockups', 'Image Editing', 'Color Grading'],
    challenge: 'Physical products must look absolutely impeccable in promotional catalogs and storefront banners, with flawless lighting and clear labels.',
    solution: 'Developed custom high-resolution 3D product mockups and retouched camera raw assets, establishing beautiful ambient shadows, reflections, and color balances.',
    scope: ['Photo Retouching', 'Product Mockups', 'Image Editing', 'Color Grading']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description: 'Bespoke organic growth maps, content planning strategy, and dynamic calendar frameworks designed to connect with your community and build lasting digital authority.',
    iconName: 'TrendingUp',
    colorTheme: 'coral'
  },
  {
    id: 'social-graphics',
    title: 'Social Media Graphics',
    description: 'High-engagement, beautiful social assets including custom Instagram carousels, dynamic stories, high-converting advertisement templates, and attractive Reels covers.',
    iconName: 'Image',
    colorTheme: 'yellow'
  },
  {
    id: 'branding-identity',
    title: 'Branding & Visual Identity',
    description: 'Crafting premium bespoke brand systems, creative logos, color palettes, typography styling, complete brand kits, and modular brand guideline manuals.',
    iconName: 'Sparkles',
    colorTheme: 'teal'
  },
  {
    id: 'marketing-materials',
    title: 'Marketing Materials',
    description: 'High-impact layouts for physical event flyers, promotional brochures, signage displays, grand opening tarpaulins, and custom-illustrated apparel/t-shirt designs.',
    iconName: 'Package',
    colorTheme: 'lavender'
  },
  {
    id: 'video-editing',
    title: 'Dynamic Video Editing',
    description: 'Snappy video editing for TikTok, YouTube Shorts, Instagram Reels, and professional promotional video campaigns optimized for high engagement.',
    iconName: 'Film',
    colorTheme: 'indigo'
  },
  {
    id: 'print-ready-layouts',
    title: 'Print-Ready Layouts',
    description: 'Expertly formatted marketing collaterals, multi-page corporate booklets, folded folders, physical media kits, and pre-press prep for high-volume publishers.',
    iconName: 'FileText',
    colorTheme: 'coral'
  },
  {
    id: 'photo-editing-mockups',
    title: 'Photo Editing & Mockups',
    description: 'Commercial quality photo retouching, color grading, background isolation, and photorealistic product mockups to elevate your visual marketing assets.',
    iconName: 'Laptop',
    colorTheme: 'teal'
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
