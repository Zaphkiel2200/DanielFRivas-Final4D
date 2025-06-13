document.addEventListener('DOMContentLoaded', function() {
    const introAnimation = document.querySelector('lottie-player');
    const mainContent = document.getElementById('mainContent');
    
    mainContent.style.display = 'none';
    
    introAnimation.addEventListener('complete', () => {
        console.log('Animación completada - iniciando transición');
        
        introAnimation.style.opacity = '0';
        introAnimation.style.transition = 'opacity 1s ease-out';
        
        setTimeout(() => {
            introAnimation.style.display = 'none';
            mainContent.style.display = 'block';
            
            loadCharacters();
            
            showWelcomeMessage();
        }, 1000);
    });
    
    async function loadCharacters() {
        try {
            console.log('Cargando datos de personajes...');
            const response = await fetch('assets/personajes.json');
            
            if (!response.ok) {
                throw new Error(`Error HTTP! estado: ${response.status}`);
            }
            
            const data = await response.json();
            const container = document.getElementById('characters-container');
            
            if (!container) {
                throw new Error('Contenedor de personajes no encontrado');
            }
            
            container.innerHTML = '';
            
            data.personajes.forEach((character, index) => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.style.animationDelay = `${index * 0.1}s`;
                
                card.innerHTML = `
                    <div class="character-bg" style="background-image: url('${character.imagen_fondo}')"></div>
                    <div class="character-img-container">
                        <img src="${character.imagen_tarjeta}" alt="${character.nombre}" class="character-img">
                    </div>
                    <div class="character-info">
                        <h3 class="character-name">${character.nombre}</h3>
                        <p class="character-path">${character.path}</p>
                        <p class="character-desc">${character.descripcion}</p>
                    </div>
                `;
                
                container.appendChild(card);
            });
            
            console.log('Personajes cargados correctamente');
            
        } catch (error) {
            console.error('Error al cargar personajes:', error);
            showErrorMessage(error);
        }
    }
    
    function showWelcomeMessage() {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'welcome-message';
        welcomeMsg.textContent = 'Bienvenido al Club del Tarot';
        
        document.body.appendChild(welcomeMsg);
        
        setTimeout(() => {
            welcomeMsg.style.opacity = '0';
            setTimeout(() => welcomeMsg.remove(), 1000);
        }, 3000);
    }
    
    function showErrorMessage(error) {
        const container = document.getElementById('characters-container') || document.body;
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <p>Error al cargar el contenido</p>
            <small>${error.message}</small>
        `;
        container.appendChild(errorDiv);
    }
});