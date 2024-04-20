/*ZORROS FUNCIONES*/
const botonNuevoZorro = document.getElementById('boton-nuevo-zorro');
const imagenZorro = document.getElementById('imagen-zorro');

botonNuevoZorro.addEventListener('click', obtenerNuevaImagen);

function obtenerNuevaImagen() {
    fetch('https://randomfox.ca/floof')
        .then(respuesta => respuesta.json())
        .then(datos => {
            imagenZorro.src = datos.image;
        })
        .catch(error => console.error(error));
}

/*rick and morty*/
function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });

}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
    <article>
        <div class="image-container">
            <img src="${personaje.image}" alt="personaje">
        </div>
        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
    </article>
      `);
        const main = document.querySelector("main");

        main.append(article);
    })
})