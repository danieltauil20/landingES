import { useState, useEffect } from 'react';

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setIsAnimating(true));
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setIsOpen(false), 300);
  };

  // Cierre con la tecla Escape y clic en el fondo
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const treatments = [
    "Odontología General",
    "Blanqueamiento Dental",
    "Cirugía Oral",
    "Rehabilitación Oral",
    "Resinas Estéticas",
    "Coronas y Puentes"
  ];

  return (
    <div 
      onClick={handleClose}
      className={`fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs font-montserrat transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md bg-[#FDFBFB] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-out p-8 sm:p-10 ${
          isAnimating ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
        }`}
      >
        
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 text-[#513028]/60 hover:text-[#513028] bg-[#EBCAC5]/30 hover:bg-[#EBCAC5]/60 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        <div className="text-center space-y-5">
          
          {/* Badge superior */}
          <div>
            <span className="inline-block bg-[#513028] text-[#EBCAC5] text-[10px] font-extrabold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-sm animate-pulse">
              Campaña Especial Nuevos Pacientes
            </span>
            <h3 className="text-xs font-semibold text-slate-500 mt-2">
              Dra. Edianny Salazar
            </h3>
          </div>

          {/* Bloque central unificado */}
          <div className="bg-[#513028] text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#EBCAC5]/10 rounded-full blur-xl pointer-events-none" />
            
            <p className="text-lg sm:text-xl font-serif font-extrabold tracking-tight text-[#EBCAC5] leading-snug">
              Diagnóstico Gratis <br />
              <span className="text-white font-normal italic">+ Estudio Digital Incluido</span>
            </p>
          </div>

          {/* Lista en chips ordenados */}
          <div className="flex flex-wrap gap-1.5 justify-center pt-1">
            {treatments.map((item, index) => (
              <span 
                key={index}
                className="bg-[#EBCAC5]/30 text-[#513028] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#EBCAC5]/50"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Urgencia con la fecha en negrita */}
          <p className="text-[11px] text-[#513028] font-bold bg-[#EBCAC5]/20 py-2 px-3 rounded-xl">
            <i className="fa-regular fa-clock mr-1"></i> Promoción válida hasta el 26 de diciembre.
          </p>

          {/* Botón CTA en Verde WhatsApp */}
          <div className="pt-1">
            <a
              href="https://wa.me/34641768115?text=¡Hola!%20Quiero%20aprovechar%20el%20Diagnóstico%20Gratis%20con%20Estudio%20Digital%20Incluido%20(válido%20hasta%20el%2026%20de%20diciembre)."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs tracking-widest uppercase py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group hover:scale-[1.02]"
            >
              <i className="fa-brands fa-whatsapp text-lg transition-transform group-hover:scale-110"></i>
              <span>CONTACTANOS</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}