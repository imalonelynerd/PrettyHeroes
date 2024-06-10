<script setup lang="ts">
import { isValidColorName } from '@/assets/code/common-tools'

defineProps({
  title: {
    type: String,
    required: true
  },
  fontColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--text)'
  }
})
</script>

<template>
  <div class="TitleContainer">
    <p>{{ title }}</p>
    <slot></slot>
  </div>
</template>

<style lang="sass">
.TitleContainer
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  gap: 12px
  color: v-bind(fontColor)

  > p:first-of-type
    font-size: 12px
    opacity: 0.66
    margin: 0
</style>
