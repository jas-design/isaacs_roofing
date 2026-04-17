import { motion } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Our Process', path: '/#our-process' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg">
                <span className="font-display font-bold text-2xl">I</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                ISAACS<span className="text-primary">ROOFING</span>
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-sm font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
                id={`nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </Link>
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
            <Link 
              to="/#schedule"
              onClick={() => handleNavClick('/#schedule')}
              className="btn-accent text-sm py-2 px-5"
              id="header-cta"
            >
              Free Estimate
            </Link>
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
          className="md:hidden bg-white border-b border-slate-200 py-6 px-4 space-y-6 flex flex-col items-center text-center"
        >
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="block text-lg font-black text-slate-800 hover:text-primary uppercase tracking-tighter"
              onClick={() => handleNavClick(item.path)}
            >
              {item.name}
            </Link>
          ))}
          <a href="tel:+15551234567" className="flex items-center gap-2 text-primary font-bold text-xl">
            <Phone size={18} />
            <span>(555) 123-4567</span>
          </a>
        </motion.div>
      )}
    </header>
  );
}
