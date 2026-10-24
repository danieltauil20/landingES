export function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const content = {
    aviso: {
      title: "Aviso Legal",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#513028]/80 font-montserrat leading-relaxed">
          <p>
            <strong>1. Datos Identificativos:</strong> En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que este sitio web es titularidad de:
          </p>
          <ul className="list-disc pl-5 space-y-1 my-2">
            <li><strong>Titular:</strong> Dra. Edianny Del Caribe Salazar Freites</li>
            <li><strong>N.I.E.:</strong> Y9138183K</li>
            <li><strong>Colegiada N.º:</strong> 28018726 (Colegio Oficial de Odontólogos y Estomatólogos de la I Región - COEM)</li>
            <li><strong>Ubicación de Consulta / Atención:</strong> Calle Aviador Zorita 5, 28020 Madrid, España</li>
            <li><strong>Correo Electrónico de Contacto:</strong> ediannysalazarodontologia@gmail.com</li>
          </ul>
          <p>
            <strong>2. Objeto:</strong> El presente sitio web tiene como finalidad facilitar información sobre los servicios odontológicos y de cirugía oral ofrecidos y permitir la solicitud de citas previas a través de formularios y canales de comunicación directa.
          </p>
          <p>
            <strong>3. Propiedad Intelectual:</strong> Todos los contenidos de este sitio web (textos, imágenes, diseño gráfico, marcas y código fuente) son propiedad de su titular o de terceros autorizados, quedando protegidos por la legislación sobre propiedad intelectual e industrial.
          </p>
          <p>
            <strong>4. Exoneración de Responsabilidad Médica:</strong> La información contenida en este sitio web tiene carácter estrictamente divulgativo e informativo. En ningún caso sustituye la valoración, diagnóstico o tratamiento presencial emitido por la profesional médica en consulta.
          </p>
        </div>
      )
    },
    privacidad: {
      title: "Política de Privacidad y Protección de Datos",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#513028]/80 font-montserrat leading-relaxed">
          <p>
            <strong>1. Responsable del Tratamiento:</strong> De conformidad con el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD), se informa que los datos personales facilitados serán tratados por:
          </p>
          <ul className="list-disc pl-5 space-y-1 my-2">
            <li><strong>Responsable:</strong> Dra. Edianny Del Caribe Salazar Freites (N.I.E. Y9138183K)</li>
            <li><strong>Atención Presencial:</strong> Consulta Odontológica · Calle Aviador Zorita 5, 28020 Madrid</li>
            <li><strong>Contacto de Protección de Datos:</strong> ediannysalazarodontologia@gmail.com</li>
          </ul>
          <p>
            <strong>2. Finalidad del Tratamiento:</strong> La recogida y tratamiento de los datos personales (nombre, teléfono, especialidad de interés y preferencia de horario) tiene como única finalidad la gestión de la solicitud de cita previa odontológica, la resolución de consultas y la coordinación de la atención sanitaria presencial.
          </p>
          <p>
            <strong>3. Legitimación:</strong> La base legal para el tratamiento de tus datos es el consentimiento explícito manifestado al marcar la casilla de aceptación de la política de privacidad y enviar el formulario de contacto.
          </p>
          <p>
            <strong>4. Conservación y Cesión de Datos:</strong> Los datos se conservarán durante el tiempo estrictamente necesario para la atención sanitaria y el cumplimiento de las obligaciones legales aplicables. No se cederán datos a terceros salvo obligación legal.
          </p>
          <p>
            <strong>5. Derechos del Usuario:</strong> Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad mediante escrito dirigido al correo electrónico <strong>ediannysalazarodontologia@gmail.com</strong>, adjuntando copia de tu documento de identidad.
          </p>
        </div>
      )
    },
    cookies: {
      title: "Política de Cookies",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#513028]/80 font-montserrat leading-relaxed">
          <p>
            <strong>¿Qué son las cookies?:</strong> Una cookie es un pequeño archivo de texto que se almacena en tu navegador cuando visitas un sitio web para garantizar el correcto funcionamiento de la navegación y recordar preferencias técnicas.
          </p>
          <p>
            <strong>Cookies Utilizadas:</strong> Este sitio web utiliza únicamente cookies de carácter técnico y estrictamente necesarias para posibilitar la navegación segura y la correcta interacción con el formulario de solicitud de citas. No se emplean cookies de rastreo publicitario de terceros.
          </p>
          <p>
            <strong>Desactivación de Cookies:</strong> Puedes restringir, bloquear o eliminar las cookies instaladas en tu dispositivo configurando las opciones del navegador que utilices (Chrome, Firefox, Safari, Edge, etc.).
          </p>
        </div>
      )
    }
  };

  const currentContent = content[type] || content.aviso;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white text-[#513028] w-full max-w-2xl max-h-[85vh] rounded-3xl shadow-2xl border border-[#EBCAC5]/30 flex flex-col overflow-hidden">
        
        {/* Cabecera del Modal */}
        <div className="px-6 py-5 border-b border-[#513028]/10 flex items-center justify-between bg-[#EBCAC5]/10">
          <h3 className="text-lg sm:text-xl font-bold font-serif text-[#513028]">
            {currentContent.title}
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#513028]/10 hover:bg-[#513028] hover:text-[#EBCAC5] transition-all flex items-center justify-center text-sm cursor-pointer"
            aria-label="Cerrar modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Cuerpo del texto con scroll */}
        <div className="p-6 overflow-y-auto space-y-4">
          {currentContent.body}
        </div>

        {/* Pie del Modal */}
        <div className="px-6 py-4 border-t border-[#513028]/10 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#513028] hover:bg-[#3d241e] text-[#EBCAC5] px-6 py-2.5 rounded-xl font-montserrat font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
}