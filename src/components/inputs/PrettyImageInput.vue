<script setup lang="ts">
import { getEventValue, isValidColorName } from '@/assets/code/common-tools'
import { type Ref, ref } from 'vue'

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
  hoverColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--hover)'
  },
  background: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--widget)'
  }
})

const isFocused: Ref<boolean> = ref(false)
</script>

<template>
  <div class="PrettyImageInput" :class="{ focused: isFocused }">
    <div>
      <p v-if="placeholder !== ''">{{ placeholder }}</p>
      <input
        type="text"
        :value="input"
        placeholder="(empty)"
        @input="$emit('inputUpdated', getEventValue($event))"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </div>
    <img
      :src="input"
      :alt="placeholder"
      ref="imageThumbnail"
      @error="$refs.imageThumbnail.src = '/images/notfound.png'"
    />
  </div>
</template>

<style lang="sass">
.PrettyImageInput
  display: flex
  flex-direction: row
  justify-content: stretch
  align-items: stretch
  gap: 8px
  background: v-bind(background)
  color: v-bind(fontColor)
  outline: transparent solid 2px
  padding: 0
  border-radius: var(--radius-input)
  flex-grow: 1
  min-width: 0

  *
    margin: 0

  &.focused
    outline-color: v-bind(hoverColor)

  > img
    height: 56px
    width: 56px
    object-fit: cover
    border-radius: 8px var(--radius-input) var(--radius-input) 8px

  > div
    flex-grow: 1
    min-width: 0
    display: flex
    flex-direction: column
    justify-content: stretch
    align-items: stretch
    padding: 8px 16px 1px

    > p
      opacity: 0.66
      font-size: 0.75em

    > input
      flex-grow: 1
      min-width: 0
      color: v-bind(fontColor)
      background: none
      border: none
      outline: none
      padding: 6px 0
</style>
