<template>
  <section>
    <div class="container-wide">
      <h3 class="subtitle">{{ sectionSubtitle }}</h3>
      <h2 class="title">{{ sectionTitle }}</h2>
      <!-- Cards dei corsi principali-->
      <div class="courses-card-container">
        <div v-for="course in arrCourses" :key="course.name" class="course-card">
          <img :src="require('../../assets/img/' + course.image)" :alt="course.name">
          <div class="card-content">
            <h3 class="course-price" v-if="!isNaN(course.price)">${{ course.price }}.<span>00</span></h3>
            <h3 class="course-price" v-else>{{ course.price }}</h3>
            <h3 class="course-name">{{ course.name }}</h3>
            <div class="card-content-hover">
              <div class="lessons-students">
                <div><font-awesome-icon icon="fa-regular fa-file-lines" />&nbsp;{{ course.lessons }}</div>
                <div><font-awesome-icon icon="fa-regular fa-user" />&nbsp;{{ course.numberParticipants }}</div>
              </div>
              <p>{{ course.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Paragrafo con frase motivazionale e link alla pagina di tutti i corsi -->
      <div class="link-all-courses">
        <p>{{strMotivational}} <a href="#">{{ strLinkAllCourses}}&nbsp;<font-awesome-icon icon="fa-solid fa-arrow-right-long" /></a></p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'CoursesSection',
  data () {
    return {
      sectionTitle: 'Explore How can I help you',
      sectionSubtitle: 'Let\'s Dream Big Together',
      arrCourses: [
        {
          image: 'course-02-443x600.jpg',
          name: 'Learning to Write as a Professional Author',
          price: 40,
          lessons: '20 Lessons',
          numberParticipants: '50 Students',
          description: 'The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and...'
        },
        {
          image: 'stock-full-hd-03-443x600.jpg',
          name: 'Customer-centric Info-Tech Strategies',
          price: 'Free',
          lessons: '10 Lessons',
          numberParticipants: '30 Students',
          description: 'The purpose of this course is to learn the basic strategies of the Customer-centric Info-Tech approach...'
        },
        {
          image: 'stock-full-hd-04-443x600.jpg',
          name: 'Open Programming Courses for Everyone: Python',
          price: 19,
          lessons: '20 Lessons',
          numberParticipants: '20 Students',
          description: 'The purpose of this course is to introduce anyone to Python programming by learning the basics of the language...'
        },
        {
          image: 'stock-full-hd-06-443x600.jpg',
          name: 'Academic Listening and Note-taking',
          price: 26,
          lessons: '25 Lessons',
          numberParticipants: '50 Students',
          description: 'The purpose of this course is to provide the most efficient listening and note-taking techniques used in the academic field and...'
        }
      ],
      strMotivational: 'Take the control of their life back and start doing things to make their dreams come true.',
      strLinkAllCourses: 'View all courses'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section{
  background-color: $cc-white;
  .container-wide {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .courses-card-container {
      display: flex;
      gap: 1rem;
      .course-card {
        position: relative;
        width: calc(100% / 4);
        border-radius: .5em;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(0, 0, 0, 0.0) 20%,rgba(0, 0, 0, 1));
          border-radius: .5em;
        }
        img {
          width: 100%;
          border-radius: .5em;
        }
        .card-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1rem;
          position: absolute;
          z-index: 9;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 1rem;
          .course-price {
            color: $md-jungle-green;
            span {
              font-size: .9rem;
            }
          }
          .course-name {
            color: $cc-white;
          }
          .card-content-hover {
            display: none;
            color: $cc-white;
            .lessons-students {
              display: flex;
              flex-direction: row;
              gap: 1rem;
              margin-bottom: 1rem;
              font-weight: 600;
            }
          }
        }
        &:hover {
          .card-content-hover {
            display: inline;
          }
        }
      }
    }
    .link-all-courses {
      width: 40%;
      text-align: center;
      font-weight: 500;
      color: $cc-boulder;
      a {
        text-decoration: none;
        color: $mc-charade;
        border-bottom: 1px solid $cc-silver;
      }
    }
  }
}
</style>
