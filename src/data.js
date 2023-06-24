export const filterDirector = (listaPeliculas, nombreDirectorSeleccionado) => { // estos dos parametros solo son para la funcion filter
  const filtro = listaPeliculas.filter((peliculaActual) => {
    return peliculaActual.director === nombreDirectorSeleccionado; // compara el nombre del director qwue selecciona el usuario en HTML contra los nombre en data
  });
  return filtro;
};

// sort es ordernar 
export const ordenarPor = (lista,campoOrdenar,direccion) =>{
  


  return("Hola ke ase")
}

export const anotherExample = () => {
  return 'OMG';
};