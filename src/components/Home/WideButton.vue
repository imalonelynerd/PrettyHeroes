<script setup>
defineProps([
  "imgLink",
  "shownTitle",
  "isDisabled",
  "filColor"
])

defineEmits(['update:buttonClicked', 'update:buttonDisabled']);
</script>

<template>
  <a class="wbtn"
     :class="{ 'disabled' : isDisabled && isDisabled === true, 'color' : filColor && filColor === true  }"
     @click="$emit(isDisabled && isDisabled === true ? 'update:buttonDisabled' : 'update:buttonClicked')">
    <img v-if="imgLink" :src="imgLink" :alt="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </a>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .wbtn {
    padding: 16px 24px;
    border-radius: var(--radius-button);
    box-shadow: var(--shadow);
    font-size: 1em;
    font-weight: bold;
    border: none;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .wbtn:hover {
    background: var(--ho);
  }

  .wbtn > img {
    height: 1.25em;
    transition: all 0s !important;
    filter: var(--fil) !important;
  }

  .wbtn > p {
    margin: 0 0 0 8px;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .disabled > * {
    opacity: 0.5 !important;
  }

  .color > img {
    filter: none !important;
  }
}

</style>