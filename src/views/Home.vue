<template>
  <div class="home">
    <jumbotron />
    <div class="sections">
      <Section
        caption="About me"
        icon="far fa-user"
        icon-color="rgba(66, 135, 245, 0.25)"
        bg-color="rgba(66, 135, 245, 0.15)"
      >
        <template v-slot:description>
          I am an ordinary Dutch guy living in The Hague, The Netherlands. I
          love Linux, programming, open source, drum'n'bass and tinkering with
          my computer. I consider myself to be someone who likes to be around
          people &mdash; not at all times, but I do most of the time. In
          addition, I have a strong passion for languages &mdash; not only
          programming languages, but also human languages. I'm also fairly
          detail-oriented.
        </template>
      </Section>
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
  padding: 60px var(--base-padding);
}
</style>
