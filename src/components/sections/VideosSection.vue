<script setup lang="ts">
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import MusicWidget from '@/components/widgets/MusicWidget.vue'
import type { PropType } from 'vue'
import type { OnlineSection } from '@/assets/ts/hero/hero-factory'

defineProps({
  onlineSection: {
    type: Object as PropType<OnlineSection>,
    required: true
  }
})

const hasVideos = (section: OnlineSection) => section.videos.length !== 0
</script>

<template>
  <WidgetContainer :background="$colorPalette.background" v-if="hasVideos(onlineSection)">
    <TitleContainer
      v-for="(e, i) in onlineSection.videos"
      :key="i"
      :title="e.title"
      :font-color="$colorPalette.text"
    >
      <Suspense>
        <MusicWidget :font-color="$colorPalette.text" :yt-url="e.url" />
      </Suspense>
    </TitleContainer>
  </WidgetContainer>
</template>
