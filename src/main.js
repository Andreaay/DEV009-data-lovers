import data from './data/ghibli/ghibli.js';
//console.log(data.films[0].director);
let peliculasList = document.querySelector("#peliculas-list");
let selectorTiempo = document.getElementById("tiempo")
let selectorDirectores = document.getElementById("directores")

viejas()

document.getElementById("refrescar").addEventListener('click',limpiarPantalla)
//funciones aqui abajo
function directores() {
  let directorSeleccionado=selectorDirectores.value 
  limpiarPantalla()
  alert("Acabas de seleccionar al director " +directorSeleccionado)
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
}
selectorDirectores.addEventListener('change',directores)

function viejas() {
    //función que despliega todas las películas en home, esta función nos servirá para modificar y hacer las historias de ususario
for (let i = 0; i < 20; i++) {
  let pelicula = data.films[i];
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
function limpiarPantalla() {
  peliculasList.innerHTML = ""; 
}


