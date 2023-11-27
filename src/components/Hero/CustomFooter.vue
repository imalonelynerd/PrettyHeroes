<script setup>
defineProps(["ogFile"])
</script>

<template>
  <div class="footer">
    <p>Made with ❤️, ☄️ and 🦕 using <a href="https://github.com/lonelynerd/PrettyHeroes">PrettyHeroes</a></p>
    <p v-if="ogFile !== ''">⋅</p>
    <a v-if="ogFile !== ''" :href="ogFile">Get source file</a>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .footer {
    padding: 16px 0;
    width: 100%;
    height: fit-content;
    opacity: 1;
    gap: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
  }

  .footer > p {
    margin: 0;
  }

  .footer a {
    font-weight: bold;
  }
}

@media screen and (hover: none) {
  .footer {
    padding: 4vw 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    opacity: 1;
    text-align: center;
  }

  .footer > *:not(:first-child) {
    display: none;
  }

  .footer > p {
    margin: 0;
  }

  .footer a {
    font-weight: bold;
  }
}

</style>