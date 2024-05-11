<script setup>
defineProps({
  gap: {
    type: String,
    default: '24px'
  },
  background: {
    type: String,
    default: 'var(--background)'
  }
})
</script>

<template>
  <div class="WidgetContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.WidgetContainer
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  gap: v-bind(gap)
  background: v-bind(background)
  border-radius: var(--radius-widget)
  backdrop-filter: var(--blur)
  padding: 32px
</style>
