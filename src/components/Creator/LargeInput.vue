<script setup>
defineProps(['customValue', 'placeHolder']);
defineEmits(['update:valueUpdated']);
</script>

<template>
  <textarea :placeholder="placeHolder"
            :value="customValue"
            class="linput"
            rows="10"
            @input="$emit('update:valueUpdated', $event.target.value)"/>
</template>

<style scoped>
@media screen and (hover: hover) {
  .linput {
    padding: 16px 24px;
    border-radius: var(--radius-input);
    resize: none;
    border: none;
    font-size: 1em;
    font-family: inherit;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    color: var(--text);
    flex: 1 1;
  }

  .linput:hover {
    background: var(--ho) !important;
  }
}
@media screen and (hover: none){
  .linput {
    padding: 4vw 6vw;
    border-radius: var(--radius-input);
    resize: none;
    border: none;
    font-size: 1em;
    font-family: inherit;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    color: var(--text);
    flex: 1 1;

  }

  .linput:active {
    background: var(--ho) !important;
  }
}

</style>