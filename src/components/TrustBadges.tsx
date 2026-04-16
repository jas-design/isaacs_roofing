import { motion } from 'motion/react';
import { ShieldCheck, Award, ThumbsUp, Medal } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, title: "Owner-Operated", desc: "Direct oversight on every job" },
  { icon: Award, title: "GAF Certified", desc: "Top 2% of roofing contractors" },
  { icon: ThumbsUp, title: "Lifetime Warranty", desc: "Workmanship guaranteed forever" },
  { icon: Medal, title: "A+ Better Business Bureau", desc: "Zero complaints in 25 years" }
];

export default function TrustBadges() {
  return (
    <section className="py-8 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-full bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                <badge.icon size={24} />
              </div>
              <div className="hidden sm:block">
                <h4 className="text-white text-sm font-bold leading-tight">{badge.title}</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
