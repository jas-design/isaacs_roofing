import { motion } from 'motion/react';
import { Send, CheckCircle2, User, Phone, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function SchedulingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section className="py-24 bg-white" id="schedule">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-12 rounded-3xl bg-emerald-50 border-2 border-emerald-100 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-black text-emerald-900 mb-4">Request Received!</h2>
            <p className="text-emerald-700 mb-8 max-w-md">
              Thank you for trusting Isaacs Roofing. One of our specialists will call you within the next 30 minutes to confirm your appointment.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 text-emerald-600 font-bold hover:underline"
            >
              Send another request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white" id="schedule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Get started</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Book Your Free Inspection <span className="text-primary italic">Today</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Limited slots available this week! Get a certified expert to assess your roof and provide a 100% fixed-price quote with no hidden fees.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "No-Obligation", desc: "No pressure to buy, just expert advice." },
                { title: "Fixed Price Quote", desc: "The price we give is the price you pay." },
                { title: "Insurance Expertise", desc: "We help manage your insurance claims." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <img src="https://picsum.photos/seed/contractor/100/100" alt="Lead specialist" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Lead Specialist</p>
                <h4 className="font-display font-bold text-lg">David Miller</h4>
                <p className="text-slate-400 text-sm">"I'll be the one reviewing your request!"</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-primary/10 border border-slate-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      required
                      type="tel" 
                      placeholder="(555) 000-0000" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Service Needed</label>
                <select className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none">
                  <option>Full Roof Replacement</option>
                  <option>Roof Repair</option>
                  <option>Emergency Service</option>
                  <option>New Construction</option>
                  <option>Insurance Claim Inspection</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-primary py-5 rounded-2xl text-lg flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {loading ? 'Processing...' : (
                  <>
                    Confirm Quote Request <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="mt-6 text-center text-xs text-slate-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                We typically respond in less than 30 minutes.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
