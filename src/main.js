import data from './data/ghibli/ghibli.js';
import { filterDirector } from "./data.js";
import { ordenarPor } from "./data.js";
import { filterPoster } from './data.js';

const botonHome = document.getElementById("home-button")
const botonPersonajes = document.getElementById("personajes-button")
const todasLasPeliculas = data.films;// la constante donde guardamos los 20 objetos de las peliculas
const peliculasList = document.querySelector("#peliculas-list");//Home
const selectorDirectores = document.getElementById("directores")
const selectorTiempo = document.getElementById("tiempo")
const selectorCalificacion = document.getElementById("calificaciones")
const selectorPoster = document.getElementById("posters")
const todosLosPosters = data.poster;

mostrarPeliculas(todasLasPeliculas); // este es el carga al inciar la pagina, muestra las 20

function mostrarPeliculas(parametro) {//parametro hace que sea reutilizable
    peliculasList.innerHTML = "";
    
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

function mostrarPersonaje(parametro) {//parametro hace que sea reutilizable
    peliculasList.innerHTML = "";
    
    for (let i = 0; i < parametro.length; i++) {
        let pelicula = parametro[i];
        let contenidoHTML = `
    <div class="pelicula">
    <section id= "section3" >
    <img src="${pelicula.people[0].img}" alt="${pelicula.people[0].name} poster" />
    </section>
    <h3>${pelicula.people[0].name}</h3>
    <section id= "section2" >
        <p><strong>Age:</strong> ${pelicula.people[0].age}</p>
        <p><strong>Gender:</strong> ${pelicula.people[0].gender}</p>
        <p><strong>Species:</strong> ${pelicula.people[0].specie}</p>
        </section>
    </div>
    `;
        let peliculaItem = document.createElement('li');
        peliculaItem.innerHTML = contenidoHTML;
        peliculasList.appendChild(peliculaItem);
    }
}

// Even Listeners

botonHome.addEventListener('click', function () {//chenge lee si hay unclcik en home
    mostrarPeliculas(todasLasPeliculas);
})  

botonPersonajes.addEventListener('click', function () {//chenge lee si hay unclcik en home
    mostrarPersonaje(todasLasPeliculas);
})  

selectorDirectores.addEventListener('change', function () {//chenge lee si hay un cambio en el select
selectorDirectores.addEventListener('change', function () {//change lee si hay un cambio en el select
    const directorEscogido = selectorDirectores.value//Se guarda el valor del select
    if (directorEscogido === "directores") {
        mostrarPeliculas(todasLasPeliculas);
    }
    else {
        mostrarPeliculas(filterDirector(todasLasPeliculas, directorEscogido));
    }
  })
})


selectorTiempo.addEventListener('change', function () {
    const tiempoEscogido = selectorTiempo.value
    if (tiempoEscogido == "viejas") {
        mostrarPeliculas((ordenarPor(todasLasPeliculas, "release_date",true)))//Sirve para indicarle asl sort si es ascendente en true
    } else if (tiempoEscogido == "nuevas") {
        mostrarPeliculas(( ordenarPor(todasLasPeliculas,"release_date",false)))//Desendente en false false slase false false false false 
    } else if (tiempoEscogido == "alfabeto") {
        mostrarPeliculas(( ordenarPor(todasLasPeliculas,"title",true)))
    } else {
        mostrarPeliculas(( ordenarPor(todasLasPeliculas,"title",false)))
    }
})
console.log(todasLasPeliculas)
selectorCalificacion.addEventListener('change', function () {
    const calificacionEscogido = selectorCalificacion.value
    if (calificacionEscogido == "mejor") {
        mostrarPeliculas((ordenarPor(todasLasPeliculas, "rt_score",false)))//Sirve para indicarle asl sort si es ascendente en true
    } else {
        mostrarPeliculas(( ordenarPor(todasLasPeliculas,"rt_score",true)))
    }
})
//función para botón de posters 
selectorPoster.addEventListener('click', function () {
  const posters = filterPoster(data);
  peliculasList.innerHTML = ""; // Limpiar la lista antes de mostrar los posters
  for (let i = 0; i < posters.length; i++) {
    const img = document.createElement('img');
    img.src = posters[i];
    peliculasList.appendChild(img);
  }
});



// even listener que lea els elector de tiempo
//constante donde guardar el valor
// if selección viejo ordena por viejo
//if selección nuevo ordena por nuevo