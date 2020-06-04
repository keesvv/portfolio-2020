import Vue from 'vue';
import Router from 'vue-router';
import Skills from './views/Skills.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Skills',
      component: Skills,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
  ],
});
