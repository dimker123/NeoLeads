import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black mb-12 text-center">
          Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Privacidad</span>
        </h1>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-gray-800 space-y-8 text-gray-300 leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              1. Responsable del Tratamiento
            </h2>
            <p className="mb-4">
              Los datos de carácter personal que se pudieran recabar directamente del interesado serán tratados de forma confidencial y quedarán incorporados a la correspondiente actividad de tratamiento titularidad de:
            </p>
            <ul className="space-y-2 bg-white/5 p-6 rounded-xl border border-white/10">
              <li><strong className="text-white">Titular:</strong> Javier Murcia Aragón</li>
              <li><strong className="text-white">NIF:</strong> 48000004Q</li>
              <li><strong className="text-white">Domicilio:</strong> Carrer de Francesc Pérez Dolç, 38. 43850, Cambrils (Tarragona).</li>
              <li><strong className="text-white">Email:</strong> info@neoleads.es</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-violet-500 rounded-full"></span>
              2. Finalidad del Tratamiento
            </h2>
            <p>
              La finalidad del tratamiento de los datos corresponde a cada una de las actividades de tratamiento que realiza NeoLeads:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-sm">
              <li>Gestión de la relación comercial con los clientes.</li>
              <li>Respuesta a consultas enviadas a través de los formularios de contacto.</li>
              <li>Envío de comunicaciones comerciales y promociones relacionadas con nuestros servicios de marketing digital y diseño web.</li>
              <li>Gestión administrativa, contable y fiscal.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              3. Legitimación
            </h2>
            <p>
              El tratamiento de sus datos se realiza para el cumplimiento de obligaciones legales por parte de NeoLeads, así como cuando la finalidad del tratamiento requiera su consentimiento, que habrá de ser prestado mediante una clara acción afirmativa (marcar la casilla correspondiente en los formularios).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-violet-500 rounded-full"></span>
              4. Conservación de Datos
            </h2>
            <p>
              Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recaban y para determinar las posibles responsabilidades que se pudieran derivar de la finalidad, además de los períodos establecidos en la normativa de archivos y documentación.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              5. Comunicación de Datos
            </h2>
            <p>
              Con carácter general no se comunicarán los datos personales a terceros, salvo obligación legal, entre las que pueden estar las comunicaciones al Defensor del Pueblo, Jueces y Tribunales, interesados en los procedimientos relacionados con las reclamaciones presentadas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-violet-500 rounded-full"></span>
              6. Derechos de los Interesados
            </h2>
            <p className="mb-4">
              Cualquier persona tiene derecho a obtener confirmación sobre los tratamientos que de sus datos que se llevan a cabo por NeoLeads.
            </p>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, cuando procedan, ante NeoLeads, Carrer de Francesc Pérez Dolç, 38. 43850, Cambrils (Tarragona) o en la dirección de correo electrónico info@neoleads.es.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;