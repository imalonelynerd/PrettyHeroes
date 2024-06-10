<script setup lang="ts">
import { getEventValue, isValidColorName } from '@/assets/ts/common-tools'
import { ref } from 'vue'
import { getFilter } from '@/assets/ts/filter-solver'

const emits = defineEmits(['inputUpdated', 'inputBlocked'])

const props = defineProps({
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
  },
  hoverColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--hover)'
  },
  iconColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: '#FF5262'
  }
})

const isFocused = ref(false)
const isBlocked = ref(false)
const iconFilter = getFilter(props.iconColor)
let lastText = ''

const getEmitBasedOnBlock = () => (isBlocked.value ? 'inputBlocked' : 'inputUpdated')

const emitUpdate = (event) => {
  emits(getEmitBasedOnBlock(), event)
}

const toggleBlocked = () => {
  isBlocked.value = !isBlocked.value
  if (isBlocked.value) {
    lastText = props.input
    emits('inputBlocked')
  } else {
    emits('inputUpdated', lastText)
  }
}
</script>

<template>
  <div class="PrettyOptionalInput" :class="{ focused: isFocused, blocked: isBlocked }">
    <div>
      <p v-if="placeholder !== ''">{{ placeholder }} &bull; optional</p>
      <input
        type="text"
        :value="isBlocked ? lastText : input"
        @input="emitUpdate(getEventValue($event))"
        @focus="isFocused = !isBlocked"
        @blur="isFocused = false"
        :readonly="isBlocked"
        placeholder="(empty)"
      />
    </div>
    <img
      :src="`/icons/${isBlocked ? 'disabled' : 'enabled'}.png`"
      alt="Toggle"
      @click="toggleBlocked()"
    />
  </div>
</template>

<style lang="sass">
.PrettyOptionalInput
  flex-grow: 1
  min-width: 0
  background: v-bind(background)
  color: v-bind(fontColor)
  outline: transparent solid 2px
  border-radius: var(--radius-input)
  display: flex
  flex-direction: row
  justify-content: start
  align-items: center
  padding: 0 16px

  > img
    height: 16px
    width: 16px
    filter: v-bind(iconFilter)
    cursor: pointer

  > div
    display: flex
    flex-direction: column
    justify-content: stretch
    align-items: stretch
    padding: 8px 0 1px
    flex-grow: 1
    min-width: 0

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

  *
    margin: 0

  &.blocked *:not(img)
    opacity: 0.5

  &.focused
    outline-color: v-bind(hoverColor)
</style>
