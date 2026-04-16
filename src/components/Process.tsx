import { motion } from 'motion/react';
import { ClipboardList, CalendarCheck, Home } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description: "Fill out our simple form or give us a call to request your free, no-obligation roofing estimate.",
    icon: ClipboardList
  },
  {
    number: "02",
    title: "On-Site Inspection",
    description: "One of our certified specialists will inspect your roof and provide a detailed report and fixed price.",
    icon: CalendarCheck
  },
  {
    number: "03",
    title: "Get The Job Done",
    description: "Our professional crew completes the project with meticulous detail and leaves your property spotless.",
    icon: Home
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="our-process">
      {/* Decorative background grids */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black mb-6"
          >
            Our Simple 3-Step <span className="text-primary italic">Process</span>
          </motion.h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We've streamlined our workflow to make your roofing project as stress-free and efficient as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center mb-8 group overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <step.icon size={40} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-xs font-black shadow-lg">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.a 
            href="#schedule"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-accent inline-flex items-center gap-2"
          >
            Start Your Project Today
          </motion.a>
        </div>
      </div>
    </section>
  );
}
