import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-brand-charcoal text-brand-cream border-t-4 border-brand-charcoal py-16 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative subtle stars */}
      <div className="absolute top-[20%] left-[8%] w-2 h-2 rounded-full bg-brand-yellow/30" />
      <div className="absolute bottom-[30%] right-[10%] w-3 h-3 rounded-full bg-brand-coral/30" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Branding / Trademark signature */}
        <div className="text-center md:text-left space-y-3">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-yellow border-2 border-brand-cream flex items-center justify-center text-brand-charcoal font-display font-black text-xs">
              JA
            </div>
            <span className="font-display font-black text-lg md:text-xl tracking-tight uppercase text-brand-cream">
              Junard Almocera
            </span>
          </div>
          <p className="font-mono text-xs text-brand-cream/60">
            Professional graphic design with a serious playful streak.
          </p>
        </div>

        {/* Middle Quick links */}
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-display font-bold text-sm uppercase tracking-wider text-brand-cream/80">
          <li>
            <a
              id="footer-link-work"
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-brand-coral transition-colors"
            >
              Work
            </a>
          </li>
          <li>
            <a
              id="footer-link-about"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-brand-coral transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              id="footer-link-services"
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-brand-coral transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              id="footer-link-contact"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-brand-coral transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side: Back to top */}
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="group flex items-center justify-center p-3.5 bg-brand-cream border-2 border-brand-charcoal text-brand-charcoal rounded-full hover:bg-brand-coral hover:text-brand-cream transition-all shadow-[3px_3px_0px_0px_rgba(255,94,91,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>

      {/* Credit baseline row */}
      <div className="max-w-7xl mx-auto border-t border-brand-cream/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-brand-cream/40">
        <span>© {currentYear} Junard Almocera. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Designed with 💛 on Earth
        </span>
      </div>
    </footer>
  );
}
