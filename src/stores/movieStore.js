//importacion de funciones 
import { defineStore } from 'pinia';
import axios from 'axios'; //libreria para hacer peticiones http
//definimos nuestro estado con el identificador
export const useMovieStore = defineStore('movies', {
  state: () => ({
    movies: [], //iniciamos un arreglo inicialmente vacio
    favorites: []
  }),
    // Define las acciones (métodos para modificar el estado)

  actions: {
/*
https://www.themoviedb.org/movie peliculas populares
https://www.themoviedb.org/
     */
    //nuestra funcion asincorna para hacer la busqueda de las peliculas mediante el api
    async fetchMovies(query) {
      try {
        const API_KEY = 'pruena'; // Reemplaza con tu API key de TMDB una vez que se registren en: https://www.themoviedb.org/
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
         // Actualiza el estado movies con los resultados
        // El spread operator ([...]) asegura reactividad en Vue/Pinia
        this.movies = [...res.data.results]; // Spread operator para reactividad
      } catch (error) {
                // Manejo de errores: muestra en consola y limpia los resultados
        console.error("Error fetching movies:", error);
        this.movies = []; // <-- Limpia el estado en caso de error
      }
    }
  }
});
