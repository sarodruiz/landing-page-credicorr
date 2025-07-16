function InfoSection() {
  return (
    <section className="bg-green-50 py-12 px-6 md:px-16 text-center md:text-left">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Texto institucional */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            CREDICORR es confianza y trayectoria
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-4">
            Desde nuestra oficina en San Justo, llevamos más de 20 años
            brindando soluciones financieras a jubilados, docentes, municipales
            y personal de distintas instituciones. Nos especializamos en
            créditos ANSES con firma digital, atención personalizada y gestión
            100% online.
          </p>
          <ul className="text-blue-800 text-sm md:text-base list-disc list-inside">
            <li>Presencial o digital: vos elegís</li>
            <li>Sin complicaciones ni vueltas</li>
            <li>Respuestas en 24 horas</li>
          </ul>
        </div>

        {/* Imagen del frente */}
        <div>
          <img
            src="/assets/image-1.jpg"
            alt="Frente de la oficina de CREDICORR en San Justo"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
