import React from 'react';
import { AlertTriangle, Euro, Clock, Frown } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <Euro className="w-8 h-8 text-red-500" />,
      title: "Presupuestos Abusivos",
      desc: "Agencias que te cobran 2.000€ por una web plantilla que no convierte visitas en dinero."
    },
    {
      icon: <Frown className="w-8 h-8 text-red-500" />,
      title: "Webs 'Bonitas' pero Inútiles",
      desc: "El diseño sin estrategia es arte, no negocio. Tu web actual es un gasto, no una inversión."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Promesas Vacías",
      desc: "Meses esperando resultados SEO que nunca llegan mientras tu competencia se queda con el mercado."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Invisibilidad Digital",
      desc: "Si no estás en la primera página de Google cuando te buscan, simplemente no existes."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Cansado de pagar por una web <span className="text-red-500 decoration-red-500 underline decoration-wavy">que no vende?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            La mayoría de los negocios locales fracasan online por la misma razón: 
            confían en diseñadores, no en vendedores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors border-red-500/20 group">
              <div className="mb-6 bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{pain.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;