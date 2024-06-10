<script setup lang="ts">
import type { PropType } from 'vue'
import type { PixelSize } from '@/assets/ts/common-types'

defineProps({
  columns: {
    type: Number,
    default: 3
  },
  gap: {
    type: String as PropType<PixelSize>,
    default: '12px'
  }
})
</script>

<template>
  <div class="RowInputsContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.RowInputsContainer
  display: grid
  grid-auto-rows: 1fr
  grid-template-columns: repeat(v-bind(columns), 1fr)
  gap: v-bind(gap)
</style>
