<script setup lang="ts">
import PrettyButton from '@/components/inputs/PrettyButton.vue'
import { ref } from 'vue'

const isShwon = ref(true)
</script>

<template>
  <div class="InputsContainer" v-if="isShwon">
    <slot></slot>
  </div>
  <PrettyButton class="HideButton" @click="isShwon = !isShwon" icon-color="#FFFFFF">
    <img alt="Hide" :src="`/icons/${isShwon ? 'left' : 'right'}.png`" />
  </PrettyButton>
</template>

<style lang="sass">
.InputsContainer
  box-sizing: border-box
  overflow-y: scroll
  width: 512px
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 64px
  padding: 64px 52px

.HideButton
  position: absolute
  left: 24px
  bottom: 24px
</style>
