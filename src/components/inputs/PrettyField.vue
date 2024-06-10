<script setup lang="ts">
import { getEventValue, isValidColorName } from '@/assets/code/common-tools'
import { ref } from 'vue'

defineEmits(['fieldUpdated'])

defineProps({
  input: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  fontColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--text)'
  },
  hoverColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--hover)'
  },
  background: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--widget)'
  },
  rows: {
    type: Number,
    default: 5
  }
})

const isFocused = ref(false)
</script>

<template>
  <div class="PrettyField" :class="{ focused: isFocused }">
    <p>{{ placeholder }}</p>
    <textarea
      @input="$emit('fieldUpdated', getEventValue($event))"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :rows="rows"
      :value="input"
      placeholder="(empty)"
    ></textarea>
  </div>
</template>

<style lang="sass">
.PrettyField
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  background: v-bind(background)
  color: v-bind(fontColor)
  outline: transparent solid 2px
  padding: 8px 16px
  gap: 8px
  border-radius: var(--radius-big-input)

  > p
    opacity: 0.66
    font-size: 0.75em

  > textarea
    flex-grow: 1
    color: v-bind(fontColor)
    background: none
    border: none
    outline: none
    resize: none

  *
    margin: 0

  &.focused
    outline-color: v-bind(hoverColor)
</style>
