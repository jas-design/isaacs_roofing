import { motion } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg">
              <span className="font-display font-bold text-2xl">E</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              ELITE<span className="text-primary">ROOFING</span>
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Our Process', 'Testimonials', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                id={`nav-${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+15551234567" 
              className="hidden lg:flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity"
              id="header-phone"
            >
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </a>
            <motion.a 
              href="#schedule"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-accent text-sm py-2 px-5"
              id="header-cta"
            >
              Free Estimate
            </motion.a>
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4"
        >
          {['Services', 'Our Process', 'Testimonials', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block text-base font-medium text-slate-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="tel:+15551234567" className="flex items-center gap-2 text-primary font-bold">
            <Phone size={18} />
            <span>(555) 123-4567</span>
          </a>
        </motion.div>
      )}
    </header>
  );
}
