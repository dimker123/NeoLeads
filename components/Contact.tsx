import React from 'react';
import { MapPin, Mail, ShieldCheck, ChevronDown, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-900/20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Copy Side */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            ¿Listo para <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
              Escalar?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No trabajamos con cualquiera. Buscamos socios ambiciosos.
          </p>
          
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl mb-8 animate-pulse">
            <p className="text-red-400 font-bold flex items-center gap-2">
              <ShieldCheck /> ATENCIÓN:
            </p>
            <p className="text-gray-300 mt-2">
              Solo aceptamos <span className="text-white font-bold underline">3 nuevos clientes</span> por sector y ciudad este mes para garantizar la exclusividad y resultados. Consulta disponibilidad ahora.
            </p>
          </div>

          <div className="space-y-4 text-gray-400">
            <a 
              href="tel:+34624129910" 
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors w-fit"
            >
              <Phone className="text-cyan-400" />
              <span>+34 624 129 910</span>
            </a>
            <a 
              href="mailto:info@neoleads.es" 
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors w-fit"
            >
              <Mail className="text-cyan-400" />
              <span>info@neoleads.es</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" />
              <span>Cambrils, Tarragona</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2">
          <form className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Tu Nombre</label>
                <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Ej: Carlos Rodríguez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre de tu Negocio</label>
                <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Ej: Reformas García" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Tu Teléfono (WhatsApp)</label>
                <input type="tel" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="+34 600 000 000" />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-400 mb-2">Sector</label>
                <div className="relative">
                  <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer">
                    <option className="bg-zinc-900 text-white">Reformas / Construcción</option>
                    <option className="bg-zinc-900 text-white">Salud / Clínica</option>
                    <option className="bg-zinc-900 text-white">Servicios Profesionales</option>
                    <option className="bg-zinc-900 text-white">Instalaciones Técnicas</option>
                    <option className="bg-zinc-900 text-white">Otro</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
                </div>
              </div>
              
              <button type="button" className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                SOLICITAR ESTUDIO GRATUITO
              </button>
              <p className="text-xs text-center text-gray-500">
                Al enviar aceptas nuestra política de privacidad.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;