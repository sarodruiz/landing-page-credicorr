function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Identidad institucional */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">CREDICORR</h3>
          <p className="text-sm">
            Más de 20 años brindando soluciones financieras a jubilados,
            docentes y trabajadores con honestidad y confianza.
          </p>
        </div>

        {/* Contacto final */}
        <div className="text-center md:text-right">
          <p className="text-sm mb-2">📍 San Justo, Buenos Aires</p>
          <p className="text-sm mb-2">
            📧{" "}
            <a
              href="mailto:haberes@reggiodc.com"
              className="underline text-white"
            >
              haberes@reggiodc.com
            </a>
          </p>
          <p className="text-sm mb-2">📞 4484-5275</p>
          <p className="text-sm">📱 11-2515-0062</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-6 text-center text-xs text-blue-200">
        &copy; {new Date().getFullYear()} CREDICORR · Todos los derechos
        reservados
      </div>
    </footer>
  );
}

export default Footer;
