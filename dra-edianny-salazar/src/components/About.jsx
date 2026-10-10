export function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-[#EBCAC5]/20 relative overflow-hidden">
      {/* Elemento decorativo sutil en el fondo */}
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Fotografía con marco de lujo */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Marco posterior decorativo */}
              <div className="absolute -inset-3 bg-[#EBCAC5] rounded-3xl transform -rotate-2 blur-xs"></div>
              
              {/* Contenedor principal de la foto */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                  alt="Dra. Edianny Salazar"
                  className="w-full h-[460px] sm:h-[530px] object-cover object-top"
                />

                {/* Tarjeta flotante con sello de trayectoria */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#513028]/10 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold font-serif text-[#513028]">+10 Años</p>
                    <p className="text-[11px] font-semibold text-[#513028]/70 font-montserrat uppercase tracking-wider">
                      De Experiencia Profesional
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#EBCAC5]/40 text-[#513028] flex items-center justify-center text-xl">
                    <i className="fa-solid fa-award"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA: Biografía y Filosofía de Trabajo */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag superior */}
            <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-1.5 rounded-full border border-[#513028]/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#513028]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#513028] font-montserrat">
                Conoce a tu Especialista
              </span>
            </div>

            {/* Titular */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#513028] font-serif leading-tight">
              Dra. Edianny Salazar
            </h2>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg font-medium text-[#513028]/90 font-serif italic">
              Odontóloga General & Especialista en Cirugía Oral
            </p>

            {/* Texto adaptado al perfil real de LinkedIn */}
            <div className="space-y-4 text-xs sm:text-sm text-[#513028]/80 font-montserrat leading-relaxed">
              <p>
                Con más de una década de experiencia en el ámbito odontológico y de la salud dental, la Dra. Edianny Salazar destaca por un perfil asistencial integral que abarca desde la <strong>Cirugía Oral Quirúrgica</strong> (extracción de cordales, exodoncias complejas, gingivectomías) hasta la <strong>Rehabilitación Oral y Protésica</strong>.
              </p>
              <p>
                Su trayectoria combina el ejercicio clínico riguroso en clínicas de Venezuela, Perú y España con el sector de la tecnología e ingeniería dental (Coordinación Técnica en Henry Schein), lo que le otorga una visión global, vanguardista y sumamente técnica en cada diagnóstico.
              </p>
            </div>

            {/* TARJETAS DE PILARES / ESPECIALIZACIONES (con fondo blanco para contrastar) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-white border border-[#513028]/10 flex items-start space-x-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#513028] text-[#EBCAC5] flex items-center justify-center shrink-0 text-sm">
                  <i className="fa-solid fa-tooth"></i>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#513028] font-montserrat uppercase tracking-wider">
                    Cirugía Oral Quirúrgica
                  </h4>
                  <p className="text-[11px] text-[#513028]/70 font-montserrat mt-1">
                    Terceros molares, torus mandibulares, gingivectomía y periodoncia.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#513028]/10 flex items-start space-x-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#513028] text-[#EBCAC5] flex items-center justify-center shrink-0 text-sm">
                  <i className="fa-solid fa-teeth-open"></i>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#513028] font-montserrat uppercase tracking-wider">
                    Rehabilitación & Prótesis
                  </h4>
                  <p className="text-[11px] text-[#513028]/70 font-montserrat mt-1">
                    Diseño, adaptación e instalación de prótesis fijas, removibles y totales.
                  </p>
                </div>
              </div>
            </div>

            {/* Botón de acción */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/34641768115?text=¡Hola!%20Me%20gustaría%20agendar%20una%20consulta%20con%20la%20Dra.%20Edianny%20Salazar."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#513028] hover:bg-[#3d241e] text-[#EBCAC5] font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-montserrat inline-flex items-center space-x-2"
              >
                <span>AGENDAR MI CONSULTA</span>
                <i className="fa-solid fa-arrow-right text-xs ml-1"></i>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}