import data from './data/ghibli/ghibli.js';
//console.log(data.films[0].director);
let listaPeliculasJs=document.querySelector("#lista")
for (let i = 0; i < 20; i++) {
    let texto = document.createTextNode("Director: "+data.films[i].director)
    let nuevoLiFor = document.createElement('li'); 
    nuevoLiFor.appendChild(texto)
    listaPeliculasJs.appendChild(nuevoLiFor)
}

