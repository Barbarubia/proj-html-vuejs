<template>
  <header>
    <!-- Logo a sinistra -->
    <div class="header-left">
      <a href="#"><img class="logo" src="../assets/img/dark-logo.png" alt="Logo MaxCoach"></a>
    </div>
    <!-- Menu al centro -->
    <nav class="header-middle">
      <ul>
        <li v-for="element in arrLinks" :key="element.name">
          <a :href="element.href">
            {{element.name}}
            <font-awesome-icon class="angle-down-icon" icon="fa-solid fa-angle-down" />
          </a>
        </li>
      </ul>
    </nav>
    <!-- Header parte destra -->
    <div class="header-right">
      <!-- Scelta lingua -->
      <img :src="require('../assets/img/' + selectedLanguage + '.png')" :alt="'flag' + selectedLanguage">
      <select @change="setLanguage($event)" v-model="selectedLanguage" name="select-language" id="select-language">
        <option v-for="language in arrLanguages" :key="language.value" :value="language.value" :selected="language.value === 'en' ? true : false">{{ language.name }}</option>
      </select>
      <!-- Bottone profilo utente -->
      <button class="btn-user">
        <font-awesome-icon icon="fa-regular fa-circle-user" />
      </button>
      <!-- Barra di ricerca -->
      <input type="text" name="search" id="search" :placeholder="strPlaceHolderSearch">
      <button class="btn-search">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderMaxCoach',
  data () {
    return {
      selectedLanguage: 'en',
      strPlaceHolderSearch: 'Search...',
      arrLinks: [
        {
          href: '#',
          name: 'Home'
        },
        {
          href: '#',
          name: 'Pages'
        },
        {
          href: '#',
          name: 'Courses'
        },
        {
          href: '#',
          name: 'Features'
        },
        {
          href: '#',
          name: 'Blog'
        },
        {
          href: '#',
          name: 'Shop'
        }
      ],
      arrLanguages: [
        {
          imgFlag: 'de.png',
          value: 'de',
          name: 'Deutsch'
        },
        {
          imgFlag: 'en.png',
          value: 'en',
          name: 'English'
        },
        {
          imgFlag: 'fr.png',
          value: 'fr',
          name: 'Français'
        }
      ]
    }
  },
  methods: {
    setLanguage (event) {
      this.selectedLanguage = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";

// Stile generale per l'header
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: $cc-white;
  // Stile per la parte sinistra dell'header
  .header-left {
    flex-basis: 25%;
    text-align: right;
    .logo {
      height: 2rem;
    }
  }
  // Stile per la parte centrale dell'header
  .header-middle {
    ul{
      list-style: none;
      li {
        display: inline;
        margin: 0 1rem;
        a {
          color: $cc-tuna;
          text-decoration: none;
          .angle-down-icon {
            padding-left: .5rem;
            font-size: .7rem;
            vertical-align: middle;
          }
        }
      }
    }
  }
  // Stile per la parte destra dell'header
  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 25%;
    text-align: right;
    height: 100%;
    #select-language {
      height: 100%;
      padding-left: .5rem;
      border: none;
      text-transform: uppercase;
    }
    #search {
      height: 100%;
      border: none;
      border-left: 1px solid $mc-porcelain;
      padding-left: 1rem;
    }
    .btn-user,
    .btn-search {
      font-size: 1.3rem;
      margin: 0 1rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
