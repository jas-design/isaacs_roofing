import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg">
                <span className="font-display font-bold text-2xl">I</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                ISAACS<span className="text-primary">ROOFING</span>
              </span>
            </div>
            <p className="mb-8 text-sm leading-relaxed max-w-xs">
              Protecting your home with excellence since 1999. We are your local experts for everything roofing.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm">
              {['Services', 'Our Process', 'Testimonials', 'About Us', 'Get a Quote'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                <span>123 Roofing Way, <br />Austin, TX 78701</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:info@isaacsroofing.com" className="hover:text-primary transition-colors">info@isaacsroofing.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Office Hours</h4>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px]">24/7 Response</span>
              </div>
              <div className="pt-6">
                <p className="text-xs italic text-slate-500">License #TX-992104-ROOF</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {currentYear} Isaacs Roofing. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
