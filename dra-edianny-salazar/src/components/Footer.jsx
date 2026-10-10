export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#513028] text-[#EBCAC5] relative overflow-hidden pt-16 pb-12 border-t border-[#EBCAC5]/20">
      {/* Luz sutil de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#EBCAC5]/15">
          
          {/* COLUMNA 1: Marca & Descripción */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold font-serif text-white tracking-wide">
              Dra. Edianny Salazar
            </h3>
            <p className="text-xs sm:text-sm text-[#EBCAC5]/80 font-montserrat leading-relaxed max-w-sm">
              Odontología integral y cirugía oral especializada. Combinamos rigor profesional, tecnología dental de vanguardia y un trato humano excepcional.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://wa.me/34641768115"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#EBCAC5]/10 hover:bg-[#EBCAC5] hover:text-[#513028] transition-all duration-300 flex items-center justify-center text-sm"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/edianny-salazar-3b9a751b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#EBCAC5]/10 hover:bg-[#EBCAC5] hover:text-[#513028] transition-all duration-300 flex items-center justify-center text-sm"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: Enlaces Rápidos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-montserrat">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-montserrat text-[#EBCAC5]/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Tratamientos</a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre la Dra. Edianny</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Solicitar Cita</a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Tratamientos Destacados */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-montserrat">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs font-montserrat text-[#EBCAC5]/80">
              <li>Cirugía Oral & Terceros Molares</li>
              <li>Rehabilitación Oral & Prótesis</li>
              <li>Estética Dental & Blanqueamiento</li>
              <li>Odontología General & Preventiva</li>
            </ul>
          </div>

        </div>

        {/* Cierre inferior: Copyright y Leyes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-montserrat text-[#EBCAC5]/60 gap-4 text-center sm:text-left">
          <p>© {currentYear} Dra. Edianny Salazar. Todos los derechos reservados.</p>
          <p className="tracking-wider">Madrid, España</p>
        </div>
      </div>
    </footer>
  );
}