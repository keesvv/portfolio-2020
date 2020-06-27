<template>
  <div class="projectItem row">
    <div class="left col-sm">
      <h1 class="header">
      {{ projectData.name }}
      </h1>
      <div class="timeline">
        <span class="from">{{ projectData.timeline.from }}</span>
        <span class="separator">&ndash;</span>
        <span class="to">{{ projectData.timeline.to }}</span>
      </div>
      <p v-html="projectData.description" class="description"></p>
    </div>
    <div class="right col-sm">
      <img class="icon"
        :src="require(`../assets/projects/${projectData.icon}`)"
        :style="{ width: projectData.iconWidth }"
        v-if="projectData.icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.projectItem {
  padding: 0 10px 40px;

  .header {
    font-family: Nunito;
    font-weight: bolder;
    font-size: 32px;
    margin: 0;
  }

  .timeline {
    color: gray;
    margin-bottom: 10px;

    .separator {
      padding: 0 3px;
    }
  }

  .description {
    max-width: 550px;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
}
</style>
