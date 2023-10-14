<script setup>

</script>

<template>
  <div class="footer">
    <p>Made with ❤️, ☄️ and 🦕 using <a href="https://github.com/lonelynerd/PrettyHeroes">PrettyHeroes</a></p>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .footer {
    padding: 16px 0;
    width: 100%;
    height: fit-content;
    opacity: 1;
    text-align: center;
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
  }

  .footer > p {
    margin: 0;
  }

  .footer > p > a {
    font-weight: bold;
  }
}

@media screen and (hover: none) {
  .footer {
    padding: 4vw 0;
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