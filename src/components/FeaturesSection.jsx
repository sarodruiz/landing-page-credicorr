function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-12 text-center md:text-left">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center md:items-center md:text-center">
            <div className="text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Atención personalizada
            </h3>
            <p className="text-sm text-gray-700">
              Asesoramiento humano, claro y cercano. Cada consulta es única.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center md:items-center md:text-center">
            <div className="text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Desde tu celular
            </h3>
            <p className="text-sm text-gray-700">
              Todo el proceso puede resolverse desde tu celular, de forma
              segura.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center md:items-center md:text-center">
            <div className="text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              Con o sin Veraz
            </h3>
            <p className="text-sm text-gray-700">
              Soluciones financieras a tu medida. Sin complicaciones ni vueltas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
