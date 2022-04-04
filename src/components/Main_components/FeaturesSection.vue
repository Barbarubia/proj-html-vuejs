<template>
  <section>
    <div class="container-narrow">
      <h3 class="subtitle">{{ sectionSubtitle }}</h3>
      <h2 class="title">{{ sectionTitle }}</h2>
      <!-- Cards con tutte le features -->
      <div class="features-cards-container">
        <div v-for="card in arrFeaturesCards" :key="card.title" class="features-card">
          <img :src="require('../../assets/img/edit/' + card.image)" :alt="card.title">
          <div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
      <!-- Bottoni -->
      <div class="btn-container">
        <button class="btn btn-2">{{ buttonLearn }}</button>
        <button class="btn btn-1">{{ buttonStart }}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data () {
    return {
      sectionTitle: 'We are piooners of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization.',
      sectionSubtitle: 'Let\'s Dream Big Together',
      buttonLearn: 'Learn more',
      buttonStart: 'Get started today',
      arrFeaturesCards: [
        {
          title: 'One to One',
          image: 'feature-card-01.png',
          text: 'Getting the necessary clarity about the current state to help you improve your game.'
        },
        {
          title: 'Anywhere',
          image: 'feature-card-02.png',
          text: 'Access to valuable and portable program which allow you to setup and live anywhere you want.'
        },
        {
          title: 'On Time',
          image: 'feature-card-03.png',
          text: 'Punctuality is our top priority because it\'s an essential criteria to assess a program quality.'
        },
        {
          title: 'Online Courses',
          image: 'feature-card-04.png',
          text: 'Online business coaching now offers you a very powerful way to empower your business into success.'
        },
        {
          title: 'Consulting',
          image: 'feature-card-05.png',
          text: 'You will get a clear sense of direction for your business, thorough assessment and faster results.'
        },
        {
          title: 'Self Development',
          image: 'feature-card-06.png',
          text: 'Business COaching often keep your focus and develop you both in a professional and personal way.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section {
  background-color: $cc-white;
  padding: 4rem 0;
  .container-narrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .title {
      text-align: center;
    }
    .features-cards-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .features-card {
        display: flex;
        align-items: flex-start;
        width: calc(100% / 3 - 2rem);
        margin: 2rem 1rem;
        img {
          padding-right: 2.5rem;
        }
        p {
          margin-top: 1rem;
          color: $cc-boulder;
        }
      }
    }
    .btn-container {
      display: flex;
      gap: 2rem;
    }
  }
}
</style>
