<script setup lang="ts">
import MarkdownText from '@/components/widgets/MarkdownText.vue'
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import type { AboutSection } from '@/assets/code/hero/hero-factory'
import type { PropType } from 'vue'

defineProps({
  aboutSection: {
    type: Object as PropType<AboutSection>,
    required: true
  },
  isHighlighted: {
    type: Boolean,
    default: false
  }
})

const hasDescription = (section: AboutSection) => section.desc !== ''
</script>

<template>
  <WidgetContainer
    :background="$colorPalette.background"
    :class="{ highlighted: isHighlighted }"
    v-if="hasDescription(aboutSection)"
  >
    <TitleContainer title="About me" :font-color="$colorPalette.text">
      <MarkdownText :text="aboutSection.desc" :font-color="$colorPalette.text"></MarkdownText>
    </TitleContainer>
  </WidgetContainer>
</template>

<style scoped lang="sass">
.WidgetContainer
  outline: transparent solid 4px

  &.highlighted
    outline-color: var(--hover)
</style>
