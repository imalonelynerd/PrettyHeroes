<script setup>
import { marked } from 'marked'
import DOMPurify from 'dompurify'

defineProps({
  text: {
    type: String,
    required: true
  },
  fontColor: {
    type: String,
    default: 'var(--text)'
  }
})

const markDownize = (content) => DOMPurify.sanitize(marked.parse(content))
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
</style>
