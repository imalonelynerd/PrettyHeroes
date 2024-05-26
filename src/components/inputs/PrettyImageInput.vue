<script setup lang="ts">
import { isValidColorName } from '@/assets/ts/common-tools'
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
  background: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--widget)'
  }
})

const isFocused: Ref<boolean> = ref(false)
const getEventValue = (event: any): string => (event.target ? event.target.value : '')
</script>

<template>
  <div class="PrettyImageInput" :class="{ focused: isFocused }">
    <div>
      <p v-if="placeholder !== ''">{{ placeholder }}</p>
      <input
        type="text"
        :value="input"
        @input="$emit('inputUpdated', getEventValue($event))"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </div>
    <img
      :src="input"
      :alt="placeholder"
      ref="imageThumbnail"
      @error="
        // @ts-ignore
        $refs.imageThumbnail.src = 'https://bio.blahaj.land/images/unknown.png'
      "
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

  *
    margin: 0

  &.focused
    outline-color: var(--hover)

  > img
    height: 56px
    width: 56px
    object-fit: cover
    border-radius: 8px var(--radius-input) var(--radius-input) 8px

  > div
    flex-grow: 1
    display: flex
    flex-direction: column
    justify-content: stretch
    align-items: stretch
    padding: 8px 16px 0

    > p
      opacity: 0.66
      font-size: 0.75em

    > input
      color: v-bind(fontColor)
      background: none
      border: none
      outline: none
      padding: 8px 0
</style>
