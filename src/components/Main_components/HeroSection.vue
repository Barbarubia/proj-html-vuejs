<template>
  <section>
    <div class="container-narrow">
      <div class="column column-left">
        <h3 class="subtitle">New Challenges, New Skills</h3>
        <h1 class="title">Build your own life coaching business</h1>
        <p>Whole-Life Business Coaching for committed entrepeneurs</p>
        <button>Get started today</button>
      </div>
      <div class="column column-right">
        <img src="../../assets/img/home-business-hero-avatar.png" alt="Hero Avatar">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section {
  position: relative;
  padding-top: 2rem;
  background-color: $md-link-water;
  .container-narrow {
    display: flex;
    .column {
      width: 50%;
      &.column-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        .title {
          font-size: 3rem;
          text-transform: uppercase;
        }
        .subtitle {
          font-size: 1.5rem;
          color: $md-jungle-green;
        }
        p {
          font-weight: 500;
          color: $cc-boulder;
        }
      }
      &.column-right {
        display: flex;
        z-index: 0;
      }
      &.column-right::before {
        content: '';
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        background-image: url("../../assets/img/home-business-hero-global-image.png");
        background-repeat: no-repeat;
        background-size: 70%;
        z-index: -1;
      }
    }
  }
}
</style>
