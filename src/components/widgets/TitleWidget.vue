<script setup lang="ts">
import { ref } from 'vue'
import { isValidColorName } from '@/assets/ts/common-tools'

defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  pronouns: {
    type: String,
    required: true
  },
  catchphrase: {
    type: String,
    required: true
  },
  titleColor: {
    type: String,
    validator: (value: string) => isValidColorName(value),
    default: 'var(--title)'
  },
  fontColor: {
    type: String,
    validator: (value: string) => isValidColorName(value),
    default: 'var(--text)'
  }
})

const isError = ref(false)
</script>

<template>
  <div class="TitleWidget">
    <img
      :src="image"
      ref="AvatarImage"
      alt="Avatar"
      @error="$refs.AvatarImage.src = '/images/notfound.png'"
    />
    <h1>
      {{ title }}<span>{{ subtitle === '' ? '' : ' ' + subtitle }}</span
      >{{ age === '' ? '' : ', ' + age }}
    </h1>
    <h2 v-if="pronouns !== ''">{{ pronouns }}</h2>
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
