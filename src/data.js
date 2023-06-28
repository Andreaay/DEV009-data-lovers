export const filterDirector = (listaPeliculas, nombreDirectorSeleccionado) => { // estos dos parametros solo son para la funcion filter
  const filtro = listaPeliculas.filter((peliculaActual) => {
    return peliculaActual.director === nombreDirectorSeleccionado; // compara el nombre del director qwue selecciona el usuario en HTML contra los nombre en data
  });
  return filtro;
};

// sort es ordernar es una funcion pura
export const sortAlphabeticYear = (listaPeliculas,option) => {//lista pelicualas son la 20 pelicuals campo es donde se desea ordenar(selct)
console.log("click2")
  //dirección es el parametro que indica si debe de ser ascendente o desendente 
  const resultSort= listaPeliculas.sort((a,b) => {
    console.log(sort)
    if (option === "nuevas"){
      console.log(option)
      return parseInt(a.release_date)< parseInt(b.release_date)
    } else if (option ==="viejas"){
      console.log(option)
    return parseInt(a.release_date) > parseInt( b.release_date)
    } else if (option === "alfabeto"){
      console.log(option)
      return a.title< b.title
    } else{ 
      console.log(option)
      return a.title> b.title
    }
  
  
  });
  return resultSort;
};

export const ordenarPorNumeros = (listaPeliculas,campoOrdenar,direccion) => {//lista pelicualas son la 20 pelicuals campo es donde se desea ordenar(selct)
  //dirección es el parametro que indica si debe de ser ascendente o desendente 
  return listaPeliculas.sort((a,b) => {
    if (parseInt(a[campoOrdenar])< parseInt(b[campoOrdenar])) {
    return direccion ? -1 : 1;// signo interrogacion con dos puntos es un iif else miniatura se llama ternario
    } else if (parseInt(a[campoOrdenar])>parseInt( b[campoOrdenar])) {
    return direccion ? 1 : -1;
  }
  return 0;
  
  });
};

export const filterPoster = (data) => {
  console.log(data)
  const posters = data.films.filter(pelicula => pelicula.poster !== null && pelicula.poster !== undefined);
  return posters.map(pelicula => pelicula.poster);
};

export const anotherExample = () => {
  return 'OMG';
};






  
  //const tiempo =listaPeliculas.sort((direccion ) =>{

  
  //return tiempo (campoOrdenar )
