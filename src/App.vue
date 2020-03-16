<template>
  <div id="app">
    <jumbotron />
    <router-view />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  components: {
    Jumbotron,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
}

a {
  color: rgb(60, 154, 241);
}

section {
  padding: 30px 0;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
}

#nav {
  text-align: center;
  padding: 30px;

  a {
    padding: 10px 25px;
    margin: 0 10px;

    &:first-of-type {
      margin-left: 0;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
