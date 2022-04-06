<template>
  <section>
    <div class="container-full">
      <h3 class="subtitle">{{ sectionSubtitle }}</h3>
      <h2 class="title">{{ sectionTitle }}</h2>
      <div class="reviews-container">
        <div @mouseover="stopAutoplay" @mouseleave="autoplay" class="card-review card-review-opacity">
          <h4 v-if="activeIndex != 0" class="main-comment">{{ arrReviews[activeIndex - 1].mainComment }}</h4>
          <h4 v-else class="main-comment">{{ arrReviews[arrReviews.length - 1].mainComment }}</h4>
          <p v-if="activeIndex != 0" class="review-text">{{ arrReviews[activeIndex - 1].text }}</p>
          <p v-else class="review-text">{{ arrReviews[arrReviews.length - 1].text }}</p>
          <div class="student">
            <img v-if="activeIndex != 0" class="student-avatar" :src="require('../../assets/img/' + arrReviews[activeIndex - 1].image)" :alt="arrReviews[activeIndex - 1].student">
            <img v-else class="student-avatar" :src="require('../../assets/img/' + arrReviews[arrReviews.length - 1].image)" :alt="arrReviews[arrReviews.length - 1].student">
            <div class="student-name-job">
              <h4 v-if="activeIndex != 0">{{ arrReviews[activeIndex - 1].student }}</h4>
              <h4 v-else>{{ arrReviews[arrReviews.length - 1].student }}</h4>
              <small v-if="activeIndex != 0">/ {{ arrReviews[activeIndex - 1].job}}</small>
              <small v-else>/ {{ arrReviews[arrReviews.length - 1].job}}</small>
            </div>
          </div>
        </div>
        <div @mouseover="stopAutoplay" @mouseleave="autoplay" class="card-review">
          <h4 class="main-comment">{{ arrReviews[activeIndex].mainComment }}</h4>
          <p class="review-text">{{ arrReviews[activeIndex].text }}</p>
          <div class="student">
            <img class="student-avatar" :src="require('../../assets/img/' + arrReviews[activeIndex].image)" :alt="arrReviews[activeIndex].student">
            <div class="student-name-job">
              <h4>{{ arrReviews[activeIndex].student }}</h4>
              <small>/ {{ arrReviews[activeIndex].job}}</small>
            </div>
          </div>
        </div>
        <div @mouseover="stopAutoplay" @mouseleave="autoplay" class="card-review card-review-opacity">
          <h4 v-if="activeIndex != arrReviews.length - 1" class="main-comment">{{ arrReviews[activeIndex - (- 1)].mainComment }}</h4>
          <h4 v-else class="main-comment">{{ arrReviews[0].mainComment }}</h4>
          <p v-if="activeIndex != arrReviews.length - 1" class="review-text">{{ arrReviews[activeIndex - (- 1)].text }}</p>
          <p v-else class="review-text">{{ arrReviews[0].text }}</p>
          <div class="student">
            <img v-if="activeIndex != arrReviews.length - 1" class="student-avatar" :src="require('../../assets/img/' + arrReviews[activeIndex - (- 1)].image)" :alt="arrReviews[activeIndex - (- 1)].student">
            <img v-else class="student-avatar" :src="require('../../assets/img/' + arrReviews[0].image)" :alt="arrReviews[0].student">
            <div class="student-name-job">
              <h4 v-if="activeIndex != arrReviews.length - 1">{{ arrReviews[activeIndex - (- 1)].student }}</h4>
              <h4 v-else>{{ arrReviews[0].student }}</h4>
              <small v-if="activeIndex != arrReviews.length - 1">/ {{ arrReviews[activeIndex - (- 1)].job}}</small>
              <small v-else>/ {{ arrReviews[0].job}}</small>
            </div>
          </div>
        </div>
      </div>
      <div class="dots">
        <div v-for="(i, index) in arrReviews" :key="index" :class="index == activeIndex ? 'active' : ''" @click="activeIndex = index"><font-awesome-icon icon="fa-solid fa-circle" /></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReviewsSection',
  data () {
    return {
      sectionTitle: 'What make they love us?',
      sectionSubtitle: 'People are prainsing MaxCoach',
      activeIndex: '0',
      arrReviews: [
        {
          id: '1',
          student: 'Mina Hollance',
          job: 'Freelancer',
          image: 'testimonial-avata-02.jpg',
          mainComment: 'High level of efficiency and scientific teaching methods',
          text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.'
        },
        {
          id: '2',
          student: 'Madley Pondor',
          job: 'IT Specialist',
          image: 'testimonial-avata-04.jpg',
          mainComment: 'Professional team of specialists and passionate mentors at reach',
          text: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.'
        },
        {
          id: '3',
          student: 'Pinco Pallino',
          job: 'Boolean Student',
          image: 'testimonial-avata-01.jpg',
          mainComment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          text: 'Ducimus deleniti nesciunt eos ipsum consectetur voluptate eligendi harum, at unde nostrum tenetur quo maxime explicabo ab sequi! Reprehenderit totam asperiores incidunt.'
        },
        {
          id: '4',
          student: 'Florence Themes',
          job: 'Multimedia Admin',
          image: 'testimonial-avata-03.jpg',
          mainComment: 'It\'s a choice of quality for people with special needs',
          text: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.'
        }
      ]
    }
  },
  methods: {
    // Funzione che incrementa il valore di activeIndex o lo riporta a zero quando raggiunge l'ultimo elemento dell'array
    setActiveIndex () {
      if (this.activeIndex === this.arrReviews.length - 1) {
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
  background-color: $mc-porcelain;
  .container-full {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .reviews-container {
      display: flex;
      overflow-x: hidden;
      .card-review {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: .5em;
        gap: 1rem;
        flex-shrink: 0;
        width: calc(100% / 3 - 2rem);
        margin: 1rem;
        background-color: $cc-white;
        .main-comment {
          color: $cc-tuna;
        }
        .student {
          display: flex;
          align-items: center;
          .student-avatar {
            width: 100px;
            border-radius: 50%;
            margin-right: 2rem;
          }
          .student-name-job {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        }
        &.card-review-opacity {
          opacity: .5;
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
