import data from './data/ghibli/ghibli.js';
import { filterDirector } from "./data.js"; 
const todasLasPeliculas = data.films;// la constante donde guardamos los 20 objetos de las peliculas
const peliculasList = document.querySelector("#peliculas-list");//Home
const selectorDirectores = document.getElementById("directores")
function mostrarPeliculas(parametro) {//parametro hace que sea reutilizable
    peliculasList.innerHTML = "";
    console.log(parametro);
    for (let i = 0; i < parametro.length; i++) {
        let pelicula = parametro[i];
        let contenidoHTML = `
    <div class="pelicula">
    <section id= "section3" >
    <img src="${pelicula.poster}" alt="${pelicula.title} poster" />
    </section>
    <h3>${pelicula.title}</h3>
    <section id= "section2" >
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Producer:</strong> ${pelicula.producer}</p>
        <p><strong>Release date:</strong> ${pelicula.release_date}</p>
        <p><strong>RT SCORE:</strong> ${pelicula.rt_score}</p>
        <p><strong>Descripción:</strong> ${pelicula.description}</p>
        </section>
    </div>
    `;
        let peliculaItem = document.createElement('li');
        peliculaItem.innerHTML = contenidoHTML;
        peliculasList.appendChild(peliculaItem);
    }
}
mostrarPeliculas(todasLasPeliculas); // este es el carga al inciar la pagina, muestra las 20
selectorDirectores.addEventListener('change', function () {//chenge lee si hay un cambio en el select
    const directorEscogido = selectorDirectores.value//Se guarda el valor del select
if (directorEscogido==="directores") {
    mostrarPeliculas(todasLasPeliculas);
} 
else {
mostrarPeliculas(filterDirector(todasLasPeliculas,directorEscogido));
}

})