<template>
  <div id="app">
    <jumbotron />

    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron';

export default {
  components: {
    Jumbotron,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0; 
}

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
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
