<script setup>

</script>

<template>
  <div class="footer">
    <p>Made with ❤️, ☄️ and 🦕 using <a href="https://github.com/lonelynerd/PrettyHeroes">PrettyHeroes</a></p>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .footer {
    padding: 16px 0;
    width: 100%;
    height: fit-content;
    opacity: 1;
    text-align: center;
    background: color-mix(in srgb, var(--cbg), transparent 50%);
    backdrop-filter: blur(10px);
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
    padding: 2vh 0;
    width: 100%;
    height: fit-content;
    opacity: 1;
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