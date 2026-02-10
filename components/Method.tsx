import React from 'react';
import { Monitor, Rocket, MessageCircle } from 'lucide-react';

const Method: React.FC = () => {
  return (
    <section id="method" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2 block">La Estrategia</span>
          <h2 className="text-4xl md:text-6xl font-black text-white">El Método <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">NeoLeads</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-30" />

          {/* Step 1 */}
          <div className="relative group">
            <div className="w-24 h-24 mx-auto bg-black border-2 border-violet-500 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-300">
              <Monitor className="w-10 h-10 text-white" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">1</div>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold mb-4">Diseño Futurista <br/>(Conversión)</h3>
              <p className="text-gray-400">
                Creamos una Landing Page de alto rendimiento, optimizada psicológicamente para convertir visitantes en clientes. Estética premium que justifica tus precios.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="w-24 h-24 mx-auto bg-black border-2 border-violet-500 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-10 h-10 text-white" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">2</div>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold mb-4">Inyección de Tráfico <br/>(Google Ads)</h3>
              <p className="text-gray-400">
                Configuramos campañas de precisión quirúrgica. Solo mostramos tu negocio a personas que están buscando tus servicios en este momento exacto.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="w-24 h-24 mx-auto bg-black border-2 border-violet-500 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-10 h-10 text-white" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">3</div>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold mb-4">Cierre de Ventas <br/>(WhatsApp)</h3>
              <p className="text-gray-400">
                Eliminamos la fricción. Los clientes contactan directamente a tu WhatsApp. Tú solo te preocupas de cerrar el trato y facturar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;