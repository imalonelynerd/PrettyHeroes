<script setup lang="ts">
import { getCommonFilter, isValidColorName } from '@/assets/code/common-tools'
import { ref } from 'vue'
import { getFilter } from '@/assets/code/filter-solver'

const emits = defineEmits(['toggleUpdated'])

const props = defineProps({
  input: {
    type: Boolean,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  value1: {
    type: String,
    default: ''
  },
  value2: {
    type: String,
    default: ''
  }
})

const iconFilter = getFilter(getCommonFilter())
const isFocused = ref(false)
</script>

<template>
  <div class="PrettyToggle" :class="{ focused: isFocused }">
    <p>{{ placeholder }}</p>
    <div>
      <p v-if="value1 !== ''">{{ value1 }}</p>
      <img
        @click="$emit('toggleUpdated')"
        :src="`/icons/toggle${input ? 'on' : 'off'}.png`"
        alt="Toggle"
      />
      <p v-if="value2 !== ''">{{ value2 }}</p>
    </div>
  </div>
</template>

<style lang="sass">
.PrettyToggle
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  background: var(--widget)
  color: var(--text)
  outline: transparent solid 2px
  padding: 16px
  gap: 8px
  border-radius: var(--radius-input)

  > p
    font-size: 0.9em

  > div
    display: flex
    flex-direction: row
    justify-content: end
    align-items: center
    gap: 8px

    > img
      height: 20px
      filter: v-bind(iconFilter)

  *
    margin: 0

  &.focused
    outline-color: var(--hover)
</style>
