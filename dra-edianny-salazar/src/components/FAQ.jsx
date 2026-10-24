import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿La primera consulta o valoración tiene algún costo?",
      answer: "En la primera visita evaluamos minuciosamente tu salud bucodental, realizamos el diagnóstico inicial y te explicamos el plan de tratamiento detallado sin compromiso para que conozcas todas las opciones adecuadas para ti."
    },
    {
      question: "¿Es dolorosa la extracción de muelas del juicio (cordales) u otra cirugía oral?",
      answer: "No. Todos los procedimientos quirúrgicos se realizan bajo anestesia local de última generación para garantizar que no sientas dolor durante la intervención. Además, te prescribiremos pautas y medicación postoperatoria para una recuperación rápida y confortable."
    },
    {
      question: "¿Qué debo hacer si tengo una urgencia dental o dolor agudo?",
      answer: "Puedes escribirnos o llamarnos directamente por WhatsApp. Atendemos consultas de urgencia para aliviar el dolor, tratar molestias agudas o resolver imprevistos lo antes posible."
    },
    {
      question: "¿Cuánto tiempo dura un tratamiento de blanqueamiento o carillas?",
      answer: "Depende del tratamiento específico: un blanqueamiento clínico suele realizarse en una o dos sesiones rápidas, mientras que el diseño de sonrisa o carillas requiere una valoración digital previa para adaptar el color, forma y armonía según tus facciones."
    },
    {
      question: "¿Cómo puedo solicitar o reagendar mi cita?",
      answer: "Puedes solicitarla a través del formulario de esta página o escribiéndonos directamente a nuestro número de WhatsApp. Nos coordinaremos contigo para elegir el horario que mejor se adapte a tu agenda."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#EBCAC5]/10 relative overflow-hidden">
      {/* Luz sutil de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-[#513028]/15 shadow-sm">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#513028] font-montserrat">
              Resolvemos tus Dudas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#513028] font-serif tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-[#513028]/80 font-montserrat leading-relaxed">
            Respuestas claras a las consultas más habituales de nuestros pacientes.
          </p>
        </div>

        {/* Lista de Acordeones */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#513028]/10 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#513028] font-serif group-hover:text-[#3d241e] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#513028] text-[#EBCAC5] rotate-180' : 'bg-[#EBCAC5]/30 text-[#513028] group-hover:bg-[#EBCAC5]/50'}`}>
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </button>

                {/* Respuesta animada suave */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 border-t border-[#513028]/5 text-xs sm:text-sm text-[#513028]/80 font-montserrat leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloque de contacto directo si le queda alguna duda */}
        <div className="mt-12 text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#513028]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#513028] font-serif">¿Tienes alguna otra consulta?</h4>
            <p className="text-xs text-[#513028]/70 font-montserrat mt-0.5">Te respondemos directamente y al instante por WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/34641768115?text=¡Hola!%20Tengo%20una%20consulta%20antes%20de%20agendar."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#513028] hover:bg-[#3d241e] text-[#EBCAC5] px-5 py-2.5 rounded-full font-montserrat font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-sm"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>Preguntar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}