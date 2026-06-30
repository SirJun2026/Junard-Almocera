import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Search } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Branding', 'Packaging', 'Illustration', 'Digital & UI'];

  // Filter projects dynamically
  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter || (selectedFilter === 'Digital & UI' && p.category === 'Digital & UI'));

  return (
    <section
      id="work"
      className="py-24 px-6 md:px-12 bg-brand-cream border-t-2 border-brand-charcoal relative"
    >
      {/* Dynamic Background Circle Accents */}
      <div className="absolute top-[10%] left-[-5%] w-60 h-60 bg-brand-teal/5 rounded-full border border-brand-teal/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3.5 py-1.5 rounded-full border border-brand-teal/30">
              The Project Archive
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-charcoal mt-4">
              Selected Creative Work.
            </h2>
          </div>
          <p className="font-sans text-brand-charcoal/70 text-lg max-w-sm leading-relaxed md:mb-1">
            Explore a curated index of brands, packaging designs, custom illustration collections, and digital interfaces.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-brand-charcoal/10 pb-6">
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                id={`filter-btn-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-display font-bold text-sm tracking-wide transition-all border-2 ${
                  isSelected
                    ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal shadow-[3px_3px_0px_0px_rgba(255,94,91,1)]'
                    : 'bg-brand-cream text-brand-charcoal border-brand-charcoal/25 hover:border-brand-charcoal hover:bg-brand-yellow/10'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <motion.div
          id="portfolio-projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 150, damping: 20 }}
                className="group relative cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                {/* Visual Card Frame */}
                <div className="relative bg-brand-cream border-3 border-brand-charcoal rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(26,26,26,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Category Pill Tag inside card image */}
                  <div className="absolute top-4 left-4 z-20 bg-brand-cream border-2 border-brand-charcoal text-brand-charcoal text-[11px] font-mono font-black uppercase px-2.5 py-1 rounded-md shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                    {project.category}
                  </div>

                  {/* Thumbnail Image Box */}
                  <div className="aspect-[4/3] overflow-hidden bg-brand-lavender/10 relative border-b-3 border-brand-charcoal">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Creative Overlay Slide-up */}
                    <div className="absolute inset-0 bg-brand-charcoal/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="bg-brand-cream border-2 border-brand-charcoal px-5 py-2.5 rounded-xl font-display font-black text-sm text-brand-charcoal flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(255,94,91,1)]">
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-4 h-4 text-brand-coral" />
                      </div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="p-6 relative">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display font-black text-xl md:text-2xl tracking-tight text-brand-charcoal group-hover:text-brand-coral transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-brand-charcoal/50 mt-1">{project.year}</span>
                    </div>

                    <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-brand-cream border border-brand-charcoal/15 text-[10px] font-mono text-brand-charcoal/60 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-brand-cream border border-brand-charcoal/15 text-[10px] font-mono text-brand-charcoal/60 px-2 py-0.5 rounded">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Card Backing Drop Shadow Block */}
                <div className="absolute inset-0 bg-brand-charcoal rounded-2xl -z-10 translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Simple search prompt to encourage engagement */}
        <div className="mt-16 text-center border-t border-brand-charcoal/10 pt-10">
          <p className="font-sans text-brand-charcoal/60 text-sm flex items-center justify-center gap-2">
            <Search className="w-4 h-4 text-brand-coral" />
            Looking for something specific? Let’s collaborate and design it from scratch.
          </p>
        </div>

      </div>
    </section>
  );
}
