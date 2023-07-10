import { filterPoster } from '../src/data.js'; 
import { averageCharacters } from '../src/data.js';
import { averageCharactersAllFilms } from '../src/data.js';

describe('Test de filterPoster', () => {
  it('Test para filtrar sólo el poster de cada película', () => {
    const peliculas = {films:[
      {
        "title": "Castle in the Sky",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      },
      {
        "title": "Kiki's Delivery Service",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
      },
      { 
        "title": "My Neighbor Totoro",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      }
    ]}
    const resultadoEsperado= [
      'https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg',
      'https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg',
      'https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg',
    ];
    const posters = filterPoster(peliculas)
    expect(posters).toEqual(resultadoEsperado)
    expect(posters[0]).toBe('https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg')
    expect(posters[0]).not.toBe('https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg')
  });
});

test('Test de averageCharacters que retorna la cantidad correcta de personajes por película', () => {
  const film = {
    people: ['"name": "Pazu"', '"name": "Satsuki Kusakabe"', '"name": "Kiki"']
  };
  const result = averageCharacters(film);
  expect(result).toBe(3);
});

test('averageCharactersAllFilms retorna el promedio correcto de personajes en todas las películas', () => {
  const films = [
    { people: ['"name": "Pazu"', '"name": "Satsuki Kusakabe"'] },
    { people: ['"name": "Kiki"', '"name": "Seita Yokokawa"', '"name": "Taeko Okajima"'] },
    { people: ['"name": "Porco Rosso", "name": "Donald Curtis"'] }
  ];
  const result = averageCharactersAllFilms(films);
  expect(result).toBeCloseTo(0.35, 2);
});