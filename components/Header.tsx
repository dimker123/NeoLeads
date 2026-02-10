import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { PageType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setMobileMenuOpen(false);
    
    if (currentPage !== 'home') {
      onNavigate('home');
      // Wait for re-render then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation('hero')}>
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center neon-border">
            <Zap className="text-white w-6 h-6" fill="white" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">Neo<span className="text-cyan-400">Leads</span></span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['Inicio', 'El Método', 'Soluciones', 'Precios', 'FAQ'].map((item, index) => {
             const ids = ['hero', 'method', 'sectors', 'pricing', 'faq'];
             return (
              <button 
                key={item}
                onClick={() => handleNavigation(ids[index])}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors tracking-wide uppercase bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
             )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleNavigation('contact')}
            className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            Quiero Clientes Ahora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-panel border-t border-gray-800 p-6 flex flex-col gap-6 md:hidden">
          {['Inicio', 'El Método', 'Soluciones', 'Precios', 'FAQ'].map((item, index) => {
             const ids = ['hero', 'method', 'sectors', 'pricing', 'faq'];
             return (
              <button 
                key={item}
                onClick={() => handleNavigation(ids[index])}
                className="text-left text-lg font-medium text-gray-200 hover:text-cyan-400 bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
             )
          })}
          <button 
            onClick={() => handleNavigation('contact')}
            className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white py-4 rounded-lg font-bold uppercase tracking-wider"
          >
            Quiero Clientes Ahora
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;