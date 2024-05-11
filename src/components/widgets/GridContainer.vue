<script setup>
defineProps({
  rows: {
    type: Number,
    default: 4
  }
})
</script>

<template>
  <div class="GridContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.GridContainer
  display: grid
  grid-auto-rows: 1fr
  grid-template-columns: repeat(v-bind(rows), 1fr)
  gap: 12px
</style>
