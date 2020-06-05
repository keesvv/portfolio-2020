<template>
  <div class="projects container">
    <project-item v-for="(i, index) in projects"
      :project-data="i" :key="index" />
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  data() {
    return {
      projects: [
        {
          name: 'Tribecamp',
          timeline: {
            from: '2018',
            to: 'present',
          },
          description: `
          Tribecamp is a social network for students and professionals.
          The project was initiated by Boaz van der Schaaf around mid-2016.
          When I met Boaz at a New Year's Eve party in 2018, he told me
          about this idea he had in mind for a social network. I got
          pretty excited about it and started the development of Tribecamp
          (called "Tribe" back then) only a couple of days after. Up
          until this day, I am in charge of the frontend, backend,
          DevOps, database administration, quality assurance and security
          of Tribecamp.
          `,
          icon: 'tribecamp.png',
          iconWidth: '300px',
        },
        {
          name: 'Project: Delta',
          timeline: {
            from: '2018',
            to: '2019',
          },
          description: `
          Project: Delta is an Electron-based desktop app I made as
          a wrapper for Magister, the Dutch secondary education platform.
          The idea behind Delta was to provide a much cleaner user interface
          and an easier-to-use UX. It has received quite some attention on
          GitHub around the beginning of 2019. When I started working on
          Tribecamp, I slowly began to abandon Delta. Eventually, I had
          discontinued further development of the project.
          `,
          icon: 'projectdelta.png',
          iconWidth: '180px',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  .placeholder {
    font-size: 22px;
    padding: 50px 0;
    color: gray;
  }
}
</style>
