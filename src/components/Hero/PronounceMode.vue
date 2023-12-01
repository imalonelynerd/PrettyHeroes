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
    border-radius: var(--radius-button);
    backdrop-filter: var(--blur);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    z-index: 2;
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
    display: none;
  }
}
</style>