import { motion } from 'motion/react';
import { Shield, Hammer, Ruler, CheckCircle, Clock, Check } from 'lucide-react';

const serviceList = [
  {
    title: "Residential Roofing",
    desc: "From small bungalows to large estates, we provide high-quality residential roofing services tailored to your style and budget.",
    details: ["Asphalt Shingles", "Metal Roofing", "Tile Roofing", "Cedar Shakes"]
  },
  {
    title: "Commercial Roofing",
    desc: "Durable and efficient low-slope and flat roof solutions for businesses, keeping your operations protected.",
    details: ["TPO & EPDM", "Flat Roof Coatings", "Regular Maintenance", "Energy-Efficient Options"]
  },
  {
    title: "Roof Maintenance",
    desc: "Extend the life of your roof with our preventative maintenance programs designed to catch minor issues early.",
    details: ["Debris Removal", "Leak Testing", "Gutter Cleaning", "Damage Assessment"]
  },
  {
    title: "Eco-Friendly Roofing",
    desc: "Modern, sustainable solutions like cool roofs and recyclable materials that lower energy bills and help the planet.",
    details: ["Energy Star Materials", "Cool Roof Technology", "Recyclable Shingles", "Roof Venting Optimization"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-black mb-6"
          >
            Our Roofing <span className="text-primary italic">Services</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Professional roofing solutions designed to withstand the toughest weather conditions. Trusted craftsmanship for over 25 years.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceList.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                  {i === 0 && <Shield size={32} />}
                  {i === 1 && <Hammer size={32} />}
                  {i === 2 && <Ruler size={32} />}
                  {i === 3 && <CheckCircle size={32} />}
                </div>
                <h2 className="text-3xl font-black mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed italic border-l-4 border-primary/20 pl-4">
                  {service.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  {service.details.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Check size={16} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Guarantee", value: "LIFETIME", desc: "Workmanship Warranty" },
            { label: "Insured", value: "$2M", desc: "Liability Protection" },
            { label: "Experience", value: "25+", desc: "Years in Business" },
            { label: "Fast", value: "48H", desc: "Response Time" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-primary mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</div>
              <p className="text-sm font-medium text-slate-600">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-8 italic">Ready to protect your property?</h2>
          <motion.a 
            href="/#schedule"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Get Your Free Quote Now
          </motion.a>
        </div>
      </section>
    </div>
  );
}
