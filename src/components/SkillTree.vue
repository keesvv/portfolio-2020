<template>
  <div class="skillTree">
    <div class="skill" v-for="(i, index) in skills" :key="index">
      <div class="progressBar" :style="{
        width: `${i.rate * 10}%`,
        background: i.bg,
        color: i.fg
      }">
        <span class="skillName">
          {{ i.name }}
          <span v-if="i.related" class="related">
            > {{ i.related.join(' > ') }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'Vue.js', related: ['Vuex', 'Vue Router'], rate: 10, bg: '#09eb94',
        },
        {
          name: 'JavaScript', related: ['ES6', 'FP'], rate: 10, bg: '#ffce54',
        },
        { name: 'Node.js', rate: 10, bg: '#ffce54' },
        {
          name: 'HTML', rate: 10, bg: '#ff6262', fg: '#ffffff',
        },
        {
          name: 'CSS', related: ['SCSS'], rate: 9, bg: '#51c1fd',
        },
        {
          name: 'C#', rate: 8, bg: '#5cbd38', fg: '#ffffff',
        },
        {
          name: 'Python', rate: 6, bg: '#4195e4', fg: '#ffffff',
        },
        {
          name: 'MongoDB', related: ['Mongoose'], rate: 7, bg: 'white',
        },
        { name: 'Git', rate: 7, bg: 'white' },
        {
          name: 'Linux', related: ['Bash'], rate: 7, bg: 'white',
        },
        { name: 'Docker', rate: 6, bg: 'white' },
        { name: 'Redis', rate: 5, bg: 'white' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skillTree {
  .skill {
    margin-top: 8px;

    &:first-of-type {
      margin-top: 0;
    }

    .progressBar {
      border-radius: 20px;
      text-align: left;
      padding: 10px 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);

      .skillName {
        margin-left: 12px;
        font-size: 15px;

        .related {
          color: rgb(100, 100, 100);
        }
      }
    }
  }
}
</style>
