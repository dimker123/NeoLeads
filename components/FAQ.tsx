import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Por qué el diseño web es gratis?",
      a: "Porque confiamos en nuestro sistema. No queremos cobrarte por 'construir el coche', queremos cobrarte por 'conducirlo' y llevarte a la meta. Ganamos cuando tú te quedas con nosotros a largo plazo."
    },
    {
      q: "¿Tengo que pagar aparte la publicidad a Google?",
      a: "Sí. Los 150€ son nuestros honorarios de gestión, mantenimiento y optimización tecnológica. El presupuesto de anuncios se paga directamente a Google (tú decides cuánto, recomendamos empezar con 10€/día)."
    },
    {
      q: "¿Hay permanencia?",
      a: "No. Odiamos las ataduras. Si no te traemos resultados, eres libre de irte. Nos esforzamos cada mes para que no quieras hacerlo."
    },
    {
      q: "¿La web será mía?",
      a: "La infraestructura tecnológica pertenece a NeoLeads mientras dure el servicio. Si decides irte, la web se da de baja. Es un modelo de 'Renting Tecnológico' para que siempre tengas lo último sin invertir miles de euros."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Preguntas <span className="text-violet-500">Frecuentes</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-800 rounded-xl overflow-hidden bg-white/5">
              <button 
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-lg text-gray-200">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-cyan-400" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;