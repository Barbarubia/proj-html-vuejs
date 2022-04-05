<template>
  <div id="app">
    <header-max-coach /> <!-- Componente che contiene l'header del sito -->
    <main-max-coach /> <!-- Componente che contiene il contenuto del sito, diviso in sezioni -->
    <footer-max-coach /> <!-- Componente che contiene il footer del sito -->
    <!-- Barra fissa laterale -->
    <div class="side-navbar">
      <a href="#"><font-awesome-icon icon="fa-solid fa-ruler-combined" /></a>
      <a href="#"><font-awesome-icon icon="fa-solid fa-life-ring" /></a>
      <a href="#"><font-awesome-icon icon="fa-solid fa-book" /></a>
      <a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
    </div>
    <!-- Bottone torna ad inizio pagina fisso in basso a dx -->
    <a href="#app">
      <button class="btn-up">
        <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
      </button>
    </a>
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

#app {
  position: relative;
  .side-navbar {
    position: fixed;
    top: 250px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: $cc-white;
    border-top-left-radius: .5em;
    border-bottom-left-radius: .5em;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    font-size: 1.3rem;
    color: $mc-charade;
  }
  .btn-up {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    background-color: $mc-jungle-green;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    color: $cc-white;
    cursor: pointer;
    &:hover {
      background-color: $cc-tuna;
    }
  }
}
</style>
