<template>
  <div class="home">
    <jumbotron />
  </div>
</template>

<script lang="ts">
import Jumbotron from "@/components/Jumbotron.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Jumbotron,
  },
})
export default class Home extends Vue {}
</script>
