<template>
  <section>
    <div class="container-wide">
      <div class="column column-left">
        <div class="column-content">
          <h3 class="subtitle">{{ columnLeftContent.subtitle }}</h3>
          <h1 class="title">{{ columnLeftContent.title }}</h1>
          <p>{{ columnLeftContent.text }}</p>
          <button class="btn btn-1">{{ columnLeftContent.button }}</button>
        </div>
      </div>
      <div class="column column-right">
        <img src="../../assets/img/home-business-hero-avatar.png" alt="Hero Avatar">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data () {
    return {
      columnLeftContent: {
        subtitle: 'New Challenges, New Skills',
        title: 'Build your own life coaching business',
        text: 'Whole-Life Business Coaching for committed entrepeneurs',
        button: 'Get started today'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section {
  background-color: $md-link-water;
  .container-wide {
    position: relative;
    display: flex;
    .column {
      width: 50%;
      &.column-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        .column-content {
          max-width: calc($container-narrow-width / 2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;
          .title {
            font-size: 3rem;
            text-transform: uppercase;
          }
          // .subtitle {
          //   font-size: 1.5rem;
          //   color: $md-jungle-green;
          // }
          p {
            font-weight: 500;
            color: $cc-boulder;
          }
        }
      }
      &.column-right {
        padding-top: 4rem;
        padding-left: 1.5rem;;
        display: flex;
        background-image: url("../../assets/img/home-business-hero-global-image2.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
