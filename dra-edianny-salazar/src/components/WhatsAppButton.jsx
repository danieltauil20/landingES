export function WhatsAppButton() {
  // Configura aquí el número (con código de país, ej: 34 para España) y el mensaje por defecto
  const phoneNumber = "34600000000"; // Sustituye por el número real
  const defaultMessage = encodeURIComponent("¡Hola, Dra. Edianny! Me gustaría solicitar información sobre una consulta.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
    >
      {/* Efecto de pulso suave en el fondo */}
      <span className="absolute -z-10 inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>

      {/* Ícono de WhatsApp (FontAwesome) */}
      <i className="fa-brands fa-whatsapp text-3xl"></i>

      {/* Tooltip elegante al pasar el cursor */}
      <span className="absolute right-16 bg-[#513028] text-[#EBCAC5] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-montserrat">
        ¿Hablamos por WhatsApp?
      </span>
    </a>
  );
}