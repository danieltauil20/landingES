export function Testimonials() {
  const commitments = [
    {
      icon: "fa-solid fa-hand-holding-medical",
      title: "Diagnóstico Honesto",
      description: "Evaluación minuciosa y transparente. Te explicamos cada detalle de tu salud bucal proponiendo solo los tratamientos que realmente necesitas."
    },
    {
      icon: "fa-solid fa-user-doctor",
      title: "Trato Directo con la Especialista",
      description: "Atención continuada y personalizada por la Dra. Edianny Salazar desde la primera valoración hasta el seguimiento post-tratamiento."
    },
    {
      icon: "fa-solid fa-heart-pulse",
      title: "Tratamientos Mínimamente Invasivos",
      description: "Uso de técnicas y tecnología quirúrgica de vanguardia enfocadas en tu máxima comodidad y una pronta recuperación."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#EBCAC5]/10 relative overflow-hidden">
      {/* Luz decorativa de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-white/40 via-transparent to-white/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-[#513028]/15 shadow-sm">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#513028] font-montserrat">
              Filosofía de Trabajo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#513028] font-serif tracking-tight">
            Nuestro Compromiso Contigo
          </h2>
          <p className="text-sm sm:text-base text-[#513028]/80 font-montserrat leading-relaxed">
            Tu tranquilidad y salud bucodental son nuestra prioridad. Nos regimos por la excelencia médica, la cercanía y la honestidad profesional.
          </p>
        </div>

        {/* Grid de Compromisos / Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-[#513028]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icono */}
              <div className="w-16 h-16 rounded-2xl bg-[#EBCAC5]/30 text-[#513028] group-hover:bg-[#513028] group-hover:text-[#EBCAC5] flex items-center justify-center text-2xl transition-all duration-300 mb-6 shadow-inner">
                <i className={item.icon}></i>
              </div>

              {/* Título */}
              <h3 className="text-lg font-bold text-[#513028] font-serif mb-3">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="text-xs sm:text-sm text-[#513028]/75 font-montserrat leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner de Bienvenida a Nuevos Pacientes */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#513028]/10 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-[#513028] font-montserrat font-semibold">
            ✨ <span className="underline decoration-[#EBCAC5] decoration-2">Primera Valoración Personalizada</span>: Consulta con la Dra. Edianny Salazar y diseña un plan a tu medida.
          </p>
        </div>

      </div>
    </section>
  );
}