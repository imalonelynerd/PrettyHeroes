<script setup lang="ts">
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import MusicWidget from '@/components/widgets/MusicWidget.vue'
import type { PropType } from 'vue'
import type { OnlineSection } from '@/assets/code/hero/hero-factory'

defineProps({
  onlineSection: {
    type: Object as PropType<OnlineSection>,
    required: true
  },
  isHighlighted: {
    type: Boolean,
    default: false
  }
})

const hasVideos = (section: OnlineSection) => section.videos.length !== 0
</script>

<template>
  <WidgetContainer
    :background="$colorPalette.background"
    v-if="hasVideos(onlineSection)"
    :class="{ highlighted: isHighlighted }"
  >
    <TitleContainer
      v-for="(e, i) in onlineSection.videos"
      :key="i"
      :title="e.title"
      :font-color="$colorPalette.text"
    >
      <Suspense>
        <MusicWidget :font-color="$colorPalette.text" :yt-url="e.url"></MusicWidget>
      </Suspense>
    </TitleContainer>
  </WidgetContainer>
</template>

<style scoped lang="sass">
.WidgetContainer
  outline: transparent solid 4px

  &.highlighted
    outline-color: var(--hover)
</style>
