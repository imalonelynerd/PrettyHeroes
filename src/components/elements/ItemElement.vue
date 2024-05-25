<script setup lang="ts">
import { getFilter } from '@/assets/ts/filter-solver'
import { getGenericHero } from '@/assets/ts/hero/hero-factory'
import { isValidHexColor } from '@/assets/ts/common-tools'

const props = defineProps({
  background: {
    type: String,
    validator: (value: string): boolean => isValidHexColor(value),
    default: getGenericHero().colors.widget
  },
  fontColor: {
    type: String,
    validator: (value: string): boolean => isValidHexColor(value),
    default: getGenericHero().colors.text
  },
  iconColor: {
    type: String,
    validator: (value: string): boolean => isValidHexColor(value),
    default: '#000000'
  },
  hoverColor: {
    type: String,
    validator: (value: string): boolean => isValidHexColor(value),
    default: getGenericHero().colors.hover
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
