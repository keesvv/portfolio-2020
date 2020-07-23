import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Skills from './views/Skills.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/about',
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/skills',
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
