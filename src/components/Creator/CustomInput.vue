<script setup>
defineProps(['modelValue', 'placeHolder']);
defineEmits(['update:modelValue']);
</script>

<template>
  <input class="phinput"
         type="text"
         :value="modelValue"
         :placeholder="placeHolder"
         @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped>
@media screen and (hover: hover) {
  .phinput {
    padding: 16px 24px;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    color: var(--text);
    flex: 1 1;

  }

  .phinput:hover {
    background: var(--ho) !important;
  }
}

@media screen and (hover: none) {
  .phinput {
    padding: 4vw 6vw;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    color: var(--text);
    flex: 1 1;

  }

  .phinput:active {
    background: var(--ho) !important;
  }
}

</style>