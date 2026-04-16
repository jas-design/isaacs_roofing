import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden hero-gradient" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted by 2,500+ Local Homeowners
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1.1] mb-6">
              Reliable Roofing That <span className="text-primary italic">Protects</span> Your Home
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Expert roofing services with premium materials and a lifetime workmanship warranty. We handle everything from minor repairs to full replacements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a 
                href="#schedule"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-accent flex items-center justify-center gap-2 text-lg"
                id="hero-primary-cta"
              >
                Get Free Estimate <ArrowRight size={20} />
              </motion.a>
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline flex items-center justify-center gap-2 text-lg"
                id="hero-secondary-cta"
              >
                Our Services
              </motion.a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, text: "Fully Licensed & Insured" },
                { icon: Clock, text: "Fast 24-Hour Response" },
                { icon: CheckCircle2, text: "Free Inspections" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <item.icon size={18} className="text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
              <img 
                src="https://picsum.photos/seed/roofing-home/1200/1000" 
                alt="Modern luxury house with perfect roof" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Trust Window */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/50/50`} className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-500 mb-0.5">
                    {[1,2,3,4,5].map(i => <motion.span key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1 + (i*0.1)}}>★</motion.span>)}
                  </div>
                  <p className="text-xs font-bold text-slate-800">4.9/5 Average Rating</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative background element */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-1"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-1"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
