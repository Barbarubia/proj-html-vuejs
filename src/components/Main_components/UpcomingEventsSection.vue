<template>
<section>
  <div class="container-wide">
    <h3 class="subtitle">{{ sectionSubtitle }}</h3>
    <h2 class="title">{{ sectionTitle }}</h2>
    <div class="events-cards-container">
      <div v-for="event in arrUpcomingEvents" :key="event.eventID" class="card-event">
        <div class="card-left-column">
          <div class="event-location">
            <font-awesome-icon class="location-icon" icon="fa-solid fa-location-dot" />
            <p>{{ event.eventLocation }}</p>
          </div>
          <h3>{{ event.eventName }}</h3>
        </div>
        <div class="card-right-column">
          <span class="event-day"></span>
          <span class="event-month"></span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'UpcomingEventsSection',
  data () {
    return {
      sectionTitle: 'Upcoming Events',
      sectionSubtitle: 'Wanna transform your life?',
      strButton: 'Get ticket',
      arrUpcomingEvents: [
        {
          eventID: 1,
          eventLocation: 'Texas, US',
          eventName: 'Storytelling Workshop',
          date: '2022-11-22T00:00:00',
          month: 'Nov'
        },
        {
          eventID: 2,
          eventLocation: 'New York, US',
          eventName: 'Painting Art Contest 2020',
          date: '2022-10-10T00:00:00',
          month: 'Oct'
        },
        {
          eventID: 3,
          eventLocation: 'Hamburg, Germany',
          eventName: 'International Art Fair 2020',
          date: '2022-11-23T00:00:00',
          month: 'Nov'
        },
        {
          eventID: 4,
          eventLocation: 'Illinois, US',
          eventName: 'Street Performance: Call for Artist',
          date: '2022-12-15T00:00:00',
          month: 'Dec'
        },
        {
          eventID: 5,
          eventLocation: 'Illinois, US',
          eventName: 'Consumer Food Safety Education Conference',
          date: '2022-07-22T00:00:00',
          month: 'Jul'
        },
        {
          eventID: 6,
          eventLocation: 'Dubai',
          eventName: 'How meditation improve your mental health?',
          date: '2022-08-12T00:00:00',
          month: 'Aug'
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
  .container-wide {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .events-cards-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .card-event {
        display: flex;
        justify-content: space-between;
        gap: 5rem;
        width: calc(100% / 2 - 2rem);
        margin: 1rem;
        padding: 2rem;
        background-color: $mc-porcelain;
        .card-left-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          .event-location {
            display: flex;
            gap: 1rem;
            align-items: center;
            color: $cc-boulder;
            .location-icon {
              font-size: 1.3rem;
            }
          }
        }
        .card-right-column {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
}
</style>
