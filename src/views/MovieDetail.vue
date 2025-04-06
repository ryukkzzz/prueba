<template>
    <div class="movie-detail" v-if="movie">
      <div class="detail-header">
        <h1>{{ movie.title }}</h1>
        <button @click="goBack">Volver</button>
      </div>
      
      <div class="detail-content">
        <img v-if="movie.poster_path" 
             :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" 
             :alt="movie.title">
        
        <div class="detail-info">
          <p><strong>Fecha de lanzamiento:</strong> {{ movie.release_date }}</p>
          <p><strong>Calificación:</strong> {{ movie.vote_average }}/10</p>
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Importamos los hooks y herramientas necesarias de Vue Router y Vue

  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  import axios from 'axios'; // Importamos Axios para hacer peticiones HTTP
  
  export default {
    name: 'MovieDetail', // Nombre del componente
    setup() {
      const route = useRoute();  // Obtiene la información de la ruta actual
      const router = useRouter(); // Permite manejar la navegación
      const movie = ref(null); // Variable reactiva para almacenar los detalles de la película
  // Función para obtener los detalles de la película desde la API de TMDB
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=prueba` //igual reemplazar por la API_KEY
          );
          movie.value = response.data; // Guarda los datos de la película en la variable reactiva
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      };
  // Función para regresar a la pantalla anterior
      const goBack = () => {
        router.go(-1);  // Equivalente a presionar el botón "atrás" del navegador
      };
   // Llama a la función cuando el componente se monta en la pantalla
      onMounted(() => {
        fetchMovieDetails();
      });
  
      return {
        movie,
        goBack
      };
    }
  }
  </script>
  
  <style scoped>
  .movie-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .detail-content {
    display: flex;
    gap: 30px;
  }
  .detail-info {
    flex: 1;
  }
  </style>