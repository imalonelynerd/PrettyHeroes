<script setup>
defineProps(['customValue', 'placeHolder']);
defineEmits(['update:valueUpdated']);
</script>

<template>
  <textarea :placeholder="placeHolder"
            :value="customValue"
            class="linput"
            rows="6"
            @input="$emit('update:valueUpdated', $event.target.value)"/>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .linput {
    padding: 16px 24px;
    border-radius: var(--radius-input);
    resize: none;
    border: none;
    font-size: 1em;
    font-family: inherit;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    color: var(--text);
    flex: 1 1;
    box-shadow: var(--shadow);

  }

  .linput:hover {
    background: var(--ho) !important;
  }
}
</style>