// Importa la función 'createRouter' de vue-router
// (para crear el sistema de navegación) y NO # HISTORY
import { createRouter, createWebHistory } from 'vue-router';
// Importa los componentes que actuarán como vistas/páginas
import HomeView from './views/HomeView.vue';
import MovieDetail from './views/MovieDetail.vue';
// Define las rutas de la aplicación como un array de objetos
const routes = [
  { path: '/', component: HomeView }, // Componente que se mostrará PATH ES URL COMPONENT PARA RENDERIZAR LAS RUTAS
  { path: '/movie/:id', component: MovieDetail }
];
// Crea y exporta la instancia del router configurado
export default createRouter({
  history: createWebHistory(), // Usa el modo "history" (URLs limpias sin #)
  routes                       // Registra las rutas definidas arriba
});
//http://tusitio.com/movie/123
//http://tusitio.com/#/movie/123 elimina el #