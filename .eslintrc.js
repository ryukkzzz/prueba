// Exporta la configuración de ESLint como un módulo Node.js
//Eslint es una herramienta que nos permite detectar errores y corregirlos mediante vue.js siguiendo reglas de estilo
module.exports = {
    // Indica que esta es la configuración raíz (no hereda de archivos padres)
  root: true,
  // Define los entornos donde se ejecutará el código
  env: {
    node: true, // Habilita variables globales de Node.js (como 'module' o 'require')
    es2021: true, // Habilita características de ECMAScript 2021 (como optional chaining)
  },
  // Extiende configuraciones base de ESLint y plugins
  extends: [
    'plugin:vue/vue3-essential', // Reglas esenciales para Vue 3
    'eslint:recommended'         // Reglas recomendadas por ESLint
  ],
   // Configuración del parser (cómo se analiza el código)
  parserOptions: {
    ecmaVersion: 'latest', // Usa la última versión de ECMAScript
    parser: '@babel/eslint-parser',  // Parser para entender sintaxis moderna (JSX, etc.)
    sourceType: 'module', // Permite usar 'import/export' (módulos ES)
    requireConfigFile: false,  // No requiere un archivo de configuración de Babel aparte
  },
  // Reglas personalizadas (sobrescriben las de 'extends')
  rules: {
    'vue/multi-word-component-names': 'off', // Desactiva la regla que exige nombres multi-palabra en componentes
  },
}