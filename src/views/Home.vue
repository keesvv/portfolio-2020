<template>
  <div class="home">
    <section class="sectionSkills">
      <h1 class="header">Skills</h1>
      <skill-tree class="skillTree" />
    </section>
  </div>
</template>

<script>
import SkillTree from '@/components/SkillTree.vue';

export default {
  components: {
    SkillTree,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .header {
    font-weight: bolder;
    font-size: 42px;
    text-align: center;
  }

  .skillTree {
    margin: 60px auto 100px;
  }
}
</style>
