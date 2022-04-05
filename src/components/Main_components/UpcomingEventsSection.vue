<template>
<section>
  <div class="bottom-right-radius-container">
    <div class="container-wide">
      <h3 class="subtitle">{{ sectionSubtitle }}</h3>
      <h2 class="title">{{ sectionTitle }}</h2>
      <!-- Cards dei prossimi eventi -->
      <div class="events-cards-container">
        <div v-for="(event, index) in arrUpcomingEvents" :key="event.eventID" class="card-event">
          <div class="card-left-column">
            <div class="event-location">
              <font-awesome-icon class="location-icon" icon="fa-solid fa-location-dot" />
              <p>{{ event.eventLocation }}</p>
            </div>
            <h3>{{ event.eventName }}</h3>
          </div>
          <div class="card-right-column">
            <span class="event-day">{{ getDay(index) }}</span>
            <span class="event-month">{{ getMonth(index) }}</span>
            <button class="btn btn-1">{{ strButton }}</button>
          </div>
        </div>
      </div>
      <!-- Paragrafo con link alla pagina di tutti gli eventi -->
      <div class="link-all-events">
        <p>{{strAllEvents}} <a href="#">{{ strLinkAllEvents}}&nbsp;<font-awesome-icon icon="fa-solid fa-arrow-right-long" /></a></p>
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
          date: '2022-11-22',
          month: 'Nov'
        },
        {
          eventID: 2,
          eventLocation: 'New York, US',
          eventName: 'Painting Art Contest 2020',
          date: '2022-10-10',
          month: 'Oct'
        },
        {
          eventID: 3,
          eventLocation: 'Hamburg, Germany',
          eventName: 'International Art Fair 2020',
          date: '2022-11-23',
          month: 'Nov'
        },
        {
          eventID: 4,
          eventLocation: 'Illinois, US',
          eventName: 'Street Performance: Call for Artist',
          date: '2022-12-15',
          month: 'Dec'
        },
        {
          eventID: 5,
          eventLocation: 'Illinois, US',
          eventName: 'Consumer Food Safety Education Conference',
          date: '2022-07-22',
          month: 'Jul'
        },
        {
          eventID: 6,
          eventLocation: 'Dubai',
          eventName: 'How meditation improve your mental health?',
          date: '2022-08-12',
          month: 'Aug'
        }
      ],
      arrMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
      ],
      strAllEvents: 'Excited about our event?',
      strLinkAllEvents: 'View all events'
    }
  },
  methods: {
    // Funzione che ritorna il giorno estratto dalla data
    getDay (index) {
      return this.arrUpcomingEvents[index].date.split('-')[2]
    },
    // Funzione che ritorna il mese estratto dalla data
    getMonth (index) {
      const monthNumber = this.arrUpcomingEvents[index].date.split('-')[1]
      return this.arrMonths[monthNumber - 1]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section {
  background-color: $mc-porcelain;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  .bottom-right-radius-container {
    width: 110%;
    background-color: $cc-white;
    border-bottom-right-radius: 50%;
    .container-wide {
      padding: 4rem 0 8rem 0;
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
          border-radius: .3em;
          border-left: .3rem solid transparent;
          .card-left-column {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
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
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: .3rem;
            .event-day {
              font-size: 2.5rem;
              // font-weight: 800;
              color: $mc-jungle-green;
            }
            .event-month {
              font-weight: 800;
              text-transform: uppercase;
            }
            .btn, .btn-1 {
              min-width: 100%;
            }
          }
          &:hover {
            background-color: $cc-white;
            border-left: .3rem solid $mc-jungle-green;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
            cursor: pointer;
              .btn, .btn-1 {
                background-color: $cc-tuna;
                color: $cc-white;
              }
          }
        }
      }
      .link-all-events {
        text-align: center;
        font-weight: 500;
        color: $cc-boulder;
        a {
          text-decoration: none;
          color: $mc-jungle-green;
          border-bottom: 1px solid $cc-silver;
        }
      }
    }
  }
}
</style>
