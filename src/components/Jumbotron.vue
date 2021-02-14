<template>
  <div class="jumbotron">
    <div class="left">
      <h1>Hi! 👋</h1>
      <h2>
        My name is Kees van Voorthuizen — I'm a 17-year-old passionate and
        self-taught developer from The Netherlands.
      </h2>
      <h3>Feel free to <a href="mailto:me@keesvv.nl">contact me</a>!</h3>
      <socials />
    </div>
    <div class="right">
      <img src="@/assets/me.jpg" alt="Me" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Socials from "@/components/Socials.vue";

@Component({
  components: {
    Socials,
  },
})
export default class Jumbotron extends Vue {}
</script>

<style lang="scss" scoped>
.jumbotron {
  // text-align: center;
  background: rgb(248, 248, 248);
  padding: 130px calc(var(--base-padding) + 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    padding: 130px calc(var(--base-padding) + 20px);
  }
}

img {
  width: 200px;
  border-radius: 50%;
}

h1 {
  font-family: Poppins;
  font-size: 82px;
  margin: 40px 0 20px;
}

h2 {
  font-size: 24px;
  margin: 0 0 25px;
  max-width: 540px;
}

h3 {
  font-size: 20px;
  color: gray;
}
</style>
