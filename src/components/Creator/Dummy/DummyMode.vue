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
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    z-index: 10;
    box-shadow: var(--shadow);
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
    bottom: 10vw;
    right: 5vw;
    height: 4vw;
    width: 4vw;
    padding: 6vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    z-index: 10;
    box-shadow: var(--shadow);
  }

  .dummybtn:active {
    background: var(--ho);
  }

  .dummybtn > img {
    height: 1.25em;
  }

  .dummybtn > p {
    display: none;
    /*margin: 0 0 0 2vw;
    padding: 0;
    transition: all 0.25s;*/
  }
}
</style>