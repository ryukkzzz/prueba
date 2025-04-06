<template>
  <div class="movie-card">
    <!-- Si la película tiene una imagen de póster, se muestra -->
    <img 
      v-if="movie.poster_path" 
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" 
      :alt="movie.title"
      @click="goToDetails" 
    >   <!-- Al hacer clic en la imagen, se navega a los detalles de la película -->
    <!-- Si no hay póster disponible, se muestra un mensaje en su lugar -->
    <div v-else class="no-poster" @click="goToDetails">
      No poster available
    </div>
     <!-- Se muestra el título de la película -->
    <h3>{{ movie.title }}</h3>
    <!-- Se muestra la fecha de estreno de la película -->
    <p>{{ movie.release_date }}</p>
    <!-- Botón para añadir o quitar la película de favoritos -->
    <button class="favorite-btn" @click.stop="toggleFavorite">
      {{ isFavorite ? '❤️ Quitar de favoritos' : '🤍 Añadir a favoritos' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
     // Se recibe la información de la película como una propiedad
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    // Método para redirigir a la página de detalles de la película
    goToDetails() {
      this.$router.push(`/movie/${this.movie.id}`);
    },
     // Método para alternar entre añadir y quitar la película de favoritos
    toggleFavorite() {
      // Función estática de ejemplo
      this.isFavorite = !this.isFavorite;
    }
  },
  data() {
    return {
      // Estado local para saber si la película está en favoritos
      isFavorite: false
    };
  }
};
</script>

<style scoped>
/* Estilos de la tarjeta de película */
.movie-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.3s;
}
/* Efecto de escala al pasar el mouse */
.movie-card:hover {
  transform: scale(1.03);
}
/* Estilos del botón de favoritos */
.favorite-btn {
  background: #ff4757;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
/* Estilos cuando no hay póster disponible */
.no-poster {
  height: 300px;
  background: #eee;
  display: grid;
  place-items: center;
}
</style>