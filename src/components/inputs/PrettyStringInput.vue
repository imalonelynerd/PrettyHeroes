<script setup lang="ts">
import { getEventValue, isValidColorName } from '@/assets/code/common-tools'
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
  }
})

const isFocused = ref(false)
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
      placeholder="(empty)"
    />
  </div>
</template>

<style lang="sass">
.PrettyStringInput
  flex-grow: 1
  min-width: 0
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  background: var(--widget)
  color: var(--text)
  outline: transparent solid 2px
  padding: 8px 16px 1px
  border-radius: var(--radius-input)

  > p
    opacity: 0.66
    font-size: 0.75em

  > input
    flex-grow: 1
    min-width: 0
    color: var(--text)
    background: none
    border: none
    outline: none
    padding: 6px 0

  *
    margin: 0

  &.focused
    outline-color: var(--hover)
</style>
