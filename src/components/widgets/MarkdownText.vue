<script setup lang="ts">
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { isValidColorName } from '@/assets/code/common-tools'

defineProps({
  text: {
    type: String,
    required: true
  },
  fontColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--text)'
  }
})

const markDownize = (content: string) => DOMPurify.sanitize(marked(content) as string)
</script>

<template>
  <div class="MarkdownContainer" v-html="markDownize(text)"></div>
</template>

<style lang="sass">
.MarkdownContainer
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  gap: 8px

  *
    margin: 0
    color: v-bind(fontColor)

  a
    text-decoration: underline !important
</style>
