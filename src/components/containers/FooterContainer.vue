<script setup lang="ts">
import { isValidColorName } from '@/assets/ts/common-tools'

defineProps({
  background: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--background)'
  },
  fontColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--text)'
  }
})
</script>

<template>
  <div class="HeroFooter">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.HeroFooter
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  gap: 24px
  background: v-bind(background)
  padding: 16px
  color: v-bind(fontColor)
  border-radius: var(--radius-widget)
  backdrop-filter: var(--blur)

  *
    margin: 0

  a
    font-weight: 600
</style>
