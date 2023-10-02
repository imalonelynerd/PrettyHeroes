<script setup>
defineProps(['modelValue', 'placeHolder']);
defineEmits(['update:modelValue']);
</script>

<template>
  <textarea class="linput"
            rows="5"
            :value="modelValue"
            :placeholder="placeHolder"
            @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<style scoped>
.linput {
  padding: 16px 24px;
  border-radius: 24px;
  resize: none;
  border: none;
  font-size: 1em;
  font-family: inherit;
  background: var(--bg);
  transition: all 0.25s;
  color: var(--text);
  flex: 1 1;
  filter: var(--shadow);
}
</style>