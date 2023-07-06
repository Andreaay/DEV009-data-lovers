import { filterPoster } from '../src/data.js'; 

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
