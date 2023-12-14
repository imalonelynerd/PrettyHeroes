<script setup>
import {ref} from "vue";

const props = defineProps([
  "imgLink",
  "shownTitle",
  "isDisabled"
])

defineEmits(['update:buttonToggled', 'update:buttonDisabled']);

const isToggled = ref(false);

if (props.isDisabled) {
  isToggled.value = false;
}
</script>

<template>
  <a class="tbtn" :class="{ 'toggled' : isToggled, 'disabled' : isDisabled }"
     @click="$emit(isDisabled && isDisabled === true ? 'update:buttonDisabled' : 'update:buttonToggled'); isToggled = isDisabled && isDisabled === true ? isToggled : !isToggled">
    <img v-if="imgLink" :src="imgLink" :alt="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </a>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .tbtn {
    padding: 16px 24px;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    border: none;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .tbtn:hover {
    background: var(--ho);
  }

  .tbtn > img {
    height: 1.25em;
  }

  .tbtn > p {
    margin: 0 0 0 8px;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .toggled {
    box-shadow: inset 0 0 0 4px var(--ho);
  }

  .toggled:hover {
    box-shadow: inset 0 0 0 4px var(--wi);
  }

  .disabled > * {
    opacity: 0.5;
  }
}

</style>