import { Helmet } from "react-helmet";

function HeroSection() {
  return (
    <section className="bg-blue-50 py-12 px-6 md:py-24 md:px-16">
      <Helmet>
        <title>CREDICORR | Tu préstamo, más cerca de lo que pensás</title>
        <meta
          name="description"
          content="Accedé a créditos ANSES con firma digital. Atención personalizada en todo el país. Más de 20 años de experiencia. Consultá desde tu celular."
        />
        <meta
          name="keywords"
          content="Créditos ANSES, jubilados, préstamos personales, firma digital, CREDICORR San Justo"
        />
      </Helmet>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <img
            src="assets/credicorr-logo.png"
            alt="Logo CREDICORR"
            className="h-12 w-auto mb-2 mx-auto md:mx-0"
          />

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
            Tu préstamo, más cerca de lo que pensás
          </h2>

          <p className="text-lg md:text-xl text-blue-800 mb-4">
            Accedé a préstamos rápidos, seguros y adaptados a tus necesidades.
            Sin trámites complicados ni demoras.
          </p>

          <p className="text-sm md:text-base text-gray-700 italic mb-6 flex items-center justify-center md:justify-start">
            Más de 20 años brindando soluciones financieras.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a
              href="https://wa.me/5491163520061"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              aria-label="Enviar mensaje por WhatsApp para solicitar asesoramiento"
            >
              Asesorate gratis
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="assets/hero-image.jpg"
            alt="Cliente satisfecho usando su celular para solicitar un préstamo desde CREDICORR"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
