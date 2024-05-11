<script setup>
import { ref } from 'vue'

defineProps({
  image: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  pronouns: {
    type: Array,
    required: true
  },
  catchphrase: {
    type: String,
    required: true
  },
  titleColor: {
    type: String,
    default: 'var(--text)'
  },
  fontColor: {
    type: String,
    default: 'var(--text)'
  }
})

const isError = ref(false)
</script>

<template>
  <div class="TitleWidget">
    <img v-if="!isError" :src="image" alt="Avatar" @error="isError = true" />
    <img v-else src="/images/unknown.png" alt="Avatar" />
    <h1>
      {{ firstName }} <span>{{ lastName }}</span
      >{{ age === '' ? '' : ', ' + age }}
    </h1>
    <h2 v-if="pronouns.length > 0">{{ pronouns.join(' - ') }}</h2>
    <p v-if="catchphrase !== ''">&quot;{{ catchphrase }}&quot;</p>
  </div>
</template>

<style lang="sass">
.TitleWidget
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center
  gap: 8px
  color: v-bind(fontColor)

  > img
    height: 128px
    width: 128px
    border-radius: var(--radius-widget)
    object-fit: cover
    margin-bottom: 4px

  *
    margin: 0

  > h1
    font-size: 36px
    color: v-bind(titleColor) !important
    font-weight: 900

    > span
      font-size: 24px
      opacity: 0.66

  > h2
    font-size: 1em
    opacity: 0.66
    font-weight: 600

  > p
    font-style: italic
</style>
