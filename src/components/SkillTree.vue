<template>
  <div class="skillTree container">
    <div class="skillCategory" v-for="(i, categoryIndex) in categories" :key="categoryIndex">
      <span class="categoryName">{{ i.name }}</span>
      <div class="listSkills row">
        <div class="skill" v-for="(j, index) in i.skills" :key="`${categoryIndex}-${index}`"
          @mouseover="hoverIndex = `${categoryIndex}-${index}`"
          @mouseleave="hoverIndex = null"
        >
          <div class="content">
            <img v-if="j.img" :src="getImg(j)" alt="Logo" class="logo" :style="{
              height: j.size
            }">
            <span class="name"
                  v-show="hoverIndex === `${categoryIndex}-${index}`"
            >
              {{ j.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverIndex: null,
      skills: {
        languages: [
          {
            name: 'JavaScript',
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
            img: 'css.png',
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
        ],
        libraries: [
          {
            name: 'Vue.js',
            img: 'vue.png',
            size: '42px',
          },
          {
            name: 'Electron',
            img: 'electron.png',
            size: '42px',
          },
          {
            name: 'Socket.io',
            img: 'socketio.svg',
            size: '42px',
          },
          {
            name: 'Express.js',
            img: 'expressjs.png',
            size: '36px',
          },
          {
            name: 'Bootstrap',
            img: 'bootstrap.svg',
            size: '38px',
          },
        ],
        databases: [
          {
            name: 'MongoDB',
            img: 'mongodb.png',
            size: '28px',
          },
          {
            name: 'Mongoose',
            img: 'mongoose.jpg',
            size: '62px',
          },
          {
            name: 'Redis',
            img: 'redis.png',
          },
        ],
        cloud: [
          {
            name: 'Amazon AWS',
            img: 'aws.png',
            size: '35px',
          },
        ],
        qualityAssurance: [
          {
            name: 'Mocha',
            img: 'mocha.png',
          },
          {
            name: 'Chai',
            img: 'chai.png',
          },
        ],
        ci: [
          {
            name: 'CircleCI',
            img: 'circleci.png',
            size: '40px',
          },
        ],
        sdks: [
          {
            name: 'Stripe',
            img: 'stripe.png',
            size: '58px',
          },
          {
            name: 'Twilio SendGrid',
            img: 'sendgrid.png',
          },
          {
            name: 'Nexmo',
            img: 'nexmo.png',
          },
        ],
        tools: [
          {
            name: 'Git',
            img: 'git.png',
          },
          {
            name: 'Linux',
            img: 'linux.png',
            size: '60px',
          },
          {
            name: 'Docker',
            img: 'docker.png',
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
            name: 'Vim',
            img: 'vim.png',
          },
          {
            name: 'Visual Studio Code',
            img: 'vscode.png',
            size: '40px',
          },
          {
            name: 'IntelliJ IDEA',
            img: 'idea.png',
            size: '50px',
          },
          {
            name: 'GitHub',
            img: 'github.png',
            size: '42px',
          },
          {
            name: 'Bitbucket',
            img: 'bitbucket.svg',
            size: '38px',
          },
          {
            name: 'GitLab',
            img: 'gitlab.svg',
            size: '70px',
          },
          {
            name: 'Slack',
            img: 'slack.jpg',
            size: '40px',
          },
          {
            name: 'Trello',
            img: 'trello.svg',
            size: '36px',
          },
        ],
      },
    };
  },
  computed: {
    categories() {
      return Object.keys(this.skills).map((skill) => {
        const captions = {
          languages: 'Languages',
          libraries: 'Frameworks & Libraries',
          databases: 'Databases & ORMs',
          cloud: 'Cloud Computing',
          qualityAssurance: 'Quality Assurance (QA)',
          ci: 'Continuous Integration & Deployment (CI/CD)',
          sdks: 'SDKs',
          tools: 'Tools',
        };

        return {
          name: captions[skill],
          skills: this.skills[skill],
        };
      });
    },
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
  display: block;
  margin: 0 auto;

  .skillCategory {
    margin-bottom: 30px;

    .listSkills {
      margin: auto 0;
    }

    .categoryName {
      display: block;
      color: gray;
      margin-bottom: 8px;
    }
  }

  .skill {
    $borderRadius: 6px;

    display: inline-block;
    position: relative;
    width: 150px;
    height: 110px;
    margin-right: 15px;
    margin-bottom: 15px;
    border-radius: $borderRadius;
    padding: 10px 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
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
      background: white;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
      border-bottom-left-radius: $borderRadius;
      border-bottom-right-radius: $borderRadius;
    }
  }
}
</style>
