function ServicesSection() {
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-10">
          ¿Qué servicios ofrecemos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-green-600 mb-4"></div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Créditos personales
            </h3>
            <p className="text-sm text-gray-700">
              Financiación flexible para quienes necesitan resolver con rapidez.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-green-600 mb-4"></div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Préstamos ANSES
            </h3>
            <p className="text-sm text-gray-700">
              Tramitamos tu préstamo con cualquier banco, de manera segura y
              simple.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-green-600 mb-4"></div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Gestión 100% online
            </h3>
            <p className="text-sm text-gray-700">
              Completamente desde tu celular, sin necesidad de trámites
              presenciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
