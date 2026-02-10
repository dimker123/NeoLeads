import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
        <div className="glass-panel border-2 border-cyan-400/50 rounded-3xl p-8 md:p-12 relative overflow-hidden neon-border">
          {/* Label */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-violet-600 text-white font-bold px-8 py-2 rounded-bl-2xl uppercase tracking-wider text-sm">
            Oferta Limitada
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2 mt-8 md:mt-0">Plan Neo150</h3>
              <p className="text-gray-400 mb-6">Todo lo que necesitas para dominar tu mercado local.</p>
              
              <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                <span className="text-6xl font-black text-white">150€</span>
                <span className="text-gray-400 text-xl">/mes</span>
              </div>
              <p className="text-sm text-cyan-400 font-semibold mb-8">+ Inversión en Google Ads</p>

              <div className="inline-block bg-white/10 rounded-lg px-4 py-2 border border-white/20">
                <span className="block text-xs text-gray-400 uppercase tracking-widest">Diseño & Desarrollo</span>
                <span className="text-2xl font-bold text-green-400">0€ (GRATIS)</span>
              </div>
            </div>

            <div className="flex-1 w-full border-t md:border-t-0 md:border-l border-gray-700 pt-8 md:pt-0 md:pl-12">
              <ul className="space-y-4">
                {[
                  "Diseño Web Premium Futurista",
                  "Hosting de Alta Velocidad Incluido",
                  "Dominio .es o .com incluido",
                  "Gestión Campañas Google Ads",
                  "Optimización Mensual de Conversión",
                  "Soporte Prioritario WhatsApp",
                  "Sin Permanencia (Eres libre)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-8 bg-white text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition-colors shadow-lg"
              >
                QUIERO ESTE PLAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;