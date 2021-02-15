<template>
  <div
    class="section"
    :class="{ right }"
    :style="{
      '--icon-color': iconColor,
      '--bg-color': bgColor,
    }"
  >
    <div class="left">
      <div class="icon">
        <i :class="icon"></i>
      </div>
      <h1 class="caption">{{ caption }}</h1>
      <p class="desc">
        <slot name="description" />
      </p>
    </div>
    <div class="right">
      <div class="imagePlaceholder"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Section extends Vue {
  @Prop({ required: true })
  caption!: string;

  @Prop({ required: true })
  icon!: string;

  @Prop({ required: true })
  iconColor!: string;

  @Prop({ required: true })
  bgColor!: string;

  @Prop()
  right!: boolean;
}
</script>

<style lang="scss" scoped>
.section {
  padding: 70px var(--text-padding);
  border-radius: 15px;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.right {
    flex-direction: row-reverse;
  }
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
  max-width: 800px;
  font-size: 18px;
  color: rgb(100, 100, 100);
}

// TODO: remove
.imagePlaceholder {
  background: red;
  width: 500px;
  height: 300px;
}
</style>
