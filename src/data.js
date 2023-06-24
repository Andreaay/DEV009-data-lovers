// estas funciones son de ejemplo

export const filterDirector = (listaPeliculas, nombreDirectorSeleccionado) => { 
  const filtro = listaPeliculas.filter((peliculaActual) => {
    return peliculaActual.director === nombreDirectorSeleccionado; // compara el nombre del director qwue selecciona el usuario en HTML contra los nombre en data
  });
  return filtro;
};

export const anotherExample = () => {
  return 'OMG';
};