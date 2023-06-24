// estas funciones son de ejemplo

export const filterDirector = (data, option) => {
  const filtro = data.films.filter(pelicula => pelicula.director === option);
  console.log(filtro);
  return filtro;
};

export const anotherExample = () => {
  return 'OMG';
};
