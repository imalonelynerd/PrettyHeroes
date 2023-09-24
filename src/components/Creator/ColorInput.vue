<script setup>
defineProps(['color', 'placeHolder']);
defineEmits(['update:color']);
</script>

<template>
  <div class="cinput">
    <div :style="`background : ${/^#[0-9A-Fa-f]{6,8}$/.test(color)?color:'#00000080'}`"/>
    <input
        pattern="^#[0-9A-Fa-f]{6,8}$"
        type="text"
        :value="color"
        :placeholder="placeHolder"
        @input="$emit('update:color', $event.target.value)">
  </div>
</template>

<style scoped>

.cinput {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
}

.cinput > *:not(:last-child) {
  margin-right: 8px;
  background: #27233f;
}

.cinput > div {
  border-radius: 999px;
  width: 52px;
  height: 52px;
  background: #00000080;
}

.cinput > input {
  padding: 16px 24px;
  border-radius: 999px;
  border: none;
  font-size: 1em;
  background: var(--bg1);
  transition: all 0.25s;
  color: var(--text);
  flex: 1 1;
}
</style>