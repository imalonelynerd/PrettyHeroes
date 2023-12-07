<script setup>
defineProps([
  "hrefLink",
  "imgLink",
  "shownTitle",
  "isImportant",
])

defineEmits([
  "update:buttonClicked"
])
</script>

<template>
  <a :class="{ important : isImportant, noimage : imgLink === '' }" class="link" @click="$emit('update:buttonClicked')">
    <img v-if="imgLink !== ''" :src="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </a>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .link {
    margin: 0;
    padding: 16px;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: 200px;
    transition: all 0.25s;
    gap: 8px;
  }

  .link:hover {
    padding: 16px 24px;
    background: var(--ho);
    backdrop-filter: var(--blur);
  }

  .link > img {
    height: 1.25em;
  }

  .link > p {
    margin: 0;
    padding: 0;
    transition: all 0.25s;
  }
}

@media screen and (orientation: portrait) {
  .link {
    margin: 0;
    padding: 4vw 4vw;
    border-radius: 12vw;
    font-size: 1em;
    font-weight: bold;
    background: var(--wi);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .link:active {
    background: color-mix(in srgb, var(--ho), var(--alpha));
    backdrop-filter: var(--blur);
  }

  .link > img {
    height: 1.5em;
  }

  .link > p {
    display: none;
  }
}
</style>