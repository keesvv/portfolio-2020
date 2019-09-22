<template>
  <div class="jumbotron">
    <div class="content">
      <img src="@/assets/profile.jpg" class="profilePicture">
      <h1 class="header">
        <span class="blue">console</span>.<span class="green">log</span>('<span class="black">Hi there! My name is <strong>Kees van Voorthuizen</strong></span>');
        <span class="cursor"></span>
      </h1>
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(235, 235, 235);
  padding: 150px 20px;
  text-align: center;

  .profilePicture {
    border-radius: 50%;
    width: 150px;
    margin-bottom: 15px;
  }

  .header {
    color: rgb(140, 140, 140);
    font-weight: normal;
    font-family: monospace;

    .blue {
      color: rgb(23, 133, 235);
    }

    .green {
      color: rgb(31, 167, 31);
    }

    .black {
      color: black;
    }
  }

  .cursor {
    margin-left: 8px;
    background: black;
    padding: 0 8px;
    animation: pulse 0.6s alternate infinite linear;
  }
}
</style>
