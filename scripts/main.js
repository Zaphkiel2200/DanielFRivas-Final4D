document.addEventListener('DOMContentLoaded', function() {
    const introAnimation = document.getElementById('introAnimation');
    const mainContent = document.getElementById('mainContent');
    
    introAnimation.addEventListener('complete', () => {
        introAnimation.style.opacity = '0';
        
        setTimeout(() => {
            introAnimation.style.display = 'none';
            mainContent.style.display = 'block';
            
            loadCharacters();
        }, 1000);
    });

    async function loadCharacters() {
        try {
            const response = await fetch('/assets/personajes.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            const container = document.getElementById('characters-container');
            
            if (!container) {
                console.error("No se encontró el contenedor de personajes");
                return;
            }
            
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
            
        } catch (error) {
            console.error("Error al cargar los personajes:", error);
            
            const container = document.getElementById('characters-container');
            if (container) {
                container.innerHTML = `
                    <div class="error-message">
                        <p>Error al cargar los personajes</p>
                        <small>${error.message}</small>
                    </div>
                `;
            }
        }
    }
    
    // 3. Mostrar mensaje inicial (similar al de tu amiga)
    const initialMessage = document.createElement('div');
    initialMessage.textContent = "Desplázate para explorar";
    initialMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        color: #b8860b;
        opacity: 0;
        animation: messageFade 2s ease-in-out forwards;
        z-index: 1001;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    `;
    
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            @keyframes messageFade {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                70% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                85% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.95) translateY(-20px); }
            }
        </style>
    `);
    
    document.body.appendChild(initialMessage);
    setTimeout(() => initialMessage.remove(), 2000);
});