<script setup>
defineProps(['color', 'placeHolder']);
defineEmits(['update:color']);
</script>

<template>
  <input
      class="cinput"
      :style="`box-shadow : inset 0 0 0 3px ${/^#[0-9A-Fa-f]{6,8}$/.test(color)?color:'#00000000'}`"
      pattern="^#[0-9A-Fa-f]{6,8}$"
      type="text"
      :value="color"
      :placeholder="placeHolder"
      @input="$emit('update:color', $event.target.value)">
</template>

<style scoped>
.cinput {
  padding: 16px 24px;
  border-radius: 999px;
  filter: var(--shadow);
  border: none;
  font-size: 1em;
  background: var(--bg1);
  transition: all 0.25s;
  min-width: 0;
  color: var(--text);
  flex: 1 1;
}
</style>