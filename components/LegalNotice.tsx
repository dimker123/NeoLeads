import React, { useEffect } from 'react';

const LegalNotice: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-24 min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black mb-12 text-center">
          Aviso <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Legal</span>
        </h1>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-gray-800 space-y-8 text-gray-300 leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              1. Datos Identificativos
            </h2>
            <p>
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
            </p>
            <ul className="mt-4 space-y-2 bg-white/5 p-6 rounded-xl border border-white/10">
              <li><strong className="text-white">Titular:</strong> Javier Murcia Aragón</li>
              <li><strong className="text-white">NIF:</strong> 48000004Q</li>
              <li><strong className="text-white">Domicilio:</strong> Carrer de Francesc Pérez Dolç, 38. 43850, Cambrils (Tarragona).</li>
              <li><strong className="text-white">Email:</strong> info@neoleads.es</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-violet-500 rounded-full"></span>
              2. Propiedad Intelectual e Industrial
            </h2>
            <p>
              NeoLeads es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
            </p>
            <p className="mt-4">
              Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de NeoLeads.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              3. Exclusión de Garantías y Responsabilidad
            </h2>
            <p>
              NeoLeads no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-violet-500 rounded-full"></span>
              4. Modificaciones
            </h2>
            <p>
              NeoLeads se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              5. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              La relación entre NeoLeads y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Tarragona.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegalNotice;