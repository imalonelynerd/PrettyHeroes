<script setup>
defineProps(['imgSrc', 'placeHolder']);
defineEmits(['update:imgSrc']);
</script>

<template>
  <input
      class="iminput"
      :style="`background : linear-gradient(#00000040, #00000040), url('${imgSrc}'), var(--bg1)`"
      type="text"
      :value="imgSrc"
      :placeholder="placeHolder"
      @input="$emit('update:imgSrc', $event.target.value)">
</template>

<style scoped>

.iminput {
  padding: 16px 24px;
  border-radius: 999px;
  border: none;
  font-size: 1em;
  background: var(--bg1);
  transition: all 0.25s;
  color: var(--text);
  filter: var(--shadow);
  min-width: 0;
  flex: 1 1;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
}
</style>