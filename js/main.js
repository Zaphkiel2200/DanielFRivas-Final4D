document.addEventListener('DOMContentLoaded', () => {
    // Simula tiempo de carga 
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        const mainContent = document.querySelector('main');
        
        // Ocultar el loader
        loader.style.opacity = '0';
        
        // Después de la animación de fade out, oculta completamente
        setTimeout(() => {
            loader.style.display = 'none';
            
            // Contenido principal con animación
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in');
        }, 500); // Coincidir  transición del loader
        
    }, 3000); // 3 segundos de animación de carga 
});