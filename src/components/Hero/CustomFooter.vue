<script setup>

</script>

<template>
  <div class="footer">
    <p>Made with ❤️ using <a href="https://github.com/lonelynerd/PrettyHeroes">PrettyHeroes</a></p>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .footer {
    padding: 0 0 16px;
    width: 100%;
    height: fit-content;
    opacity: 0.66;
    text-align: center;
  }

  .footer > p {
    margin: 0;
  }

  .footer > p > a {
    font-weight: bold;
  }
}
@media screen and (orientation: portrait) {
  .footer {
    padding: 0 0 2vh;
    width: 100%;
    height: fit-content;
    opacity: 0.66;
    text-align: center;
  }

  .footer > p {
    margin: 0;
  }

  .footer > p > a {
    font-weight: bold;
  }
}

</style>