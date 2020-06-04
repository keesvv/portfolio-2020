<template>
  <div class="tabBar">
    <router-link v-for="(i, index) in tabs" :to="i.route" :key="index" class="tab">
      {{ i.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: 'Skills',
          route: '/',
        },
        {
          name: 'Projects',
          route: '/projects',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tabBar {
  text-align: center;
  margin-bottom: 60px;

  .tab {
    color: black;
    font-weight: bolder;
    text-decoration: none;
    font-size: 18px;
    padding: 2px 15px;

    &.router-link-exact-active {
      border-bottom: 3px solid black;
    }
  }
}
</style>
