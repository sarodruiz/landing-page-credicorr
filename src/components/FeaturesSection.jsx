function InfoSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-green-600 mb-4">
              <svg
                className="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="1.5" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                <path
                  strokeWidth="1.5"
                  d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-2 text-blue-900">
              Atención personalizada
            </h4>
            <p className="text-sm text-gray-700">
              Asesoramiento humano, claro y cercano. Cada consulta es única.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-green-600 mb-4">
              <svg
                className="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="1.5" d="M7 4h10v16H7z" />
                <path strokeWidth="1.5" d="M9 2v2m6-2v2M7 20h10" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-2 text-blue-900">
              Firma digital desde tu celular
            </h4>
            <p className="text-sm text-gray-700">
              Todo el proceso puede resolverse desde tu celular, de forma
              segura.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-green-600 mb-4">
              <svg
                className="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="1.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-2 text-blue-900">
              20 años de experiencia
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

export default InfoSection;
