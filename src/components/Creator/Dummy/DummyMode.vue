<script setup>

defineEmits([
  "update:hideBtn"
])

</script>

<template>
  <a class="dummybtn" @click="$emit('update:hideBtn')">
    <img src="/icons/create.png">
    <p>Dummy Mode</p>
  </a>
</template>

<style scoped>

@media screen and (hover: hover) {
  .dummybtn {
    position: fixed;
    top: 32px;
    left: 32px;
    width: fit-content;
    padding: 16px 24px;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    background: var(--wi);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;

  }

  .dummybtn:hover {
    background: var(--ho);
  }

  .dummybtn > img {
    height: 1.25em;
  }

  .dummybtn > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }
}

@media screen and (hover: none) {
  .dummybtn {
    position: fixed;
    bottom: 5vh;
    left: 10vh;
    right: 10vh;
    padding: 2vh 3vh;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    background: var(--al);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;

  }

  .dummybtn:hover {
    background: var(--ho);
  }

  .dummybtn > img {
    height: 1.25em;
  }

  .dummybtn > p {
    margin: 0 0 0 1vh;
    padding: 0;
    transition: all 0.25s;
  }
}
</style>