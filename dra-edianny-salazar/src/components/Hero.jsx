export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#EBCAC5]/30 via-[#EBCAC5]/10 to-transparent"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#EBCAC5]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#513028]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: Textos y CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badges / Etiqueta superior */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#513028]/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#513028] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#513028] font-montserrat">
                Atención Odontológica Especializada
              </span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#513028] leading-[1.15] tracking-tight font-serif">
              Tu sonrisa en manos <br className="hidden sm:block" />
              <span className="italic font-normal font-serif text-[#3d241e]">expertas y de confianza</span>
            </h1>

            {/* Subtítulo / Descripción */}
            <p className="text-base sm:text-lg text-[#513028]/85 font-montserrat max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Especialista en Odontología General y Cirugía Oral. Ofrecemos tratamientos personalizados de alta calidad con la más avanzada tecnología en un entorno de máximo confort.
            </p>

            {/* Botones de Acción */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-montserrat">
              <a
                href="#contacto"
                className="w-full sm:w-auto bg-[#513028] hover:bg-[#3d241e] text-[#EBCAC5] font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
              >
                <span>AGENDAR PRIMERA CITA</span>
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto bg-white/70 hover:bg-white text-[#513028] border border-[#513028]/20 font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full shadow-sm hover:shadow transition-all duration-300 text-center"
              >
                VER TRATAMIENTOS
              </a>
            </div>

            {/* Tarjetas rápidas de valor / Puntos destacados */}
            <div className="pt-8 border-t border-[#513028]/15 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#513028] font-serif">100%</p>
                <p className="text-[11px] font-semibold text-[#513028]/70 uppercase tracking-wider font-montserrat mt-1">Personalizado</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#513028] font-serif">Cirugía</p>
                <p className="text-[11px] font-semibold text-[#513028]/70 uppercase tracking-wider font-montserrat mt-1">Especializada</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#513028] font-serif">Máximo</p>
                <p className="text-[11px] font-semibold text-[#513028]/70 uppercase tracking-wider font-montserrat mt-1">Confort y Calidez</p>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Imagen Principal / Banner */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Marco decorativo dorado/cacao detrás de la foto */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#513028]/20 to-[#EBCAC5] rounded-3xl transform rotate-2 blur-sm"></div>

              {/* Contenedor de la Imagen */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=formatyfit=cropyq=80yw=1000"
                  alt="Dra. Edianny Salazar - Clínica Dental"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center"
                />

                {/* Overlay gradual inferior para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#513028]/60 via-transparent to-transparent"></div>

                {/* Badge flotante sobre la foto */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBCAC5] flex items-center justify-center text-[#513028] shrink-0">
                    <i className="fa-solid fa-user-doctor text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#513028] font-montserrat">Dra. Edianny Salazar</h4>
                    <p className="text-xs text-[#513028]/80 font-montserrat">Cirugía Oral y Odontología General</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}