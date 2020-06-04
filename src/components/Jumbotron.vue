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
        My name is <strong>Kees van Voorthuizen</strong> — I'm a 17-years-old Dutch
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
    padding: 80px 40px;

    .header {
      font-size: 72px !important;
    }

    .subheader {
      font-size: 28px !important;
    }

    .socialLinks .social {
      font-size: 24px !important;
    }
  }

  .socialLinks {
    margin-bottom: 15px;

    .social {
      color: rgb(120, 120, 120);
      font-size: 28px;
      margin-right: 15px;
      animation: fadeIn 1.5s backwards;

      &:nth-of-type(1) { animation-delay: 4.2s; }
      &:nth-of-type(2) { animation-delay: 4.4s; }
      &:nth-of-type(3) { animation-delay: 4.6s; }
      &:nth-of-type(4) { animation-delay: 4.8s; }
    }
  }

  .header {
    font-size: 85px;
    animation: fadeIn 1.5s backwards 0.5s;
  }

  .subheader {
    font-size: 35px;
    max-width: 500px;
    font-weight: lighter;
    margin-bottom: 60px;
    animation: fadeIn 1.5s backwards 1.5s;

    strong {
      font-weight: bolder;
    }
  }

  .profilePicture {
    border-radius: 50%;
    width: 150px;
    margin-bottom: 15px;
    animation: fadeIn 2s backwards 3s;
  }
}
</style>
