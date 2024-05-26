<script setup lang="ts">
import { getFilter } from '@/assets/ts/filter-solver'
import { isValidColorName } from '@/assets/ts/common-tools'

const props = defineProps({
  background: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--widget)'
  },
  fontColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--text)'
  },
  iconColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: '#000000'
  },
  hoverColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--hover)'
  },
  isClickable: {
    type: Boolean,
    default: false
  }
})

const customFilter = props.iconColor === '#000000' ? 'none' : getFilter(props.iconColor)
</script>

<template>
  <div class="GridElement" :class="{ clickable: isClickable }">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.GridElement
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 8px
  padding: 16px 0
  background: v-bind(background)
  color: v-bind(fontColor)
  border-radius: var(--radius-widget)

  *
    margin: 0

  > img
    height: 24px
    width: 24px
    object-fit: cover
    filter: v-bind(customFilter)

  > p
    font-weight: 600

  &.clickable
    cursor: pointer
    transition: var(--trans)

    &:hover
      background: color-mix(in srgb, v-bind(background), v-bind(hoverColor))

    &:active
      background: v-bind(hoverColor)
</style>
