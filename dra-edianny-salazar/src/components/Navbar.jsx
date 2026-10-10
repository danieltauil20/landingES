import { useState } from "react";
import logoEs from "../assets/es.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#513028]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO CON LA IMAGEN DE ASSETS */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <img 
              src={logoEs} 
              alt="Dra. Edianny Salazar Logo" 
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold font-serif text-[#513028] tracking-wide leading-tight group-hover:opacity-80 transition-opacity">
                Dra. Edianny Salazar
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold font-montserrat uppercase tracking-widest text-[#513028]/70">
                Odontología & Cirugía Oral
              </span>
            </div>
          </a>

          {/* MENÚ DE ESCRITORIO */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-xs font-bold font-montserrat uppercase tracking-wider text-[#513028] hover:text-[#EBCAC5] transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-xs font-bold font-montserrat uppercase tracking-wider text-[#513028] hover:text-[#EBCAC5] transition-colors"
            >
              Tratamientos
            </a>
            <a
              href="#sobre-mi"
              className="text-xs font-bold font-montserrat uppercase tracking-wider text-[#513028] hover:text-[#EBCAC5] transition-colors"
            >
              Sobre la Dra.
            </a>
            <a
              href="#faq"
              className="text-xs font-bold font-montserrat uppercase tracking-wider text-[#513028] hover:text-[#EBCAC5] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contacto"
              className="bg-[#513028] hover:bg-[#3d241e] text-[#EBCAC5] px-5 py-2.5 rounded-full text-xs font-extrabold font-montserrat tracking-wider uppercase transition-all shadow-sm"
            >
              PEDIR CITA
            </a>
          </nav>

          {/* BOTÓN HAMBURGUESA PARA MÓVIL */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-[#513028] hover:bg-[#EBCAC5]/20 focus:outline-none transition-colors"
              aria-label="Menú"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#513028]/10 px-6 py-6 space-y-4 shadow-xl">
          <a
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold font-montserrat uppercase tracking-wider text-[#513028] py-2 border-b border-[#513028]/5"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold font-montserrat uppercase tracking-wider text-[#513028] py-2 border-b border-[#513028]/5"
          >
            Tratamientos
          </a>
          <a
            href="#sobre-mi"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold font-montserrat uppercase tracking-wider text-[#513028] py-2 border-b border-[#513028]/5"
          >
            Sobre la Dra.
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold font-montserrat uppercase tracking-wider text-[#513028] py-2 border-b border-[#513028]/5"
          >
            FAQ
          </a>
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#513028] text-[#EBCAC5] py-3 rounded-xl text-xs font-extrabold font-montserrat tracking-widest uppercase shadow-md"
            >
              PEDIR CITA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}