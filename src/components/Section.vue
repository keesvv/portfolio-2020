<template>
  <div
    class="section"
    :style="{ '--icon-color': iconColor, '--bg-color': bgColor }"
  >
    <div class="icon">
      <i :class="icon"></i>
    </div>
    <h1 class="caption">{{ caption }}</h1>
    <p class="desc">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Section extends Vue {
  @Prop({ required: true })
  caption!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true })
  icon!: string;

  @Prop({ required: true })
  iconColor!: string;

  @Prop({ required: true })
  bgColor!: string;
}
</script>

<style lang="scss" scoped>
.section {
  padding: 70px 80px;
  border-radius: 15px;
  background-color: var(--bg-color);
}

.icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--icon-color);

  i {
    font-size: 24px;
  }
}

.caption {
  font-family: Poppins;
  font-size: 36px;
  margin: 30px 0 5px;
}

.desc {
  margin: 12px 0 0;
}
</style>
