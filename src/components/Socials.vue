<template>
  <div class="socials">
    <a href="https://github.com/keesvv" class="social github">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://twitter.com/keesvv" class="social twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.linkedin.com/in/keesvv" class="social linkedin">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://instagram.com/kees.dev" class="social instagram">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://keybase.io/keesvv" class="social keybase">
      <i class="fab fa-keybase"></i>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Socials extends Vue {}
</script>

<style lang="scss" scoped>
.social {
  margin: 0 8px;

  i {
    color: rgb(180, 180, 180);
    font-size: 35px;
  }
}
</style>
