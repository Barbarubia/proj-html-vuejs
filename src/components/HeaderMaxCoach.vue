<template>
  <header>
    <!-- Logo a sinistra -->
    <div class="header-left">
      <a href="#"><img class="logo" src="../assets/img/dark-logo.png" alt="Logo MaxCoach"></a>
    </div>
    <!-- Menu al centro -->
    <nav class="header-middle">
      <ul>
        <li v-for="element in arrLinks" :key="element.name"><a href="element.url">{{element.name}}</a></li>
      </ul>
    </nav>
    <!-- Selezione lingua, profilo utente e search a destra -->
    <div class="header-right"></div>
    <select name="select-language" id="select-language">
      <option v-for="language in arrLanguages" :key="language.value" value="language.value" :selected="language.value === 'en' ? true : false">{{ language.name }}</option>
    </select>
  </header>
</template>

<script>
export default {
  name: 'HeaderMaxCoach',
  data () {
    return {
      arrLinks: [
        {
          url: '#',
          name: 'Home'
        },
        {
          url: '#',
          name: 'Pages'
        },
        {
          url: '#',
          name: 'Courses'
        },
        {
          url: '#',
          name: 'Features'
        },
        {
          url: '#',
          name: 'Blog'
        },
        {
          url: '#',
          name: 'Shop'
        }
      ],
      arrLanguages: [
        {
          imgFlag: 'de.png',
          value: 'de',
          name: 'German'
        },
        {
          imgFlag: 'en.png',
          value: 'en',
          name: 'English'
        },
        {
          imgFlag: 'fr.png',
          value: 'fr',
          name: 'French'
        }
      ]
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
        }
      }
    }
  }
  // Stile per la parte destra dell'header
  .header-right {
    flex-basis: 25%;
  }
}
</style>
