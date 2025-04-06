<template>
  <div id="app">
    <!-- Opcional: Barra de navegación -->
    <Navbar v-if="showNavbar" />
    
    <!-- pa las vistas -->
    <router-view></router-view>
  </div>
</template>
