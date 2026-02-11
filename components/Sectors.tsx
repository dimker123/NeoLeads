import React from 'react';
import { Hammer, HeartPulse, Wrench, Briefcase } from 'lucide-react';

const Sectors: React.FC = () => {
  const sectors = [
    {
      id: 1,
      title: "Reformas y Hogar",
      icon: <Hammer size={32} />,
      desc: "Reformas integrales, cocinas, baños, pintores.",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 2,
      title: "Salud y Bienestar",
      icon: <HeartPulse size={32} />,
      desc: "Clínicas dentales, fisioterapia, estética, nutrición.",
      color: "from-teal-400 to-emerald-500"
    },
    {
      id: 3,
      title: "Instaladores Técnicos",
      icon: <Wrench size={32} />,
      desc: "Aire acondicionado, placas solares, fontanería, electricidad.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 4,
      title: "Servicios Profesionales",
      icon: <Briefcase size={32} />,
      desc: "Abogados, gestorías, arquitectos, consultores.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="sectors" className="py-12 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Dominamos Estos <span className="text-cyan-400">Sectores</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <div 
              key={sector.id} 
              className="group relative overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-gray-800 to-black hover:from-white hover:to-white transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative h-full bg-black rounded-xl p-8 flex flex-col items-center text-center z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${sector.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{sector.title}</h3>
                <p className="text-gray-400 text-sm">{sector.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;