<script setup>
defineProps([
  "onClick",
  "imgLink",
  "shownTitle"
])
</script>

<template>
  <a @click="onClick">
    <img :src="imgLink" :alt="imgLink">
    <p>{{ shownTitle }}</p>
  </a>
</template>

<style scoped>

@media only screen and (orientation: landscape) {
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    border-radius: 32px;
    padding: 16px 32px;
    background: none;
    cursor: pointer;
  }

  a:hover {
    border-radius: 0 32px 32px 0;
    transform: translateX(-16px);
    background: var(--bg);
  }

  a > img {
    height: 24px;
    margin-right: 16px;
  }

  a > p {
    margin: 0;
    font-weight: bold;
  }
}


@media only screen and (orientation: portrait) {
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 12vw;
    padding: 4vw 6vw;
    background: none;
    cursor: pointer;
  }

  a:active {
    background: var(--bg);
  }

  a > img {
    height: 4vw;
    margin-right: 2vw;
  }

  a > p {
    font-size: 3.5vw;
    margin: 0;
    font-weight: bold;
  }
}

</style>