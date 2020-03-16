<template>
  <div class="jumbotron">
    <div class="content">
      <h1 class="header">
        Hi!
      </h1>
      <h2 class="subheader">
        My name is <strong>Kees van Voorthuizen</strong> — I'm a 16-years-old Dutch programmer,
        full stack web developer and CTO & Co-founder of <a href="https://tribecamp.com">Tribecamp</a>.
      </h2>
      <img src="@/assets/profile.png" class="profilePicture">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes pulse {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.jumbotron {
  background: rgb(57, 0, 104);
  color: white;
  padding: 160px 100px;

  @media (max-width: 768px) {
    padding-left: 70px;
    padding-right: 70px;
  }

  .header {
    font-size: 80px;
    font-weight: lighter;
  }

  .subheader {
    font-size: 35px;
    max-width: 500px;
    font-weight: lighter;
    margin-bottom: 60px;
  }

  .profilePicture {
    border-radius: 50%;
    width: 150px;
    margin-bottom: 15px;
  }
}
</style>
