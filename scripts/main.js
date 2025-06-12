document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado - iniciando carga de personajes");
    
    fetch('assets/personajes.json')
        .then(response => {
            console.log("Respuesta recibida:", response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos cargados:", data);
            const container = document.getElementById('characters-container');
            
            if (!container) {
                console.error("No se encontró el contenedor con ID 'characters-container'");
                return;
            }
            
            data.personajes.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.innerHTML = `
                    <div class="character-bg" style="background-image: url('${character.imagen_fondo}')">
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
        })
        .catch(error => {
            console.error("Error al cargar personajes:", error);
            const container = document.getElementById('characters-container');
            if (container) {
                container.innerHTML = `
                    <div class="error-message">
                        <p>Error al cargar los personajes</p>
                        <small>${error.message}</small>
                    </div>
                `;
            }
        });
});