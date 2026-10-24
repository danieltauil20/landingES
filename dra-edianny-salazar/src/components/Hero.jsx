import { useState, useEffect, useRef } from 'react';

export function Hero() {
  const treatments = [
    {
      id: 1,
      badge: "Luminosidad",
      subtitle: "Tratamientos diseñados para devolverle el brillo y la armonía a tu sonrisa.",
      image: "https://images.unsplash.com/photo-1670250721717-889b17349fc4?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      badge: "Cuidado Mínimamente Invasivo",
      subtitle: "Protegemos la estructura natural de tus dientes con técnicas de vanguardia.",
      image: "https://images.unsplash.com/photo-1681939282781-341ac4f61996?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      badge: "Estética 100% Discreta",
      subtitle: "Alinea tu sonrisa de forma cómoda, estética e imperceptible.",
      image: "https://images.unsplash.com/photo-1660737217690-15182b43899e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      badge: "Cirugía de Alta Gama",
      subtitle: "Intervenciones quirúrgicas orales precisas bajo protocolos de máxima seguridad.",
      image: "https://images.unsplash.com/photo-1777443726993-8f9c8e96e46e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 5,
      badge: "Armonía y Funcionalidad",
      subtitle: "Devolvemos la función completa y la estética integral a tu boca.",
      image: "https://i.ibb.co/NdnLDGJD/wmremove-transformed7.jpg"
    },
    {
      id: 6,
      badge: "Prevención Activa",
      subtitle: "Diagnóstico temprano y revisiones completas para cuidar tu salud bucodental.",
      image: "https://images.unsplash.com/photo-1690167687106-180b0ea1d813?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 7,
      badge: "Atención Especializada",
      subtitle: "Tecnología de vanguardia y un trato humano cálido y cercano.",
      image: "https://i.ibb.co/SCJtJbK/wmremove-transformed3.jpg"
    },
    {
      id: 8,
      badge: "Cuidado Gingival",
      subtitle: "Tratamientos especializados para mantener tus encías sanas y fuertes.",
      image: "https://i.ibb.co/RGWbc0mt/wmremove-transformed6.jpg"
    },
    {
      id: 9,
      badge: "Planes a Medida",
      subtitle: "Soluciones odontológicas personalizadas adaptadas a tus necesidades.",
      image: "https://i.ibb.co/Gv1nRZ5f/wmremove-transformed5.jpg"
    },
    {
      id: 10,
      badge: "Salud Interna",
      subtitle: "Salvamos piezas dentales dañadas mediante técnicas avanzadas.",
      image: "https://i.ibb.co/vvLFhC3R/wmremove-transformed2.jpg"
    },
    {
      id: 11,
      badge: "Higiene Profunda",
      subtitle: "Limpiezas profesionales y planes periódicos para una boca protegida.",
      image: "https://i.ibb.co/S4tFCPv9/wmremove-transformed.jpg"
    },
    {
      id: 12,
      badge: "Excelencia Médica",
      subtitle: "Comprometidos con la máxima calidad asistencial en cada consulta.",
      image: "https://i.ibb.co/cSq60xNc/wmremove-transformed4.jpg"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % treatments.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [treatments.length, isPaused]);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50;
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        setCurrentSlide((prev) => (prev + 1) % treatments.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + treatments.length) % treatments.length);
      }
    }
    setIsPaused(false);
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#EBCAC5]/30 via-[#EBCAC5]/10 to-transparent"
    >
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#EBCAC5]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#513028]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* COLUMNA IZQUIERDA */}
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
              Queremos cuidar de tu salud bucal como especialistas en Odontología General y Cirugía Oral, combinando tecnología avanzada y tratamientos a tu medida para proteger tu sonrisa a través de una experiencia médica totalmente segura, tranquila y con el máximo confort.
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

          </div>

          {/* COLUMNA DERECHA: Carrusel de 12 fotos */}
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
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                    >
                      <img
                        src={treatment.image}
                        alt={treatment.badge}
                        className={`w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-105 blur-md'
                          }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#513028]/95 via-[#513028]/25 to-transparent" />

                      <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/50 shadow-md flex items-center space-x-1.5 z-20">
                        <i className="fa-solid fa-shield-halved text-[#513028] text-xs"></i>
                        <span className="text-[10px] font-bold text-[#513028] uppercase tracking-wider font-montserrat">
                          {treatment.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white z-20">
                        <div className="drop-shadow-lg max-w-xs">
                          {treatment.subtitle && (
                            <p className="text-xs text-white/90 font-montserrat font-medium leading-relaxed">
                              {treatment.subtitle}
                            </p>
                          )}
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