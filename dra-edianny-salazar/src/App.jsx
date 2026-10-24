import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AppointmentForm } from './components/AppointmentForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans relative">
      {/* Navegación Principal */}
      <Navbar />

      {/* Presentación Visual & Impacto */}
      <Hero />

      {/* Catálogo de Tratamientos (9 Especialidades) */}
      <Services />

      {/* Formulario de Cita (Teléfono 6/7, 9 dígitos, Ubicación Nuevos Ministerios) */}
      <AppointmentForm />

      {/* Preguntas Frecuentes */}
      <FAQ />

      {/* Pie de Página */}
      <Footer />

      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/34641768115?text=¡Hola!%20Deseo%20más%20información%20sobre%20una%20cita."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-[999999] flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M18.403 5.592A8.942 8.942 0 0012.008 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.125 1.2 4.484L3 21l4.643-1.218a8.933 8.933 0 004.363 1.137h.004c4.947 0 8.975-4.027 8.977-8.977a8.905 8.905 0 00-2.584-6.35zm-6.395 13.88h-.003a7.447 7.447 0 01-3.798-1.041l-.272-.162-2.823.74.753-2.753-.177-.282a7.466 7.466 0 01-1.144-3.997c.001-4.12 3.353-7.472 7.475-7.472 1.996 0 3.872.778 5.283 2.19 1.41 1.411 2.186 3.288 2.185 5.286-.001 4.121-3.353 7.471-7.476 7.471zm4.102-5.602c-.225-.113-1.332-.657-1.539-.733-.206-.075-.356-.113-.506.113-.15.225-.58.733-.711.883-.131.15-.262.169-.487.056-.225-.113-.95-.35-1.81-1.118-.67-.599-1.122-1.338-1.253-1.563-.131-.225-.014-.347.098-.459.101-.101.225-.262.338-.394.112-.131.15-.262.225-.375.075-.15.038-.281-.019-.394-.056-.113-.506-1.218-.693-1.669-.183-.439-.368-.379-.506-.386-.131-.007-.281-.009-.431-.009-.15 0-.394.056-.6.281-.206.225-.788.77-.788 1.876 0 1.106.806 2.174.919 2.325.112.15 1.586 2.421 3.843 3.395.537.232.956.37 1.283.474.54.172 1.03.148 1.418.09.433-.065 1.332-.544 1.52-1.069.187-.525.187-.975.131-1.069-.056-.094-.206-.15-.431-.262z" 
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
}