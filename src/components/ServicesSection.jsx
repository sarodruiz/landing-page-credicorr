function ServicesSection() {
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-10">
          Tipos de préstamos que ofrecemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-green-600 mb-4"></div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Préstamos para jubilados
            </h3>
            <p className="text-sm text-gray-700">
              Soluciones simples y accesibles con validación ANSES y firma
              digital.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-green-600 mb-4"></div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Créditos personales
            </h3>
            <p className="text-sm text-gray-700">
              Financiación flexible para quienes necesitan resolver con rapidez.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-green-600 mb-4"></div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Gestión 100% digital
            </h3>
            <p className="text-sm text-gray-700">
              Completamente desde tu celular, sin trámites presenciales ni
              demoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
