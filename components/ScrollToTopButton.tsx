import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-40 p-3 bg-black border border-cyan-500/50 rounded-full text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;