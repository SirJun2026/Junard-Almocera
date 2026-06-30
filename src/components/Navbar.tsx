import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-cream/90 backdrop-blur-md py-4 border-b-2 border-brand-charcoal'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#hero');
          }}
          className="group flex items-center gap-3 font-display font-black text-xl md:text-2xl tracking-tight text-brand-charcoal"
        >
          {/* Animated custom blob logo */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-brand-coral border-2 border-brand-charcoal rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] group-hover:rounded-[50%] transition-all duration-500 ease-out animate-pulse">
            <span className="font-mono font-bold text-brand-cream text-lg">ja</span>
            <div className="absolute inset-0 bg-brand-yellow rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] group-hover:rounded-[50%] -z-10 scale-105 group-hover:scale-110 group-hover:rotate-45 transition-all duration-500" />
          </div>
          <span className="relative overflow-hidden inline-block">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Junard Almocera
            </span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 text-brand-coral transition-transform duration-300">
              Visual Designer
            </span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-display font-semibold text-brand-charcoal">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.name}>
                  <a
                    id={`nav-link-${item.name.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="relative py-2 text-sm tracking-wide uppercase transition-colors hover:text-brand-coral"
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-coral rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            id="nav-cta-desktop"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="group relative inline-flex items-center gap-2 bg-brand-charcoal text-brand-cream font-display font-bold px-6 py-2.5 rounded-full border-2 border-brand-charcoal shadow-[4px_4px_0px_0px_rgba(255,94,91,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 text-sm overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-brand-coral -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex p-2 rounded-full border-2 border-brand-charcoal bg-brand-cream hover:bg-brand-yellow transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5 text-brand-charcoal" /> : <Menu className="w-5 h-5 text-brand-charcoal" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-cream border-b-2 border-brand-charcoal overflow-hidden"
          >
            <ul className="px-6 py-8 flex flex-col gap-6 font-display font-bold text-lg text-brand-charcoal">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    id={`nav-mobile-link-${item.name.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="flex justify-between items-center group py-2 border-b border-brand-charcoal/10"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  id="nav-cta-mobile"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="flex justify-center items-center gap-2 bg-brand-coral text-brand-cream py-3 rounded-xl border-2 border-brand-charcoal font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none transition-all active:translate-x-1 active:translate-y-1"
                >
                  Let's Talk
                  <ArrowRight className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
