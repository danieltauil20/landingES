document.addEventListener('DOMContentLoaded', () => {
    // Animación de aparición suave al hacer scroll (Reveal on scroll)
    const reveals = document.querySelectorAll('.service-card, .faq-card, .about-content, .appointment-wrapper');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Añadir clase reveal a los elementos
    reveals.forEach(el => el.classList.add('reveal'));

    // Escuchar evento scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Ejecutar al cargar
});