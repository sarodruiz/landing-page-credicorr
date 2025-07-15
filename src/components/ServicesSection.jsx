function ServicesSection() {
  const servicios = [
    {
      titulo: "Créditos ANSES Jubilados",
      descripcion:
        "Con firma digital y atención en todo el país. Hasta $1.100.000 en 24 cuotas. Gestión rápida y personalizada.",
      imagen: "/assets/prestamo-billetera-1100000.jpg",
      alt: "Crédito para jubilados hasta $1.100.000 con gestión digital",
    },
    {
      titulo: "Línea HABERES SPB",
      descripcion:
        "Hasta $1.500.000 con acreditación en el día. Atención al personal del Servicio Penitenciario Bonaerense.",
      imagen: "/assets/prestamo-spb-creditos-1500000.jpg",
      alt: "Flyer institucional SPB con préstamo Línea HABERES",
    },
    {
      titulo: "Créditos Docentes",
      descripcion:
        "Con respaldo del Ministerio de Educación. Gestión online. Montos flexibles y acceso rápido.",
      imagen: "/assets/linea-haberes-creditos-docentes.jpg",
      alt: "Créditos Línea HABERES para docentes con hasta $1.500.000",
    },
    {
      titulo: "Municipales, Judiciales, PAMI",
      descripcion:
        "También trabajamos con otros sectores. Consultanos por tu disponibilidad específica.",
      imagen: "/assets/volante-credicorr.jpg",
      alt: "Volante institucional de CREDICORR con sectores atendidos",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
          Nuestros Servicios Financieros
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={servicio.image}
                alt={servicio.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {servicio.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
