function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">
        {/* Logo / Marca */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">CREDICORR</h3>
          <p className="text-sm text-blue-200">
            Soluciones financieras claras y accesibles.
          </p>
        </div>

        {/* Ubicación centrada */}
        <div className="flex flex-col items-center text-center md:col-start-2 md:col-span-1 md:items-center md:text-center">
          <h4 className="font-semibold text-base mb-2">Ubicación</h4>
          <div className="flex items-center justify-center gap-2 text-sm text-blue-100">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span>San Justo, Buenos Aires</span>
          </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h4 className="font-semibold text-base mb-2">Contacto</h4>

          {/* Teléfono fijo */}
          <div className="flex items-center gap-2 text-sm text-blue-100 justify-center md:justify-end mt-1">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>4484-5275</span>
          </div>

          {/* Teléfono móvil */}
          <div className="flex items-center gap-2 text-sm text-blue-100 justify-center md:justify-end mt-1">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <span>11-2515-0062</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm text-blue-100 justify-center md:justify-end mt-1">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <a href="mailto:consultas@credicorr.com" className="underline">
              consultas@credicorr.com
            </a>
          </div>
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
