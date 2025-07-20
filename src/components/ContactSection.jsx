function ContactSection() {
  return (
    <section className="bg-blue-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-6">
          Envianos tu consulta
        </h2>
        <p className="text-gray-700 text-center mb-8 text-base md:text-lg">
          Enviaron tu consulta por WhatsApp, o completá el siguiente formulario
          y te responderemos a la brevedad.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <form
            method="POST"
            name="contact"
            className="grid gap-6 text-left"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-300"
                placeholder="Ej: María González"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="ejemplo@correo.com"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-300"
                placeholder="Contanos en qué podemos ayudarte..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded text-lg font-semibold transform hover:scale-105 transition-transform duration-200"
            >
              Enviar consulta
            </button>
          </form>

          {/* Mapa embebido */}
          <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
            <iframe
              title="Ubicación CREDICORR San Justo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.738721918051!2d-58.56234558502962!3d-34.63794118045501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc617dcd7b9c1%3A0x6f2e112420d80e82!2sH.%20Yrigoyen%202308%2C%20B1754DTT%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1710112001000!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
