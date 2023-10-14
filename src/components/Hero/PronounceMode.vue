<script setup>
defineEmits([
  "update:hideBtn"
])

</script>

<template>
  <a class="messbtn" @click="$emit('update:hideBtn')">
    <img src="/icons/pronounce.png">
    <p>Pronounce</p>
  </a>
</template>

<style scoped>

@media screen and (orientation: landscape) {
  .messbtn {
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
    box-shadow: var(--shadow);
  }

  .messbtn:hover {
    background: var(--ho);
  }

  .messbtn > img {
    height: 1.25em;
  }

  .messbtn > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }
}

@media screen and (orientation: portrait) {
  .messbtn {
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
    box-shadow: var(--shadow);
    z-index: 2;
  }

  .messbtn:active {
    background: var(--ho);
  }

  .messbtn > img {
    height: 1.25em;
  }

  .messbtn > p {
    margin: 0 0 0 1vh;
    padding: 0;
    transition: all 0.25s;
  }
}
</style>