function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo / Marca */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">CREDICORR</h3>
          <p className="text-sm text-blue-200">
            Soluciones financieras claras y accesibles.
          </p>
        </div>

        {/* Ubicación */}
        <div className="text-center">
          <h4 className="font-semibold text-base mb-2">Ubicación</h4>
          <p className="text-sm text-blue-100">📍 San Justo, Buenos Aires</p>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold text-base mb-2">Contacto</h4>
          <p className="text-sm text-blue-100">📞 4484-5275</p>
          <p className="text-sm text-blue-100">📱 11-2515-0062</p>
          <p className="text-sm text-blue-100">
            📧{" "}
            <a href="mailto:consultas@credicorr.com" className="underline">
              consultas@credicorr.com
            </a>
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-blue-800 pt-4 text-center text-xs text-blue-300">
        &copy; {new Date().getFullYear()} CREDICORR · Todos los derechos
        reservados · Buenos Aires, Argentina.
      </div>
    </footer>
  );
}

export default Footer;
