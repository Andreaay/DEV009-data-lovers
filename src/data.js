export const filterDirector = (listaPeliculas, nombreDirectorSeleccionado) => { // estos dos parametros solo son para la funcion filter
  const filtro = listaPeliculas.filter((peliculaActual) => {
    return peliculaActual.director === nombreDirectorSeleccionado; // compara el nombre del director qwue selecciona el usuario en HTML contra los nombre en data
  });
  return filtro;
};
// sort es ordernar es una funcion pura
export const sortAlphabeticYear = (listaPeliculas,option) => {//lista pelicualas son la 20 pelicuals campo es donde se desea ordenar(selct)
  //dirección es el parametro que indica si debe de ser ascendente o desendente
  const resultSort= listaPeliculas.sort((a,b) => {
    if (option === "nuevas"){
      if (parseInt(a.release_date) > parseInt(b.release_date)){
        return -1;
      }
      if (parseInt(a.release_date) < parseInt(b.release_date)){
        return 1;
      }
      return 0;
    } else if (option ==="viejas"){
      if (parseInt(a.release_date) > parseInt(b.release_date)){
        return 1;
      }
      if (parseInt(a.release_date) < parseInt(b.release_date)){
        return -1;
      }
      return 0;
    } else if (option === "alfabeto"){
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    }else if (option === "alfabetoReversa"){
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    }
  });
  console.log(resultSort)
  return resultSort;
};
export const ordenarPorNumeros = (listaPeliculas,campoOrdenar,direccion) => {//lista pelicualas son la 20 pelicuals campo es donde se desea ordenar(selct)
  //dirección es el parametro que indica si debe de ser ascendente o desendente
  return listaPeliculas.sort((a,b) => {
    if (parseInt(a[campoOrdenar])< parseInt(b[campoOrdenar])) {// Tombola
      //miniatura se llama ternario
      //si a es menor que b, coloca a antes que b
      return direccion ? -1 : 1; //Valor si verdadero
    } else if (parseInt(a[campoOrdenar])>parseInt( b[campoOrdenar])) {
      return direccion ? 1 : -1;//Valor si falso // signo interrogacion con dos puntos es un if else 
    }
    return 0;
  });
};
export const filterPoster = (data) => {
  const posters = data.films.filter(pelicula => pelicula.poster !== null && pelicula.poster !== undefined);
  return posters.map(pelicula => pelicula.poster);
};

  
export const averageCharacters = (film) => {
  return (film.people.length);
}
export const averageCharactersAllFilms = (films) => {
  let totalPersonajes=0;
  for (let i = 0; i < films.length; i++) {
    totalPersonajes = totalPersonajes + films[i].people.length
  }
  return (totalPersonajes/films.length);
}

