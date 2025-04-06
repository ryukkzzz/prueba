
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

import router from './router';

const app = createApp(App);

// 7. Registra Pinia en la aplicación
//    - Habilita el sistema de gestión de estado global
app.use(createPinia());
// 8. Registra el router en la aplicación
//    - Habilita la navegación entre vistas
app.use(router);

// 10. Monta la aplicación en el elemento con id 'app' en tu HTML
//     - Busca <div id="app"></div> en tu index.html
//     - Aquí es donde se renderizará toda la aplicación Vue
app.mount('#app');