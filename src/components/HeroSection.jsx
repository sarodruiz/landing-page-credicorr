import { Helmet } from "react-helmet";

function HeroSection() {
  return (
    <section className="bg-blue-50 py-10 px-6 md:py-20 md:px-12 text-center md:text-left">
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

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Texto */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-900 mb-2">
            <span className="text-green-600">$</span>
            <span>CREDICORR</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Tu préstamo, más cerca de lo que pensás
          </h2>
          <p className="mt-4 text-lg md:text-xl text-blue-800">
            Accedé a préstamos rápidos, seguros y adaptados a tus necesidades.
            Sin complicaciones.
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-700 italic">
            Más de 20 años brindando soluciones financieras con honestidad y
            confianza.
          </p>
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition duration-200"
          >
            Asesorate gratis
          </a>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="assets/hero-image.png"
            alt="Persona usando celular de forma confiada"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
