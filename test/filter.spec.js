import { filterPoster } from '../src/data.js'; 
// import { mostrarPersonaje } from '.main.js';

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

// describe('Test para mostrarPersonaje', () => {
//     it('Test para validar mostrarPersonaje', () => {
//       const personaje = [
//         {
//           "name": "Pazu",
//           "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
//           "gender": "Male",
//           "age": "13",
//           "specie": "Human"
//         },
//         {
//           "name": "Satsuki Kusakabe",
//           "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
//           "gender": "Female",
//           "age": "11",
//           "specie": "Human"
//         },
//         {
//           "name": "Kiki",
//           "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
//           "gender": "Female",
//           "age": "13",
//           "eye_color": "Black",
//           "hair_color": "Brown",
//           "specie": "Witch"
//         }
//       ];
//       const resultadoEsperado = [
//         {
//           "name": "Pazu",
//           "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
//           "gender": "Male",
//           "age": "13",
//           "specie": "Human"
//         },
//         {
//           "name": "Satsuki Kusakabe",
//           "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
//           "gender": "Female",
//           "age": "11",
//           "specie": "Human"
//         },
//         {
//           "name": "Kiki",
//           "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
//           "gender": "Female",
//           "age": "13",
//           "eye_color": "Black",
//           "hair_color": "Brown",
//           "specie": "Witch"
//         }
//       ];
//       const resultadoObtenido = mostrarPersonaje(personaje);
//       expect(resultadoObtenido).toEqual(resultadoEsperado);
//     });
//   });