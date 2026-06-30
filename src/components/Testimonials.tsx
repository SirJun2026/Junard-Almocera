import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 bg-brand-cream border-t-2 border-brand-charcoal relative"
    >
      {/* Background shape */}
      <div className="absolute left-[5%] bottom-[5%] w-72 h-72 bg-brand-lavender/5 rounded-full border border-brand-lavender/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-lavender bg-brand-lavender/20 px-3.5 py-1.5 rounded-full border border-brand-lavender/30 text-brand-charcoal">
            The Word on the Street
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-charcoal mt-4">
            Kind Words From Nice Clients.
          </h2>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
              className="flex flex-col justify-between bg-white border-3 border-brand-charcoal p-8 rounded-2xl relative shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
            >
              {/* Giant decorative quote mark */}
              <div className="absolute top-4 right-6 text-brand-lavender opacity-30 pointer-events-none">
                <Quote className="w-12 h-12 stroke-[4]" />
              </div>

              {/* Core Quote Content */}
              <div>
                {/* Visual Stars */}
                <div className="flex gap-1 mb-6 text-brand-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brand-yellow stroke-brand-charcoal" />
                  ))}
                </div>

                <p className="font-sans text-brand-charcoal/85 text-base md:text-lg leading-relaxed italic mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Info Block */}
              <div className="flex items-center gap-4 border-t-2 border-brand-charcoal/10 pt-6 mt-auto">
                {/* Client Avatar Image */}
                <div className="w-12 h-12 rounded-full border-2 border-brand-charcoal overflow-hidden bg-brand-yellow shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-brand-charcoal">
                    {testimonial.name}
                  </h4>
                  <p className="font-mono text-[10px] uppercase font-bold text-brand-charcoal/50">
                    {testimonial.role}, <span className="text-brand-coral font-bold">{testimonial.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
