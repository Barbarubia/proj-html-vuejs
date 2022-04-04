<template>
  <main>
    <!-- Sezione Hero -->
    <hero-section />
    <!-- Sezione con elenco di tutte le caratteristiche generali dei servizi offerti -->
    <features-section />
    <!-- Sezione con elenco dei programmi di help -->
    <help-programs-section />
    <!-- Sezione con elenco di tutti i corsi disponibili -->
    <courses-section />
    <!-- Sezione FAQ -->
    <faq-section />
    <!-- Sezione dei prossimi eventi -->
    <upcoming-events-section />
    <!-- Sezione delle opinioni dei corsisti -->
    <reviews-section />
    <!-- Sezione sottoscrizione Newsletters -->
    <newsletters-section />
  </main>
</template>

<script>
import HeroSection from './Main_components/HeroSection.vue'
import FeaturesSection from './Main_components/FeaturesSection.vue'
import HelpProgramsSection from './Main_components/HelpProgramsSection.vue'
import CoursesSection from './Main_components/CoursesSection.vue'
import FaqSection from './Main_components/FaqSection.vue'
import UpcomingEventsSection from './Main_components/UpcomingEventsSection.vue'
import ReviewsSection from './Main_components/ReviewsSection.vue'
import NewslettersSection from './Main_components/NewslettersSection.vue'

export default {
  name: 'MainMaxCoach',
  components: {
    HeroSection,
    FeaturesSection,
    HelpProgramsSection,
    CoursesSection,
    FaqSection,
    UpcomingEventsSection,
    ReviewsSection,
    NewslettersSection
  }
}
</script>

<style lang="scss" scoped>

</style>
