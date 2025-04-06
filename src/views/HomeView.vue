<template>
  <div class="home">
    <h1>Buscador de Películas</h1>
    <div class="search-box">
       <!-- Input controlado por Vue (v-model) que se actualiza con el input-->
      <input 
        v-model="searchQuery" 
        placeholder="Escribe tu búsqueda..." 
      />
      <button @click="searchMovies">Buscar</button>
    </div>
    <!-- Estado de carga (muestra solo cuando loading=true) -->
    <div v-if="loading">Cargando...</div>
     <!-- Lista de películas (condicional si hay resultados) -->
    <div class="movie-list" v-if="movies.length > 0">
      <!-- Renderiza MovieCard por cada película -->
        <!-- Directiva de iteración -->
          <!-- Key única para optimización -->
           <!-- Pasa prop 'movie' al componente hijo -->
      <MovieCard 
        v-for="movie in movies"  
        :key="movie.id" 
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
// ref es para variables reactivas y computed propiedades calculadas
import { ref, computed } from 'vue';  //<!-- Reactividad de Vue -->
import { useMovieStore } from '../stores/movieStore';  //<!-- Gestión de estado -->
import MovieCard from '../components/MovieCard.vue'; //!-- Componente hijo -->

export default {
   // Componentes registrados para usar en el template
  components: { MovieCard },
  // setup() es el punto de entrada de Composition API
  setup() {
     // Estado reactivo
    const movieStore = useMovieStore();
    const searchQuery = ref('');
    const loading = ref(false);
// Computed property que reacciona a cambios en el store
    const movies = computed(() => movieStore.movies);
// Función asíncrona para buscar películas
    const searchMovies = async () => {
      if (searchQuery.value.trim() !== '') {
        loading.value = true;
        await movieStore.fetchMovies(searchQuery.value);
        loading.value = false;
      }
    };
  // Expone todo al template
    return { searchQuery, movies, searchMovies, loading };
  }
};
</script>
<!-- Estilos con scoped (solo aplican a este componente) -->
<style scoped>
.search-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  padding: 10px;
  width: 300px;
}
button {
  padding: 10px 15px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>