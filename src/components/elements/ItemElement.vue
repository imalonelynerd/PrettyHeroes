<script setup>
import { getFilter } from '@/assets/js/filterTools.js'

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
