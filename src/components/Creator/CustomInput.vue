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
.phinput {
  padding: 16px 24px;
  border-radius: 999px;
  border: none;
  font-size: 1em;
  background: var(--bg);
  transition: all 0.25s;
  color: var(--text);
  flex: 1 1;
  filter: var(--shadow);
}

.phinput:hover {
  background: var(--ho) !important;
}
</style>