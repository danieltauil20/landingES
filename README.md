# 🦷 Landing Page Profesional - Dra. Edianny Salazar

Landing page web moderna, funcional y legalmente adaptada para los servicios odontológicos de la **Dra. Edianny Salazar** en Madrid (Zona Nuevos Ministerios). Diseñada con una interfaz elegante, accesible y 100% responsive orientada a la captación de pacientes.

![Vista Previa de la Landing Page](../assets/landingpage.png)

---

## 🚀 Tecnologías Utilizadas

- **React** (con **Vite** para una compilación y Hot Module Replacement ultrarrápidos).
- **Tailwind CSS** (arquitectura Utility-First para estilos optimizados).
- **JavaScript (ES6+)**.
- **FontAwesome & Lucide Icons** (iconografía institucional médica).
- **Git & GitHub** (control de versiones).
- **Vercel** (despliegue continuo y hosting con SSL activo).

---

## 📱 Características Principales

- **Conversión Directa por WhatsApp:** Formulario de solicitud de cita previa que valida los datos del paciente y genera un mensaje estructurado y listo para enviar en un solo clic.
- **Cumplimiento Legal Strict (AEPD / LSSI-CE):**
  - **Aviso Legal & Política de Privacidad:** Modales interactivos integrados con datos profesionales y de consulta pública (evitando la exposición de datos residenciales privados).
  - **Banner de Cookies Persistente:** Retardo de entrada de 3.5s, animaciones fluidas y gestión de preferencias almacenada en `localStorage`.
  - **Casilla de Consentimiento Obligatoria:** Verificación explícita de privacidad en los formularios de contacto.
- **Validación Avanzada de Formularios:** Formateo en tiempo real para números de teléfono españoles (limitado a prefijos 6/7 y 9 dígitos).
- **Experiencia de Usuario (UI/UX):**
  - Paleta de colores corporativa personalizada en tonos cálidos y profesionales.
  - Navegación responsive fluida con menú hamburguesa adaptado a móviles.
  - Secciones estructuradas: Hero, Servicios, Sobre la Doctora, Preguntas Frecuentes (FAQ), Testimonios y Contacto.

---

## 💡 Aprendizajes y Enfoque Técnico

- **Componentización Limpia:** Modularización del código en React (`Hero.jsx`, `AppointmentForm.jsx`, `LegalModal.jsx`, `CookieBanner.jsx`, etc.) para un mantenimiento escalable.
- **Cumplimiento Normativo en Frontend:** Arquitectura pensada para cumplir con la legislación española sobre protección de datos y servicios de la sociedad de la información en el sector sanitario.
- **Deploy Continuo:** Configuración del flujo Git limpiando el entorno local (`.gitignore` optimizado para evitar rastreo de `node_modules`) e integración automática con Vercel.

---

## 🛠️ Instalación y Ejecución Local

Si deseas clonar y ejecutar este proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/danieltauil20/landingES.git]
