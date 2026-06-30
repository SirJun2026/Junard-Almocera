import { useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, User, Layers, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="project-case-study-lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
    >
      {/* Dark backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-brand-charcoal/80 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        className="relative bg-brand-cream border-4 border-brand-charcoal rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto z-10 p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
      >
        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 bg-brand-cream border-2 border-brand-charcoal p-2 rounded-full hover:bg-brand-yellow transition-all shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-brand-charcoal" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 md:mb-8 pr-12">
          <span className="font-mono text-xs font-black uppercase tracking-wider text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full border border-brand-coral/20">
            {project.category}
          </span>
          <h3 className="font-display font-black text-3xl md:text-5xl tracking-tight text-brand-charcoal mt-3">
            {project.title}
          </h3>
          <p className="font-sans text-brand-charcoal/70 text-lg mt-2">
            {project.description}
          </p>
        </div>

        {/* Large Cover Image */}
        <div className="border-3 border-brand-charcoal rounded-xl overflow-hidden aspect-video w-full bg-brand-lavender/10 mb-8 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          
          {/* Main Case Details (Left - 8 columns) */}
          <div className="lg:col-span-8 space-y-8">
            {/* The Challenge */}
            <div className="space-y-3">
              <h4 className="font-display font-black text-xl text-brand-charcoal flex items-center gap-2">
                <span className="w-3 h-3 bg-brand-coral rounded-full" />
                The Challenge
              </h4>
              <p className="font-sans text-brand-charcoal/80 text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-3">
              <h4 className="font-display font-black text-xl text-brand-charcoal flex items-center gap-2">
                <span className="w-3 h-3 bg-brand-teal rounded-full" />
                The Creative Solution
              </h4>
              <p className="font-sans text-brand-charcoal/80 text-base leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Visual Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-brand-cream border border-brand-charcoal px-3 py-1 rounded-lg font-mono text-xs text-brand-charcoal"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Specifications (Right - 4 columns) */}
          <div className="lg:col-span-4 bg-brand-cream border-2 border-brand-charcoal rounded-xl p-5 md:p-6 space-y-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
            <h5 className="font-display font-bold text-sm uppercase tracking-wider text-brand-charcoal border-b border-brand-charcoal/10 pb-2">
              Project Specs
            </h5>

            {/* Client */}
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-brand-coral mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-brand-charcoal/50 block">Client</span>
                <span className="font-sans text-sm font-semibold text-brand-charcoal">{project.client}</span>
              </div>
            </div>

            {/* Year */}
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-brand-yellow mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-brand-charcoal/50 block">Year</span>
                <span className="font-sans text-sm font-semibold text-brand-charcoal">{project.year}</span>
              </div>
            </div>

            {/* Scope / Deliverables */}
            <div className="flex items-start gap-3">
              <Layers className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
              <div className="w-full">
                <span className="font-mono text-[10px] uppercase font-bold text-brand-charcoal/50 block mb-2">Scope of Work</span>
                <ul className="space-y-1.5">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-sans text-xs text-brand-charcoal/80">
                      <CheckCircle className="w-3 h-3 text-brand-teal shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom decorative line */}
        <div className="mt-8 pt-6 border-t-2 border-brand-charcoal/20 flex justify-between items-center text-xs font-mono text-brand-charcoal/40">
          <span>Junard Almocera Design</span>
          <span>© Case Study</span>
        </div>
      </motion.div>
    </div>
  );
}
