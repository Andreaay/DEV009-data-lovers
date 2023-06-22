//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/ghibli/ghibli.js';
//console.log(data.films[0].director);

// HOME
let title1=document.querySelector("#title")
for (let i = 0; i < 20; i++) {
    let texto1 = document.createTextNode("Título: "+data.films[i].title)
    let titulo = document.createElement('li');
    titulo.appendChild(texto1)
    title1.appendChild(titulo)
}
let description1=document.querySelector("#description")
for (let i = 0; i < 20; i++) {
    let texto2 = document.createTextNode("descripción: "+data.films[i].description)
    let descripcion = document.createElement('li');
    descripcion.appendChild(texto2)
    description1.appendChild(descripcion)
}
let director1=document.querySelector("#director")
for (let i = 0; i < 20; i++) {
    let texto3 = document.createTextNode("Pelicula: "+data.films[i].director)
    let directo = document.createElement('li');
    directo.appendChild(texto3)
    director1.appendChild(directo)
}
let producer1=document.querySelector("#producer")
for (let i = 0; i < 20; i++) {
    let texto4 = document.createTextNode("Pelicula: "+data.films[i].producer)
    let productor = document.createElement('li');
    productor.appendChild(texto4)
    producer1.appendChild(productor)
}
let poster1=document.querySelector("#poster")
for (let i = 0; i < 20; i++) {
    let texto5 = document.createTextNode("Pelicula: "+data.films[i].poster)
    let post = document.createElement('li');
    post.appendChild(texto5)
    poster1.appendChild(post)
}
let realasedate1=document.querySelector("#release_date")
for (let i = 0; i < 20; i++) {
    let texto6 = document.createTextNode("Pelicula: "+data.films[i].release_date)
    let fecha = document.createElement('li');
    fecha.appendChild(texto6)
    realasedate1.appendChild(fecha)
}
let rtscore1=document.querySelector("#rt_score")
for (let i = 0; i < 20; i++) {
    let texto7 = document.createTextNode("Pelicula: "+data.films[i].rt_score)
    let escore = document.createElement('li');
    escore.appendChild(texto7)
    rtscore1.appendChild(escore)
}

// parte de hostoria de usuario para directores y sus obras
//let listaPeliculasJs=document.querySelector("#lista")
//for (let i = 0; i < 20; i++) {
  //  let texto = document.createTextNode("Director: "+data.films[i].director)
    //let nuevoLiFor = document.createElement('li');
    //nuevoLiFor.appendChild(texto)
    //listaPeliculasJs.appendChild(nuevoLiFor)
//}

