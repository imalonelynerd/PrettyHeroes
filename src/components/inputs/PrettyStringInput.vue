<script setup lang="ts">
import { isValidColorName } from '@/assets/ts/common-tools'
import { ref } from 'vue'

defineEmits(['inputUpdated'])

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
  background: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--widget)'
  }
})

const isFocused = ref(false)

const getEventValue = (event: any): string => (event.target ? event.target.value : '')
</script>

<template>
  <div class="PrettyStringInput" :class="{ focused: isFocused }">
    <p v-if="placeholder !== ''">{{ placeholder }}</p>
    <input
      type="text"
      :value="input"
      @input="$emit('inputUpdated', getEventValue($event))"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<style lang="sass">
.PrettyStringInput
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  background: v-bind(background)
  color: v-bind(fontColor)
  outline: transparent solid 2px
  padding: 8px 16px 0
  border-radius: var(--radius-input)

  > p
    opacity: 0.66
    font-size: 0.75em

  > input
    flex-grow: 1
    color: v-bind(fontColor)
    background: none
    border: none
    outline: none
    padding: 8px 0

  *
    margin: 0

  &.focused
    outline-color: var(--hover)
</style>
