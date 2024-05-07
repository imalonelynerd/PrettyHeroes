<script setup>
defineProps([
  "bgImg"
])
</script>

<template>
  <div v-if="bgImg !== undefined" :style="`background : url('${bgImg}'), var(--cbg)`"
       class="background"/>
</template>

<style scoped>

@media screen and (hover: hover) {
  .background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    z-index: -1;
    background-size: cover !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
  }
}

@media screen and (hover: none) {
  .background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    z-index: -1;
    background-position: top center !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
}
</style>