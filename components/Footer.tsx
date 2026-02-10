import React from 'react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-6 flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          <button 
            onClick={() => onNavigate('legal')} 
            className="hover:text-cyan-400 transition-colors bg-transparent border-none cursor-pointer"
          >
            Aviso Legal
          </button>
          <button 
            onClick={() => onNavigate('privacy')} 
            className="hover:text-cyan-400 transition-colors bg-transparent border-none cursor-pointer"
          >
            Política de Privacidad
          </button>
          <button 
             onClick={() => onNavigate('cookies')} 
             className="hover:text-cyan-400 transition-colors bg-transparent border-none cursor-pointer"
          >
            Política de Cookies
          </button>
        </div>
        
        <p className="mt-8 text-xs text-gray-700">© {new Date().getFullYear()} NeoLeads. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;