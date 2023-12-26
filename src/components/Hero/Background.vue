<script setup>
defineProps([
  "bgImg"
])
</script>

<template>
  <div v-if="bgImg !== undefined" :style="`background : url('${bgImg}') no-repeat center center, var(--cbg)`"
       class="background"/>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  z-index: -1;
  background-size: cover !important;
}
</style>