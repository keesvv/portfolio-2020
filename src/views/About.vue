<template>
  <div class="about container" v-html="about"></div>
</template>

<script>
export default {
  data() {
    return {
      about: '',
    };
  },
  methods: {
    getAbout() {
      fetch('https://raw.githubusercontent.com/keesvv/keesvv/master/README.md')
        .then(fetchResult => fetchResult.body.getReader().read())
        .then((result) => {
          // eslint-disable-next-line no-undef
          const converter = new showdown.Converter();
          const rawContent = new TextDecoder('utf-8')
            .decode(result.value)
            .split('\n');

          rawContent.splice(0, 3);

          this.about = converter.makeHtml(rawContent.join('\n'));
        });
    },
  },
  created() {
    this.getAbout();
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
