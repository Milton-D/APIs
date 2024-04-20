function getCharacters(done) {
    const results = fetch("https://swapi.dev/api/vehicles");

    results
    .then(response => response.json())  
    .then(data => {
        done(data.results);
    });
}

getCharacters(data => { 
    if (data) { 
        data.forEach(vehicle => {
            const article = document.createRange().createContextualFragment(`
                <article>
                    <div class="image-container">
                        <img src="https://starwars-visualguide.com/assets/img/vehicles/${vehicle.url.split("/").slice(-2)[0]}.jpg" alt="Vehicle">
                    </div>
                    <h2>${vehicle.name}</h2>
                    <p><strong>Modelo:</strong> ${vehicle.model}</p>
                    <p><strong>Clase:</strong> ${vehicle.vehicle_class}</p>
                    <p><strong>Fabricante:</strong> ${vehicle.manufacturer}</p>
                    <p><strong>Longitud:</strong> ${vehicle.length} m</p>
                    <p><strong>Costo en créditos:</strong> ${vehicle.cost_in_credits}</p>
                    <p><strong>Personal necesario:</strong> ${vehicle.crew}</p>
                    <p><strong>Pasajeros:</strong> ${vehicle.passengers}</p>
                    <p><strong>Velocidad máxima (en atmósfera):</strong> ${vehicle.max_atmosphering_speed}</p>
                    <p><strong>Capacidad de carga:</strong> ${vehicle.cargo_capacity} kg</p>
                    <p><strong>Consumibles:</strong> ${vehicle.consumables}</p>
                    <p><strong>Creado:</strong> ${vehicle.created}</p>
                    <p><strong>Editado:</strong> ${vehicle.edited}</p>
                </article>
            `);

            const main = document.querySelector("main");
            main.append(article);
        });
    }
});