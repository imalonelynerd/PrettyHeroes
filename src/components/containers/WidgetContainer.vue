<script setup lang="ts">
import { getGenericHero } from '@/assets/ts/hero/hero-factory'
import type { PixelSize } from '@/assets/ts/common-types'
import type { PropType } from 'vue'

defineProps({
  gap: {
    type: String as PropType<PixelSize>,
    default: '24px'
  },
  background: {
    type: String,
    default: getGenericHero().colors.background
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
