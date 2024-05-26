<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="InputsSet">
    <h2>{{ title }}</h2>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass">
.InputsSet
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 8px

  > h2
    margin: 0

  > div
    display: flex
    flex-direction: column
    justify-content: start
    align-items: stretch
    gap: 8px
</style>
