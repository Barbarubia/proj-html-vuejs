<template>
  <div id="app">
    <header-max-coach /> <!-- Componente che contiene l'header del sito -->
    <main-max-coach /> <!-- Componente che contiene il contenuto del sito, diviso in sezioni -->
    <footer-max-coach /> <!-- Componente che contiene il footer del sito -->
  </div>
</template>

<script>
import FooterMaxCoach from './components/FooterMaxCoach.vue'
import HeaderMaxCoach from './components/HeaderMaxCoach.vue'
import MainMaxCoach from './components/MainMaxCoach.vue'

export default {
  name: 'App',
  components: {
    HeaderMaxCoach,
    MainMaxCoach,
    FooterMaxCoach
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

</style>
