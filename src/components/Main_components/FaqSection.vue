<template>
  <section>
    <div class="container-wide">
      <div class="column column-left">
        <div class="img-video">
          <img class="thumb-video" :src="require('../../assets/img/' + imgVideo)" alt="Video Thumb">
          <img class="icon-youtube" src="../../assets/img/icon-youtube-play.png" alt="Icon Youtube">
        </div>
      </div>
      <div class="column column-right">
        <h2>{{ titleFaq }}</h2>
        <ul>
          <li @click="toggleIsActive(index)" v-for="(faq, index) in arrFaq" :key="faq.question">
            <div v-if="!faq.isActive">
              <div class="question question-closed">
                <font-awesome-icon class="rounded-border" icon="fa-solid fa-caret-down" />
                <h3>{{ faq.question }}</h3>
              </div>
            </div>
            <div v-else>
              <div class="question question-open">
                <font-awesome-icon class="rounded-border" icon="fa-solid fa-caret-up" />
                <h3>{{ faq.question }}</h3>
              </div>
              <div v-for="(i, index) in faq.answer" :key="index" class="answer">
                <p>{{ faq.answer[index] }}</p>
              </div>
            </div>
            <hr>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  data () {
    return {
      imgVideo: 'home-business-video-poster-670x450.jpg',
      titleFaq: 'To Thrive In Business Today, You\'ll Need a Good Plan',
      arrFaq: [
        {
          question: 'How can we help?',
          answer: [
            'How many courses you\'ve been on, using however many techniques and methods. Unless you\'ve come to realize the value of mindset, then you\'ve yet to understand how success comes.',
            'With everyone else\'s mindset involved impacting too. Hence why business coaching is so crucial for success.'
          ],
          isActive: false
        },
        {
          question: 'Why would I need a business COACH?',
          answer: [
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore vel magnam eum ratione ipsum molestiae officiis vitae placeat hic soluta, quisquam quod maxime maiores! Quo rem illum quas nostrum deserunt!'
          ],
          isActive: false
        },
        {
          question: 'What is one-on-one coaching?',
          answer: [
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem maiores doloribus itaque nam dolorem eligendi officiis eos, veritatis deserunt quia. Ex ullam repellat laboriosam? Alias distinctio aliquid quos tenetur voluptates.'
          ],
          isActive: false
        }
      ]
    }
  },
  methods: {
    // Funzione che mostra il testo della risposta della faq cliccata, chiudendo prima tutte le altre precedentemente aperte
    toggleIsActive (index) {
      this.arrFaq.forEach(question => {
        question.isActive = false
      })
      this.arrFaq[index].isActive = !this.arrFaq[index].isActive
      // TODO: al secondo click sulla risposta aperta, si deve chiudere
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section {
  background-color: $cc-tuna;
  background-image: url(../../assets/img/background-map-dots-top-right-transparent.png);
  background-repeat: no-repeat;
  background-size: 50%;
  background-position-x: 100%;
  color: $cc-white;
  .container-wide {
    display: flex;
    padding: 8rem 0;
    background-image: url('../../assets/img/maxcoach-shape-07-150x150.png');
    background-repeat: no-repeat;
    background-position-x: 0;
    background-position-y: 95%;
    .column {
      width: 50%;
      padding: 0 3rem;
      &.column-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .img-video {
          position: relative;
          .thumb-video {
            width: 100%;
            border-radius: .5em;
          }
          .icon-youtube {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
          }
        }
      }
      &.column-right {
        h2 {
          font-size: 2.5rem;
        }
        ul {
          list-style: none;
          li {
            margin-top: 1rem;
            .question {
              display: flex;
              align-items: center;
              gap: 1rem;
              .rounded-border {
                width: 1.3rem;
                height: 1.3rem;
                border: 2px solid $cc-white;
                border-radius: 50%;
              }
              &.question-open {
                color: $mc-jungle-green;
                .rounded-border {
                  border-color: $mc-jungle-green;
                }
              }
            }
            .answer {
              p {
                margin: 1rem 0;
              }

            }
            hr {
              border: .1px solid $cc-silver;
              margin-top: 1rem;
              opacity: .3;
            }
          }
        }
      }
    }
  }
}
</style>
