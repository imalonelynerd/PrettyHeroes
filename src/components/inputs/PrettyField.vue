<script setup lang="ts">
import { getEventValue } from '@/assets/code/common-tools'
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
  background: var(--widget)
  color: var(--text)
  outline: transparent solid 2px
  padding: 8px 16px
  gap: 8px
  border-radius: var(--radius-big-input)

  > p
    opacity: 0.66
    font-size: 0.75em

  > textarea
    flex-grow: 1
    color: var(--text)
    background: none
    border: none
    outline: none
    resize: none

  *
    margin: 0

  &.focused
    outline-color: var(--hover)
</style>
