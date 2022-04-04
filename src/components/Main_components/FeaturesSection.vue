<template>
  <section>
    <div class="container-narrow">
      <h3 class="subtitle">{{ sectionSubtitle }}</h3>
      <h2 class="title">{{ sectionTitle }}</h2>
      <!-- Cards con tutte le features -->
      <div></div>
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
      buttonStart: 'Get started today'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section {
  background-color: $cc-white;
  .container-narrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .title {
      text-align: center;
    }
    .btn-container {
      display: flex;
      gap: 2rem;
    }
  }
}
</style>
