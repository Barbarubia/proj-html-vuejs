<template>
  <section>
    <div class="container-full">
      <h3 class="subtitle">{{ sectionSubtitle }}</h3>
      <h2 class="title">{{ sectionTitle }}</h2>
      <div class="reviews-container">
        <div v-for="student in arrReviews" :key="student.id" class="card-review">
          <h4>{{ student.mainComment }}</h4>
          <p class="review-text">{{ student.text }}</p>
          <div class="student">
            <img class="student-avatar" :src="require('../../assets/img/' + student.image)" :alt="student.student">
            <div class="student-name-job">
              <h4>{{ student.student }}</h4>
              <small>/ {{ student.job}}</small>
            </div>
          </div>
        </div>
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
      activeIndex: '1',
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
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: .5em;
        gap: 1rem;
        flex-shrink: 0;
        width: calc(100% / 4 - 2rem);
        margin: 1rem;
        background-color: $cc-white;
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
      }
    }
  }
}
</style>
