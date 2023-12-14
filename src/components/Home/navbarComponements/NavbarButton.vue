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
    <img v-if="imgLink !== ''" :src="imgLink" :alt="imgLink">
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
  }
}
</style>