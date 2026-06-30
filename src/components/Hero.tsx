import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Smile, Stars, PenTool } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-brand-cream"
    >
      {/* Decorative Floating Blobs & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(var(--color-brand-charcoal) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.1
        }} />

        {/* Floating Organic Blobs with continuous smooth animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 0.95, 1.05, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 30, -20, 15, 0],
            y: [0, -40, 30, -15, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] right-[10%] w-72 h-72 bg-brand-yellow rounded-[45%_55%_60%_40%_/_45%_45%_55%_55%] filter blur-xl"
        />

        <motion.div
          animate={{
            scale: [1, 0.9, 1.1, 0.95, 1],
            rotate: [0, -120, -240, -360],
            x: [0, -40, 30, -10, 0],
            y: [0, 30, -50, 20, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-brand-lavender rounded-[50%_40%_30%_70%_/_50%_60%_40%_60%] filter blur-2xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 0.9, 1],
            x: [0, 50, -30, 0],
            y: [0, 50, 20, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[50%] left-[45%] w-80 h-80 bg-brand-teal rounded-full filter blur-3xl opacity-30"
        />
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Hand Text Info */}
        <motion.div
          id="hero-text-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 text-brand-charcoal"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-brand-yellow/30 border-2 border-brand-charcoal px-4 py-1.5 rounded-full font-mono text-xs font-bold text-brand-charcoal uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-coral animate-spin" style={{ animationDuration: '6s' }} />
            Open for freelance & collaborations
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9]">
              Junard <br />
              <span className="relative inline-block text-brand-coral">
                Almocera
                {/* Playful scribble vector line under name */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-charcoal" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.5C50 4.5 120 1 300 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M15 10C80 6.5 170 3.5 285 7.5" stroke="var(--color-brand-yellow)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Subheading / Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-display font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight text-brand-charcoal/80 max-w-xl mt-4 leading-relaxed"
          >
            Graphic Designer & Visual Storyteller crafting{' '}
            <span className="bg-brand-lavender px-2 py-0.5 border-2 border-brand-charcoal rounded-md rotate-[-1.5deg] inline-block font-mono text-base font-bold text-brand-charcoal uppercase tracking-wide">bold</span>{' '}
            identities,{' '}
            <span className="bg-brand-teal px-2 py-0.5 border-2 border-brand-charcoal rounded-md rotate-[2deg] inline-block font-mono text-base font-bold text-brand-charcoal uppercase tracking-wide">quirky</span>{' '}
            packaging, and interactive brands.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base md:text-lg text-brand-charcoal/70 max-w-lg leading-relaxed"
          >
            A perfect balance of strategic brand thinking and whimsical visual flair. Based in the creative stratosphere, designing solutions for Earth.
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6"
          >
            <button
              id="hero-cta-work"
              onClick={scrollToWork}
              className="group relative flex justify-center items-center gap-3 bg-brand-coral text-brand-cream border-2 border-brand-charcoal px-8 py-4 rounded-xl font-display font-bold text-lg shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              id="hero-cta-collaborate"
              onClick={scrollToContact}
              className="group flex justify-center items-center gap-2 bg-brand-cream text-brand-charcoal border-2 border-brand-charcoal px-8 py-4 rounded-xl font-display font-bold text-lg hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-200"
            >
              Let's Collaborate
            </button>
          </motion.div>
        </motion.div>

        {/* Right Hand Graphic Showcase (Interactive Bento/Poster Visual) */}
        <motion.div
          id="hero-visual-showcase"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.6 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Creative Poster */}
          <div className="relative bg-brand-cream border-4 border-brand-charcoal rounded-2xl p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
            
            {/* Background vector accents inside poster */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 border-b-4 border-l-4 border-brand-charcoal rounded-bl-full" />
            
            {/* Poster Header */}
            <div className="flex justify-between items-center pb-6 border-b-2 border-brand-charcoal/20">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-charcoal/60">Portfolio No. 04</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-brand-coral border border-brand-charcoal" />
                <div className="w-3 h-3 rounded-full bg-brand-yellow border border-brand-charcoal" />
                <div className="w-3 h-3 rounded-full bg-brand-teal border border-brand-charcoal" />
              </div>
            </div>

            {/* Poster Canvas */}
            <div className="py-8 flex flex-col items-center justify-center relative min-h-[320px]">
              {/* Dynamic Graphic Circle and Square overlapping with icons */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Wobbly background shape */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-brand-lavender border-3 border-brand-charcoal rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
                />
                
                {/* Overlapping yellow square */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-36 h-36 bg-brand-yellow border-3 border-brand-charcoal rounded-2xl rotate-12 -translate-x-4 -translate-y-2"
                />

                {/* Overlapping teal circle */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-32 h-32 bg-brand-teal border-3 border-brand-charcoal rounded-full translate-x-4 translate-y-6"
                />

                {/* Centered Smiling Pencil Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center text-brand-charcoal bg-brand-cream border-3 border-brand-charcoal p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                  <PenTool className="w-10 h-10 text-brand-coral animate-bounce" />
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider mt-1.5">CREATING</span>
                </div>
              </div>

              {/* Decorative floating labels inside hero visual */}
              <motion.div
                animate={{ rotate: [3, -3, 3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 left-0 bg-brand-coral text-brand-cream font-display font-black text-sm px-4 py-1.5 rounded-lg border-2 border-brand-charcoal shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] -rotate-6"
              >
                BRANDING ✦
              </motion.div>

              <motion.div
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-2 right-0 bg-brand-cream text-brand-charcoal font-display font-black text-sm px-4 py-1.5 rounded-lg border-2 border-brand-charcoal shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] rotate-6"
              >
                PACKAGING ✿
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[40%] right-[-10px] text-brand-coral"
              >
                <Stars className="w-8 h-8 fill-brand-yellow" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[5%] bottom-[15%] text-brand-teal"
              >
                <Smile className="w-10 h-10 fill-brand-cream text-brand-charcoal" />
              </motion.div>
            </div>

            {/* Poster Footer */}
            <div className="pt-6 border-t-2 border-brand-charcoal/20 flex justify-between items-center font-mono text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60">
              <span>DESIGN IS PLAYFUL</span>
              <span>EST. 2018</span>
            </div>
          </div>

          {/* Secondary background shadow accent */}
          <div className="absolute inset-0 bg-brand-charcoal rounded-2xl -z-10 translate-x-4 translate-y-4" />
        </motion.div>

      </div>
    </section>
  );
}
