import data from './data/ghibli/ghibli.js';
import { filterDirector, sortAlphabeticYear, ordenarPorNumeros, filterPoster, averageCharacters,averageCharactersAllFilms } from "./data.js";


const todasLasPeliculas = data.films;// la constante donde guardamos los 20 objetos de las peliculas
const botonHome = document.getElementById("home-button")
const botonPersonajes = document.getElementById("personajes-button")
const peliculasList = document.querySelector("#peliculas-list");//Home OL
const selectorDirectores = document.getElementById("directores")
const selectorTiempo = document.getElementById("tiempo")
const selectorCalificacion = document.getElementById("calificaciones")//estaba mal el nombre del id
const flyersButton = document.getElementById("flyers-Button")

function mostrarPeliculas(parametro) {//parametro hace que sea reutilizable
  peliculasList.innerHTML = "";//Limpiador
  for (let i = 0; i < parametro.length; i++) { //Intera la información de todas las peliculas
    const pelicula = parametro[i]; //{$} se utiliza para insertar expresiones dentro de una cadena de texto
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
// Event Listeners
botonHome.addEventListener('click', function () {//change lee si hay un click en home
  mostrarPeliculas(todasLasPeliculas);
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
  const selectorEscogido = selectorTiempo.value
  if (selectorEscogido === "all") { //Igualdad estricta
    mostrarPeliculas(todasLasPeliculas);//tombola
  } else {
    mostrarPeliculas(sortAlphabeticYear(todasLasPeliculas, selectorEscogido))//clasifica
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
botonPersonajes.addEventListener('click', function () {//change lee si hay un click en home
  mostrarPersonaje(todasLasPeliculas);
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

mostrarPeliculas(todasLasPeliculas); // este es el carga al inciar la pagina, muestra las 20

function mostrarPersonaje(parametro) {
  peliculasList.innerHTML = "";
  let totalCharacters = 0;
  for (let i = 0; i < parametro.length; i++) {
        
    totalCharacters = totalCharacters + averageCharacters(parametro[i])
    const pelicula = parametro[i];
    const contenidoHTML = `
    <div class="mostrarPersonaje">
    <section id= "section3" >
    <h3><strong>Title:</strong> ${pelicula.title}</h3>
    <img src="${pelicula.people[0].img}" alt="${pelicula.people[0].name} poster" />
    </section>
    <h3>${pelicula.people[0].name}</h3>
    <section id= "section2" >
        <p><strong>Age:</strong> ${pelicula.people[0].age}</p>
        <p><strong>Gender:</strong> ${pelicula.people[0].gender}</p>
        <p><strong>Species:</strong> ${pelicula.people[0].specie}</p>
        <p><strong>Number of characters in the movie:</strong> ${averageCharacters(parametro[i])}</p>
        <p><strong>Overall average of characters in Studio Ghibli movies: ${averageCharactersAllFilms(parametro)}</p>
        </section> 
    </div>
    `;
    const peliculaItem = document.createElement('ul'); //se utiliza ul para poder identificarlo en CSS
    peliculaItem.classList.add('mainCharacters');
    peliculaItem.innerHTML = contenidoHTML;
    peliculasList.appendChild(peliculaItem);
  }
}
