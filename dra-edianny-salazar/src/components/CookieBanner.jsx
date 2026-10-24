import { useState, useEffect } from 'react';

export function CookieBanner({ onOpenPolicy }) {
  // Inicializamos el estado directamente leyendo de localStorage (sin cascading renders)
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookie_consent');
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!shouldRender) return;

    // Retraso suave de 3.5 segundos para la animación de entrada
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, [shouldRender]);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', 'accepted_all');
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie_consent', 'accepted_necessary');
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[999999] bg-white/95 backdrop-blur-md text-[#513028] p-5 rounded-3xl shadow-2xl border border-[#EBCAC5]/40 font-montserrat transition-all duration-700 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-10 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#513028]/10 flex items-center justify-center shrink-0 shadow-inner">
            <i className="fa-solid fa-cookie-bite text-[#513028] text-sm animate-bounce" style={{ animationDuration: '3s' }}></i>
          </div>
          <h4 className="text-sm font-bold font-serif text-[#513028]">
            Uso de Cookies y Privacidad
          </h4>
        </div>

        <p className="text-xs text-[#513028]/85 leading-relaxed font-normal">
          Utilizamos cookies propias técnicas para garantizar el correcto funcionamiento del sitio web y gestionar las solicitudes de cita previa de forma segura.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto flex-1 bg-[#513028] hover:bg-[#3d241e] text-[#EBCAC5] px-4 py-2.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-center"
          >
            Aceptar todas
          </button>

          <button
            onClick={handleAcceptNecessary}
            className="w-full sm:w-auto flex-1 bg-white/80 hover:bg-white text-[#513028] border border-[#513028]/20 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-sm cursor-pointer text-center"
          >
            Solo necesarias
          </button>
        </div>

        <div className="text-center pt-1">
          <button
            onClick={onOpenPolicy}
            className="text-[10px] text-[#513028]/70 hover:text-[#513028] underline decoration-dotted underline-offset-2 transition-colors cursor-pointer"
          >
            Más información en nuestra Política de Cookies
          </button>
        </div>
      </div>
    </div>
  );
}   