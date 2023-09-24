<script setup>
defineProps(['imgSrc', 'placeHolder']);
defineEmits(['update:imgSrc']);
</script>

<template>
  <div class="iminput">
    <div :style="`background : url('${imgSrc}'), url('/images/notfound.png')`"/>
    <input
        type="text"
        :value="imgSrc"
        :placeholder="placeHolder"
        @input="$emit('update:imgSrc', $event.target.value)">
  </div>
</template>

<style scoped>

.iminput {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
}

.iminput > *:not(:last-child) {
  margin-right: 8px;
}

.iminput > div {
  border-radius: 999px;
  width: 52px;
  height: 52px;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
}

.iminput > input {
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