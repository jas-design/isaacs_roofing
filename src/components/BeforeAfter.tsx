import { motion } from 'motion/react';
import { Layers } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Visible <span className="text-primary tracking-tight">Transformation</span></h2>
          <p className="text-lg text-slate-500">See the difference quality materials and expert installation can make.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-[4/3] lg:aspect-video"
          >
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="relative">
                <img src="https://picsum.photos/seed/old-roof/800/600" alt="Old roof" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Before</span>
              </div>
              <div className="relative">
                <img src="https://picsum.photos/seed/new-roof/800/600" alt="New roof" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">After</span>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform">
              <h4 className="font-bold">Residential Overhaul - West Austin</h4>
              <p className="text-xs text-slate-300">New architectural shingles installation - Completed in 36 hours.</p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {[
              { title: "Architectural Precision", desc: "Perfect alignment and venting ensure maximum lifespan for your new roof.", icon: Layers },
              { title: "Quality Materials", desc: "We only use premium class-4 impact resistant shingles from trusted manufacturers.", icon: Layers }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="pt-6">
              <motion.a 
                href="#schedule"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm group"
              >
                See our full gallery <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
