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
@media screen and (orientation: landscape) {
  .phinput {
    padding: 16px 24px;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: var(--wi);
    transition: all 0.25s;
    color: var(--text);
    flex: 1 1;

  }

  .phinput:hover {
    background: var(--ho) !important;
  }
}

@media screen and (orientation: portrait) {
  .phinput {
    padding: 2vh 3vh;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: var(--wi);
    transition: all 0.25s;
    color: var(--text);
    flex: 1 1;

  }

  .phinput:active {
    background: var(--ho) !important;
  }
}

</style>