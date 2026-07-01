import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { Sparkles, Package, Paintbrush, Laptop, Mail, ArrowRight, TrendingUp, Film, Image, FileText } from 'lucide-react';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Sparkles: Sparkles,
  Package: Package,
  Paintbrush: Paintbrush,
  Laptop: Laptop,
  Mail: Mail,
  TrendingUp: TrendingUp,
  Film: Film,
  Image: Image,
  FileText: FileText,
};

const colorThemes = {
  coral: {
    bg: 'bg-brand-coral/10 hover:bg-brand-coral/20',
    iconBg: 'bg-brand-coral text-brand-cream',
    border: 'border-brand-coral',
    shadow: 'rgba(255,94,91,0.2)'
  },
  yellow: {
    bg: 'bg-brand-yellow/10 hover:bg-brand-yellow/20',
    iconBg: 'bg-brand-yellow text-brand-charcoal',
    border: 'border-brand-yellow',
    shadow: 'rgba(255,209,102,0.3)'
  },
  teal: {
    bg: 'bg-brand-teal/10 hover:bg-brand-teal/20',
    iconBg: 'bg-brand-teal text-brand-cream',
    border: 'border-brand-teal',
    shadow: 'rgba(6,214,160,0.2)'
  },
  lavender: {
    bg: 'bg-brand-lavender/20 hover:bg-brand-lavender/30',
    iconBg: 'bg-brand-lavender text-brand-charcoal',
    border: 'border-brand-lavender',
    shadow: 'rgba(216,180,254,0.3)'
  },
  indigo: {
    bg: 'bg-brand-indigo/10 hover:bg-brand-indigo/20',
    iconBg: 'bg-brand-indigo text-brand-cream',
    border: 'border-brand-indigo',
    shadow: 'rgba(79,70,229,0.2)'
  }
};

export default function Services() {
  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 bg-brand-cream border-t-2 border-brand-charcoal relative overflow-hidden"
    >
      {/* Dynamic Background Grid Decorator */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[50%] w-72 h-72 bg-brand-coral/5 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] filter blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow bg-brand-yellow/20 px-3.5 py-1.5 rounded-full border border-brand-yellow/30 text-brand-charcoal">
            Design Capabilities
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-charcoal mt-4 mb-6">
            What I Can Do For You.
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-lg leading-relaxed">
            I offer tailored visual services with a heavy focus on brand retention, hand-drawn vector craft, and unforgettable retail shelf appeal.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            const theme = colorThemes[service.colorTheme] || colorThemes.coral;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col justify-between p-8 md:p-10 bg-brand-cream border-3 border-brand-charcoal rounded-2xl relative shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 ${theme.bg}`}
              >
                <div>
                  {/* Icon Frame */}
                  <div className={`w-14 h-14 rounded-xl border-2 border-brand-charcoal flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] ${theme.iconBg}`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-2xl md:text-3xl text-brand-charcoal mb-4 tracking-tight group-hover:text-brand-coral transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-brand-charcoal/80 text-base md:text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA inside service bento */}
                <div className="flex items-center gap-2 font-display font-bold text-sm tracking-wide uppercase text-brand-charcoal/60 group-hover:text-brand-coral transition-colors mt-auto">
                  <span>Start a project</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>

                {/* Decorative border matching color */}
                <div className={`absolute top-0 right-0 w-3 h-3 rounded-bl-full border-b border-l border-brand-charcoal -z-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* Services Bottom Banner */}
        <div className="mt-16 bg-brand-charcoal text-brand-cream border-3 border-brand-charcoal p-8 md:p-12 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-[8px_8px_0px_0px_rgba(255,94,91,1)]">
          <div className="space-y-3 max-w-xl">
            <h4 className="font-display font-black text-2xl md:text-3xl tracking-tight text-brand-yellow">
              Need a totally custom solution?
            </h4>
            <p className="font-sans text-brand-cream/80 text-base md:text-lg leading-relaxed">
              If your visual needs don't fit inside these four boxes, don't sweat it. Let’s invent a custom workflow together.
            </p>
          </div>
          <button
            onClick={handleScrollToContact}
            className="group flex items-center justify-center gap-3 bg-brand-cream text-brand-charcoal border-2 border-brand-charcoal px-8 py-4 rounded-xl font-display font-bold text-lg hover:bg-brand-coral hover:text-brand-cream hover:border-brand-charcoal transition-all duration-200 shrink-0"
          >
            Let's Talk Specs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
