<script setup lang="ts">
import type { PixelSize } from '@/assets/code/common-types'
import type { PropType } from 'vue'
import { isValidColorName } from '@/assets/code/common-tools'

defineProps({
  gap: {
    type: String as PropType<PixelSize>,
    default: '24px'
  },
  background: {
    type: String,
    validator: (value: string) => isValidColorName(value),
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
