<script setup>
defineProps(["ogFile"])
import homeInfo from "@/assets/json/homeInfo.json"
</script>

<template>
  <div class="footer">
    <p>Made with ❤️, ☄️ and 🦕 using <a href="https://github.com/lonelynerd/PrettyHeroes">{{ homeInfo.appName }}</a></p>
    <p v-if="ogFile && ogFile !== ''">⋅</p>
    <a v-if="ogFile && ogFile !== ''" :href="ogFile">Get source file</a>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .footer {
    padding: 16px 64px;
    height: fit-content;
    opacity: 1;
    gap: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .footer > p {
    margin: 0;
  }

  .footer a {
    font-weight: bold;
  }
}

</style>