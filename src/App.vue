<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/fontawesome.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/brands.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/solid.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/regular.min.css");

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: rgb(49, 179, 255);
  text-decoration: none;
}
</style>
