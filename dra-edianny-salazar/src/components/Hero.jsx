import { useState, useEffect, useRef } from 'react';

export function Hero() {
  const treatments = [
    {
      id: 1,
      badge: "Tecnología LED Avanzada",
      title: "Blanqueamiento Dental",
      subtitle: "Estética y luminosidad en una sola sesión",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=formatyfit=cropyq=80yw=1000"
    },
    {
      id: 2,
      badge: "Cuidado Mínimamente Invasivo",
      title: "Periodoncia y Salud",
      subtitle: "Prevención y firmeza para tus encías",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=formatyfit=cropyq=80yw=1000"
    },
    {
      id: 3,
      badge: "Estética 100% Discreta",
      title: "Ortodoncia Invisible",
      subtitle: "Alineadores transparentes de alta precisión",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=formatyfit=cropyq=80yw=1000"
    },
    {
      id: 4,
      badge: "Cirugía de Alta Gama",
      title: "Cirugía Oral y Implantes",
      subtitle: "Restauración funcional con acabado natural",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=formatyfit=cropyq=80yw=1000"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Referencias para capturar el gesto Swipe en móviles
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-rotación continua cada 3 segundos
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % treatments.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [treatments.length, isPaused]);

  // Funciones para gestionar el deslizamiento táctil (Swipe)
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50; // Distancia mínima en px para considerar un swipe
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Deslizar hacia la izquierda -> Siguiente foto
        setCurrentSlide((prev) => (prev + 1) % treatments.length);
      } else {
        // Deslizar hacia la derecha -> Foto anterior
        setCurrentSlide((prev) => (prev - 1 + treatments.length) % treatments.length);
      }
    }
    // Reanudar el carrusel tras terminar el gesto
    setIsPaused(false);
  };

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
            
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#513028]/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#513028] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#513028] font-montserrat">
                Atención Odontológica Especializada
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#513028] leading-[1.15] tracking-tight font-serif">
              Tu sonrisa en manos <br className="hidden sm:block" />
              <span className="italic font-normal font-serif text-[#3d241e]">expertas y de confianza</span>
            </h1>

            <p className="text-base sm:text-lg text-[#513028]/85 font-montserrat max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Especialista en Odontología General y Cirugía Oral. Ofrecemos tratamientos personalizados de alta calidad con la más avanzada tecnología en un entorno de máximo confort.
            </p>

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

            <div className="pt-8 border-t border-[#513028]/15 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1.5 mb-1">
                  <i className="fa-solid fa-sparkles text-[#513028]/70 text-xs"></i>
                  <p className="text-2xl sm:text-3xl font-bold text-[#513028] font-serif">100%</p>
                </div>
                <p className="text-[11px] font-semibold text-[#513028]/70 uppercase tracking-wider font-montserrat">Personalizado</p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1.5 mb-1">
                  <i className="fa-solid fa-user-doctor text-[#513028]/70 text-xs"></i>
                  <p className="text-2xl sm:text-3xl font-bold text-[#513028] font-serif">Cirugía</p>
                </div>
                <p className="text-[11px] font-semibold text-[#513028]/70 uppercase tracking-wider font-montserrat">Especializada</p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1.5 mb-1">
                  <i className="fa-solid fa-heart text-[#513028]/70 text-xs"></i>
                  <p className="text-2xl sm:text-3xl font-bold text-[#513028] font-serif">Máximo</p>
                </div>
                <p className="text-[11px] font-semibold text-[#513028]/70 uppercase tracking-wider font-montserrat">Confort y Calidez</p>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Carrusel adaptable a PC (Hover) y Móvil (Touch y Swipe) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#513028]/25 to-[#EBCAC5] rounded-[32px] transform rotate-2 blur-sm" />

              <div 
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="relative rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-[#513028] h-[440px] sm:h-[520px] cursor-pointer group select-none"
              >
                {treatments.map((treatment, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <div 
                      key={treatment.id} 
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img 
                        src={treatment.image} 
                        alt={treatment.title} 
                        className={`w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
                          isActive ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-105 blur-md'
                        }`} 
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#513028]/95 via-[#513028]/25 to-transparent" />

                      {/* Sello de Calidad superior */}
                      <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/50 shadow-md flex items-center space-x-1.5 z-20">
                        <i className="fa-solid fa-shield-halved text-[#513028] text-xs"></i>
                        <span className="text-[10px] font-bold text-[#513028] uppercase tracking-wider font-montserrat">
                          {treatment.badge}
                        </span>
                      </div>

                      {/* Texto Flotante Editorial Minimalista */}
                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white z-20">
                        <div className="drop-shadow-lg">
                          <h4 className="text-lg sm:text-xl font-bold text-white font-serif leading-tight">
                            {treatment.title}
                          </h4>
                          <p className="text-xs text-white/90 font-montserrat mt-1 font-medium max-w-xs leading-relaxed">
                            {treatment.subtitle}
                          </p>
                        </div>

                        <a
                          href="#servicios"
                          className="shrink-0 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white p-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-110 flex items-center justify-center group-hover:bg-[#EBCAC5] group-hover:text-[#513028] group-hover:border-[#EBCAC5]"
                          title="Saber más"
                        >
                          <i className="fa-solid fa-arrow-right text-sm transform group-hover:translate-x-0.5 transition-transform"></i>
                        </a>
                      </div>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}