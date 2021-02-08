<template>
  <div class="jumbotron">
    <img src="@/assets/me.jpg" alt="Me" />
    <h1>Hi! 👋</h1>
    <h2>
      My name is Kees van Voorthuizen — I'm a 17-years-old passionate and
      self-taught full stack developer from The Netherlands.
    </h2>
    <socials />
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
  text-align: center;
  background: rgb(245, 245, 245);
  padding: 60px 5%;
}

img {
  width: 200px;
  border-radius: 50%;
}

h1 {
  font-family: Poppins;
  font-size: 48px;
  margin: 40px 0 20px;
}

h2 {
  font-size: 24px;
  margin: 0 0 25px;
}
</style>
