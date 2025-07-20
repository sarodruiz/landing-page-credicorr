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
            En CREDICORR llevamos más de 20 años acompañando a jubilados,
            pensionados, docentes, municipales y personal de las fuerzas armadas
            desde nuestra oficina en San Justo. Nos especializamos en{" "}
            <span className="font-semibold text-blue-800">créditos ANSES</span>{" "}
            con firma digital, atención cercana y gestión 100% online.
          </p>
          <ul className="list-disc list-inside text-blue-800 text-sm md:text-base space-y-2">
            <li>
              Elegí atención <strong>presencial</strong> o{" "}
              <strong>digital</strong>
            </li>
            <li>Sin trámites complicados</li>
            <li>Respuesta en menos de 24 horas</li>
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
