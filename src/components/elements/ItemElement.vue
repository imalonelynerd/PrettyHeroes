<script setup lang="ts">
import { getFilter } from '@/assets/code/filter-solver'
import { isValidColorName } from '@/assets/code/common-tools'

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
  <div class="ItemElement" :class="{ clickable: isClickable }">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.ItemElement
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  gap: 12px
  padding: 10px 20px
  background: v-bind(background)
  color: v-bind(fontColor)
  border-radius: var(--radius-button)

  *
    margin: 0

  > img
    height: 20px
    width: 20px
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
