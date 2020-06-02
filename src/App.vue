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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: rgb(248, 248, 248);
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
}

a {
  color: rgb(60, 154, 241);
}

h1 {
  font-family: Poppins;
}

section {
  padding: 30px 0;
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
