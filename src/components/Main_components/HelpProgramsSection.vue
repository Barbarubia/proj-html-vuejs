<template>
  <section>
    <div class="container-narrow">
      <h3 class="subtitle">{{ sectionSubtitle }}</h3>
      <h2 class="title">{{ sectionTitle }}</h2>
      <!-- Cards con la descrizione dei tipi di supporto disponibili -->
      <div class="help-cards-container">
        <div v-for="card in arrHelpCards" :key="card.title" class="help-card">
          <img :src="require('../../assets/img/' + card.image)" :alt="card.title">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <hr>
          <button class="btn btn-2">{{ strButton }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelpProgramsSections',
  data () {
    return {
      sectionTitle: 'Explore How can I help you',
      sectionSubtitle: 'Let\'s Dream Big Together',
      strButton: 'Discover now',
      arrHelpCards: [
        {
          title: 'Consultative Training',
          image: 'home-business-service-slide-01-480x298.jpg',
          text: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways'
        },
        {
          title: 'Real Deal Coaching',
          image: 'home-business-service-slide-02-480x298.jpg',
          text: 'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.'
        },
        {
          title: 'Advisor Training Program',
          image: 'home-business-service-slide-03-480x298.jpg',
          text: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section {
  background-color: $md-link-water;
  .container-narrow {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .help-cards-container {
      width: 100%;
      display: flex;
      .help-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% / 3 - 2rem);
        margin: 1rem;
        background-color: $cc-white;
        img {
          width: 100%;
          margin-bottom: 2rem;
        }
        p {
          padding: 1.5rem;
          text-align: center;
          color: $cc-boulder;
        }
        hr {
          width: 100%;
          border: 1px solid $md-link-water;
        }
        .btn, .btn-2 {
          width: 100%;
          border: none;
          border-radius: none;
        }
      }
    }
  }
}

</style>
