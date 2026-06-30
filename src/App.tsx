import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Custom cursor states
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Monitor Scroll Spy for nav links
  useEffect(() => {
    const sections = ['hero', 'work', 'about', 'services', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor mouse movement for modern playful cursor trailing
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.group');
      
      setIsHovering(!!isInteractive);
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-cream selection:bg-brand-yellow selection:text-brand-charcoal overflow-x-hidden">
      
      {/* Custom trailing circular cursor (Desktop only for touch/hover safety) */}
      {isDesktop && (
        <>
          {/* Main small dot */}
          <motion.div
            className="fixed w-3 h-3 bg-brand-coral rounded-full pointer-events-none z-50 mix-blend-difference"
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
          />
          {/* Outward trailing spring circle */}
          <motion.div
            className="fixed w-8 h-8 border-2 border-brand-charcoal rounded-full pointer-events-none z-50"
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              scale: isHovering ? 1.8 : 1,
              borderColor: isHovering ? 'var(--color-brand-coral)' : 'var(--color-brand-charcoal)',
              borderWidth: isHovering ? '3px' : '2px',
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          />
        </>
      )}

      {/* Navigation menu */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Showcase */}
        <Hero />

        {/* Portfolio Gallery */}
        <Portfolio onSelectProject={setSelectedProject} />

        {/* Bio Narrative & Skills */}
        <About />

        {/* Service Bento Cards */}
        <Services />

        {/* Staggered testimonials quotes */}
        <Testimonials />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Bottom Footer block */}
      <Footer />

      {/* Full Case Study Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
