<template>
  <section>
    <div class="container-narrow">
      <h3 class="subtitle">{{ sectionSubtitle }}</h3>
      <h2 class="title">{{ sectionTitle }}</h2>
      <!-- Slider delle cards con la descrizione dei tipi di supporto disponibili -->
      <div class="help-cards-container">
        <div @mouseover="stopAutoplay" @mouseleave="autoplay" v-for="card in arrHelpCards[activeIndex]" :key="card.id" class="help-card">
          <img v-if="card.externalUrlImage === false" :src="require('../../assets/img/' + card.image)" :alt="card.title">
          <img v-else :src="card.image" :alt="card.title">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <hr>
          <button class="btn btn-2">{{ strButton }}&nbsp;<font-awesome-icon icon="fa-solid fa-arrow-right-long" /></button>
        </div>
      </div>
      <div class="dots">
        <div v-for="(i, index) in arrHelpCards" :key="index" :class="index == activeIndex ? 'active' : ''" @click="activeIndex = index"><font-awesome-icon icon="fa-solid fa-circle" /></div>
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
      activeIndex: 0,
      arrHelpCards: [
        [
          {
            id: 1,
            title: 'Consultative Training',
            image: 'home-business-service-slide-01-480x298.jpg',
            externalUrlImage: false,
            text: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways'
          },
          {
            id: 2,
            title: 'Real Deal Coaching',
            image: 'home-business-service-slide-02-480x298.jpg',
            externalUrlImage: false,
            text: 'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.'
          },
          {
            id: 3,
            title: 'Advisor Training Program',
            image: 'home-business-service-slide-03-480x298.jpg',
            externalUrlImage: false,
            text: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.'
          }
        ],
        [
          {
            id: 4,
            title: 'Lorem Ipsum',
            image: 'https://picsum.photos/id/1/480/298',
            externalUrlImage: true,
            text: 'Ratione neque labore consectetur sed dolorum impedit perspiciatis eum nulla vitae eligendi, repellat molestias.'
          },
          {
            id: 5,
            title: 'Lorem Ipsum',
            image: 'https://picsum.photos/id/119/480/298',
            externalUrlImage: true,
            text: 'Ratione neque labore consectetur sed dolorum impedit perspiciatis eum nulla vitae eligendi, repellat molestias.'
          },
          {
            id: 6,
            title: 'Lorem Ipsum',
            image: 'https://picsum.photos/id/160/480/298',
            externalUrlImage: true,
            text: 'Ratione neque labore consectetur sed dolorum impedit perspiciatis eum nulla vitae eligendi, repellat molestias.'
          }
        ],
        [
          {
            id: 7,
            title: 'Magnam Itaque',
            image: 'https://picsum.photos/id/180/480/298',
            externalUrlImage: true,
            text: 'Iure a debitis nihil ab consequuntur iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          },
          {
            id: 8,
            title: 'Magnam Itaque',
            image: 'https://picsum.photos/id/201/480/298',
            externalUrlImage: true,
            text: 'Iure a debitis nihil ab consequuntur iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          },
          {
            id: 9,
            title: 'Magnam Itaque',
            image: 'https://picsum.photos/id/366/480/298',
            externalUrlImage: true,
            text: 'Iure a debitis nihil ab consequuntur iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          }
        ]
      ]
    }
  },
  methods: {
    // Funzione che incrementa il valore di activeIndex o lo riporta a zero quando raggiunge l'ultimo elemento dell'array
    setActiveIndex () {
      if (this.activeIndex === this.arrHelpCards.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
    },
    // Funzione che esegue l'incremento dell'activeIndex ogni 3 secondi
    autoplay () {
      this.interval = setInterval(this.setActiveIndex, 3000)
    },
    // Funzione che stoppa l'incremento dell'activeIndex
    stopAutoplay () {
      clearInterval(this.interval)
    }
  },
  created () {
    this.autoplay()
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
    gap: 2rem;
    .help-cards-container {
      width: 100%;
      display: flex;
      gap: 2rem;
      .help-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% / 3);
        // margin: 1rem;
        background-color: $cc-white;
        border-radius: .5em;
        box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.6);
        img {
          width: 100%;
          margin-bottom: 2rem;
          border-top-left-radius: .5em;
          border-top-right-radius: .5em;
        }
        p {
          padding: 1.5rem;
          flex-grow: 1;
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
          border-radius: 0;
          border-bottom-left-radius: .5em;
          border-bottom-right-radius: .5em;
          // &:hover {
          //   background-color: $md-jungle-green;
          //   color: $cc-white;
          // }
        }
        &:hover {
          .btn {
            background-color: $md-jungle-green;
            color: $cc-white;
          }
        }
      }
    }
    .dots {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      color: $cc-silver;
      font-size: .5rem;
      .active {
        color: $mc-charade;
        font-size: .7rem;
      }
    }
  }
}

</style>
