<template>
  <div class="home">
    <jumbotron />
    <div class="sections">
      <Section
        caption="About me"
        description="
        I am an ordinary Dutch guy living in The Hague, The Netherlands. // TODOf
        "
        icon="far fa-user"
        icon-color="rgba(66, 135, 245, 0.25)"
        bg-color="rgba(66, 135, 245, 0.15)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Jumbotron from "@/components/Jumbotron.vue";
import Section from "@/components/Section.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Jumbotron,
    Section,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.sections {
  padding: 60px 10%;
}
</style>
