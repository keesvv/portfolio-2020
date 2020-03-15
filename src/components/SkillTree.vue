<template>
  <div class="skillTree">
    <div class="skill" v-for="(i, index) in skills" :key="index"
         @mouseover="hoverIndex = index"
         @mouseleave="hoverIndex = null"
    >
      <div class="content">
        <img v-if="i.img" :src="getImg(i)" alt="Logo" class="logo" :style="{
          height: i.size
        }">
        <span class="name" v-show="hoverIndex === index">{{ i.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverIndex: null,
      skills: [
        {
          name: 'Vue.js',
          related: ['Vuex', 'Vue Router'],
          img: 'vue.png',
        },
        {
          name: 'JavaScript',
          related: ['ES6', 'FP'],
          img: 'javascript.png',
        },
        {
          name: 'TypeScript',
          img: 'typescript.png',
        },
        {
          name: 'Node.js',
          img: 'node.png',
        },
        {
          name: 'HTML',
          img: 'html.png',
        },
        {
          name: 'CSS',
          related: ['SCSS'],
          img: 'css.png',
        },
        {
          name: 'Electron',
          img: 'electron.png',
        },
        {
          name: 'Sass',
          img: 'sass.png',
        },
        {
          name: 'C#',
          img: 'csharp.png',
        },
        {
          name: 'Python',
          img: 'python.png',
        },
        {
          name: 'Socket.io',
          img: 'socketio.svg',
        },
        {
          name: 'Express.js',
          img: 'expressjs.png',
          size: '36px',
        },
        {
          name: 'Mongoose',
          img: 'mongoose.jpg',
          size: '62px',
        },
        {
          name: 'MongoDB',
          related: ['Mongoose'],
          img: 'mongodb.png',
          size: '28px',
        },
        {
          name: 'Git',
          img: 'git.png',
        },
        {
          name: 'Linux',
          related: ['Bash'],
          img: 'linux.png',
        },
        {
          name: 'Docker',
          img: 'docker.png',
        },
        {
          name: 'Redis',
          img: 'redis.png',
        },
        {
          name: 'Webpack',
          img: 'webpack.png',
        },
        {
          name: 'ESLint',
          img: 'eslint.png',
        },
        {
          name: 'Mocha',
          img: 'mocha.png',
        },
        {
          name: 'Stripe',
          img: 'stripe.png',
          size: '58px',
        },
        {
          name: 'Twilio SendGrid',
          img: 'sendgrid.png',
        },
      ],
    };
  },
  methods: {
    getImg(skill) {
      if (skill.img) {
        // eslint-disable-next-line
        return require(`../assets/skills/${skill.img}`);
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.skillTree {
  width: 40%;
  display: block;
  margin: 0 auto;

  .skill {
    display: inline-block;
    position: relative;
    width: 150px;
    height: 100px;
    margin: 8px 10px 0;
    border-radius: 6px;
    padding: 10px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.10);
    text-align: center;

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .logo {
      height: 48px;
    }

    .name {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px 0;
      background: rgba(255, 255, 255, 0.5);
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  }
}
</style>
