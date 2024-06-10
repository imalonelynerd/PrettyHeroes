<script setup lang="ts">
import { getEventValue, isValidColorName } from '@/assets/code/common-tools'
import { getFilter } from '@/assets/code/filter-solver'
import { ref } from 'vue'

defineEmits(['listUpdated', 'listExtended', 'listReduced'])

const props = defineProps({
  input: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  elementPlaceholder: {
    type: String,
    default: '...'
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
    default: '#FFFFFF'
  },
  columns: {
    type: Number,
    default: 3
  }
})

const iconFilter = props.iconColor === '#000000' ? 'none' : getFilter(props.iconColor)
const isFocused = ref(-1)
</script>

<template>
  <div class="PrettyArrayInput">
    <div>
      <p>{{ placeholder }} {{ input.length === 0 ? '&bull; empty' : '' }}</p>
      <div>
        <img alt="Remove..." src="/icons/remove.png" @click="$emit('listReduced')" /><img
          alt="Add..."
          src="/icons/add.png"
          @click="$emit('listExtended')"
        />
      </div>
    </div>
    <div>
      <input
        v-for="(e, i) in input"
        :key="i"
        :value="input[i]"
        :class="{ focused: isFocused === i }"
        :placeholder="elementPlaceholder"
        @input="$emit('listUpdated', getEventValue($event), i)"
        @focus="isFocused = i"
        @blur="isFocused = -1"
      />
    </div>
  </div>
</template>

<style lang="sass">
.PrettyArrayInput
  background: v-bind(background)
  color: v-bind(fontColor)
  border-radius: var(--radius-big-input)
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  padding: 10px 16px

  > div
    &:nth-of-type(2)
      width: 100%
      display: grid
      grid-auto-rows: 1fr
      gap: 8px
      grid-template-columns: repeat(v-bind(columns), 1fr)

      > input
        min-width: 0
        color: v-bind(fontColor)
        background: none
        outline: transparent solid 2px
        padding: 8px
        border: solid #00000020 2px
        border-radius: var(--radius-input)

        &.focused
          outline-color: v-bind(hoverColor)

    &:first-of-type
      flex: 1
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center

      > p
        opacity: 0.66
        font-size: 0.75em

      > div
        display: flex
        flex-direction: row
        justify-content: start
        align-items: start
        gap: 16px

        > img
          height: 20px
          width: 20px
          filter: v-bind(iconFilter)
          cursor: pointer


  > div
    display: flex
    flex-direction: column
    justify-content: stretch
    align-items: stretch
    padding: 8px 0 0
    flex-grow: 1

  *
    margin: 0
</style>
