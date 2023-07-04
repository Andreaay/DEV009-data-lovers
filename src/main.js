import data from './data/ghibli/ghibli.js';
import { filterDirector, sortAlphabeticYear, ordenarPorNumeros, filterPoster } from "./data.js";
const todasLasPeliculas = data.films;// la constante donde guardamos los 20 objetos de las peliculas
const botonHome = document.getElementById("home-button")
const botonPersonajes = document.getElementById("personajes-button")
const peliculasList = document.querySelector("#peliculas-list");//Home
const selectorDirectores = document.getElementById("directores")
const selectorTiempo = document.getElementById("tiempo")
const selectorCalificacion = document.getElementById("calificaciones")//estaba mal el nombre del id
const flyersButton = document.getElementById("flyers-Button")
function mostrarPeliculas(parametro) {//parametro hace que sea reutilizable
  peliculasList.innerHTML = "";//Limpiador
  for (let i = 0; i < parametro.length; i++) {
    const pelicula = parametro[i];
    const contenidoHTML = `
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
    const peliculaItem = document.createElement('li');
    peliculaItem.innerHTML = contenidoHTML;
    peliculasList.appendChild(peliculaItem);//Esta parte mueve el li dentro del ol creado en HTML
  }
}
mostrarPeliculas(todasLasPeliculas); // este es el carga al inciar la pagina, muestra las 20
function mostrarPersonaje(parametro) {
  peliculasList.innerHTML = "";
  for (let i = 0; i < parametro.length; i++) {
    const pelicula = parametro[i];
    const contenidoHTML = `
    <div class="mostrarPersonaje">
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
    const peliculaItem = document.createElement('ul'); //se utiliza ul para poder identificarlo en CSS
    peliculaItem.innerHTML = contenidoHTML;
    peliculasList.appendChild(peliculaItem);
  }
}
// Event Listeners
botonHome.addEventListener('click', function () {//change lee si hay un clcik en home
  mostrarPeliculas(todasLasPeliculas);
})
botonPersonajes.addEventListener('click', function () {//change lee si hay un clcik en home
  mostrarPersonaje(todasLasPeliculas);
})
selectorDirectores.addEventListener('change', function () {//change lee si hay un cambio en el select
  const directorEscogido = selectorDirectores.value//Se guarda el valor del select
  if (directorEscogido === "directores") {
    mostrarPeliculas(todasLasPeliculas);
  }
  else {
    mostrarPeliculas(filterDirector(todasLasPeliculas, directorEscogido));
  }
})
selectorTiempo.addEventListener('change', function () {
  console.log("click")
  const selectorEscogido = selectorTiempo.value
  if (selectorEscogido === "all") {
    mostrarPeliculas(todasLasPeliculas);
  } else {
    mostrarPeliculas(sortAlphabeticYear(todasLasPeliculas, selectorEscogido))
  }
})
selectorCalificacion.addEventListener('change', function () {
  const calificacionEscogido = selectorCalificacion.value
  if (calificacionEscogido === "mejor") {
    mostrarPeliculas((ordenarPorNumeros(todasLasPeliculas, "rt_score", false)))//Sirve para indicarle asl sort si es ascendente en true
  } else {
    mostrarPeliculas((ordenarPorNumeros(todasLasPeliculas, "rt_score", true)))
  }
})
//función para botón de posters
flyersButton.addEventListener('click', function () {
  const posters = filterPoster(data);
  peliculasList.innerHTML = ""; // Limpiar la lista antes de mostrar los posters
  for (let i = 0; i < posters.length; i++) {
    const img = document.createElement('img');
    img.src = posters[i];
    img.classList.add('flyer')
    peliculasList.appendChild(img);
  }
});
