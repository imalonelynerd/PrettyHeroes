<script setup>
import homeInfo from "@/assets/json/homeInfo.json"
</script>

<template>
  <div class="hfooter">
    <p>©️ 2023 <b>Nerd</b></p>
    <p>⋅</p>
    <p>Some rights reserved</p>
    <p>⋅</p>
    <p>Hosted by <b>{{ homeInfo.hostedBy }}</b> for <b>{{ homeInfo.hostedOn }}</b></p>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .hfooter {
    padding: 16px 64px;
    margin-top: 32px;
    height: fit-content;
    opacity: 1;
    gap: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    backdrop-filter: var(--blur);
  }

  .hfooter > p {
    margin: 0;
  }

  .hfooter a {
    font-weight: bold;
  }
}

@media screen and (hover: none) {
  .hfooter {
    padding: 4vw 10vw;
    margin-top: 6vw;
    height: fit-content;
    opacity: 1;
    gap: 2vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    backdrop-filter: var(--blur);
  }

  .hfooter > p {
    margin: 0;
  }

  .hfooter a {
    font-weight: bold;
  }
}
</style>