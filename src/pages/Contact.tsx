import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl lg:text-6xl font-black mb-8">Let's Talk <span className="text-primary tracking-tighter italic">Roofing</span></h1>
              <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed">
                Whether it's a small leak or a complete replacement, Isaacs Roofing is here to help. Reach out to our local team today.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Phone", content: "(555) 123-4567", sub: "Mon-Sat, 8am - 6pm" },
                  { icon: Mail, title: "Email", content: "info@isaacsroofing.com", sub: "Response within 24 hours" },
                  { icon: MapPin, title: "Address", content: "123 Roofing Way", sub: "Austin, TX 78701" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center group">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="font-bold text-xl text-slate-800">{item.content}</p>
                      <p className="text-sm text-slate-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Box */}
              <div className="mt-16 p-8 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-primary font-black mb-2 uppercase tracking-widest text-xs">Emergency Service</h4>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Need Urgent Help?</h3>
                  <p className="text-slate-400 mb-6 text-sm">Our team is available 24/7 for severe storm damage and catastrophic leaks.</p>
                  <a href="tel:+15551234567" className="inline-flex items-center gap-2 font-black text-xl hover:text-primary transition-colors">
                    Call Now: (555) 123-4567
                  </a>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 lg:p-14 rounded-[50px] shadow-2xl shadow-primary/10 border border-slate-100"
            >
              {!submitted ? (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                      <input required type="tel" placeholder="(555) 000-0000" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center gap-3 text-lg group">
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                    <Send size={32} />
                  </div>
                  <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8 max-w-xs mx-auto">We've received your inquiry and will be in touch shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">Send another message</button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-slate-200 flex items-center justify-center relative grayscale contrast-[0.9]">
        <MapPin size={48} className="text-slate-400 animate-bounce" />
        <span className="absolute bottom-10 bg-white px-6 py-3 rounded-full font-bold shadow-xl border border-slate-100">Our Austin Headquarters</span>
      </section>
    </div>
  );
}
