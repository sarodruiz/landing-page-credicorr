function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-800">
          {/* Beneficio 1 */}
          <div className="flex flex-col items-center md:items-start">
            <svg
              className="w-10 h-10 mb-2 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M..." />
            </svg>
            <h4 className="font-semibold text-lg mb-1">
              Atención personalizada
            </h4>
            <p className="text-sm text-gray-700">
              Asesoramiento humano, claro y cercano. Cada consulta es única.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="flex flex-col items-center md:items-start">
            <svg className="w-10 h-10 mb-2 text-green-600" />
            <h4 className="font-semibold text-lg mb-1">
              Firma digital sin moverte
            </h4>
            <p className="text-sm text-gray-700">
              Todo el proceso puede resolverse desde tu celular, de forma
              segura.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="flex flex-col items-center md:items-start">
            <svg className="w-10 h-10 mb-2 text-green-600" />
            <h4 className="font-semibold text-lg mb-1">
              Más de 20 años de experiencia
            </h4>
            <p className="text-sm text-gray-700">
              Nuestra trayectoria nos respalda. Miles de personas confían en
              nosotros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
