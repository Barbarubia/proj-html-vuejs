<template>
  <section>
    <div class="container-wide">
      <font-awesome-icon class="circle-icon" icon="fa-regular fa-circle" />
      <div class="column">
        <h2 class="title">{{ strTitle01 }} <span>{{ strTitle02 }}</span></h2>
        <p>{{ strText }}</p>
        <div class="input-email">
          <input @keyup.enter="subscribeNewsletter(inputEmail)" v-model="inputEmail" type="email" name="email" id="email" :placeholder="strEmail">
          <button @click="subscribeNewsletter(inputEmail)" class="btn btn-1">{{ strSubscribe }}</button>
        </div>
      </div>
      <img src="../../assets/img/maxcoach-shape-02.png" alt="MaxCoach Shape 02">
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewslettersSection',
  data () {
    return {
      strTitle01: 'Subscribe',
      strTitle02: 'Newsletters',
      strText: 'Enter your email address to register to our newsletter subscription delivered on a regular basis!',
      strEmail: 'Enter your email',
      strSubscribe: 'Subscribe',
      inputEmail: ''
    }
  },
  methods: {
    subscribeNewsletter (email) {
      console.log(email)
      this.inputEmail = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

section {
  background-color: $cc-white;
  .container-wide {
    background-image: url('../../assets/img/maxcoach-shape-09.png');
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: 150px;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .circle-icon {
      font-size: 3rem;
      color: $mc-jungle-green;
    }
    .column {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      .title {
        span {
          color: $mc-jungle-green;
          font-weight: 400;
        }
      }
      p {
        text-align: center;
        font-weight: 500;
        color: $cc-boulder;
      }
      .input-email {
        width: 100%;
        display: flex;
        input {
          flex-grow: 1;
          padding: 1rem;
          border: none;
          background-color: $mc-porcelain;
        }
        .btn {
          min-width: 0;
          padding: 1rem 2rem;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
}
</style>
