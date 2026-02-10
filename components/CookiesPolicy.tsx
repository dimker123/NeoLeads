import React, { useEffect } from 'react';

const CookiesPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-24 min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black mb-12 text-center">
          Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Cookies</span>
        </h1>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-gray-800 space-y-8 text-gray-300 leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              1. ¿Qué son las Cookies?
            </h2>
            <p>
              Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-violet-500 rounded-full"></span>
              2. Cookies Utilizadas en este Sitio Web
            </h2>
            <p className="mb-4">
              Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-white font-bold mb-2 text-lg">Cookies Propias</h3>
                <p className="text-sm">
                  Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario (ej: cookies de sesión para garantizar que los usuarios que escriben comentarios en el blog sean humanos y no aplicaciones automatizadas).
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-white font-bold mb-2 text-lg">Cookies de Terceros</h3>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li><strong className="text-cyan-400">Google Analytics:</strong> Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google.</li>
                  <li><strong className="text-cyan-400">Google Ads:</strong> Utilizamos cookies para mejorar la publicidad y mostrarle anuncios relevantes basados en sus búsquedas anteriores.</li>
                  <li><strong className="text-cyan-400">Redes Sociales:</strong> Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
              3. Desactivación o Eliminación de Cookies
            </h2>
            <p>
              En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando:
            </p>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-900 rounded-lg hover:text-cyan-400 hover:bg-gray-800 transition-colors">Configuración para Google Chrome</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-900 rounded-lg hover:text-cyan-400 hover:bg-gray-800 transition-colors">Configuración para Safari</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-900 rounded-lg hover:text-cyan-400 hover:bg-gray-800 transition-colors">Configuración para Firefox</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-900 rounded-lg hover:text-cyan-400 hover:bg-gray-800 transition-colors">Configuración para Microsoft Edge</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-violet-500 rounded-full"></span>
              4. Notas Adicionales
            </h2>
            <p>
              Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy;