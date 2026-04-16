import { motion } from 'motion/react';
import { Home, Wrench, Search, Zap, Check } from 'lucide-react';

const services = [
  {
    title: "Roof Installation",
    description: "New roof installations for residential and commercial properties using top-tier shingles, metal, or tile.",
    icon: Home,
    color: "bg-blue-500",
    features: ["Lifetime Materials", "Quick Turnaround", "Expert Crew"]
  },
  {
    title: "Roof Repair",
    description: "Leaking? Damaged shingles? Our repair specialists fix small issues before they become expensive problems.",
    icon: Wrench,
    color: "bg-orange-500",
    features: ["Leak Detection", "Shingle Matching", "Storm Damage Repair"]
  },
  {
    title: "Roof Inspection",
    description: "Comprehensive multi-point inspections to assess the health and longevity of your current roofing system.",
    icon: Search,
    color: "bg-emerald-500",
    features: ["Full Documentation", "Drone Inspections", "Insurance Claims"]
  },
  {
    title: "Emergency Services",
    description: "24/7 rapid response for storm damage, fallen trees, or severe leaks to protect your home immediately.",
    icon: Zap,
    color: "bg-red-500",
    features: ["24/7 Availability", "Emergency Tarping", "Fast Mobilization"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black mb-4"
        >
          Specialized Roofing <span className="text-primary">Solutions</span>
        </motion.h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          From full replacements to minor repairs, we provide the highest quality craftsmanship and materials available in the industry.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all"
            id={`service-${service.title.toLowerCase().replace(' ', '-')}`}
          >
            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="p-0.5 rounded-full bg-trust-green/10 text-trust-green">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          className="text-slate-500 font-medium mb-6"
        >
          Don't see what you're looking for? 
          <span className="text-primary hover:underline cursor-pointer ml-1">View all services</span>
        </motion.p>
      </div>
    </section>
  );
}
