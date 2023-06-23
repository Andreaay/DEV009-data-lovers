//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/ghibli/ghibli.js';
//console.log(data.films[0].director);

// HOME


let peliculasList = document.querySelector("#peliculas-list");
for (let i = 0; i < 22; i++) {
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



