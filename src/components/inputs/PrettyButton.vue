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
  }
})
const iconFilter = props.iconColor === '#000000' ? 'none' : getFilter(props.iconColor)
</script>

<template>
  <div class="PrettyButton">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.PrettyButton
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  gap: 12px
  padding: 12px
  background: v-bind(background)
  color: v-bind(fontColor)
  border-radius: var(--radius-button)
  cursor: pointer
  transition: var(--trans)

  &:hover
    background: color-mix(in srgb, v-bind(background), v-bind(hoverColor))

  &:active
    background: v-bind(hoverColor)

  *
    margin: 0

  > img
    height: 16px
    width: 16px
    object-fit: cover
    filter: v-bind(iconFilter)

  > p
    font-weight: 600
</style>
