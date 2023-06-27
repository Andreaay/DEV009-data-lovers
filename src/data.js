export const filterDirector = (listaPeliculas, nombreDirectorSeleccionado) => { // estos dos parametros solo son para la funcion filter
  const filtro = listaPeliculas.filter((peliculaActual) => {
    return peliculaActual.director === nombreDirectorSeleccionado; // compara el nombre del director qwue selecciona el usuario en HTML contra los nombre en data
  });
  return filtro;
};

// sort es ordernar es una funcion pura
export const ordenarPorNumeros = (listaPeliculas,campoOrdenar,direccion) => {//lista pelicualas son la 20 pelicuals campo es donde se desea ordenar(selct)

  //dirección es el parametro que indica si debe de ser ascendente o desendente 
  return listaPeliculas.sort((a,b) => {
    console.log(typeof a[campoOrdenar])
    if (parseInt(a[campoOrdenar])< parseInt(b[campoOrdenar])) {
    return direccion ? -1 : 1;// signo interrogacion con dos puntos es un iif else miniatura se llama ternario
    } else if (parseInt(a[campoOrdenar])>parseInt( b[campoOrdenar])) {
    return direccion ? 1 : -1;
    }
    return 0;
  
  });
};

export const ordenarPorString = (listaPeliculas,campoOrdenar,direccion) => {//lista pelicualas son la 20 pelicuals campo es donde se desea ordenar(selct)
  //dirección es el parametro que indica si debe de ser ascendente o desendente 
  return listaPeliculas.sort((a,b) => {
    if (a[campoOrdenar]< b[campoOrdenar]) {
    return direccion ? -1 : 1;// signo interrogacion con dos puntos es un iif else miniatura se llama ternario
    } else if (a[campoOrdenar]> b[campoOrdenar]) {
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
