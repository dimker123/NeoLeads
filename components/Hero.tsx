import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Optimized Background Elements with Hardware Acceleration */}
      <div 
        className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" 
        style={{ transform: 'translate3d(-50%, 0, 0)', willChange: 'transform' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-violet-500/30 mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-xs md:text-sm font-semibold text-gray-300 tracking-wider uppercase">Neuromarketing Aplicado a Servicios</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-8">
          Deja de perseguir <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-500">
            clientes.
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-200">
          Haz que ellos te encuentren a ti.
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Tu negocio de servicios merece estar en la primera página de Google. 
          Creamos tu <span className="text-white font-semibold">infraestructura digital premium GRATIS</span> y 
          gestionamos tu éxito por <span className="text-cyan-400 font-bold text-2xl">150€</span>/mes.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              RESERVAR MI PLAZA <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>Resultados garantizados o devolvemos el dinero</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;