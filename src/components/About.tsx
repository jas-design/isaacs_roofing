import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl z-10">
              <img 
                src="https://picsum.photos/seed/crew/800/800" 
                alt="Isaacs Roofing Professional Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-2xl z-20 border-8 border-white">
              <span className="text-4xl font-black">25+</span>
              <span className="text-xs font-bold uppercase tracking-widest leading-tight">Years Of<br/>Excellence</span>
            </div>
            
            {/* Background shape */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-[40px] -z-0 translate-x-4 translate-y-4"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mt-20 lg:mt-0"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              A Legacy of <span className="text-primary italic">Integrity</span> & Craftsmanship
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Founded in 1999, Isaacs Roofing began with a single truck and a simple mission: to provide our neighbors with honest, high-quality roofing that lasts a lifetime.
              </p>
              <p>
                Today, we are one of the region's most respected roofing companies, but our core values haven't changed. We treat every home like it's our own, using only the finest materials and employing the most skilled artisans in the trade.
              </p>
              <p className="font-semibold text-slate-800">
                Local. Family-Owned. Committed to Excellence.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-black text-primary mb-2">100%</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-tight">Satisfaction<br/>Guaranteed</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-primary mb-2">500+</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-tight">Projects Per<br/>Year</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
