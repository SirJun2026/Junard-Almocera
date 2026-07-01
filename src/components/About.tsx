import { motion } from 'motion/react';
import { TOOLS } from '../data';
import { Palette, Layers, Award, Terminal, Heart } from 'lucide-react';
import profileImg from '../assets/images/regenerated_image_1782809701530.jpg';

export default function About() {
  // Category-specific configurations
  const categories = {
    design: { label: 'Design & Layout', icon: Palette, color: 'bg-brand-coral/10 text-brand-coral border-brand-coral' },
    motion: { label: 'Motion & Video', icon: Layers, iconColor: 'text-brand-yellow', color: 'bg-brand-yellow/20 text-brand-charcoal border-brand-yellow' },
    code: { label: 'Digital Code', icon: Terminal, color: 'bg-brand-teal/10 text-brand-teal border-brand-teal' },
    core: { label: 'Core Strategy', icon: Award, color: 'bg-brand-lavender/30 text-brand-charcoal border-brand-lavender' },
  };

  const personalValues = [
    { title: 'Playful but Precise', desc: 'I believe design can be whimsical and fun, but it must be mathematically aligned, perfectly kerned, and highly strategic.' },
    { title: 'Eco-Minded Integrity', desc: 'When designing packaging, I advocate for plastic-free, compostable, and sustainable materials that respect our planet.' },
    { title: 'Audience-Centric Voice', desc: 'I don’t design for other designers—I design for your real customers, ensuring memorable interactions and loyalty.' },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-brand-cream border-t-2 border-brand-charcoal relative overflow-hidden"
    >
      {/* Background visual detail */}
      <div className="absolute right-[-10%] top-[20%] w-[400px] h-[400px] bg-brand-yellow/5 rounded-full border-4 border-dashed border-brand-charcoal/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-coral bg-brand-coral/10 px-3.5 py-1.5 rounded-full border border-brand-coral/30">
            Who is Junard?
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-charcoal mt-4">
            A Serious Designer <br />
            Who Doesn’t Take Himself Too Seriously.
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Avatar Polaroid Graphic & Sticker bomb */}
          <div className="col-span-1 lg:col-span-5 relative flex justify-center">
            
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="relative w-full max-w-[360px] bg-white border-3 border-brand-charcoal p-5 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] rounded-sm"
            >
              {/* Profile Image placeholder */}
              <div className="aspect-square w-full overflow-hidden border-3 border-brand-charcoal bg-brand-lavender relative">
                <img
                  src={profileImg}
                  alt="Junard Almocera"
                  style={{ height: '350px' }}
                  className="w-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-brand-charcoal text-brand-cream text-[10px] font-mono px-2 py-0.5 uppercase tracking-wide">
                  Junard Almocera
                </div>
              </div>

              {/* Polaroid Footer */}
              <div className="pt-6 pb-2 text-center">
                <span className="font-display font-black text-2xl tracking-tight text-brand-charcoal block rotate-[-1deg]">
                  "Keep it chunky!"
                </span>
                <span className="font-mono text-xs text-brand-charcoal/60 mt-2 block">
                  Caffeine-powered since 1999
                </span>
              </div>

              {/* Interactive sticker overlays to express playfulness */}
              <div className="absolute top-[-15px] left-[-15px] bg-brand-teal text-brand-charcoal text-xs font-mono font-bold px-3 py-1.5 rounded-full border-2 border-brand-charcoal shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] rotate-[-12deg] select-none hover:rotate-0 transition-transform">
                ✦ HELLO THERE!
              </div>

              <div className="absolute bottom-[-10px] right-[-15px] bg-brand-yellow text-brand-charcoal text-xs font-display font-black px-3 py-1.5 rounded-lg border-2 border-brand-charcoal shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] rotate-[15deg] select-none hover:rotate-0 transition-transform flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-brand-coral text-brand-coral" /> CREATIVE
              </div>
            </motion.div>

            {/* Backing paper card */}
            <div className="absolute inset-0 bg-brand-coral rounded-sm border-3 border-brand-charcoal -z-10 translate-x-4 translate-y-4 max-w-[360px] mx-auto" />
          </div>

          {/* Right Column: Copy & Skills */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-10">
            
            {/* Bio Story */}
            <div className="space-y-4 font-sans text-brand-charcoal/85 text-lg leading-relaxed">
              <p className="font-display font-bold text-2xl text-brand-charcoal">
                Hello, I'm Junard! I design visual systems that help brave brands find their rhythm and make serious waves.
              </p>
              <p>
                I graduated in Creative Design in Visual Art and have spent the last 3 years collaborating with Local Food Company, organic skincare labs, cosmic publishers, and design agencies. I believe graphic design shouldn't just exist to be stared at; it should invite touch, provoke smiles, and solve concrete problems.
              </p>
              <p>
                Whether I am hand-drawing retro characters for street-food containers or designing custom typographic hierarchies for craft beverages, my core focus remains the same: combining raw, beautiful illustration with structured, logical brand architecture.
              </p>
            </div>

            {/* Core Values Bento Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {personalValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-brand-cream border-2 border-brand-charcoal p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <h4 className="font-display font-bold text-base text-brand-charcoal mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-coral" />
                    {val.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-charcoal/80 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tool Chest section */}
            <div className="border-2 border-brand-charcoal bg-brand-cream p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
              <h3 className="font-display font-black text-xl text-brand-charcoal mb-6 flex items-center gap-2">
                <span>🛠️</span> The Tool Chest & Tech Stack
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(Object.keys(categories) as Array<keyof typeof categories>).map((catKey) => {
                  const cat = categories[catKey];
                  const CatIcon = cat.icon;
                  const catTools = TOOLS.filter((t) => t.category === catKey);

                  return (
                    <div key={catKey} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg border-2 border-brand-charcoal ${cat.color}`}>
                          <CatIcon className="w-4 h-4" />
                        </div>
                        <span className="font-display font-bold text-sm text-brand-charcoal">
                          {cat.label}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {catTools.map((tool) => (
                          <div
                            key={tool.name}
                            className="group flex items-center gap-2 bg-brand-cream border border-brand-charcoal/20 hover:border-brand-charcoal px-3 py-1.5 rounded-lg text-xs font-mono text-brand-charcoal transition-all hover:bg-brand-yellow/10"
                          >
                            <span className="font-bold">{tool.name}</span>
                            {/* Visual Proficiency dots */}
                            <div className="flex gap-0.5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i < tool.proficiency
                                      ? 'bg-brand-coral border border-brand-charcoal/35'
                                      : 'bg-brand-charcoal/10'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
