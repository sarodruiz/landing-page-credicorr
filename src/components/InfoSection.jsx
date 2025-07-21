function InfoSection() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texto institucional */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Honestidad y confianza
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-6">
            En CREDICORR tenemos más de 20 años de trayectoria acompañando a
            jubilados, pensionados, docentes, personal municipal y de las
            fuerzas armadas. Estamos en San Justo, listos para brindarte
            atención personalizada en todo momento.
          </p>
          <p className="text-gray-800 text-base md:text-lg mb-6">
            Escribinos hoy y recibí asesoramiento gratuito, sin trámites
            complejos ni compromisos. Estamos para ayudarte a encontrar el
            préstamo que mejor se adapta a tu situación.
          </p>
          <ul className="list-disc list-inside text-blue-800 text-sm md:text-base space-y-2">
            <li>
              Atención <strong>presencial</strong> o <strong>digital</strong>
            </li>
            <li>Gestión simple y sin complicaciones</li>
            <li>Respuesta rápida: en menos de 24 horas</li>
          </ul>
        </div>

        {/* Imagen ilustrativa */}
        <div className="w-full">
          <img
            src="/assets/info-image.jpg"
            alt="Oficina de CREDICORR en San Justo"
            className="rounded-xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
