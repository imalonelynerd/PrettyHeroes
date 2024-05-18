<script setup>
import { getFilter } from '@/assets/js/commonTools.js'

const props = defineProps({
  background: {
    type: String,
    default: 'var(--widget)'
  },
  fontColor: {
    type: String,
    default: 'var(--text)'
  },
  iconColor: {
    type: String,
    default: ''
  },
  hoverColor: {
    type: String,
    default: 'var(--hover)'
  },
  isClickable: {
    type: Boolean,
    default: false
  }
})

const customFilter = props.iconColor === '' ? 'none' : getFilter(props.iconColor)
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
