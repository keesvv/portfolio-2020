<template>
  <div class="navbar">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/projects">Projects</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  --link-padding: 15px;

  padding: 0 calc(var(--content-padding) - var(--link-padding));
}

.nav-link {
  display: inline-block;
  color: black;
  font-weight: bold;
  padding: 30px var(--link-padding);

  &:first-of-type {
    margin-left: 0;
  }
}
</style>
