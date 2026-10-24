import { useState } from "react";
import { LegalModal } from "./LegalModal";
import { CookieBanner } from "./CookieBanner";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalState, setModalState] = useState({ isOpen: false, type: "aviso" });

  const openModal = (type) => {
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <>
      <footer className="bg-[#513028] text-[#EBCAC5] relative overflow-hidden pt-16 pb-10 border-t border-[#EBCAC5]/20 font-montserrat">
        {/* Luz sutil de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* CONTENIDO PRINCIPAL DEL FOOTER */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#EBCAC5]/15">
            
            {/* COLUMNA 1: Identidad Corporativa */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold font-serif text-white tracking-wide">
                Especialidades Odontológicas
              </h3>
              <p className="text-xs text-[#EBCAC5]/80 leading-relaxed max-w-sm">
                Odontología general integral y cirugía oral de alta precisión. Ofrecemos una atención médica adaptada a cada paciente con tecnología de vanguardia y el máximo confort.
              </p>
              <div className="pt-2 flex items-center space-x-3">
                <span className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full border border-[#EBCAC5]/15 text-[11px] text-white">
                  <i className="fa-solid fa-shield-halved text-[#EBCAC5] text-xs"></i>
                  <span>Garantía de Calidad Asistencial</span>
                </span>
              </div>
            </div>

            {/* COLUMNA 2: Navegación del Sitio */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-widest">
                Navegación
              </h4>
              <ul className="space-y-2.5 text-xs text-[#EBCAC5]/80">
                <li>
                  <a href="#inicio" className="hover:text-white transition-colors flex items-center space-x-2">
                    <i className="fa-solid fa-chevron-right text-[9px] text-[#EBCAC5]/50"></i>
                    <span>Inicio</span>
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors flex items-center space-x-2">
                    <i className="fa-solid fa-chevron-right text-[9px] text-[#EBCAC5]/50"></i>
                    <span>Tratamientos</span>
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition-colors flex items-center space-x-2">
                    <i className="fa-solid fa-chevron-right text-[9px] text-[#EBCAC5]/50"></i>
                    <span>Solicitar Cita</span>
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors flex items-center space-x-2">
                    <i className="fa-solid fa-chevron-right text-[9px] text-[#EBCAC5]/50"></i>
                    <span>Preguntas Frecuentes</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMNA 3: Ubicación y Régimen de Atención */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-widest">
                Atención Presencial
              </h4>
              <div className="space-y-3 text-xs text-[#EBCAC5]/80">
                <div className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-location-dot text-[#EBCAC5] mt-0.5 shrink-0"></i>
                  <span>Calle Aviador Zorita 5, 28020 Madrid (Nuevos Ministerios)</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-calendar-check text-[#EBCAC5] mt-0.5 shrink-0"></i>
                  <span>Previa cita concertada</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-clock text-[#EBCAC5] mt-0.5 shrink-0"></i>
                  <span>Atención individualizada bajo cita previa</span>
                </div>
              </div>
            </div>

          </div>

          {/* CIERRE INFERIOR INSTITUCIONAL CON ENLACES LEGALES */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#EBCAC5]/70 gap-4 text-center md:text-left">
            
            <div className="flex items-center space-x-2">
              <p>© {currentYear} Odontología & Cirugía Oral · Dra. Edianny Salazar</p>
            </div>

            <div className="flex items-center space-x-3 text-[10px] uppercase font-semibold tracking-wider text-[#EBCAC5]/60">
              <button 
                onClick={() => openModal('aviso')} 
                className="hover:text-white transition-colors underline decoration-dotted underline-offset-4 cursor-pointer"
              >
                Aviso Legal
              </button>
              <span>·</span>
              <button 
                onClick={() => openModal('privacidad')} 
                className="hover:text-white transition-colors underline decoration-dotted underline-offset-4 cursor-pointer"
              >
                Privacidad & RGPD
              </button>
              <span>·</span>
              <button 
                onClick={() => openModal('cookies')} 
                className="hover:text-white transition-colors underline decoration-dotted underline-offset-4 cursor-pointer"
              >
                Cookies
              </button>
              <span>·</span>
              <span className="text-[#EBCAC5]">Madrid, España</span>
            </div>

          </div>

        </div>
      </footer>

      {/* BANNER FLOTANTE DE AVISO DE COOKIES */}
      <CookieBanner onOpenPolicy={() => openModal('cookies')} />

      {/* MODAL DE TEXTOS LEGALES (Aviso, Privacidad, Cookies) */}
      <LegalModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        type={modalState.type} 
      />
    </>
  );
}