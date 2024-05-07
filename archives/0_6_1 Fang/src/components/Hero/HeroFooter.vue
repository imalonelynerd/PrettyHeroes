<script setup>
defineProps(["ogFile"])
import hostInfo from "@/assets/json/hostInfo.json"
</script>

<template>
  <div class="footer">
    <p>Made with ❤️, ☄️ and 🦕 using <a href="https://github.com/lonelynerd/PrettyHeroes">{{ hostInfo.appName }}</a></p>
    <p v-if="ogFile && ogFile !== ''">⋅</p>
    <a v-if="ogFile && ogFile !== ''" :href="ogFile">Get source file</a>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .footer {
    padding: 16px 64px;
    height: fit-content;
    opacity: 1;
    gap: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--ctxt);
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
    color: var(--ctxt);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4vw 8vw;
    height: fit-content;
    opacity: 1;
    gap: 2vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: var(--cbg);
    border-radius: var(--radius) var(--radius) 0 0;
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