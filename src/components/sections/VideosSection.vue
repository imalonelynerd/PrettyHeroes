<script setup>
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import MusicWidget from '@/components/widgets/MusicWidget.vue'

defineProps({
  onlineSection: {
    type: Object,
    required: true
  },
  colors: {
    type: Object,
    required: true
  }
})

const hasVideos = (section) => section.videos.length !== 0
</script>

<template>
  <WidgetContainer :background="colors.background" v-if="hasVideos(onlineSection)">
    <TitleContainer
      v-for="(e, i) in onlineSection.videos"
      :key="i"
      :title="e.title"
      :font-color="colors.text"
    >
      <Suspense>
        <MusicWidget :font-color="colors.text" :yt-url="e.url" />
      </Suspense>
    </TitleContainer>
  </WidgetContainer>
</template>
