export function Services() {
  const services = [
    {
      title: "Odontología Preventiva e Higiene",
      description: "Limpiezas profesionales profundas, sellados y planes periódicos para proteger tus encías y evitar la aparición de futuras complicaciones.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
      badge: "Prevención"
    },
    {
      title: "Odontología General",
      description: "Revisiones completas, diagnósticos precisos y empastes estéticos avanzados para mantener una salud bucal impecable y solucionar problemas cotidianos.",
      image: "https://images.unsplash.com/photo-1684607633251-8a4a8d94ddd2?auto=format&fit=crop&q=80&w=600",
      badge: "Cuidado Diario"
    },
    {
      title: "Endodoncia",
      description: "Tratamientos de conducto con tecnología de alta precisión para salvar tus piezas dentales naturales eliminando la infección y el dolor desde la raíz.",
      image: "https://images.unsplash.com/photo-1664530837840-07497f9fe437?auto=format&fit=crop&q=80&w=600",
      badge: "Salud Interna"
    },
    {
      title: "Periodoncia",
      description: "Diagnóstico y tratamiento especializado del sangrado e inflamación de encías para proteger el soporte óseo de tus dientes y prevenir la periodontitis.",
      image: "https://images.unsplash.com/photo-1739902526173-06750b78cfb7?auto=format&fit=crop&q=80&w=600",
      badge: "Cuidado Gingival"
    },
    {
      title: "Prótesis Dental",
      description: "Soluciones fijas o removibles adaptadas a tu boca para reemplazar piezas perdidas, restaurando la funcionalidad de la mordida y la estética natural.",
      image: "https://plus.unsplash.com/premium_photo-1744142825138-3157f369dbb2?auto=format&fit=crop&q=80&w=600",
      badge: "Restauración"
    },
    {
      title: "Rehabilitación Oral",
      description: "Tratamiento integral para reconstruir casos complejos de desgaste o pérdida múltiple de piezas, devolviendo la función masticatoria y la armonía facial.",
      image: "https://images.unsplash.com/photo-1606811811225-10635e4c9a39?auto=format&fit=crop&q=80&w=600",
      badge: "Reconstrucción"
    },
    {
      title: "Cirugía Oral",
      description: "Extracciones complejas e intervenciones quirúrgicas orales realizadas bajo protocolos estrictos para minimizar las molestias y agilizar la recuperación.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=600",
      badge: "Cirugía"
    },
    {
      title: "Estética Dental y Blanqueamiento",
      description: "Tratamientos de aclaramiento avanzado y técnicas modernas para devolverle el brillo, la luminosidad y la armonía natural a tu sonrisa.",
      image: "https://images.unsplash.com/photo-1664529842476-e63110e635ec?auto=format&fit=crop&q=80&w=600",
      badge: "Luminosidad"
    },
    {
      title: "Diseño de Sonrisa",
      description: "Planificación digital completamente personalizada para proyectar visualmente la forma, tamaño y simetría dental que mejor se adapte a tus facciones.",
      image: "https://images.unsplash.com/photo-1777331903190-341a3dd0441b?auto=format&fit=crop&q=80&w=600",
      badge: "Armonía"
    }
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#EBCAC5]/10 relative overflow-hidden">
      {/* Luces/Degradados decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-[#513028]/15 shadow-sm">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#513028] font-montserrat">
              Atención Integral y Personalizada
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#513028] font-serif tracking-tight">
            Nuestros Tratamientos
          </h2>
          <p className="text-sm sm:text-base text-[#513028]/80 font-montserrat leading-relaxed">
            Combinamos tecnología odontológica de vanguardia con un trato cálido y personalizado para garantizar resultados duraderos y una experiencia confortable.
          </p>
        </div>

        {/* Grid de Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const whatsappMsg = encodeURIComponent(
              `¡Hola! Quisiera solicitar información sobre el tratamiento de ${service.title}.`
            );

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-[#513028]/10 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Imagen con animación de Zoom */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#513028] text-[10px] font-extrabold font-montserrat uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {service.badge}
                    </span>
                  </div>

                  {/* Contenido textual */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-[#513028] font-serif mb-3 group-hover:text-[#3d241e] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#513028]/75 font-montserrat leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Enlace de Acción estilizado con los colores de marca */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <a
                    href={`https://wa.me/34641768115?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between pt-4 border-t border-[#513028]/10 text-xs font-bold text-[#513028] uppercase tracking-wider font-montserrat group-hover:text-[#3d241e]"
                  >
                    <span>Pedir información</span>
                    <div className="w-8 h-8 rounded-full bg-[#EBCAC5]/40 text-[#513028] group-hover:bg-[#513028] group-hover:text-[#EBCAC5] transition-all duration-300 flex items-center justify-center shadow-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.403 5.592A8.942 8.942 0 0012.008 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.125 1.2 4.484L3 21l4.643-1.218a8.933 8.933 0 004.363 1.137h.004c4.947 0 8.975-4.027 8.977-8.977a8.905 8.905 0 00-2.584-6.35zm-6.395 13.88h-.003a7.447 7.447 0 01-3.798-1.041l-.272-.162-2.823.74.753-2.753-.177-.282a7.466 7.466 0 01-1.144-3.997c.001-4.12 3.353-7.472 7.475-7.472 1.996 0 3.872.778 5.283 2.19 1.41 1.411 2.186 3.288 2.185 5.286-.001 4.121-3.353 7.471-7.476 7.471zm4.102-5.602c-.225-.113-1.332-.657-1.539-.733-.206-.075-.356-.113-.506.113-.15.225-.58.733-.711.883-.131.15-.262.169-.487.056-.225-.113-.95-.35-1.81-1.118-.67-.599-1.122-1.338-1.253-1.563-.131-.225-.014-.347.098-.459.101-.101.225-.262.338-.394.112-.131.15-.262.225-.375.075-.15.038-.281-.019-.394-.056-.113-.506-1.218-.693-1.669-.183-.439-.368-.379-.506-.386-.131-.007-.281-.009-.431-.009-.15 0-.394.056-.6.281-.206.225-.788.77-.788 1.876 0 1.106.806 2.174.919 2.325.112.15 1.586 2.421 3.843 3.395.537.232.956.37 1.283.474.54.172 1.03.148 1.418.09.433-.065 1.332-.544 1.52-1.069.187-.525.187-.975.131-1.069-.056-.094-.206-.15-.431-.262z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Inferior de Llamada a la Acción */}
        <div className="mt-16 bg-[#513028] text-[#EBCAC5] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-2 text-center lg:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              ¿No estás seguro de qué tratamiento necesitas?
            </h3>
            <p className="text-xs sm:text-sm text-[#EBCAC5]/85 font-montserrat max-w-xl">
              Agenda una primera valoración diagnóstica, para evaluar la salud de tu boca y diseñar un plan a tu medida.
            </p>
          </div>

          <a
            href="https://wa.me/34641768115?text=¡Hola!%20Deseo%20más%20información%20sobre%20una%20cita%20de%20valoración."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#EBCAC5] hover:bg-white text-[#513028] font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full shadow-md transition-all duration-300 font-montserrat z-10 hover:scale-105"
          >
            SOLICITAR VALORACIÓN
          </a>
        </div>

      </div>
    </section>
  );
}