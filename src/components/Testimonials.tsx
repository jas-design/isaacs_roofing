import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner in Austin",
    text: "Isaacs Roofing replaced my entire roof in just two days. The crew was professional, clean, and the final result looks amazing. Highly recommend!",
    rating: 5,
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    text: "I've worked with many contractors, but Isaacs is on another level. Their communication is perfect and they fixed a chronic leak other companies missed.",
    rating: 5,
    avatar: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "Robert Williams",
    role: "Real Estate Agent",
    text: "I always recommend Isaacs to my clients. They are fast, reliable, and their inspections are incredibly thorough. Best roofing company in the city.",
    rating: 5,
    avatar: "https://picsum.photos/seed/user3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8 text-center lg:text-left">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-black mb-4"
            >
              What Our Clients <span className="text-primary">Say</span>
            </motion.h2>
            <p className="text-lg text-slate-500 max-w-xl">
              Don't just take our word for it—listen to the homeowners and professionals who trust us with their safety.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 justify-center lg:justify-start"
          >
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-1">4.9/5</div>
              <div className="flex text-amber-500 justify-center">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-xs text-slate-400 mt-2 font-bold tracking-widest uppercase">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-1">2.5k+</div>
              <div className="text-xs text-slate-400 mt-2 font-bold tracking-widest uppercase">Satisfied Clients</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col"
            >
              <div className="flex text-amber-500 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <div className="mb-8 relative">
                <Quote className="absolute -top-4 -left-4 text-primary/10 w-12 h-12 -z-0" />
                <p className="text-slate-600 italic leading-relaxed relative z-10">"{t.text}"</p>
              </div>

              <div className="mt-auto flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-800">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
