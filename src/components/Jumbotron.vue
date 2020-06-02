<template>
  <div class="jumbotron">
    <div class="content">
      <div class="socialLinks">
        <a class="social github" target="_blank" href="https://github.com/keesvv">
          <i class="fab fa-github"></i>
        </a>
        <a class="social twitter" target="_blank" href="https://twitter.com/keesvv">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="social linkedin" target="_blank" href="https://www.linkedin.com/in/keesvv">
          <i class="fab fa-linkedin"></i>
        </a>
        <a class="social instagram" target="_blank" href="https://www.instagram.com/kees.dev">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <h1 class="header">
        Hi!
      </h1>
      <h2 class="subheader">
        My name is <strong>Kees van Voorthuizen</strong> — I'm a 16-years-old Dutch
        full stack developer and CTO & Co-founder of <a href="https://tribecamp.com" target="_blank">Tribecamp</a>.
      </h2>
      <img src="@/assets/profile.jpg" class="profilePicture">
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
  background: white;
  padding: 160px 100px;

  @media (max-width: 768px) {
    padding: 80px 40px
  }

  .socialLinks {
    margin-bottom: 15px;

    .social {
      color: rgb(120, 120, 120);
      font-size: 28px;
      margin-right: 15px;
    }
  }

  .header {
    font-size: 85px;
  }

  .subheader {
    font-size: 35px;
    max-width: 500px;
    font-weight: lighter;
    margin-bottom: 60px;

    strong {
      font-weight: bolder;
    }
  }

  .profilePicture {
    border-radius: 50%;
    width: 150px;
    margin-bottom: 15px;
  }
}
</style>
