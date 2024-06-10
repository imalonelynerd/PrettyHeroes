<script setup lang="ts">
import PrettyButton from '@/components/inputs/PrettyButton.vue'
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  hasHighlight: {
    type: Boolean,
    default: true
  }
})

defineEmits(['highlightRequested'])

const isShown = ref(true)
</script>

<template>
  <div class="InputsSet">
    <div>
      <h2>{{ title }}</h2>
      <div>
        <PrettyButton @click="isShown = !isShown" icon-color="#FFFFFF"
          ><img :src="`/icons/${isShown ? 'up' : 'down'}.png`" alt="Target"
        /></PrettyButton>
        <PrettyButton v-if="hasHighlight" @click="$emit('highlightRequested')" icon-color="#FFFFFF"
          ><img src="/icons/target.png" alt="Target"
        /></PrettyButton>
      </div>
    </div>
    <div v-if="isShown">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass">
.InputsSet
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 20px

  > div
    display: flex

    > h2
      margin: 0

    &:first-of-type
      justify-content: space-between
      flex-direction: row
      align-items: center

      > div
        display: flex
        flex-direction: row
        justify-content: center
        align-items: stretch
        gap: 8px

    &:nth-of-type(2)
      justify-content: start
      flex-direction: column
      align-items: stretch
      gap: 12px
</style>
