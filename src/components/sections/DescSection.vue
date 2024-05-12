<script setup>
import MarkdownText from '@/components/widgets/MarkdownText.vue'
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'

defineProps({
  aboutSection: {
    type: Object,
    required: true
  },
  colors: {
    type: Object,
    required: true
  }
})

const hasDescription = (section) => section.desc !== ''
</script>

<template>
  <WidgetContainer :background="colors.background" v-if="hasDescription(aboutSection)">
    <TitleContainer title="About me" :font-color="colors.text">
      <MarkdownText :text="aboutSection.desc" :font-color="colors.text" />
    </TitleContainer>
  </WidgetContainer>
</template>
