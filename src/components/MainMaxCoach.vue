<template>
  <main>
    <!-- Sezione Hero -->
    <hero-section />
  </main>
</template>

<script>
import HeroSection from './Main_components/HeroSection.vue'

export default {
  name: 'MainMaxCoach',
  components: {
    HeroSection
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: cyan; //provvisorio
}
</style>
