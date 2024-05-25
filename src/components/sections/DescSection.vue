<script setup lang="ts">
import MarkdownText from '@/components/widgets/MarkdownText.vue'
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import type { AboutSection } from '@/assets/ts/hero/hero-factory'
import type { PropType } from 'vue'

defineProps({
  aboutSection: {
    type: Object as PropType<AboutSection>,
    required: true
  }
})

const hasDescription = (section: AboutSection) => section.desc !== ''
</script>

<template>
  <WidgetContainer :background="$colorPalette.background" v-if="hasDescription(aboutSection)">
    <TitleContainer title="About me" :font-color="$colorPalette.text">
      <MarkdownText :text="aboutSection.desc" :font-color="$colorPalette.text" />
    </TitleContainer>
  </WidgetContainer>
</template>
