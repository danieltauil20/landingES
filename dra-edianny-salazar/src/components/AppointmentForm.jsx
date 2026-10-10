import { useState } from "react";

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    tratamiento: "Odontología General",
    horarioPref: "Mañana",
    comentario: "",
    aceptaPolitica: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aceptaPolitica) {
      alert("Por favor, acepta la política de privacidad para continuar.");
      return;
    }

    const mensaje = `¡Hola! Me gustaría agendar una cita.%0A%0A*Nombre:* ${formData.nombre}%0A*Teléfono:* ${formData.telefono}%0A*Tratamiento:* ${formData.tratamiento}%0A*Horario preferido:* ${formData.horarioPref}%0A*Detalles:* ${formData.comentario || "Sin comentarios adicionales"}`;
    
    window.open(`https://wa.me/34641768115?text=${mensaje}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#513028] text-[#EBCAC5] relative overflow-hidden">
      {/* Fondo decorativo de luz sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EBCAC5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#EBCAC5]/15 px-4 py-1.5 rounded-full border border-[#EBCAC5]/20">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EBCAC5] font-montserrat">
              Atención Directa & Ágil
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif tracking-tight">
            Agenda tu Primera Cita
          </h2>
          <p className="text-sm sm:text-base text-[#EBCAC5]/85 font-montserrat leading-relaxed">
            Completa tus datos o contáctanos directamente por WhatsApp para coordinar tu consulta con la Dra. Edianny Salazar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* BLOQUE IZQUIERDO: Información de Contacto */}
          <div className="lg:col-span-5 space-y-8 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#EBCAC5]/15">
            <div>
              <h3 className="text-2xl font-bold text-white font-serif mb-2">
                ¿Prefieres hablar directamente?
              </h3>
              <p className="text-xs sm:text-sm text-[#EBCAC5]/80 font-montserrat leading-relaxed">
                Estamos a tu disposición para resolver cualquier duda o inquietud sobre tu salud bucodental.
              </p>
            </div>

            {/* Enlace directo a WhatsApp */}
            <a
              href="https://wa.me/34641768115?text=¡Hola!%20Me%20gustaría%20solicitar%20información%20sobre%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#EBCAC5] hover:bg-white text-[#513028] p-4 rounded-2xl font-montserrat font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-between shadow-lg group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#513028]/20 flex items-center justify-center text-lg text-[#513028]">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <span>Escríbenos por WhatsApp</span>
              </div>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>

            {/* Datos de Contacto */}
            <div className="space-y-4 pt-4 border-t border-[#EBCAC5]/15">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBCAC5]/15 text-[#EBCAC5] flex items-center justify-center shrink-0 border border-[#EBCAC5]/20">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-montserrat uppercase tracking-wider">
                    Ubicación
                  </h4>
                  <p className="text-xs text-[#EBCAC5]/80 font-montserrat mt-0.5">
                    Madrid, Comunidad de Madrid
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBCAC5]/15 text-[#EBCAC5] flex items-center justify-center shrink-0 border border-[#EBCAC5]/20">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-montserrat uppercase tracking-wider">
                    Horario de Atención
                  </h4>
                  <p className="text-xs text-[#EBCAC5]/80 font-montserrat mt-0.5">
                    Lunes a Viernes: 9:00 - 20:00 h<br />
                    Previa cita concertada
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#EBCAC5]/15 grid grid-cols-2 gap-4 text-center">
              <div className="bg-[#EBCAC5]/10 p-3 rounded-2xl border border-[#EBCAC5]/10">
                <i className="fa-solid fa-shield-halved text-[#EBCAC5] text-lg mb-1"></i>
                <p className="text-[10px] font-semibold text-white font-montserrat uppercase">100% Confidencial</p>
              </div>
              <div className="bg-[#EBCAC5]/10 p-3 rounded-2xl border border-[#EBCAC5]/10">
                <i className="fa-solid fa-bolt text-[#EBCAC5] text-lg mb-1"></i>
                <p className="text-[10px] font-semibold text-white font-montserrat uppercase">Respuesta Rápida</p>
              </div>
            </div>

          </div>

          {/* BLOQUE DERECHO: Formulario */}
          <div className="lg:col-span-7 bg-white text-[#513028] p-8 sm:p-10 rounded-3xl shadow-2xl border border-[#EBCAC5]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#513028] uppercase tracking-wider font-montserrat">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Ej. Ana Martínez"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#EBCAC5]/10 border border-[#513028]/20 text-[#513028] text-sm font-montserrat focus:outline-none focus:ring-2 focus:ring-[#513028] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#513028] uppercase tracking-wider font-montserrat">
                    Teléfono de Contacto *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="Ej. +34 600 000 000"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#EBCAC5]/10 border border-[#513028]/20 text-[#513028] text-sm font-montserrat focus:outline-none focus:ring-2 focus:ring-[#513028] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#513028] uppercase tracking-wider font-montserrat">
                    Tratamiento de Interés
                  </label>
                  <select
                    name="tratamiento"
                    value={formData.tratamiento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#EBCAC5]/10 border border-[#513028]/20 text-[#513028] text-sm font-montserrat focus:outline-none focus:ring-2 focus:ring-[#513028] transition-all"
                  >
                    <option value="Odontología General">Odontología General</option>
                    <option value="Cirugía Oral Especializada">Cirugía Oral Especializada</option>
                    <option value="Estética Dental y Blanqueamiento">Estética Dental & Blanqueamiento</option>
                    <option value="Implantología & Prótesis">Implantología & Prótesis Dental</option>
                    <option value="Diseño de Sonrisa">Diseño de Sonrisa</option>
                    <option value="Odontología Preventiva">Odontología Preventiva</option>
                    <option value="Primera Valoración">Primera Valoración Diagnóstica</option>
                  </select>
                </div>

                {/* Preferencia de Horario */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#513028] uppercase tracking-wider font-montserrat">
                    Preferencia de Horario
                  </label>
                  <select
                    name="horarioPref"
                    value={formData.horarioPref}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#EBCAC5]/10 border border-[#513028]/20 text-[#513028] text-sm font-montserrat focus:outline-none focus:ring-2 focus:ring-[#513028] transition-all"
                  >
                    <option value="Mañana (9:00 - 14:00)">Mañana (9:00 - 14:00)</option>
                    <option value="Tarde (15:00 - 20:00)">Tarde (15:00 - 20:00)</option>
                    <option value="Indiferente">Indiferente / Cualquiera</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#513028] uppercase tracking-wider font-montserrat">
                  Mensaje o Consulta (Opcional)
                </label>
                <textarea
                  name="comentario"
                  rows="3"
                  placeholder="Cuéntanos brevemente qué necesitas..."
                  value={formData.comentario}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#EBCAC5]/10 border border-[#513028]/20 text-[#513028] text-sm font-montserrat focus:outline-none focus:ring-2 focus:ring-[#513028] transition-all resize-none"
                ></textarea>
              </div>

              {/* Casilla de Privacidad */}
              <div className="flex items-start space-x-3 pt-1">
                <input
                  type="checkbox"
                  id="aceptaPolitica"
                  name="aceptaPolitica"
                  checked={formData.aceptaPolitica}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-[#513028]/30 text-[#513028] focus:ring-[#513028]"
                  required
                />
                <label htmlFor="aceptaPolitica" className="text-[11px] text-[#513028]/70 font-montserrat leading-tight cursor-pointer">
                  Acepto el tratamiento de mis datos de contacto para la gestión de la cita médica según la política de privacidad.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#513028] hover:bg-[#3d241e] text-[#EBCAC5] py-4 rounded-xl font-montserrat font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl hover:scale-[1.01]"
              >
                SOLICITAR MI CITA POR WHATSAPP
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}